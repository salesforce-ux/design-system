#!/bin/bash

set -e

npm run test-before
npm run lint || true
npm run prod
npm run test-after
npm run dist

