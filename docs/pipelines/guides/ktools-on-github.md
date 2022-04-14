# Deploying with KTools

Add a new file to your workflows folder `.github/workflows/` with the content above. The file name is not relevant, as long as the extension is `.yml` or `.yaml`:

```yaml
name: Deploy

on:
  push:

jobs:
  deploy:
    uses: kentik/github-workflows/.github/workflows/deploy.yml@main
    with:
      service_group: add-here-the-name-of-your-service-group
      deployable_branches: '["master", "main"]'
      environment: our1
```

Even though it is configured to trigger on all push events, it will only execute the job if the branch name is present in the `deployable_branches` list.

??? note "One size does not fits all"
    Note that this is just a recommended workflow, you can define your own using the actions directly, refer to [this guide](../develop-workflow) for more information.


### Deploying Conditionally

Usually, on a feature branch you don't want to deploy every single commit, but specific ones.

The pipeline supports this feature by searching your commit message for specific patterns.

To deploy a specific commit include the string `#deploy` to your commit message, for example:

```
git commit -m "testing my feature #deploy"
git push
```

### Ignoring a deploy

If you configure a branch to get auto deploys, you can also prevent a deployment on specific commits, just add the string `#nodeploy` to your commit message.

Example:

```
git commit -m "do not deploy #nodeploy"
git push
```

### Deploying to Production/OnPrem

By default, the action deploys to `our1`, but you can deploy to any environment by overriding the `environment` input with commit flags. For more information, refer to the [pipeline reference](../../reference/workflows/deploy.yml).
