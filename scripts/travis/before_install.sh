#!/bin/bash
set -e

if [[ "$TRAVIS_SECURE_ENV_VARS" = "true" ]]; then
  echo "TRAVIS: Logging into NPM"
  npm login <<!
${NPM_USERNAME}
${NPM_PASSWORD}
${NPM_EMAIL}
!
else
  echo "TRAVIS: TRAVIS_SECURE_ENV_VARS env variable not set to true"
fi

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  rm -rf scripts-internal
  git clone $DEPLOY_SCRIPTS_REPO -b multiple-sites scripts-internal
fi
