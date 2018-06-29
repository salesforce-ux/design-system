// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import './Margin.scss';
import classNames from 'classnames';
import CodeBlock from '../../../../shared/components/CodeBlock';

class Margin extends Component {
  render() {
    let { size, position } = this.props;
    let spacingClass = `slds-m-${position}_${size}`;
    return (
      <div className="docs-codeblock">
        <div className="docs-codeblock-example">
          <div className="doc-spacing">
            <div
              className={classNames(
                'doc-margin doc-margin_primary',
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

export default Margin;
