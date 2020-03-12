import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import ellie from './index.scss';

export const Ellie = ({
  isPaused,
  isStatic,
  iconDescription,
  assistiveText,
  shadow,
  customization
}) => {
  const css = rollupAdoptedStylesheets([common, ellie, customization]);

  const computedClassNames = classNames('lwc-icon-ellie', {
    'lwc-is-paused': isPaused,
    'lwc-is-static': isStatic
  });

  return (
    <Shadow.on name="icon-ellie" includes={css} shadow={shadow}>
      <span className={classNames(computedClassNames)} title={iconDescription}>
        <svg viewBox={`0 0 14 14`} aria-hidden="true">
          <circle className="lwc-icon-ellie_circle-outer" cx="7" cy="7" r="4" />
          <circle className="lwc-icon-ellie_circle-inner" cx="7" cy="7" r="3" />
        </svg>
        <span className="lwc-assistive-text">{assistiveText}</span>
      </span>
    </Shadow.on>
  );
};

Ellie.propTypes = {
  customization: PropTypes.any,
  isStatic: PropTypes.bool,
  isPaused: PropTypes.bool,
  iconDescription: PropTypes.string,
  assistiveText: PropTypes.string,
  shadow: PropTypes.bool
};

Ellie.defaultProps = {
  iconDescription: 'Description of the icon',
  assistiveText: 'Text alternative'
};
