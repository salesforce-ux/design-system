#!/bin/bash
set -e

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  rm -rf scripts-internal
  git clone $DEPLOY_SCRIPTS_REPO scripts-internal
  scripts-internal/deploy/ci-heroku-stage.sh
fi
