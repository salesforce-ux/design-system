/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import stripIndent from 'strip-indent';
import Prism from 'app_modules/site/vendor/prism';

const demoPattern = /^\<([a-z]*?)[\s\S]*?class(?:Name|)\=\"[^"]*demo-only[^"]*\"[\s\S]*?\>([\s\S]*?)\<\/\1\>$/;

/**
 * Remove the demo-only wrapper that surrounds an example,
 * and format it to re-indent it and remove space around it
 *
 * @param {string} code
 */
const demoUnwrapper = (code) =>
  stripIndent(code.replace(demoPattern, (match, tag, content) => content));

/**
 * Highlight the markup of an example
 * and remove the demo-only wrapper that surrounds it
 *
 * @param {string} code
 * @returns {string}
 */
export default (code) =>
  Prism.highlight(
    demoUnwrapper(code),
    Prism.languages.markup
  ).trim();
