// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';
import style from './Margin.scss';
import classNames from 'classnames';
import { CodeBlock } from '../../../../shared/components/CodeView';

const Redline = props => (
  <span className="doc-redline" style={{ width: props.width }}>
    <span />
  </span>
);

class Margin extends Component {
  render() {
    let margin;
    let { size, position } = this.props;
    const sizes = {
      'xxx-small': '0.125rem',
      'xx-small': '0.25rem',
      'x-small': '0.5rem',
      small: '0.75rem',
      medium: '1rem',
      large: '1.5rem',
      'x-large': '2rem',
      'xx-large': '3rem'
    };
    let widths = JSON.stringify(sizes);
    JSON.parse(widths, (key, value) => {
      if (key === size) {
        margin = value;
      }
    });
    let spacingClass = `slds-m-${position}_${size}`;
    return (
      <div className="docs-codeblock">
        <div className="docs-codeblock-example">
          <div className={classNames('doc-spacing')}>
            <div
              className={classNames(
                'doc-margin doc-margin_primary',
                spacingClass
              )}
            />
          </div>
        </div>
        <div className="docs-codeblock-source">
          <pre className="language-html">
            <code className="language-html">
              {`<div class="${spacingClass}" />`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Margin;
