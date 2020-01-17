import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import progressBar from './base/index.scss';

export default class ProgressBar extends Component {
  render() {
    const {
      currentValue,
      customization,
      isSuccess,
      isVertical,
      size,
      shape,
      shadow,
      showSource,
      hideSourceOf
    } = this.props;

    const css = rollupAdoptedStylesheets([common, progressBar, customization]);

    const computedClassNames = classNames('lwc-progress-bar', {
      'lwc-progress-bar_vertical': isVertical,
      [`lwc-progress-bar_${size}`]: size,
      [`lwc-progress-bar_${shape}`]: shape
    });

    const computedBarValueClassNames = classNames('lwc-progress-bar__value', {
      'lwc-progress-bar__value_success': isSuccess
    });

    return (
      <Shadow.on
        name="progress-bar"
        includes={css}
        shadow={shadow}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        <div
          className={computedClassNames}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={currentValue}
          role="progressbar"
        >
          <span
            className={computedBarValueClassNames}
            style={{ [`--lwc-progress-bar-value`]: `${currentValue}%` }}
          >
            <span className="lwc-assistive-text">Progress: 25%</span>
          </span>
        </div>
      </Shadow.on>
    );
  }
}

ProgressBar.propTypes = {
  currentValue: PropTypes.number,
  // Controls the size of the progress bar, value maps to modifier class name
  size: PropTypes.oneOf(['large', 'small', 'medium', 'x-small']),
  shape: PropTypes.oneOf(['base', 'circular']),
  // Shadow
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};
