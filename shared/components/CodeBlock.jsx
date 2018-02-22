// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server.browser';
import stripIndent from 'strip-indent';
import { beautify } from '../utils/beautify';
import classNames from 'classnames';
import Copy from './Copy';
import Prism from '../vendor/prism';
import '../vendor/prism/_prism.scss';
import '../vendor/prism/_prism-overrides.scss';

const highlight = (code, language) =>
  Prism.highlight(code, Prism.languages[language]);

export const ToggleButton = props => (
  <div className="doc-toggle-code">
    <button
      {...props}
      className="slds-button doc-toggle-code__button"
      aria-live="polite"
    >
      {props.open ? 'Hide ' : 'Show '} Code
    </button>
  </div>
);

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleCodeBlock = this.toggleCodeBlock.bind(this);
  }

  toggleCodeBlock() {
    this.setState({ open: !this.state.open });
  }

  getCode() {
    const { children, language } = this.props;
    try {
      React.Children.only(children);
    } catch (error) {
      throw new Error(
        'We expected exactly one child in CodeView, you passed in 0 or many children'
      );
    }
    const code = children ? ReactDOM.renderToStaticMarkup(children) : '';
    return beautify(code);
  }

  getHighlightedCode() {
    const { language } = this.props;
    return highlight(this.getCode(), language);
  }

  render() {
    const { language, toggleCode = true } = this.props;
    return (
      <div
        className={classNames(
          'docs-codeblock-source',
          toggleCode && (this.state.open ? 'code-expanded' : 'code-collapsed')
        )}
      >
        <ul className="docs-codeblock__action-bar">
          {toggleCode && (
            <li>
              <ToggleButton
                open={this.state.open}
                onClick={this.toggleCodeBlock}
              />
            </li>
          )}
          <li>
            <Copy key="copy" className="site-code_copy" text={this.getCode()} />
          </li>
        </ul>
        <pre className={`language-${language}`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{
              __html: this.getHighlightedCode()
            }}
          />
        </pre>
      </div>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  toggleCode: PropTypes.bool
};

CodeBlock.defaultProps = {
  language: 'html'
};

export default CodeBlock;
