#!/bin/bash

set -e

npm run test
npm run lint -- --linters sass || true
npm run build-prod
npm run test-integration
npm run dist

# Deployment
if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  echo "TRAVIS: running heroku deployment"
  npm run deploy
else
  echo "TRAVIS: skipping heroku deployment"
fi
