#!/bin/bash
set -e

if [ -n "$DEPLOY_SCRIPTS_REPO" ]; then
  ./node_modules/.bin/babel-node scripts-internal/deploy/heroku-ci.js
fi
