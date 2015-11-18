#!/bin/bash
set -e

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  echo "TRAVIS: running heroku deployment"
  ./node_modules/.bin/babel-node scripts-internal/deploy/heroku-ci.js
else
  echo "TRAVIS: skipping heroku deployment"
fi
