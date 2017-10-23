// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import stripIndent from 'strip-indent';
import { beautify } from '../utils/beautify';

import Prism from '../vendor/prism';
import '../vendor/prism/_prism.scss';
import '../vendor/prism/_prism-overrides.scss';

const highlight = (code, language) =>
  Prism.highlight(code, Prism.languages[language]);

export class CodeBlock extends React.Component {
  getCode() {
    const { language, children } = this.props;
    try {
      React.Children.only(children);
    } catch (error) {
      throw new Error(
        'We expected exactly one child in CodeView, you passed in 0 or many children'
      );
    }
    const code = children ? ReactDOM.renderToStaticMarkup(children) : '';
    return highlight(beautify(code), language);
  }
  render() {
    const { language } = this.props;
    return (
      <div className="docs-codeblock-source">
        <pre className={`language-${language}`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{
              __html: this.getCode()
            }}
          />
        </pre>
      </div>
    );
  }
}
CodeBlock.propTypes = {
  language: PropTypes.string
};
CodeBlock.defaultProps = {
  language: 'html'
};
export class CodeView extends React.Component {
  kids() {
    return <div className="docs-codeblock-example">{this.props.children}</div>;
  }
  render() {
    const { position } = this.props;
    return (
      <div className="docs-codeblock">
        {position === 'bottom' ? this.kids() : null}
        <CodeBlock language="html">{this.props.children}</CodeBlock>
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
