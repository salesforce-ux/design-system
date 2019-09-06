// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

class DocHeaderAnchor extends React.Component {
  constructor(props) {
    super(props);
    this.anchorRef = React.createRef();
  }

  componentDidMount() {
    // deep links to doc headers doesn't work like it should because doc blocks are loaded after the DOM
    // to get deep links to work, detect if the hash in the URL matches the id on the anchor
    // if so scroll to this anchor
    if (window.location.hash === `#${this.props.id}`)
      this.anchorRef.current.scrollIntoView(true);
  }

  render() {
    const { type, id } = this.props;
    return (
      <a
        ref={this.anchorRef}
        id={id}
        href={`#${id}`}
        aria-label="Jump to section"
        className="doc doc-anchor"
        data-level={type[1]}
        {...this.props}
      >
        #
      </a>
    );
  }
}

DocHeaderAnchor.propTypes = {
  is: PropTypes.string,
  type: PropTypes.array
};

export default DocHeaderAnchor;
