# ktools/deploy/status

Show the status of Kentik Services


## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| cleanup | Deletes the log subscription after executing the command. Set it to false if you plan to run other ktools commands in the same pipeline. |  -  | true
| subcommand | action subcommand [ignore this input] |  -  | deploy
| operation | operation of subcommand [ignore this input] |  -  | status



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/status@ansible
with:
  service_group: notify-api

```
