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
    media,
    iconSprite,
    iconSymbol,
    iconAssistiveText,
    actionUrl,
    children,
    shadow,
    showSource,
    hideSourceOf,
    customization
  } = props;

  const css = rollupAdoptedStylesheets([common, pill, customization]);

  const variantClassName = {
    'lwc-pill_has-error': variant === 'error'
  };

  const renderMedia = () => {
    if (!media && variant !== 'error') return;
    if (variant === 'error') {
      return (
        <span className="lwc-pill__media">
          <Icon
            symbol="error"
            color="error"
            assistiveText="Warning"
            showSource={showSource}
            hideSourceOf={hideSourceOf}
          />
        </span>
      );
    } else if (media === 'icon') {
      return (
        <span className="lwc-pill__media">
          <Icon
            sprite={iconSprite}
            symbol={iconSymbol}
            assistiveText={iconAssistiveText}
            showSource={showSource}
            hideSourceOf={hideSourceOf}
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
          assistiveText="Remove"
          showSource={showSource}
          hideSourceOf={hideSourceOf}
        />
      </span>
    );
  };

  const renderText = () =>
    actionUrl ? (
      <a className="lwc-pill__action" href={actionUrl} title={children}>
        <span className="lwc-pill__label">{children}</span>
      </a>
    ) : (
      <span className="lwc-pill__label">{children}</span>
    );
  return (
    <Shadow.on
      name="pill"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    >
      <React.Fragment>
        <span className={classNames('lwc-pill', variantClassName)}>
          {renderMedia()}
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
  media: PropTypes.oneOf(['icon']),
  variant: PropTypes.oneOf(['error']),
  iconSprite: PropTypes.string,
  iconSymbol: PropTypes.string,
  iconAssistiveText: PropTypes.string,
  actionUrl: PropTypes.string,
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array,
  customization: PropTypes.node
};

Pill.defaultProps = {
  iconSprite: 'utility',
  iconSymbol: 'add',
  iconAssistiveText: 'Add'
};

export default Pill;
