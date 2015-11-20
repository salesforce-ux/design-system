#!/bin/bash

set -e

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  rm -rf scripts-internal
  echo "TRAVIS: cloning deploy scripts: $DEPLOY_SCRIPTS_REPO"
  git clone $DEPLOY_SCRIPTS_REPO -b multiple-sites scripts-internal
fi
