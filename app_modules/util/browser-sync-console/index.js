/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var events = require('events');
var emitter = new events.EventEmitter();

var config = {
  PLUGIN_NAME: 'bs-console',
  PLUGIN_EVENT_LOG: 'plugin:bsconsole:log',
  PLUGIN_EVENT_WARN: 'plugin:bsconsole:warn',
  PLUGIN_EVENT_ERROR: 'plugin:bsconsole:error',
  CLIENT_EVENT_LOG: 'bsconsole:log',
  CLIENT_EVENT_WARN: 'bsconsole:warn',
  CLIENT_EVENT_ERROR: 'bsconsole:error'
};

function BSConsole(opts, bs) {
  this.bs = bs;
  this.sockets = bs.io.sockets;
  this.opts = {};
  this.events = bs.events;

  this.logger = bs.getLogger(config.PLUGIN_NAME).info('Running...');

  if (typeof this.opts.logLevel !== 'undefined') {
    this.logger.setLevel(opts.logLevel);
  }
}

/**
 * ON/OFF flag
 * @type {boolean}
 */
var enabled = true;

/**
 * Instance of BSConsole
 */
var instance;

/**
 * Main export, can be called when BrowserSync is running.
 * @returns {*}
 */
module.exports = {
  log: function(msg) {
    return emitter.emit(config.PLUGIN_EVENT_LOG, msg);
  },
  warn: function(msg) {
    return emitter.emit(config.PLUGIN_EVENT_WARN, msg);
  },
  error: function(msg) {
    return emitter.emit(config.PLUGIN_EVENT_ERROR, msg);
  }
};

/**
 * Reload browsers
 * @param sockets
 * @param logger
 * @param data
 */
function configurePlugin (sockets, logger, data) {

  console.log('configurePlugin');

  var msg = '{cyan:Enabled';

  if (!data.active) {
    msg = '{yellow:Disabled';
  } else {
    sockets.emit('browser:reload');
  }

  logger.info(msg);

  enabled = data.active;

}

function getClient() {
  return [
    ';(function (window, bs) { ',
      'var socket = bs.socket;',
      'socket.on("',config.CLIENT_EVENT_LOG,'", function (msg) { console.log(msg); });',
      'socket.on("',config.CLIENT_EVENT_WARN,'", function (msg) { console.warn(msg); });',
      'socket.on("',config.CLIENT_EVENT_ERROR,'", function (msg) { console.error(msg); });',
    '})(window, window.___browserSync___);'
  ].join('');
}

/**
 * @param {Object} opts
 * @param {BrowserSync} bs
 */
module.exports.plugin = function (opts, bs) {

  var c = instance = new BSConsole(opts, bs);

  /**
   * Configure event
   */
  bs.events.on('plugins:configure', configurePlugin.bind(null, c.sockets, c.logger));

  /**
   * Internal events
   */
  emitter.on(config.PLUGIN_EVENT_LOG, function(msg) {
    c.sockets.emit(config.CLIENT_EVENT_LOG, msg);
  });

  emitter.on(config.PLUGIN_EVENT_WARN, function(msg) {
    c.sockets.emit(config.CLIENT_EVENT_WARN, msg);
  });

  emitter.on(config.PLUGIN_EVENT_ERROR, function(msg) {
    c.sockets.emit(config.CLIENT_EVENT_ERROR, msg);
  });

  /**
   * Socket Connection event
   */
  c.sockets.on('connection', function(client) {

  });

};

/**
 * Client JS hook
 * @returns {String}
 */
module.exports.hooks = {
  'client:js': getClient()
};

/**
 * Plugin name.
 * @type {string}
 */
module.exports['plugin:name'] = config.PLUGIN_NAME;
