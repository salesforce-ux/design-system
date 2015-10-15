var path = require('path');
var packagePath = path.resolve(process.cwd(), 'package.json');
var version = require(packagePath).version;
console.log(version);
module.exports = version;
