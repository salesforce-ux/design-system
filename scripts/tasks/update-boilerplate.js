/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import fs from 'fs';
import through from 'through2';
import path from 'path';
import gulp from 'gulp';
import gulpFilter from 'gulp-filter';
import _ from 'lodash';

const searchPaths = [
  __PATHS__.app_modules,
  __PATHS__.scripts,
  __PATHS__.site,
  __PATHS__.ui
];

const C_STYLE = `/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

`;
const SHELL_STYLE = `# Copyright (c) 2015, salesforce.com, inc. All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
# Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
# Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
# Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`;

function getFiletype(file) {
  return /\.sh$/.test(file.path) ? 'shell' : 'c';
}

function prependBoilerplate(file, enc, next) {
  let fileContents = (file.contents || '').toString();

  switch (getFiletype(file)) {
    case 'c':
      file.contents = new Buffer(C_STYLE + fileContents.replace(/^\s+/, ''), 'utf8');
      break;
  }

  this.push(file);
  next();
}

function stripBoilerplate(file, enc, next) {
  let fileContents = (file.contents || '').toString();

  let copyrightMatch;
  let commentBegin;
  let commentEnd;
  switch (getFiletype(file)) {
    case 'c':
      // Find copyright match
      copyrightMatch = fileContents.match(/copyright.*salesforce/i);
      if (copyrightMatch) {
        // Find nearest /* and */ close to the match
        commentBegin = fileContents.substr(0, copyrightMatch.index).lastIndexOf('/*');
        commentEnd = fileContents.indexOf('*/', copyrightMatch.index);
        if (commentEnd) {
          commentEnd += 2;

          // Successful match, remove.
          fileContents = fileContents.substr(0, commentBegin) + fileContents.substr(commentEnd);
          file.contents = new Buffer(fileContents, 'utf8');
        }
      }
      break;
    case 'shell':
      break;
  }

  this.push(file);
  next();
}

export default function() {
  console.log(`- Updating boilerplates in:\n  - ${searchPaths.join('\n  - ')}\n- Files:`);
  searchPaths.forEach(searchPath => {
    gulp.src([
        path.resolve(searchPath, '**/*.css'),
        path.resolve(searchPath, '**/*.scss'),
        path.resolve(searchPath, '**/*.js'),
        path.resolve(searchPath, '**/*.jsx'),
        path.resolve(searchPath, '**/*.sh')
      ])
      .pipe(gulpFilter(['**/*', '!**/vendor/**/*', '!**/_vendor/**/*']))
      .pipe(through.obj(stripBoilerplate))
      .pipe(through.obj(prependBoilerplate))
      .pipe(gulp.dest(searchPath));
  });
}
