import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Shadow from '../../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import eq from './index.scss';

const Eq = ({ iconDescription, assistiveText, shadow, customization }) => {
  const css = rollupAdoptedStylesheets([common, eq, customization]);

  const computedClassNames = classNames('lwc-icon-eq');

  return (
    <Shadow.on name="icon-eq" includes={css} shadow={shadow}>
      <div className={classNames(computedClassNames)} title={iconDescription}>
        <svg>
          <rect className="lwc-icon-eq__bar" />
          <rect className="lwc-icon-eq__bar" />
          <rect className="lwc-icon-eq__bar" />
        </svg>
        <span className="lwc-assistive-text">{assistiveText}</span>
      </div>
    </Shadow.on>
  );
};

Eq.defaultProps = {
  iconDescription: 'Description of the icon when needed',
  assistiveText: 'Text alternative when needed'
};

Eq.propTypes = {
  customization: PropTypes.any,
  iconDescription: PropTypes.string.isRequired,
  assistiveText: PropTypes.string.isRequired,
  shadow: PropTypes.bool
};

export default Eq;
