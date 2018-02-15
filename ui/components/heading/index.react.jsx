// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import _ from '../../shared/helpers';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Truncate from '../../shared/truncate/index.react.jsx';

class LabelHeading extends React.Component {
  render() {
    const className = classNames('slds-text-title_caps', this.props.className);
    return (
      <p {...this.props} className={className}>
        {this.props.children}
      </p>
    );
  }
}

class MediumHeading extends React.Component {
  render() {
    const className = classNames(
      'slds-text-heading_medium',
      this.props.className
    );
    return (
      <h1 {...this.props} className={className}>
        {this.props.children}
      </h1>
    );
  }
}

class Heading extends React.Component {
  render() {
    const props = _.omit(this.props, 'flavor');
    const Tag = this.props.flavor === 'medium' ? MediumHeading : LabelHeading;
    return <Tag {...props}>{this.props.children}</Tag>;
  }
}

Heading.propTypes = {
  flavor: PropTypes.oneOf(['label', 'medium']),
  truncate: PropTypes.number
};

Heading.defaultProps = { flavor: 'label' };

export default Heading;
