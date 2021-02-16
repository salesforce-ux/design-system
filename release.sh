#! /bin/bash

#
# Uncomment the appropriate line below to publish to the correct Heroku app
#
# HEROKU_APP_NAME=core-patch-doc-site
# HEROKU_APP_NAME=core-main-doc-site
# HEROKU_APP_NAME=upcoming-doc-site
# HEROKU_APP_NAME=design-system-site-prod

incorrect_selection() {
  echo "Incorrect selection! Try again."
}

until [ "$selection" = "0" ]; do
  clear
  echo "Where would you like to publish?"
  echo ""
  echo "    	1  -  Upcoming"
  echo "    	2  -  Core patch"
  echo "    	3  -  Core main"
  echo "    	4  -  Production"
  echo "    	0  -  Exit"
  echo ""
  echo -n "  Enter selection: "
  read selection
  echo ""
  case $selection in
    1 ) clear ; HEROKU_APP_NAME=upcoming-doc-site ; robots_index=false ; break ;;
    2 ) clear ; HEROKU_APP_NAME=core-patch-doc-site ; robots_index=false ; break ;;
    3 ) clear ; HEROKU_APP_NAME=core-main-doc-site ; robots_index=false ; break ;;
    4 ) clear ; HEROKU_APP_NAME=design-system-site-prod ; robots_index=true ; break ;;
    0 ) clear ; exit ;;
    * ) clear ; incorrect_selection ;;
  esac
done

#
# Do some cleanup & prep
#
rm -rf .dist/
rm -rf __release/
mkdir -p __release/

#
# Update CanIUse database
#
npx browserslist@latest --update-db

#
# Build framework
#
npm run build-dist

# # tar -cvf design-system-dist.tar .dist/
# cd .dist && zip -r dist . && mv dist.zip ../ && cd ..

#
# Tweak postcss.config.js file to remove deprecated syntax
# :: not modifying file permanently until we fully migrate
#
sed -i.bak 's/require(\(.*\))/\1/' postcss.config.js

#
# Change directory for site build
#
cd __release

# Clone site repository, main branch HEAD
git clone --single-branch --branch main git@github.com:salesforce-ux/design-system-site.git .

#
# Update CanIUse database
#
npx browserslist@latest --update-db

# perform Node modules install
npm ci --prefer-offline

# Create directories for assets
mkdir -p assets/styles
mkdir -p .generated/metadata

# Copy necessary files from framework
cp -R ../design-tokens design-tokens
cp -R ../design-tokens ../.dist/
cp -R ../assets/styles assets/styles
cp -R ../.generated/metadata .generated/metadata

#
# Build static site
SLDS__FRAMEWORK__PATH=../.dist SLDS__ROBOTS__INDEX=${robots_index} npm run build # when releasing to public site we enable indexing

# Create tarball of site
tar -czf site-release.tar.gz .www/ Procfile app.json config/nginx.conf.erb heroku-start.sh

# install the needed Heroku CLI plugin (https://github.com/heroku/heroku-builds)
heroku plugins:install heroku-builds

# Install nginx buildpack if not already present in Heroku app
# heroku buildpacks -a ${HEROKU_APP_NAME} | grep "https://github.com/salesforce-ux/heroku-buildpack-nginx.git#dse" || heroku buildpacks:set https://github.com/salesforce-ux/heroku-buildpack-nginx.git#dse -a ${HEROKU_APP_NAME}
# Publish the tarball to the Heroku app
heroku builds:create --source-tar site-release.tar.gz -a ${HEROKU_APP_NAME}

# Exit back to parent directory and clean-up after ourselves
cd ..
# rm -rf __release/
