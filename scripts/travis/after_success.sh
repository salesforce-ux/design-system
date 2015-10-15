#!/bin/bash
set -e

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  rm -rf scripts-internal
  git clone $DEPLOY_SCRIPTS_REPO scripts-internal
  ./node_modules/.bin/babel-node scripts-internal/deploy/heroku-ci.js
fi
