// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import StyledDemo from './StyledDemo';
import classNames from 'classnames';
import { StyledCodeView } from '../styles/CodeBlock';

import '../styles/doc.scss';

class CodeView extends React.Component {
  renderChildren() {
    const { style, isViewport, isMobile } = this.props;

    return (
      <div
        className={classNames('docs-codeblock-example', {
          'docs-codeblock-example_viewport': isViewport,
          'docs-codeblock-example_mobile': isMobile
        })}
      >
        {style ? (
          <StyledDemo
            className={classNames({
              'demo-only_viewport': isViewport,
              'slds-is-mobile': isMobile
            })}
            styles={style}
          >
            {this.props.children}
          </StyledDemo>
        ) : (
          this.props.children
        )}
      </div>
    );
  }

  render() {
    const {
      position,
      toggleCode,
      children,
      exampleOnly,
      hideSourceOf
    } = this.props;
    return (
      <StyledCodeView>
        {position === 'bottom' ? this.renderChildren() : null}
        {!exampleOnly && (
          <CodeBlock
            language="html"
            toggleCode={toggleCode}
            hideSourceOf={hideSourceOf}
          >
            {children}
          </CodeBlock>
        )}
        {position === 'top' ? this.renderChildren() : null}
      </StyledCodeView>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom']),
  style: PropTypes.string,
  isViewport: PropTypes.bool,
  isMobile: PropTypes.bool,
  toggleCode: PropTypes.bool,
  exampleOnly: PropTypes.bool,
  hideSourceOf: PropTypes.array
};

CodeView.defaultProps = {
  position: 'bottom'
};

export default CodeView;
