# ktools/deploy/push

Deploy Kentik services using Github Actions

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| branch | Deploy service using image built from this branch. Append the build number to deploy a specific version. Example: `master.10` |  -  | master
| skip-maint | Skip maintenance window (period where Pagerduty alarms are ignored). |  -  | false
| skip-restart | Skip restart step. |  -  | false
| emergency-deploy | Ignores all constraints/restrictions and proceed with deploy |  -  | false
| host | Deploys only to a comma-separated list of hosts. E.g: c101.our1.kentik.com,c102.our1.kentik.com |  -  | 
| sleep | Sleep for the configured amount of seconds between servers instead of `randsleep` |  -  | -1
| cleanup | The log subscription won't be deleted if true. Set to `true` if you plan to run more kt commands in the pipeline. Set to false in the last command |  -  | true
| subcommand | action subcommand |  -  | deploy
| operation | operation of subcommand |  -  | push



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/push@main
with:
  service_group: notify-api

```