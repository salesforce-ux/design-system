#!/bin/sh
# This script builds and deploys the Salesforce Lightning Design System
# Usage:
#  echo "manual-heroku-deploy.sh [-- prod | --stage | --dev | --test]"
#  echo "  --prod deploys lightningdesignsystem.com branch to $PROD_SERVER"
#  echo "  --stage deploys design-system-stage branch to $STAGING_SERVER"
#  echo "  --dev deploys master branch to $DEV_SERVER"
#  echo "  --test deploys a specified branch to $TEST_SERVER"

PROJECT_NAME="design-system-internal"
INTERNAL_GIT_ORIGIN="git@github.com:salesforce-ux/design-system-internal.git"

PROD_SERVER="lightning-design-system.herokuapp.com"
PRODUCTION_BRANCH="lightningdesignsystem.com"
PROD_HEROKU_REMOTE="git@heroku.com:lightning-design-system.git"

STAGING_SERVER="design-system-stage.herokuapp.com"
STAGING_BRANCH="design-system-stage"
STAGING_DEPLOY_BRANCH="heroku-design-system-stage"

DEV_SERVER="design-system-dev.herokuapp.com"
DEV_DEPLOY_BRANCH="heroku-design-system-dev"

TEST_SERVER="design-system-test.herokuapp.com"
TEST_DEPLOY_BRANCH="heroku-design-system-stage-test"

set -e
startdir=`pwd`
npm whoami
export GIT_VERSION=`git describe --abbrev=0`


if [ "$1" == "--prod" ]; then

  # deploy $PRODUCTION_BRANCH to $PROD_SERVER
  PROD_FLAG=1
  CORRECT_FLAG=1
  DEPLOY_SERVER=$PROD_SERVER
  echo "*** WARNING ***"
  echo "PUSHING TO PRODUCTION: $DEPLOY_SERVER"
  echo "SLDS VERSION:          $GIT_VERSION"
  echo "*** WARNING ***"

elif [ "$1" == "--stage" ]; then
  
  # deploy $STAGING_BRANCH to $STAGING_SERVER
  STAGING_FLAG=1
  CORRECT_FLAG=1
  DEPLOY_SERVER=$STAGING_SERVER
  echo "*** WARNING ***"
  echo "PUSHING TO STAGING SERVER: $DEPLOY_SERVER"
  echo "DEPLOY_BRANCH:         $STAGING_DEPLOY_BRANCH"
  echo "SLDS VERSION:          $GIT_VERSION"
  echo "*** WARNING ***"

elif [ "$1" == "--dev" ]; then
  
  # deploy master to $DEV_SERVER
  DEV_FLAG=1
  CORRECT_FLAG=1
  DEPLOY_SERVER=$DEV_SERVER
  echo "*** WARNING ***"
  echo "PUSHING TO DEV SERVER: $DEPLOY_SERVER"
  echo "DEPLOY_BRANCH:         $DEV_DEPLOY_BRANCH"
  echo "SLDS VERSION:          $GIT_VERSION"
  echo "*** WARNING ***"

elif [ "$1" == "--test" ]; then

  # push branch-to-be-specified to $TEST_SERVER
  TEST_FLAG=1
  CORRECT_FLAG=1
  DEPLOY_SERVER=$TEST_SERVER
  echo "*** GOOD ON YOU FOR TESTING ***"
  echo "PUSHING TO INTERNAL TEST SERVER: $DEPLOY_SERVER"
  echo "SLDS VERSION:              $GIT_VERSION"
  echo "*** GOOD ON YOU FOR TESTING ***"

fi

if [ "$CORRECT_FLAG" != "1" ]; then
  echo "Usage:"
  echo "manual-heroku-deploy.sh [-- prod | --stage | --dev | --test]"
  echo "  --prod deploys lightningdesignsystem.com branch to $PROD_SERVER"
  echo "  --stage deploys design-system-stage branch to $STAGING_SERVER"
  echo "  --dev deploys master branch to $DEV_SERVER"
  echo "  --test deploys a specified branch to $TEST_SERVER"
  exit 9
fi

echo "Running this script will push to $DEPLOY_SERVER. Do you want to proceed? [Y/N]"
read proceed_response
if [ "$proceed_response" == "Y" ]; then
  echo "OK, let's do this:"
else
  echo "Cancelling deployment. Bye."
  exit 998
fi

# clone and build salesforce-design-system
tmpdir=`mktemp -dt lightning-design-system.XXXXX`
echo "Created temp dir: $tmpdir"


echo "*** Cloning $PROJECT_NAME ***"
cd $tmpdir
git clone $INTERNAL_GIT_ORIGIN
echo "*** Building $PROJECT_NAME ***"
cd $PROJECT_NAME
if [ "$TEST_FLAG" == 1 ]; then
  # ################################################
  # if --test flag, then prompt for branch to deploy
  # ################################################
  echo "*** SPECIFY TEST BRANCH ***"
  read -p "Which branch do you want to deploy?" BRANCH_TO_TEST
  git checkout $BRANCH_TO_TEST
elif [ "$STAGING_FLAG" == 1 ]; then
  # ################################################
  # if --prod flag, deploy 'production' branch
  # ################################################
  git checkout $STAGING_BRANCH
elif [ "$PROD_FLAG" == 1 ]; then
  # ################################################
  # if --prod flag, deploy 'production' branch
  # ################################################
  git checkout $PRODUCTION_BRANCH
fi

# get server files from the checked out repo
cp scripts/deploy/site/* ../

rm -rf git_modules/
npm install
# npm run test
# npm run prod
echo "***About to run npm run dist"
npm run dist
echo "============================================"
pwd
ls -la
echo "============================================"


ZIP_FILENAME="salesforce-lightning-design-system-$GIT_VERSION.zip"
cp .dist/$ZIP_FILENAME .www/assets/downloads/

# copy built salesforce-lightning-design-system.css for examples
cp .dist/assets/styles/salesforce-lightning-design-system.css .www/assets/styles/salesforce-lightning-design-system.css

echo "*** Collating deployment files ***"
mkdir $tmpdir/www
cp -r .www/* $tmpdir/www
cd $tmpdir

echo "*** Creating git repo ***"
git init
git checkout -b heroku-stage
git add .
git commit -m "Deploy to Heroku: $DEPLOY_SERVER"

echo "*** Deploying to Heroku: $DEPLOY_SERVER ***"
if [ "$PROD_FLAG" == 1 ]; then

  # push production
  git remote add heroku $PROD_HEROKU_REMOTE
  git push --force heroku heroku-stage:master

elif [ "$STAGING_FLAG" == 1 ]; then

  # push staging
  git remote add origin $INTERNAL_GIT_ORIGIN
  git push --force origin heroku-stage:$STAGING_DEPLOY_BRANCH

elif [ "$DEV_FLAG" == 1 ]; then

  # push dev
  git remote add origin $INTERNAL_GIT_ORIGIN
  git push --force origin heroku-stage:$DEV_DEPLOY_BRANCH

elif [ "$TEST_FLAG" == 1 ]; then

  git remote add origin $INTERNAL_GIT_ORIGIN
  git push --force origin heroku-stage:$TEST_DEPLOY_BRANCH

fi


echo "*** Deleting temp directory $tmpdir ***"
rm -rf $tmpdir
cd $startdir
