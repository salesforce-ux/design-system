#!/bin/bash
set -e
if [ X"$TRAVIS_SECURE_ENV_VARS" = X"true" ]; then
npm login <<!
${NPM_USERNAME}
${NPM_PASSWORD}
${NPM_EMAIL}
!
else
  echo "TRAVIS: TRAVIS_SECURE_ENV_VARS env variable not set to true"
fi
