import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Badge = props => (
  <span
    className={classNames('slds-badge', {
      'slds-badge_inverse': props.isInverse,
      'slds-badge_lightest': props.isLightest
    })}
  >
    {props.children}
  </span>
);

Badge.propTypes = {
  isInverse: PropTypes.bool,
  isLightest: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const InverseBadge = props => <Badge isInverse>{props.children}</Badge>;

InverseBadge.propTypes = {
  children: PropTypes.node.isRequired
};

export const LightestBadge = props => (
  <Badge isLightest>{props.children}</Badge>
);

LightestBadge.propTypes = {
  children: PropTypes.node.isRequired
};
