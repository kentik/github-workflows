# ktools/deploy/status

Show status of Kentik services using Github Actions

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| cleanup | Deletes the log subscription after executing the command. Set it to false if you plan to run other ktools commands in the same pipeline. |  -  | true
| subcommand | action subcommand |  -  | deploy
| operation | operation of subcommand |  -  | status



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/status@main
with:
  service_group: notify-api

```