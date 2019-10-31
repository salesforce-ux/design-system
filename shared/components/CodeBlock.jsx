// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server.browser';
import { beautify } from '../utils/beautify';
import { mapElement } from '../utils/react';
import classNames from 'classnames';
import Copy from './Copy';
import Prism from '../vendor/prism';
import { StyledButton, StyledCodeBlock } from '../styles/CodeBlock';
import '../vendor/prism/_prism.scss';
import '../vendor/prism/_prism-overrides.scss';

const highlight = (code, language) =>
  Prism.highlight(code, Prism.languages[language]);

export const ToggleButton = props => (
  <StyledButton aria-live="polite" {...props}>
    {props.open ? 'Hide ' : 'Show '} Code
  </StyledButton>
);

class CodeBlock extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.toggleCodeBlock = this.toggleCodeBlock.bind(this);
  }

  toggleCodeBlock() {
    this.setState({ open: !this.state.open });
  }

  getCode(lines, showSource = false) {
    const { children, hideSourceOf } = this.props;
    const element = React.isValidElement(children)
      ? mapElement(children, child => {
          if (child === undefined) return child;
          return React.cloneElement(child, {
            shadow: child.props.shadow,
            hideSourceOf: hideSourceOf,
            showSource: showSource
          });
        })
      : children;
    const markup = ReactDOM.renderToStaticMarkup(element);
    const sanitizedMarkup = markup.replace(/className="resolved"/g, '');
    return beautify(element ? sanitizedMarkup : '');
  }

  getHighlightedCode(lines) {
    const { language } = this.props;
    return highlight(this.getCode(lines, true), language);
  }

  render() {
    const { language, toggleCode = true } = this.props;
    const { open } = this.state;
    const codeLines = open ? null : 3;

    return (
      <StyledCodeBlock className="docs-codeblock-source">
        <ul className="docs-codeblock__action-bar">
          <li>
            <Copy key="copy" className="site-code_copy" text={this.getCode()} />
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
      </StyledCodeBlock>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  toggleCode: PropTypes.bool,
  children: PropTypes.node,
  hideSourceOf: PropTypes.array
};

CodeBlock.defaultProps = {
  language: 'html'
};

export default CodeBlock;
