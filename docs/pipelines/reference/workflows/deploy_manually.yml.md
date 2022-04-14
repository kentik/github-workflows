# deploy_manually.yml

Deploy the service to any environment via API Call or using Github UI. Additionally, run `kt deploy status` before and after deploying. 

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| service_group | Name of the service group |  yes  | 
| branch | Branch name or branch name with the build number to deploy a specific commit. E.g: master.21 |  yes  | 
| environment | Environment name |  false  | our1 
| skip-maint | Skip maintenance window (period where Pagerduty alarms are ignored). |  -  | false
| skip-restart | Skip restart step. |  -  | false
| emergency-deploy | Ignores all constraints/restrictions and proceed with deploy |  -  | false
| host | Deploys only to a comma-separated list of hosts. E.g: c101.our1.kentik.com,c102.our1.kentik.com |  -  | 
| sleep | Sleep for the configured amount of seconds between servers instead of `randsleep` |  -  | -1


## Usage

Configure `workflow_dispatch` event with all `inputs` that you think you might need to override and a `job` that `uses` the `workflow`:

```yaml
name: Deploy Service

on:
  workflow_dispatch:
    inputs:
      branch:
        description: 'Deploy code from which branch? To pick a specific build, append the jenkins build number. E.g: master.21'
        required: true
      service_group:
        description: 'Service Group'
        required: true
        default: 'apigw-envoy-fe' 
        type: string
      environment:
        description: Environment name
        required: true
        default: our1
        type: choice
        options: ["production", "fra1", "our1", "dfw1", "jp1", "yyz1", "hrd1", "hnd1", "bct1", "buf1", "nez1", "nrt1"]

jobs:
  deploy:
    uses: kentik/github-workflows/.github/workflows/deploy_manually.yml@main
    if: github.event_name == 'workflow_dispatch'
    with:
      service_group: ${{ github.event.inputs.service_group }}
      environment: ${{ github.event.inputs.service_group }}
      branch: ${{ github.event.inputs.branch }}
```
