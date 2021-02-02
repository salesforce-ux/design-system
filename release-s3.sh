#! /bin/bash
echo ""
echo "------------------------"
echo "| Build and push to S3 |"
echo "------------------------"
echo ""

read -p "Which branch are you working from? " git_branch

read -p "Enter SHA you'd like to build-dist and push to S3: " SHA

# change git branch to SHA
git checkout -B $git_branch $SHA

# build .dist
npm run build-dist

# create dist.zip
cd .dist && zip -r dist . && mv dist.zip .. && cd ..

# use AWS CLI to push to S3
# s3://sldsbuilds/design-system/${CIRCLE_SHA1}/
#
aws s3 cp dist.zip s3://sldsbuilds/design-system/${SHA}/dist.zip
