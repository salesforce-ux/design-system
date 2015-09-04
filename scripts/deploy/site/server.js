/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var newrelic = require('newrelic');
var express = require('express');
var path = require('path');
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2');
var basicAuth = require('basic-auth');
var Cookies = require('cookies');
var app = express();

app.set('port', process.env.PORT || 3000);

///////////////////////////
// Redirects
///////////////////////////

app.get('/feedback', function (req, res) {
  return res.redirect(301, global.FEEDBACK_URL);
});

app.get('/bugs', function (req, res) {
  return res.redirect(301, global.BUG_URL);
});

///////////////////////////
// Setup
///////////////////////////
var ENV_VARS = ['COOKIE_KEYS', 'SDS_CLIENT_ID', 'SDS_CLIENT_SECRET', 'BUG_URL', 'FEEDBACK_URL'];

ENV_VARS.forEach(function(v) {
  if(!process.env[v]) {
    console.warn('\nMissing env variable: ' + v + '\n\n');
    throw new Error('Missing ' + v);
  } else {
    global[v] = process.env[v];
  }
});

app.use(Cookies.express(global.COOKIE_KEYS.split(',')));
app.use(passport.initialize());
app.use(passport.session());

///////////////////////////
// Auth
///////////////////////////

// Callback service parsing the authorization token and asking for the access token
app.get('/auth', passport.authenticate('oauth2'), function (req, res) {
  var commonOptions = { overwrite: true, httpOnly: false, signed: true };
  req.cookies.set('usertype', 'internal', commonOptions);
  req.cookies.set('sso', 'true', commonOptions);
  res.redirect('/');
});

// check if we have ?auth=true in the query to flag that we should oauth
var oauth = function(req, res, next) {
  if(req.query.auth) return passport.authenticate('oauth2')(req, res, next);
  next();
};

var auth = function (req, res, next) {
  var commonOptions = { overwrite: true, httpOnly: false, signed: true };

  // Skip if we're (o)authing or if we already have an oauth token
  if(req.path.match(/auth/i) || req.cookies.get('sso', {signed: true})) {
    return next();
  }

  // Clear any browser cookies they may have set.
  res.cookies.set('usertype', '', { expires: new Date(1), path: '/' });
  // Set external for everyone initially, but we'll overwrite if SSO
  req.cookies.set('usertype', 'external', commonOptions);
  return next();
};


///////////////////////////
// KICK OFF EXPRESS SERVER
///////////////////////////

// note looks for 'www' rather than '.www'
app.use(oauth);
app.use(auth);
app.use(express.static(path.resolve(__dirname, 'www')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.info('Express: listening on ' + port);
});

passport.serializeUser(function(id, done) {
  done(null, id);
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});
passport.use(new OAuth2Strategy({
    authorizationURL: 'https://aloha.my.salesforce.com/services/oauth2/authorize',
    tokenURL: 'https://aloha.my.salesforce.com/services/oauth2/token',
    clientID: global.SDS_CLIENT_ID,
    clientSecret: global.SDS_CLIENT_SECRET,
    callbackURL: '/auth'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('*** passport.use', typeof (profile), profile);
    done(null, accessToken);
  }
));

module.exports = app;
