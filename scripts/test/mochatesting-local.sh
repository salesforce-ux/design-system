#!/bin/sh
# local testing
set -e

echo "Testing main site"
mocha test.js -t 800000 --runfrom local --server test  --test mainsite

echo
echo
echo "Testing testpage"
mocha test.js -t 800000 --runfrom local --server test  --test testpage

echo
echo
echo "Testing core"
mocha test.js -t 800000 --runfrom local --server test  --test core

echo
echo
echo "Testing components"
mocha test.js -t 800000 --runfrom local --server test  --test components

echo
echo
echo "Testing utilities"
# mocha utilities.js -t 8000000 --location local 
