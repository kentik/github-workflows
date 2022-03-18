# ktools/deploy/push

Deploy Kentik services using Github Actions

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| service_group | Name of the service |  yes  | 
| branch | Deploy service using image built from this branch. Append the build number to deploy a specific version. Example: `master.10` |  -  | master
| cleanup | The log subscription won't be deleted if true. Set to `true` if you plan to run more kt commands in the pipeline. Set to false in the last command |  -  | true
| subcommand | action subcommand |  -  | deploy
| operation | operation of subcommand |  -  | push



## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/push@main
with:
  service_group: notify-api

```