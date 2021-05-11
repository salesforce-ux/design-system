// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import StyledDemo from './StyledDemo';
import classNames from 'classnames';

import '../styles/doc.scss';
import SLDSFrame from './SLDSFrame';

class CodeView extends React.Component {
  renderChildren() {
    const { demoStyles, isViewport, isMobile } = this.props;

    // 2021.05.04 [FB] – handle default examples that have metadata without modifying existing MDX files
    let children = this.props.children;

    if (Array.isArray(this.props.children)) {
      children = this.props.children[0].element;
    }

    return (
      <div
        className={classNames('docs-codeblock-example', {
          'docs-codeblock-example_viewport': isViewport,
          'docs-codeblock-example_mobile': isMobile
        })}
      >
        {demoStyles ? (
          <StyledDemo
            className={classNames({
              'demo-only_viewport': isViewport,
              'slds-is-mobile': isMobile
            })}
            styles={demoStyles}
          >
            {children}
          </StyledDemo>
        ) : (
          children
        )}
      </div>
    );
  }

  render() {
    const {
      position,
      toggleCode,
      exampleOnly,
      frameOnly,
      frameStyles,
      frameTitle,
      hideDeviceSelector
    } = this.props;

    // 2021.05.04 [FB] – handle default examples that have metadata without modifying existing MDX files
    let children = this.props.children;

    if (Array.isArray(this.props.children)) {
      children = this.props.children[0].element;
    }

    let content = (
      <React.Fragment>
        {position === 'bottom' ? this.renderChildren() : null}
        {!exampleOnly && (
          <CodeBlock language="html" toggleCode={toggleCode}>
            {children}
          </CodeBlock>
        )}
        {position === 'top' ? this.renderChildren() : null}
      </React.Fragment>
    );

    if (frameOnly) {
      content = (
        <SLDSFrame
          hideDeviceSelector={hideDeviceSelector}
          frameStyles={frameStyles}
          frameTitle={frameTitle || 'Example mobile styles'}
        >
          {children}
        </SLDSFrame>
      );
    }

    return (
      <div
        className={classNames('docs-codeblock', {
          'docs-codeblock_frame': frameOnly
        })}
      >
        {content}
      </div>
    );
  }
}

CodeView.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom']),
  demoStyles: PropTypes.string,
  isViewport: PropTypes.bool,
  isMobile: PropTypes.bool,
  toggleCode: PropTypes.bool,
  exampleOnly: PropTypes.bool,
  frameOnly: PropTypes.bool,
  frameStyles: PropTypes.object,
  frameTitle: PropTypes.string,
  hideDeviceSelector: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom',
  frameOnly: false
};

export default CodeView;
