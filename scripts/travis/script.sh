#!/bin/bash

set -e

gulp lint
npm run test
npm run build-prod
npm run test-integration
npm run dist
