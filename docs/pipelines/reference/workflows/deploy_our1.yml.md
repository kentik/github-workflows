# deploy_our1.yml

Wait for Jenkins and deploy the service to `our1`. Additionally, run `kt deploy status` before and after deploying. 

## Inputs

| parameter| description | required | default |
| - | - | - | - |
| service_group | Name of the service group |  yes  | 
| autodeploy_branches | A list of branches to deploy on every push |  yes  | '["master", "main"]'|
| skip-maint | Skip maintenance window (period of time where Pagerduty alarms are ignored). |  -  | false
| skip-restart | Skip restart step. |  -  | false
| emergency-deploy | Ignores all constraints/restrictions and proceed with deploy |  -  | false
| host | Deploys only to a comma-separated list of hosts. E.g: c101.our1.kentik.com,c102.our1.kentik.com |  -  | 
| sleep | Sleep for the configured amount of seconds between servers instead of `randsleep` |  -  | -1


## Usage

```yaml
uses: kentik/github-workflows/ktools/deploy/push@main
with:
  service_group: notify-api
  autodeploy_branches: '["master", "main"]'
```

### Triggering this Workflow

This workflow expects the following commit patterns to get triggered or ignore a trigger condition:

| pattern| action|
| - | - |
| `#deploy` | Current commit will get deployed to `our1`| 
| `#deployour1` | Current commit will get deployed to `our1`| 
| `#nodeploy` | Ignore a deploy from a branch configured to **always deploy** (`autodeploy_branches`)| 


#### autodeploy_branches

If you want to always deploy commits from specific branches, define the branch name in `autodeploy_branches`. It expects a valid JSON list as a string:

```
autodeploy_branches: '["branch-1", "main", "other-branch"]'
```

To disable this feature set it to an empty list:

```
autodeploy_branches: '[]'
```
