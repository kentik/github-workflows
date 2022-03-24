# Deploying with KTools

Add a new file to your workflows folder `.github/workflows/` with the content above. The file name is not relevant, as long as the extension is `.yml` or `.yaml`:

```yaml
name: Deploy to Staging

on:
  push:

jobs:
  deploy:
    uses: kentik/github-workflows/.github/workflows/deploy_our1.yml@main
    with:
      service_group: add-here-the-name-of-your-service-group
      deployable_branches: '["master", "main"]'
```

Even though it is configured to trigger on all push events, it will only execute the job if the branch name is present in the `deployable_branches` list.

??? note "One size does not fits all"
    Note that this is just a recommended workflow, you can define your own using the actions directly, refer to [this guide](../develop-workflow) for more information.


### Deploying Conditionally

Usually, on a feature branch you don't want to deploy every single commit, but specific ones.

The pipeline supports this feature by searching your commit message for specific patterns.

To deploy a specific commit include the string `#deploy` or `#deployour1` to your commit message, for example:

```
git commit -m "testing my feature #deployour1"
git push
```

### Ignoring a deploy

If you configure a branch to get auto deploys, you can also prevent a deployment on specific commits, just add the string `#nodeploy` to your commit message.

Example:

```
git commit -m "do not deploy #nodeploy"
git push
```

#### Attributes

**service_group**

The name of your service group, currently, we only support one service group per repository.

**deployable_branches**

A list of branches that triggers a deployment to `our1`. If you don't want to deploy automatically, set it to `'[]'`.

Default: `'["master", "main"]'`
