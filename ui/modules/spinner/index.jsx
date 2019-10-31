import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import spinner from './base/index.scss';

const SpinnerDot = props => (
  <div className={`lwc-spinner__dot lwc-spinner__dot-${props.order}`} />
);

SpinnerDot.propTypes = {
  order: PropTypes.string
};

const SpinnerContainer = props => {
  const { children, isHidden, isInvisible, position } = props;

  return (
    <div
      className={classNames('lwc-spinner_container', {
        'lwc-spinner_hidden': isHidden,
        'lwc-spinner_invisible': isInvisible,
        [`lwc-spinner_${position}`]: position
      })}
    >
      {children}
    </div>
  );
};

SpinnerContainer.propTypes = {
  children: PropTypes.node,
  isHidden: PropTypes.bool,
  isInvisible: PropTypes.bool,
  // Controls the position of the spinner, value maps to modifier class name
  position: PropTypes.oneOf(['fixed', 'relative', 'absolute'])
};

export default class Spinner extends Component {
  render() {
    const {
      color,
      customization,
      hasContainer,
      isDelayed,
      isHidden,
      isInvisible,
      position,
      size,
      shadow,
      showSource,
      hideSourceOf
    } = this.props;

    const css = rollupAdoptedStylesheets([common, spinner, customization]);

    const SpinnerContents = props => {
      const computedClassNames = classNames('lwc-spinner', {
        'lwc-spinner_delayed': isDelayed,
        'lwc-spinner_hidden': isHidden && !hasContainer,
        'lwc-spinner_invisible': isInvisible && !hasContainer,
        [`lwc-spinner_${position}`]: position && !hasContainer,
        [`lwc-spinner_${size}`]: size,
        [`lwc-spinner_${color}`]: color
      });

      return (
        <div role="status" className={computedClassNames}>
          <span className="lwc-assistive-text">Loading</span>
          {[...Array(6)].map((_, i) => (
            <SpinnerDot key={`spinner-dot-${i + 1}`} order={`${i + 1}`} />
          ))}
        </div>
      );
    };

    return (
      <Shadow.on
        name="spinner"
        includes={css}
        shadow={shadow}
        showSource={showSource}
        hideSourceOf={hideSourceOf}
      >
        {hasContainer ? (
          <SpinnerContainer position={position} isHidden={isHidden}>
            <SpinnerContents />
          </SpinnerContainer>
        ) : (
          <SpinnerContents />
        )}
      </Shadow.on>
    );
  }
}

Spinner.propTypes = {
  hasContainer: PropTypes.bool,
  isDelayed: PropTypes.bool,
  isHidden: PropTypes.bool,
  // Controls the size of the spinner, value maps to modifier class name
  size: PropTypes.oneOf(['large', 'small', 'medium', 'x-small', 'xx-small']),
  // Controls the position of the spinner, value maps to modifier class name
  position: PropTypes.oneOf(['fixed', 'relative', 'absolute']),
  // Controls the color of the spinner, value maps to modifier class name
  color: PropTypes.oneOf(['brand', 'inverse']),
  // Shadow
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array
};
