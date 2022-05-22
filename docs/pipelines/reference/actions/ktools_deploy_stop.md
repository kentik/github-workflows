# ktools/deploy/stop

Run `kt deploy stop` using Github Actions


## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| host | Deploys only to a comma-separated list of hosts. E.g: c101.our1.kentik.com,c102.our1.kentik.com |  -  | 
| skip-maint | Skip maintenance window (period where Pagerduty alarms are ignored). |  -  | false
| cleanup | The log subscription won't be deleted if true. Set to `true` if you plan to run more kt commands in the pipeline. Set to false in the last command |  -  | true
| subcommand | action subcommand [ignore this input] |  -  | deploy
| operation | operation of subcommand [ignore this input] |  -  | stop



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/stop@ansible
with:
  service_group: notify-api

```
