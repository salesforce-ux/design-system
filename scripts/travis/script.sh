#!/bin/bash

set -e

npm run lint
# @TODO: remove this line when the lint task runs Sass linting by default
npm run lint -- --linters sass || true
npm run test
npm run build-prod
npm run test-integration
npm run dist

