/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
'use strict';

import { exec } from 'child_process';
import { colors } from 'gulp-util';

function totalFail(message = null) {
  return
    message +
    '\nThis could be a problem with the Lightning Design System.' +
    '\nTo get some help, please report the issue at:' +
    '\nhttps://github.com/salesforce-ux/design-system/issues';
}

function isInstalled(cmd, errorMessage = null) {
  console.log(`Looking for ${cmd}...`);

  return new Promise(function(fulfill, reject) {
    try {
      exec(cmd + ' --version', function(error, stdout, stderr) {
        if (error) {
          reject(
            colors.bold.red(`"${cmd}" executable not found`) +
            '\n' + errorMessage
          );
        }
        else {
          fulfill(console.log(colors.green(`${cmd} found: ${stdout.replace(/\r?\n|\r/g, '')}`)));
        }
      });
    } catch(e) {
      reject(
        totalFail(
          colors.bold.red(`Couldn't determine a version number for "${cmd}".`
        )
      ));
    }
  });
}

const rubyCheck = isInstalled('ruby', 'Install Ruby to continue: https://www.ruby-lang.org or https://rvm.io');

const bundlerCheck = rubyCheck.then(function(res) {
  return isInstalled('bundler', 'Please install Bundler by running "gem install bundler"');
}, function(reason) {
  console.error(reason);
  process.exit(1);
});

const bundleInstall = bundlerCheck.then(function(res) {
  console.log('Installing gems...');

  try {
    const install = exec('bundle install');

    install.stdout.on('data', function(data) {
      if (data.indexOf('Permission denied') > -1) {
        totalFail(colors.bold.red(
          'Gems could not be installed.\n' +
          'Try again using sudo or install a Ruby Version Manager' +
          'such as RVM (https://rvm.io) or rbenv (https://github.com/rbenv/rbenv)'
        ));
      } else {
        // Bundler (< v2) writes errors to the standard output
        // so we're handling the error ourselves.
        // See https://github.com/bundler/bundler/issues/3353
        if (
          data.indexOf('Could not find gem') > -1 ||
          data.indexOf('error') > -1
        ) {
          process.stderr.write(colors.red(data));
        } else {
          process.stdout.write(data);
        }
      }
    });
    install.stderr.on('data', function(data) {
      process.stderr.write(colors.red(data));
    });
  } catch(e) {
    console.error(totalFail(colors.bold.red('Gems could not be installed.')));
    process.exit(1);
  }
}, function(reason) {
  console.error(reason);
  process.exit(1);
});
