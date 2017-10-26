// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TableOfContents extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ul className="doc doc-toc">
        {data.map((item, index) => (
          <li className="doc" key={index}>
            <a className="doc" href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

TableOfContents.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableOfContents;
