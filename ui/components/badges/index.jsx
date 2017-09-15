import React from 'react';
import classNames from 'classnames';

export const BaseBadge = props => (
  <span className={classNames('slds-badge', props.className)}>
    {props.children}
  </span>
);

export const Badge = BaseBadge;

export const InverseBadge = props => (
  <Badge className="slds-badge_inverse">{props.children}</Badge>
);

export const LightBadge = props => (
  <Badge className="slds-badge_lightest">{props.children}</Badge>
);
