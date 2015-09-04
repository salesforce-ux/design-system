#!/bin/sh
# This script builds and deploys design-system locally

PROJECT_NAME="design-system-internal"
INTERNAL_GIT_ORIGIN="git@github.com:salesforce-ux/design-system-internal.git"

function usage {
  echo 'Usage: local-deploy.sh [-m] [-b BRANCH_NAME]'
  echo ''
  echo '  -m         Deploy master'
  echo '  -b BRANCH  Deploy a branch named BRANCH'
  echo ''
}

if [ "$1" == "-m" ]; then
  # Master!
  echo "Using MASTER"
  CMD=$INTERNAL_GIT_ORIGIN
elif [ "$1" == "-b" ]; then
  # Branch!
  if [ "$2" == "" ]; then
    usage
    exit 1
  fi

  echo "Using BRANCH $2"
  CMD=$INTERNAL_GIT_ORIGIN
else
  usage
  exit 1
fi

set -e
startdir=`pwd`
export GIT_VERSION=`git describe --abbrev=0`

# clone and build landmark
tmpdir=`mktemp -dt salesforce-lightning-design-system.XXXXX`
echo "Created temp dir: $tmpdir"
cp scripts/deploy/site/* $tmpdir

echo ""
echo "*** Cloning $PROJECT_NAME version $GIT_VERSION ***"
cd $tmpdir
git clone $CMD

echo ""
echo "*** Building $PROJECT_NAME ***"
cd $PROJECT_NAME
npm install
# npm run test

npm run prod
npm run dist

ZIP_FILENAME="salesforce-lightning-design-system-$GIT_VERSION.zip"
echo "SLDS download file: $ZIP_FILENAME"
cp .dist/$ZIP_FILENAME .www/assets/downloads/

# copy built css for examples
cp .dist/assets/styles/salesforce-lightning-design-system.css .www/assets/styles/salesforce-lightning-design-system.css

echo ""
echo "*** Collating deployment files ***"
mkdir $tmpdir/www
cp -r .www/* $tmpdir/www

echo ""
echo "*** Installing Node packages"
cd $tmpdir
npm install

echo ""
echo "*** Done. Be sure to set the password."
echo ""
echo "Now run:"
echo ""
echo "    cd $tmpdir"
echo ""
echo "    INTERNAL_LANDMARK_PASSWD=aaa EXTERNAL_LANDMARK_PASSWD=bbb foreman start"
echo ""
echo "Then load web browser to: http://localhost:5000. Log in with 'landmark' and 'aaa'."
