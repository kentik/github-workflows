# {{ path }}

This [GitHub Action][action] simplifies running [Earthly][earthly].  
First it configures docker for later use and prepare some environmental variables.  
If `build_multi` is set and branch is `main` or `master` it will
use `earthly_multi_target` instead of `earthly_target`.

You can add `+debug` in PR comment to set Earthly verbose mode.
You can add `+multi` in PR comment to force building multi target targets even on PR.


## Inputs

| parameter| description | required | default |
| - | - | - | - |
{% for input, cfg in inputs.items() -%}
| {{ input }} | {{ cfg.description }} | {% if cfg.required %} yes {% else %} - {% endif %} | {{ cfg.default }}
{% endfor %}


## Usage

```yaml
uses: kentik/github-workflows/earthly@ansible
with:
  github_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
  earthly_target: +all
  earthly_multi_target: +all-platforms
  build_multi: false
```

This action needs special permissions to use GH<->GCP Federation

```
jobs:
    build:
        # Allow the job to fetch a GitHub ID token
        permissions:
          contents: 'read'
          id-token: 'write'
```

[action]: https://github.com/features/actions

[earthly]: https://docs.earthly.dev/
