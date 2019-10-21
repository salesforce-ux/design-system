import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import badge from './base/index.scss';

const Badge = ({
  isInverse,
  isReverse,
  isPositive,
  isNegative,
  isWarning,
  label,
  icon,
  assistiveText,
  shadow,
  customization
}) => {
  const css = rollupAdoptedStylesheets([common, badge, customization]);

  const computedClassNames = classNames('lwc-badge', {
    'lwc-badge_inverse': isInverse,
    'lwc-badge_reverse': isReverse,
    'lwc-badge_positive': isPositive,
    'lwc-badge_negative': isNegative,
    'lwc-badge_warning': isWarning,
    'lwc-badge_icon': assistiveText
  });

  return (
    <Shadow.on name="badge" includes={css} shadow={shadow}>
      <span className={computedClassNames}>
        {icon && (
          <Icon size="x-small" symbol={icon} assistiveText={assistiveText} />
        )}
        {label && <span className="lwc-badge__content">{label}</span>}
      </span>
    </Shadow.on>
  );
};

Badge.propTypes = {
  isInverse: PropTypes.bool,
  isReverse: PropTypes.bool,
  isPositive: PropTypes.bool,
  isNegative: PropTypes.bool,
  isWarning: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string,
  assistiveText: function(props, propName) {
    if (
      !props['label'].length > 0 &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error('Please provide assistive text');
    }
  },
  shadow: PropTypes.bool
};

export default Badge;
