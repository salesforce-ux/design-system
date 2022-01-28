#! /bin/bash

build_site_only=false

incorrect_selection() {
  echo "Incorrect selection! Try again."
}

until [ "$selection" = "0" ]; do
  clear
  echo "» Where would you like to publish?"
  echo ""
  echo "    	1  -  Upcoming"
  echo "    	2  -  Core patch"
  echo "    	3  -  Core main"
  echo "    	4  -  Staging (for release)"
  echo "    	5  -  Staging (for archive)"
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
echo "» Removing '.dist' folder..."
rm -rf .dist/
echo "» Removing '__release' folder..."
rm -rf __release/
echo "» Creating fresh '__release' folder..."
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

  # Clone Algolia Docsearch Scraper
  echo "» Installing docsearch scraper..."
  git clone https://github.com/algolia/docsearch-scraper.git

  cd ./.www/

  # start python server on port 80
  python3 -m http.server 80 &

  # install python3
  brew install python

  cd ../docsearch-scraper/

  # crudely install pipenv
  curl https://raw.githubusercontent.com/pypa/pipenv/master/get-pipenv.py | python

  # copy Algolia environment variables into .env
  # relies on design-system-site/environment.js being run first
  echo APPLICATION_ID=$(cat ../.algoliakeys.json | jq -r .SLDS__SEARCH__APP_ID) > .env
  echo API_KEY=$(cat ../.algoliakeys.json | jq -r .SLDS__SEARCH__API_KEY) >> .env


  # install pipenv dependencies
  pipenv install

  # check for active python server on port 80
  max_iterations=10
  wait_seconds=1
  http_endpoint="http://127.0.0.1:80/"
  iterations=0

  while true
  do
    ((iterations++))
    echo "» Attempt $iterations"
    sleep $wait_seconds
    http_code=$(curl --verbose -s -o /tmp/result.txt -w '%{http_code}' "$http_endpoint";)

    # python server is running, begin crawling
    if [ "$http_code" -eq 200 ]; then
      echo "» Python server active. Crawling site..."
      pipenv run ./docsearch run ../../searchconfig.json
      break
    fi

    # no active server, end loop
    if [ "$iterations" -ge "$max_iterations" ]; then
      echo "» No active python server. Skipping indexing operation..."
      exit 1
    fi
  done

  # kill python server
  lsof -ti tcp:80 | xargs kill

  # Exit back to parent directory and clean-up after ourselves
  cd ../../

  echo "» Removing '__release' folder..."
  rm -rf __release/
  cp postcss.config.js.bak postcss.config.js
  rm postcss.config.js.bak

  # Validate staged site
  echo "» Validating site..."
  SLDS_VALIDATION_URL=${VALIDATION_URL} npx ava __tests__/site/site-validation.ava.js
fi

# Exit back to parent directory
cd ..
