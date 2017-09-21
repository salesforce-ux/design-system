// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import stripIndent from 'strip-indent';
import { html as beautify } from 'js-beautify';

import Prism from '../vendor/prism';
import '../vendor/prism/_prism.scss';
import '../vendor/prism/_prism-overrides.scss';

const highlight = (code, language) =>
  Prism.highlight(code, Prism.languages[language]);

class CodeBlock extends React.Component {
  getCode() {
    const { language, children } = this.props;
    const code = children ? children.toString() : '';
    return highlight(beautify(stripIndent(code).trim()), language);
  }
  render() {
    const { language } = this.props;
    return (
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{
            __html: this.getCode()
          }}
        />
      </pre>
    );
  }
}
class CodeView extends React.Component {
  constructor() {
    super();
    this.state = { code: '' };
  }
  componentDidMount() {
    this.setState({ code: this.code() });
  }
  code() {
    return this.div ? this.div.innerHTML : null;
  }
  kids() {
    return (
      <div
        ref={div => {
          this.div = div;
        }}
        className="docs-codeblock__example"
      >
        {this.props.children}
      </div>
    );
  }
  render() {
    const { position } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.kids() : null}
        <div className="docs-codeblock__source">
          <CodeBlock language="html">{this.state.code}</CodeBlock>
        </div>
        {position === 'top' ? this.kids() : null}
      </div>
    );
  }
}

CodeView.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom'])
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
