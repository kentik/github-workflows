# ktools/deploy/restart

Restart Kentik services using Github Actions

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| cleanup | The log subscription won't be deleted if true. Set to `true` if you plan to run more kt commands in the pipeline. Set to false in the last command |  -  | true
| subcommand | action subcommand [ignore this input] |  -  | deploy
| operation | operation of subcommand [ignore this input] |  -  | restart



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/restart@main
with:
  service_group: notify-api

```