// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

class MobileFrame extends React.Component {
  render() {
    const styles = {
      overflow: 'hidden',
      height: '812px',
      width: '375px',
      border: 'none'
    };

    const content = ReactDOMServer.renderToString(this._renderIframe());

    return (
      <iframe
        className="docs-mobile_iframe"
        title="Mobile frame/container used for testing purposes"
        style={styles}
        srcDoc={content}
      />
    );
  }

  _renderIframe() {
    const { children } = this.props;

    return (
      <html lang="en" style={{ backgroundColor: 'transparent' }}>
        <head>
          <link
            type="text/css"
            rel="stylesheet"
            href="/assets/styles/slds-small.css" // small form factor version
          />
        </head>
        <body>{children}</body>
      </html>
    );
  }
}

MobileFrame.propTypes = {
  children: PropTypes.node
};

export default MobileFrame;
