require('./paths').install();
require('app-module-path').addPath(__PATHS__.root);

var _ = require('lodash');
var argv = require('minimist')(process.argv.slice(2));
var isInternal = argv.internal === true;

_.defaults(process.env, {
  DEFAULT_USER_TYPE: isInternal ? 'internal' : 'external'
});
