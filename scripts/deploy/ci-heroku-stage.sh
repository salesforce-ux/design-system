#!/bin/sh
# Travis CI for Lightning Design System
#
# DEV SERVER
# master updates
# - are pushed to heroku-design-system-dev branch
#   and then auto-deployed to design-system-dev.herokuapp.com
#
# STAGING SERVER
# design-system-stage branch updates:
# - are pushed to heroku-design-system-stage branch
#   and then auto-deployed to design-system-dev.herokuapp.com

set -e
startdir=`pwd`
DEV_SERVER="design-system-dev.herokuapp.com"
DEV_BRANCH="master"
DEV_DEPLOY_BRANCH="heroku-design-system-dev"

STAGING_SERVER="design-system-stage.herokuapp.com"
STAGING_BRANCH="design-system-stage"
STAGING_DEPLOY_BRANCH="heroku-design-system-stage"

INTERNAL_GIT_ORIGIN="git@github.com:salesforce-ux/design-system-internal.git"
thisbranch=$TRAVIS_BRANCH
GIT_VERSION=`git describe --abbrev=0`

echo "*** CI ***"
echo "*** CI ***"
echo "SLDS VERSION:        $GIT_VERSION"
echo "TRAVIS_BRANCH:       $TRAVIS_BRANCH"
echo "TRAVIS_PULL_REQUEST: $TRAVIS_PULL_REQUEST"
echo "*** CI  ***"
echo "*** CI  ***"

# don't stage any changes except 'master' or 'production'
if [ X"$TRAVIS_BRANCH" = X"$DEV_BRANCH" ]; then

  # master branch, deploy to $DEV_DEPLOY_BRANCH
  echo "$DEV_BRANCH BRANCH: deploying to $DEV_DEPLOY_BRANCH"

elif [ X"$TRAVIS_BRANCH" = X"$STAGING_BRANCH" ]; then

  # production branch, deploy to $STAGING_DEPLOY_BRANCH
  echo "STAGING_BRANCH BRANCH: deploying to $STAGING_DEPLOING_BRANCH"

else

  echo "Cancelling deploy because this is $thisbranch branch. We only deploy from $DEV_BRANCH or $STAGING_BRANCH branches. Bye."
  exit 0

fi

# don't push PR
if [ X"$TRAVIS_PULL_REQUEST" = X"false" ]; then
  echo "This is not a PR, so we will proceed with this deployment"
else
  echo "Cancelling deploy because this is a PR. Bye."
  exit 0
fi

# Create site instance
tmpdir=`mktemp -dt salesforce-lightning-design-system.XXXXX`
echo "Created temp dir: $tmpdir"
cp scripts/deploy/site/* $tmpdir

ZIP_FILENAME="salesforce-lightning-design-system-$GIT_VERSION.zip"
echo "SLDS download file: $ZIP_FILENAME"
cp .dist/$ZIP_FILENAME .www/assets/downloads/

# copy built salesforce-lightning-design-system.css for examples
cp .dist/assets/styles/salesforce-lightning-design-system.css .www/assets/styles/salesforce-lightning-design-system.css

echo "*** Collating deployment files ***"
mkdir $tmpdir/www
mv .www/* $tmpdir/www
cd $tmpdir


echo "*** Creating git repo ***"
git config --global user.email "rboardman+design-system-ci@salesforce.com"
git config --global user.name "design-system CI"
git init
git checkout -b heroku-stage
git add .
git remote add origin $INTERNAL_GIT_ORIGIN

echo "*** Pushing to heroku ***"
if [ X"$TRAVIS_BRANCH" = X"$DEV_BRANCH" ]; then

  git commit -m "Deploy to Heroku dev server - $DEV_SERVER"
  git push --force origin heroku-stage:$DEV_DEPLOY_BRANCH

elif [ X"$TRAVIS_BRANCH" = X"$STAGING_BRANCH" ]; then

  git commit -m "Deploy to Heroku staging server - $STAGING_SERVER"
  git push --force origin heroku-stage:$STAGE_DEPLOY_BRANCH
fi

echo "*** Deleting temp directory $tmpdir ***"
rm -rf $tmpdir
cd $startdir
exit 0

