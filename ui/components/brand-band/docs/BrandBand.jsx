// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import Page, { BrandBand } from '../';
import ReactDOM from 'react-dom/server';

class BrandBandExample extends Component {
  render() {
    return (
      <div>
        <div className="docs-codeblock-example">
          <Page {...this.props} />
        </div>
        <div className="docs-codeblock-source">
          <pre className="language-html">
            <code>
              {ReactDOM.renderToStaticMarkup(<BrandBand {...this.props} />)}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default BrandBandExample;
