import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import label from './base/index.scss';

const Label = props => {
  const {
    customization,
    shadow,
    showSource,
    hideSourceOf,
    id,
    labelText,
    isRequired,
    labelId,
    isStatic,
    hasLabel
  } = props;

  const css = rollupAdoptedStylesheets([common, label, customization]);
  const labelClasses = classNames('lwc-label', {
    'lwc-assistive-text': hasLabel === false
  });

  return (
    // If this could be a custom element *without* Shadow DOM, it would be ideal
    <Shadow.on
      name="label"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    >
      {isStatic ? (
        <span className="lwc-label">{labelText}</span>
      ) : (
        <label className={labelClasses} htmlFor={id} id={labelId}>
          <Fragment>
            {isRequired && (
              <abbr className="lwc-label_required" title="Required">
                *
              </abbr>
            )}
            {labelText}
          </Fragment>
        </label>
      )}
      {/* Tooltip Icon */}
    </Shadow.on>
  );
};

Label.propTypes = {
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array,
  customization: PropTypes.node,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  isRequired: PropTypes.bool,
  labelId: PropTypes.string,
  isStatic: PropTypes.bool,
  hasLabel: PropTypes.bool
};

Label.defaultProps = {
  hasLabel: true
};

export default Label;
