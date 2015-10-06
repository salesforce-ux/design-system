require('./paths').install();
require('app-module-path').addPath(__PATHS__.root);
require('babel/register')({
  ignore: __NODE_MODULES_PATTERN__
});
