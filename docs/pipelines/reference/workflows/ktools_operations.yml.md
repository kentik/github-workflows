# ktools_operations.yml

Run `kt deploy *` (except push) commands from Github

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| action | Action to execute |  yes  | status
| service_group | Name of the service group |  yes  | 
| environment | Environment name |  false  | our1 
| skip-maint | Skip maintenance window (period where Pagerduty alarms are ignored). |  -  | false
| host | Deploys only to a comma-separated list of hosts. E.g: c101.our1.kentik.com,c102.our1.kentik.com |  -  | 


## Usage

Configure `workflow_dispatch` event with all `inputs` that you think you might need to override and a `job` that `uses` the `workflow`:

```yaml
name: KTools Deploy Operations

on:
  workflow_dispatch:
    inputs:
      action:
        description: 'Action to execute'
        required: true
        default: 'status' 
        type: choice
        options:
        - status
        - stop
        - start
        - restart
      environment:
        description: Environment
        required: true
        default: our1
        options: ["production", "fra1", "our1", "dfw1", "jp1", "yyz1", "hrd1", "hnd1", "bct1", "buf1", "nez1", "nrt1"]
        type: choice
      service_group:
        description: 'Service Group'
        required: true
        default: 'your-service-group-goes-here' 
        type: string
      skip-maint:
        description: 'Skip maintenance window?'
        default: false
        required: false
        type: boolean
      host:
        description: 'Deploy to some hosts'
        default: ''
        required: false
        type: string

jobs:
  ktools:
    uses: kentik/github-workflows/.github/workflows/ktools_operations.yml@ktv1
    if: github.event_name == 'workflow_dispatch'
    with:
      action: ${{ github.event.inputs.action }}
      service_group: ${{ github.event.inputs.service_group }}
      environment: ${{ github.event.inputs.environment }}
      skip-maint: ${{ github.event.inputs.skip-maint }}
      host: ${{ github.event.inputs.host }}
```
