# Deploying multiple Services

Repositories that contain more than one service need a way to conditionally define which service should be deployed. This can be achieved by defining the same deploy action multiple times and different conditions to trigger each action.


Example: 

```yaml
name: Deploy

on:
  push:

jobs:
  deploy_api:
    uses: kentik/github-workflows/.github/workflows/deploy.yml@main
    if: contains(github.event.head_commit.message, '#notify-api') 
    with:
      service_group: notify-api

  deploy_worker:
    uses: kentik/github-workflows/.github/workflows/deploy.yml@main
    if: contains(github.event.head_commit.message, '#notify-worker') 
    with:
      service_group: notify-worker
```

Similar to the guide [Deploying with ktools](ktools-on-github.md), we define a job that imports a custom workflow, but this time, we also define a condition to it and because we have two services, we define two jobs with different conditions.

### Deploy Conditions

Because the jobs now include a condition and the common workflow (deploy.yml) also includes a condition, github will only trigger a deploy if:

**notify_api**:

```
git commit -m " some msg #deploy #notify-api"
```

**deploy_worker**:

```
git commit -m " some msg #deploy #notify-worker"
```

**both**:

```
git commit -m " some msg #deploy #notify-worker #notify-api"
```

Note that in this case they will be executed in parallel.

???+ note "About commit message patterns"
    The important part of this guide is to show how you can define multiple jobs with different conditions as a way to deploy multiple services. 
    
    Commit message patterns have proven to be a very good way to describe deploy intent but you can use any type of condition to achieve your goal.


### Deploying Manually

You might also want to deploy manually, to deploy to other environments, or a different service.

The [next guide](ktools-deploy-manual.md) explains how you can do it.
