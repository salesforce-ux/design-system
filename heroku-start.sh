# Initialize cache directory.
mkdir -p cache/nginx
echo 'script=heroku-start at=cache-initialized'
#
bin/start-nginx-solo
