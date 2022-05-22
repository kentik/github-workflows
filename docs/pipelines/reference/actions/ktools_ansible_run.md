# ktools/ansible/run

Run any ansible playbook using Github Actions

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| playbook | Path to the playbook |  yes  | 
| cleanup | The log subscription won't be deleted if true. Set to `true` if you plan to run more kt commands in the pipeline. Set to false in the last command |  -  | true
| subcommand | action subcommand [ignore this input] |  -  | wip
| operation | operation of subcommand [ignore this input] |  -  | ansible



## Usage

```yaml
uses: kentik/github-workflows/ktools/ansible/run@main
with:
  service_group: notify-api
  playbook: deploy/restart
```