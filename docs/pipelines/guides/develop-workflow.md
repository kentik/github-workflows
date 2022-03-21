# Developing a new Github Workflow

Previous guides explained how to deploy using ktools workflows. Our custom workflows defines common deployment patterns which will be enough for most users. If you feel that you need a more custom workflow you can use ktools actions directly.


## Pre Requisites

### Configure Permissions

Make sure that you include the id-token and contents permission on every [job](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions):

```yaml
    permissions:
      contents: 'read'
      id-token: 'write'
```

### Configure GCP Federation

Include GCP Authentication action before the first `ktools` action to generate gcp credentials using workload federation:

```yaml
- name: Configure Credentials
  uses: google-github-actions/auth@v0
  with:
    workload_identity_provider: "projects/70880649570/locations/global/workloadIdentityPools/github-pool/providers/github-provider"
    service_account: "svc-github-ktools-action@kentik-continuous-delivery.iam.gserviceaccount.com"
```

### Cleanup Subscription

As explained in [ktools architecture doc](../../../ktools/reference/architecture/#architecture-overview), before running commands, a subscription is created to receive logs, by default, the action deletes the subscription after running the desired command.

If a workflow wants to run more than one ktools action, it should make sure to skip subscription cleanup on all steps except the last one:

``` yaml
- name: Restart Service
  uses: kentik/github-workflows/ktools/deploy/restart@v1.0.3
  with:
    service_group: apigw-auth
    environment: our1
    cleanup: false

# Will cleanup GCP subscription
- name: Show Current Status
  uses: kentik/github-workflows/ktools/deploy/status@v1.0.3
  with:
    service_group: apigw-auth
    environment: our1
```

### Full Example

```yaml
name: Ktools Example

on:
  push:

jobs:
  deploy:
    name: Deploy

    runs-on: ubuntu-latest

    # Allow the job to fetch a GitHub ID token
    permissions:
      contents: 'read'
      id-token: 'write'

    steps:

      - name: Configure Credentials
        uses: google-github-actions/auth@v0
        with:
          workload_identity_provider: "projects/70880649570/locations/global/workloadIdentityPools/github-pool/providers/github-provider"
          service_account: "svc-github-ktools-action@kentik-continuous-delivery.iam.gserviceaccount.com"

      - name: Restart Service
        uses: kentik/github-workflows/ktools/deploy/restart@v1.0.3
        with:
          service_group: apigw-auth
          environment: our1
          cleanup: false

      # Will cleanup GCP subscription
      - name: Show Current Status
        uses: kentik/github-workflows/ktools/deploy/status@v1.0.3
        with:
          service_group: apigw-auth
          environment: our1
```
