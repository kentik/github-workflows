# ktools/refresh

Updates a kt installation

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| environment | Environment |  yes  | 
| cleanup | Deletes the log subscription after executing the command. Set it to false if you plan to run other ktools commands in the same pipeline.
 |  -  | true
| subcommand | action subcommand |  -  | refresh
| operation | operation of subcommand |  -  | refresh



## Usage

```yaml
uses: kentik/github-workflows/ktools/refresh@main
with:
  environment: our1

```