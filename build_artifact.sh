#!/usr/bin/env bash

RELEASE_VERSION=$(cat release.txt)
release-helper -d create_release -o loanlifecycle -r design-system -n  --body "This is an automated release of v$RELEASE_VERSION"  -t $RELEASE_VERSION -T $GITHUB_PERSONAL_TOKEN

