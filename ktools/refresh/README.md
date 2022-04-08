# {{ path | lower }}

{{ description }}

## Inputs

| parameter| description | required | default |
| - | - | - | - |
{% for input, cfg in inputs.items() -%}
| {{ input }} | {{ cfg.description }} | {% if cfg.required %} yes {% else %} - {% endif %} | {{ cfg.default }}
{% endfor %}


## Usage

```yaml
uses: kentik/github-workflows/ktools/refresh@main
with:
  environment: our1

```
