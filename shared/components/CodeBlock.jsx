// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server.browser';
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
      aria-pressed={props.open}
      aria-label="Show Code"
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

  getCode(lines) {
    const { toggleCode, children } = this.props;
    try {
      React.Children.only(children);
    } catch (error) {
      throw new Error(
        'We expected exactly one child in CodeView, you passed in 0 or many children'
      );
    }
    const markup = children ? ReactDOM.renderToStaticMarkup(children) : '';
    const formatted = beautify(markup);
    let code;

    // Only reduce if # of lines is specified and the codeblock is meant to be toggled
    if (lines && toggleCode) {
      code = formatted
        .split(/\n/g)
        .reduce((codeLines, codeLine, i) =>
          i <= lines ? `${codeLines}\n` + codeLine : codeLines
        );
    } else {
      code = formatted;
    }

    return code;
  }

  getHighlightedCode(lines) {
    const { language } = this.props;
    return highlight(this.getCode(lines), language);
  }

  render() {
    const { language, toggleCode } = this.props;
    const { open } = this.state;
    const codeLines = open ? null : 3;

    return (
      <div className="docs-codeblock-source">
        <ul className="docs-codeblock__action-bar">
          <li>
            <Copy
              key="copy"
              className="slds-button_icon-container"
              containerClassName="site-code_copy"
              text={this.getCode()}
            />
          </li>
          {toggleCode && (
            <li>
              <ToggleButton
                open={this.state.open}
                onClick={this.toggleCodeBlock}
              />
            </li>
          )}
        </ul>
        <div
          className={classNames(
            'docs-codeblock-source__code',
            toggleCode && (this.state.open ? 'code-expanded' : 'code-collapsed')
          )}
        >
          <pre className={`language-${language}`}>
            <code
              className={`language-${language}`}
              dangerouslySetInnerHTML={{
                __html: this.getHighlightedCode(codeLines)
              }}
            />
          </pre>
        </div>
      </div>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  toggleCode: PropTypes.bool,
  children: PropTypes.node
};

CodeBlock.defaultProps = {
  language: 'html',
  toggleCode: true
};

export default CodeBlock;
