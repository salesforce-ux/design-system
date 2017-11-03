// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import Page, { BrandBand } from '../';
import CodeBlock from '../../../../shared/components/CodeBlock';

class BrandBandExample extends Component {
  render() {
    return (
      <div>
        <div className="docs-codeblock-example">
          <Page {...this.props} />
        </div>
        <CodeBlock toggleCode={false}>
          <BrandBand {...this.props} />
        </CodeBlock>
      </div>
    );
  }
}

export default BrandBandExample;
