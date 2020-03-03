import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UtilityIcon } from '../icons/base/example';

export const Badge = props => (
  <span
    className={classNames('slds-badge', {
      'slds-badge_inverse': props.isInverse,
      'slds-badge_lightest': props.isLightest,
      'slds-theme_success': props.isSuccess,
      'slds-theme_warning': props.isWarning,
      'slds-theme_error': props.isError
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

export const BadgeIcon = props => {
  const { assistiveText, align, isInverse, symbol } = props;
  return (
    <span
      className={classNames('slds-badge__icon', `slds-badge__icon_${align}`, {
        'slds-badge__icon_inverse': isInverse
      })}
    >
      <UtilityIcon
        className="slds-icon_xx-small"
        useCurrentColor
        assistiveText={assistiveText || false}
        symbol={symbol}
      />
    </span>
  );
};

BadgeIcon.propTypes = {
  symbol: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  isInverse: PropTypes.bool,
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

BadgeIcon.defaultProps = {
  align: 'left'
};
