# Overriding ktools Inputs on git push

ktools github action allows users to override inputs using a specific substring pattern:

```
#{{input_name}}={{input_value}}
```

Example:

```
git commit -m "testing new feature on #service_group=apigw-auth"
git push
```

The value of input `service_group` will be `apigw-auth` in this specific commit.


### Boolean Flags

Boolean flags can and should be defined without a value, for example:

```
git commit -m "testing new feature on #skip-maint"
git push
```

In this specific commit, the flag `skip-maint` will be used, which translates to appending the CLI argument `--skip-maint`


### List Flags

List flags are defined with a comma-separated string value. Example:

```
git commit -m "#deploy new feature on #host=c101.our1.kentik.com,c102.our1.kentik.com"
git push
```

In this specific commit, the flag `host` will be used, which translates to appending the CLI arguments `--host c101.our1.kentik.com --host c102.our1.kentik.com`
