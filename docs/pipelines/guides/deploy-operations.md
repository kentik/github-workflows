# Running Deploy Operations

If you need to run ad-hoc commands like restart or status, you can declare a workflow that uses our shared [ktools_operation.yml](../../reference/workflows/ktools_operations.yml) workflow. Example:

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
