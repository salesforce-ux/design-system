/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { expect } from 'chai';
import publish from 'scripts/helpers/publish';


const fakey = protocol => commands =>
  protocol.reduce((acc, x) => {
    if(x.name) {
      acc[x.name] = x.f(acc, commands);
    } else {
      acc[x] = function() {
        commands.push([x, arguments]);
        return acc;
      };
    }
    return acc;
  }, {});

const gulp = fakey(['src', 'pipe', 'dest',
  { name: 'on', f: (acc, commands) =>
    (cmd, cb) => {
      commands.push(['on', cmd]);
      if(cmd === 'finish') cb();
      return acc;
    }
  }
]);

const request = fakey(['post', 'attach', 'field',
  { name: 'end', f: (acc, commands) =>
    cb => {
      commands.push(['end', '']);
      cb();
    }
  }
]);


const execute = commands => (cmd, cb) => {
  commands.push(cmd);
  cb(`2 passing 23 SUCESS 3 passing ${cmd}`);
};

const fakeFS = (reads, writes) => {
  return {
    writeFileSync: (path, contents, charset) =>
      writes.push([path, contents]),

    readFileSync: (path, charset) => {
      reads.push(path);
      return `fake read for ${path}`;
    }
  };
};

// TODO: rewrite these to use any() instead of [0][1] etc
describe('scripts/helpers/publish.js', () => {
  let reads = [];
  let writes = [];
  let requests = [];
  let executes = [];
  let gulps = [];
  let publisher;

  before(function(done) {
    process.env.PUBLISH_HOST = 'http://myurl';
    publish(fakeFS(reads, writes), request(requests), execute(executes), gulp(gulps))(() => done());
  });

  it('removes the old folder', () =>
    expect(executes[0]).to.match(/rm -rf/i));

  it('makes a new build folder', () =>
    expect(executes[1]).to.match(/mkdir/i));

  it('calls the dist', () =>
    expect(executes[3]).to.match(/dist/i));

  it('calls the git info', () =>
    expect(executes[5]).to.match(/git show/i));

  it('reads the test logs', () =>
    expect(reads[0]).to.match(/test\.txt$/i));

  it('writes the tests', () =>
    expect(writes[0][0]).to.match(/tests\.json$/i));

  it('writes the git info to the write place', () =>
    expect(writes[1][0]).to.match(/gitinfo\.txt$/i));

  it('writes the git info', () =>
    expect(writes[1][1]).to.match(/git show/i));

  it('gets the stats', () =>
    expect(reads[1]).to.match(/design-system\.css$/i));

  it('writes the stats to the correct place', () =>
    expect(writes[2][0]).to.match(/stats.json/i));

  it('writes the stats with the correct info', () =>
    expect(JSON.parse(writes[2][1]).size).to.be.greaterThan(120));

  it('publishes the zip', () =>
    expect(requests[0][1][0]).to.match(/myurl.*git/));
});
