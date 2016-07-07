/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import _ from 'lodash';
import Prism from 'app_modules/site/vendor/prism';

function highlight(code, language) {
  // If a language isn't supported, fall back to C
  if (!(language in Prism.languages)) {
    language = 'clike';
  }
  return Prism.highlight(code, Prism.languages[language]);
}

let foo = false;

/**
 *   <CodeBlock language="scss">{`
 *     .foo { background: red; }
 *     .bar { background: blue; }
 *   `}</CodeBlock>
 */
class CodeBlock extends React.Component {
  getCode() {
    const {language} = this.props;
    const code = this.props.children.toString();
    const lines = code.split('\n');
    const firstLine = lines.length > 1 ? lines[1] : '';
    const offsetMatch = firstLine.match(/^\s*/);
    const offset = offsetMatch ? offsetMatch[0].length : 0;
    const codeTrimmed = lines.map(line => line.slice(offset)).join('\n').trim();

    return {
      __html: highlight(codeTrimmed, language)
    };
  }
  render() {
    const {language} = this.props;
    return (
      <pre className={`language-${language}`}>
        <code className={`language-${language}`}
          dangerouslySetInnerHTML={this.getCode()} />
      </pre>
    );
  }
}

export default CodeBlock;
