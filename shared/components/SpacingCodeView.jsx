// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CodeBlock from './CodeBlock';

// Used to showcase Margin and Padding docs without showing
// internal, doc-only styling classes
class SpacingCodeView extends Component {
  render() {
    let { position, size, type } = this.props;
    let typeName = type === 'p' ? 'padding' : 'margin';
    let spacingClass = `slds-${type}-${position}_${size}`;
    return (
      <div className="docs-codeblock">
        <div className="docs-codeblock-example">
          <div className="doc-spacing">
            <div
              className={classNames(
                `doc-${typeName}`,
                type === 'm' && 'doc-margin_content',
                spacingClass
              )}
            />
          </div>
        </div>
        <CodeBlock toggleCode={false}>
          <div className={`${spacingClass}`} />
        </CodeBlock>
      </div>
    );
  }
}

SpacingCodeView.propTypes = {
  position: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'vertical',
    'horizontal',
    'around'
  ]).isRequired,
  size: PropTypes.oneOf([
    'xxx-small',
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    'none'
  ]).isRequired,
  type: PropTypes.oneOf(['m', 'p']).isRequired
};

export default SpacingCodeView;
