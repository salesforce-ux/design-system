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
  const {
    variant,
    startMedia,
    iconSprite,
    iconSymbol,
    iconSize,
    iconBoundarySize,
    iconAssistiveText,
    actionUrl,
    children,
    shadow,
    customization
  } = props;

  const css = rollupAdoptedStylesheets([common, pill, customization]);

  const variantClassName = {
    'lwc-pill_has-error': variant === 'error'
  };

  const computedClassNames = classNames(variantClassName);

  const renderStartMedia = () => {
    if (!startMedia && variant !== 'error') return;
    if (variant === 'error') {
      return (
        <span className="lwc-pill__media">
          <Icon
            symbol="error"
            color="error"
            size="small"
            assistiveText="Warning"
          />
        </span>
      );
    } else if (startMedia === 'icon') {
      return (
        <span className="lwc-pill__media">
          <Icon
            size={iconSize}
            boundarySize={iconBoundarySize}
            sprite={iconSprite}
            symbol={iconSymbol}
            assistiveText={iconAssistiveText}
          />
        </span>
      );
    }
  };

  const renderDismiss = () => {
    return (
      <span className="lwc-pill__remove">
        <ButtonIcon
          symbol="close"
          size="x-small"
          boundarySize="xx-small"
          assistiveText="Remove"
        />
      </span>
    );
  };

  const renderText = () => {
    if (actionUrl) {
      return (
        <a className="lwc-pill__action" href={actionUrl} title={children}>
          <span className="lwc-pill__label">{children}</span>
        </a>
      );
    } else {
      return <span className="lwc-pill__label">{children}</span>;
    }
  };

  return (
    <Shadow.on name="pill" includes={css} shadow={shadow}>
      <React.Fragment>
        <span className={classNames('lwc-pill', computedClassNames)}>
          {renderStartMedia()}
          {renderText()}
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
  startMedia: PropTypes.oneOf(['icon']),
  variant: PropTypes.oneOf(['error']),
  iconSprite: PropTypes.string,
  iconSymbol: PropTypes.string,
  iconSize: PropTypes.string,
  iconBoundarySize: PropTypes.string,
  iconAssistiveText: PropTypes.string,
  actionUrl: PropTypes.string,
  shadow: PropTypes.bool,
  customization: PropTypes.node
};

Pill.defaultProps = {
  iconSprite: 'utility',
  iconSymbol: 'add',
  iconAssistiveText: 'Add'
};

export default Pill;
