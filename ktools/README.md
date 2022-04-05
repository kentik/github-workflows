# Ktools Action

Ktools actions runs with a pre-compiled binary from [this repo](https://github.com/kentik/ktools-agent/tree/master/cmd/action). It gets updated whenever code is merged to [ktools-agent](https://github.com/kentik/ktools-agent/blob/master/.github/workflows/build-action.yaml) master branch.

To build it locally and test a feature, run [earthly +build-action](https://github.com/kentik/ktools-agent/blob/master/Earthfile#L11) and manually copy the resulting artifact to this repo.

more information available [here](https://docs.kntk.cloud/toolchain/pipelines/)
