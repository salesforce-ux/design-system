#!/bin/bash

set -e

npm run test
npm run build-prod
npm run test-integration
npm run dist
