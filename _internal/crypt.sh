#! /bin/zsh

##
## SLDS Crypt
## --------------------------------
## Use this script to build and start an older version of SLDS for research purposes.
##
## Usage:
## -v <version number> (version number must be 2.7 or newer)
## -s                  (only start a pre-existing build, use if you've already built a version and just want to start the server)
## -b                  (only build and don't start the server, use if you only want to build a version and not start a web server)
##
##

echo "███████╗██╗     ██████╗ ███████╗     ██████╗██████╗ ██╗   ██╗██████╗ ████████╗
██╔════╝██║     ██╔══██╗██╔════╝    ██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝
███████╗██║     ██║  ██║███████╗    ██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║
╚════██║██║     ██║  ██║╚════██║    ██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║
███████║███████╗██████╔╝███████║    ╚██████╗██║  ██║   ██║   ██║        ██║
╚══════╝╚══════╝╚═════╝ ╚══════╝     ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝  "
echo

# Verify requirements are installed
# - if not install or exit with an informational message

# Is NVM installed, if not install it
if [ -s  ~/.nvm/nvm.sh ]
then
  # Load NVM command into the script environment
  . ~/.nvm/nvm.sh
fi

if [ -z "$(command -v nvm)" ]
then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
else
  # echo "» NVM is installed..."
fi

# Is JQ installed, if not install it
if [ -z "$(command -v jq)" ]
then
  brew install jq
else
  # echo "» jq is installed..."
fi

# Is Xcode properly installed?
if [[ "$(xcode-select --install 2>&1)" == 'xcode-select: error: command line tools are already installed, use "Software Update" to install updates' ]]
then
  # echo "» Xcode command line tools are installed..."
else
  echo "» Xcode command line tools missing or not configured correctly..."
fi

# Constants
start_only=false
build_site_only=false
crypt_dir="__crypt"
slds_dir=".slds/"
site_dir="site/"
version_limit=2.12

usage() {
  echo "» Usage:\n  npm run crypt -- -v <2.7|2.8|...> [-s|-b]";
  echo;
  echo "  -v <version number>  [required] the SLDS version number, must be 2.7 or newer";
  echo "  -s                   [optional] use to start an existing and built crypt version, cannot be used with '-b'";
  echo "  -b                   [optional] use to only build a crypt version and not start a web server, cannot be use with '-s'";
  exit 1;
}

# Manage parameters
while getopts ":sbv:" opt; do
  case $opt in
    v)
      slds_version="$OPTARG"
      # if version passed in is older than v2.7 then exit with info message to use a newer version
      if [ $(printf "2.6\n$slds_version\n" | sort -V | head -n 1) =  "$slds_version" ]
      then
        echo "! Version must be 2.7 or newer...\n"
        exit 1
      fi
      ;;
    s)
      if [ "$build_site_only" = true ]
      then
        echo "» Cannot use both '-s' and '-b', building site only..."
        break
      else
        echo "» Only starting site..."
      fi
      start_only=true
      ;;
    b)
      if [ "$start_only" = true ]
      then
        echo "» Cannot use both '-b' and '-s', starting site only..."
        break
      else
        echo "» Only building site..."
      fi
      build_site_only=true
      ;;
    *)
      usage
      ;;
  esac
done

if [ -z "${slds_version}" ]; then
  usage
fi

#
# Do some prep & cleanup
#
if [ ! -d "$crypt_dir" ]
then
  echo "» Creating '$crypt_dir' folder..."
  mkdir -p "$crypt_dir"
fi

if [ "$start_only" = false ]
then
  # Cleanup
  echo "» Cleaning up before cloning..."
  rm -rf "$crypt_dir/v$slds_version"
  echo "» Creating 'v${slds_version}' folder..."
  mkdir -p "$crypt_dir/v$slds_version"

  # Find latest version tag for the SLDS version requested
  git_tag=$(git tag -l "v${slds_version}*" --sort=-version:refname | head -n 1)
  echo "» Git tag $git_tag found as latest for SLDS v$slds_version..."

  # Obtain site build version from JSON file
  jq_site_search=".\"$slds_version\".site_version"
  site_tag=$(cat shared/site-versions.json | jq -r $jq_site_search)
  echo "» Site tag of $site_tag found for SLDS v$slds_version..."

  # Obtain NVM version from JSON file
  jq_nvm_search=".\"$slds_version\".nvm_version"
  nvm_version=$(cat shared/site-versions.json | jq -r $jq_nvm_search)
  echo "» NVM version of $nvm_version found for SLDS v$slds_version..."

  # Check if Node version is already installed, if not install it
  if [[ "$(nvm use $nvm_version 2>&1)" =~ "N/A" ]]
  then
    echo "» Installing Node version $nvm_version..."
    nvm install "$nvm_version"
  fi

  #
  # Modify root directory postcss.config.js file if needed
  #
  if [ $(printf "$version_limit\n$slds_version\n" | sort -Vr | head -n 1) = "$slds_version" ]
  then
    #
    # Tweak postcss.config.js file to remove deprecated syntax
    # :: not modifying file permanently until we fully migrate
    #
    echo "» Cleaning PostCSS config file..."
    sed -i.bak 's/require(\(.*\))/\1/' "postcss.config.js"
  fi
fi

#
# Change to archives versions directory
if [ -d "$crypt_dir/v$slds_version" ]
then
  cd "$crypt_dir/v$slds_version"
else
  echo "! Crypt for version $slds_version does not exist, please try again..."
  exit 1
fi
#
#

if [ "$start_only" = false ]
then
  # Clone SLDS repository, tagged version branch only
  echo "» Cloning SLDS repo..."
  git clone --branch "$git_tag" ../.. "$slds_dir" -c advice.detachedHead=false

  #
  # Build SLDS
  #
  cd "$slds_dir"
  nvm use "$nvm_version"
  npm i --python=python2.7 --quiet
  npm run build
  npm run dist

  # Change directory for site build
  cd ..

  # Clone site repository, tagged version branch only
  mkdir -p "$site_dir"
  cd "$site_dir"
  git clone --depth 1 --branch "$site_tag" git@github.com:salesforce-ux/design-system-site.git . -c advice.detachedHead=false

  #
  # Build site
  #
  nvm use "$nvm_version"
  npm i --python=python2.7 --quiet

  # Create directories for assets
  mkdir -p assets/styles

  # Copy necessary files from framework
  cp -R ../"$slds_dir"design-tokens design-tokens
  cp -R ../"$slds_dir"design-tokens ../"$slds_dir".dist/
  cp -R ../"$slds_dir"assets/styles assets/styles
  if [ -d "../$slds_dir.generated/metadata" ]
  then
    mkdir -p .generated/metadata
    cp -R ../"$slds_dir".generated/metadata .generated/metadata
  fi

  #
  # Build static site
  SLDS__FRAMEWORK__PATH=../"$slds_dir".dist SLDS__ROBOTS__INDEX=false npm run build:site

  # return to crypt version root
  cd ..
fi

# Start site
if [ "$build_site_only" = false ]
then
  if [ -s "$site_dir.www/index.html" ]
  then
    npx http-server "$site_dir.www/" -p 0
  else
    echo "! Please build site before attempting to start it..."
  fi
fi
