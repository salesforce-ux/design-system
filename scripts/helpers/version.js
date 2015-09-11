var path = require('path')
var packagePath = path.resolve(process.cwd(), 'package.json')
console.log(require(packagePath).version)
