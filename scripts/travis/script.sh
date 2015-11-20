#!/bin/bash

set -e

npm run test-before
npm run lint -- --linters sass || true
npm run prod
npm run dist
npm run test-after

# Deployment
if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  echo "TRAVIS: running heroku deployment"
  npm run deploy
else
  echo "TRAVIS: skipping heroku deployment"
fi
