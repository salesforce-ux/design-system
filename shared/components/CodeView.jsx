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
      exampleOnly,
      frameOnly,
      frameStyles,
      hideDeviceSelector
    } = this.props;

    let content = (
      <React.Fragment>
        {position === 'bottom' ? this.renderChildren() : null}
        {!exampleOnly && (
          <CodeBlock language="html" toggleCode={toggleCode}>
            {this.props.children}
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
        >
          {this.props.children}
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
  hideDeviceSelector: PropTypes.bool
};

CodeView.defaultProps = {
  position: 'bottom',
  frameOnly: false
};

export default CodeView;
