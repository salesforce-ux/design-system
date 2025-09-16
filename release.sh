#! /bin/bash

# Check Node.js version - fail if greater than 16
NODE_VERSION=$(node -v | sed 's/v//')
NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d. -f1)

if [ "$NODE_MAJOR_VERSION" -gt 16 ]; then
    echo "==============================================================="
    echo -e "\033[31m» Error: Node.js version $NODE_VERSION is not supported. Please use Node.js version 16 or lower.\033[0m"
    echo "» Current version: $NODE_VERSION"
    echo "==============================================================="
    exit 1
fi

echo "==============================================================="
echo "» Node.js version check passed: $NODE_VERSION"
echo "==============================================================="

build_site_only=false

dist_path="./.dist"

# Specify the path to the package.json file
package_json="$dist_path/package.json"

use_exising_dist=false

echo "==============================================================="
if [[ "$@" == "--make-index" ]]; then
  make_index=true
  echo "» Site index to be built"

  # Check if the .algoliakeys.json file exists
  if [ ! -f ".algoliakeys.json" ]; then
    # Print an error message
    tput setab 1; echo "» Error: .algoliakeys.json file not found and is needed to index the site"; tput sgr0
    # Exit the script with a non-zero status code
    exit 1
  fi
else
  make_index=false
  echo "» Skipping site index build"
fi
echo "==============================================================="


if [ -e "$package_json" ]; then
  # Use jq to extract the version property
  version=$(jq -r '.version' "$package_json")

  # Prompt the user to continue
  read -p "The version v$version exists in the .dist folder. Do you want to continue? (Y/n)" choice
  choice=${choice:-y} # set default value to "y" if user presses Enter

  # Check the user's choice
  if [[ "$choice" == "y" || "$choice" == "Y" ]]; then
      echo "==============================================================="
      echo "» Continuing with the existing version $version"
      echo "==============================================================="
      use_exising_dist=true
  fi
fi

if [ "$use_exising_dist" = false ]; then
  echo "==============================================================="
  echo "» Continuing to build and dist anew from v$(jq -r '.version' "./package.json")"
  echo "==============================================================="
fi

incorrect_selection() {
  echo "Incorrect selection! Try again."
}

until [ "$selection" = "0" ]; do
  # clear
  echo "» Where would you like to publish?"
  echo ""
  echo "    	1  -  Upcoming"
  echo "    	2  -  Core patch"
  echo "    	3  -  Core main"
  echo "    	4  -  Staging (for release)"
  echo "    	5  -  Staging (for archive/nofollow/noindex)"
  echo "    	6  -  Build site only"
  echo "    	0  -  Exit"
  echo ""
  echo -n "  Enter selection: "
  read selection
  echo ""
  case $selection in
    1 ) clear ; HEROKU_APP_NAME=upcoming-doc-site ; robots_index=false ; VALIDATION_URL=https://upcoming.lightningdesignsystem.com/ ; break ;;
    2 ) clear ; HEROKU_APP_NAME=core-patch-doc-site ; robots_index=false ; VALIDATION_URL=https://core-patch.lightningdesignsystem.com/ ; break ;;
    3 ) clear ; HEROKU_APP_NAME=core-main-doc-site ; robots_index=false ; VALIDATION_URL=https://core-main.lightningdesignsystem.com/ ; break ;;
    4 ) clear ; HEROKU_APP_NAME=design-system-site-stage ; robots_index=true ; VALIDATION_URL=https://design-system-site-stage.herokuapp.com ; break ;;
    5 ) clear ; HEROKU_APP_NAME=design-system-site-stage ; robots_index=false ; VALIDATION_URL=https://design-system-site-stage.herokuapp.com ; break ;;
    6 ) clear ; build_site_only=true ; robots_index=true ; break ;;
    0 ) clear ; exit ;;
    * ) clear ; incorrect_selection ;;
  esac
done

#
# Do some cleanup & prep
#
echo "» Removing '__release' folder..."
rm -rf __release/
echo "» Creating fresh '__release' folder..."
mkdir -p __release/

#
# Update CanIUse database
#
npx browserslist@latest --update-db

if [ "$use_exising_dist" = false ]; then
  echo "» Removing '.dist' folder..."
  rm -rf $dist_path
  #
  # Build framework
  #
  npm run build-dist
fi

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
git clone --single-branch --branch main git@github-emu:salesforce-ux-emu/design-system-site.git .
# git clone --single-branch --branch feat/256-docs git@github-emu:salesforce-ux-emu/design-system-site.git .

#
# Update CanIUse database
#
npx update-browserslist-db@latest
#npx browserslist@latest --update-db

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

# if not only building site then proceed with publish process
if [ "$build_site_only" = false ]; then
  # Create tarball of site
  tar -czf site-release.tar.gz .www/ Procfile app.json config/nginx.conf.erb heroku-start.sh

  # install the needed Heroku CLI plugin (https://github.com/heroku/heroku-builds)
  heroku plugins:install heroku-builds

  # Install nginx buildpack if not already present in Heroku app
  # heroku buildpacks -a ${HEROKU_APP_NAME} | grep "https://github.com/salesforce-ux/heroku-buildpack-nginx.git#dse" || heroku buildpacks:set https://github.com/salesforce-ux/heroku-buildpack-nginx.git#dse -a ${HEROKU_APP_NAME}

  # Publish the tarball to the Heroku app
  heroku builds:create --source-tar site-release.tar.gz -a ${HEROKU_APP_NAME}

  cd ./.www/
  if [ "$make_index" = true ]; then
    echo "» Running docsearch scraper from Docker..."

    # start python server on port 80
    python3 -m http.server 80 &

    # copy Algolia environment variables into .env
    # relies on design-system-site/environment.js being run first
    echo APPLICATION_ID=$(cat ../../.algoliakeys.json | jq -r .SLDS__SEARCH__APP_ID) > .env
    echo API_KEY=$(cat ../../.algoliakeys.json | jq -r .SLDS__SEARCH__API_KEY) >> .env

    # Run Algolia Docsearch Scraper in Docker
    # https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image
    docker run -v /dev/shm:/dev/shm -it --env-file=.env -e "CONFIG=$(cat ../../searchconfig.json | jq -r tostring)" algolia/docsearch-scraper

    # kill python server
    lsof -ti tcp:80 | xargs kill
  fi

  # Exit back to parent directory and clean-up after ourselves
  cd ../../

  echo "» Removing '__release' folder..."

  # Prompt the user to remove release folder
  read -p "Do you want to delete the '__release' folder? (y/n): " do_delete_release_folder

  # Check the user's choice
  if [[ "$do_delete_release_folder" == "y" || "$do_delete_release_folder" == "Y" ]]; then
      echo "==============================================================="
      echo "» Removing __release folder..."
      echo "==============================================================="
      rm -rf __release/
  fi

  cp postcss.config.js.bak postcss.config.js
  rm postcss.config.js.bak

    # Prompt the user to remove release folder
  read -p "Do you want to validate the site? (y/n): " do_validate_site

  # Check the user's choice
  if [[ "$do_validate_site" == "y" || "$do_validate_site" == "Y" ]]; then
      echo "==============================================================="
      echo "» Validating site..."
      echo "==============================================================="
      # Validate staged site
      SLDS_VALIDATION_URL=${VALIDATION_URL} npx ava __tests__/site/site-validation.ava.js
  fi

fi

# Exit back to parent directory
cd ..
