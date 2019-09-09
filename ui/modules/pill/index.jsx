import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import ButtonIcon from '../button-icon';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import pill from './base/index.scss';

const Pill = props => {
  const { variant, children, use, shadow, customization } = props;

  const css = rollupAdoptedStylesheets([common, pill, customization]);

  const variantClassName = {
    'lwc-pill_has-error': variant === 'error'
  };

  const computedClassNames = classNames(variantClassName);

  const renderStartMedia = () => {
    if (!props.startIcon && !props.startAvatar) return;
    if (variant === 'error') {
      return (
        <span className="lwc-pill__media">
          <Icon
            symbol="error"
            size="xx-small"
            boundarySize="x-small"
            color="error"
            assistiveText="Error"
          />
        </span>
      );
    } else if (props.startIcon) {
      return <span className="lwc-pill__media">{props.startIcon}</span>;
    } else if (props.startAvatar) {
      return <span className="lwc-pill__media">{props.startAvatar}</span>;
    }
  };

  const renderDismiss = () => {
    return (
      <span class="lwc-pill__remove">
        <ButtonIcon
          symbol="close"
          size="xx-small"
          onClick="REMOVE"
          assistiveText="Remove"
        />
      </span>
    );
  };

  return (
    <Shadow.on name="pill" includes={css} shadow={shadow}>
      <React.Fragment>
        <span className={classNames('lwc-pill', computedClassNames)}>
          {renderStartMedia()}
          {use === 'link' ? (
            <a className="lwc-pill__action" href="{props.url}">
              <span class="lwc-pill__label">{children}</span>
            </a>
          ) : (
            <span class="lwc-pill__label">{children}</span>
          )}
          {renderDismiss()}
        </span>
      </React.Fragment>
    </Shadow.on>
  );
};

Pill.propTypes = {
  // Slots
  children: PropTypes.node,
  // Attributes
  startIcon: PropTypes.node,
  startAvatar: PropTypes.node,
  use: PropTypes.oneOf(['link', 'span']),
  variant: PropTypes.oneOf(['error'])
};

Pill.defaultProps = {
  use: 'pill'
};

export default Pill;
