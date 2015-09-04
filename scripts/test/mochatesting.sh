#!/bin/sh
# sauce testing
set -e

echo "Testing main site pages: Windows 2012/MSIE"
mocha test.js -t 8000000 --runfrom sauce  --server test --osTarget "Windows 2012" --browserTarget "Internet Explorer" --test mainsite

echo
echo
echo "Testing testpage: Windows 2012/MSIE"
mocha test.js -t 8000000 --runfrom sauce --server test --osTarget "Windows 2012" --browserTarget "Internet Explorer"  --test testpage
#echo "Testing testpage: Windows 2012/Firefox"
#mocha test.js -t 8000000 --runfrom sauce --server test  --osTarget "Windows 2012" --browserTarget "Firefox" --test testpage
echo "Testing testpage: Windows 7/Chrome"
mocha test.js -t 8000000 --runfrom sauce  --server test --osTarget "Windows 7" --browserTarget "Chrome" --test testpage

echo
echo
echo "Testing core markup: Windows 2012/MSIE"
mocha test.js -t 8000000 --runfrom sauce  --server test --osTarget "Windows 2012" --browserTarget "Internet Explorer" --test core

#echo "Testing core on Windows / Chrome"
#mocha test.js -t 8000000 --runfrom sauce --server test  --osTarget "Windows 2012" --browserTarget "Chrome" --test core

#echo "Testing core on Windows / Firefox"
#mocha test.js -t 8000000 --runfrom sauce --server test  --osTarget "Windows 2012" --browserTarget "Firefox" --test core

echo
echo
echo "Testing components: Windows 2012/MSIE"
mocha test.js -t 8000000 --runfrom sauce  --server test  --osTarget "Windows 2012" --browserTarget "Internet Explorer" --test components

echo "Testing components on Windows / Chrome"
#mocha test.js -t 8000000 --runfrom sauce --server test  --osTarget "Windows 2012" --browserTarget "Chrome" --test components

echo "Testing components on Windows / Firefox"
#mocha test.js -t 8000000 --runfrom sauce --server test  --osTarget "Windows 2012" --browserTarget "Firefox" --test components
