import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';

const Alert = props => {
  const { type, children, isLegacy } = props;
  const alertTypeClass = classNames(
    type === 'warning' && 'slds-alert_warning',
    type === 'error' && 'slds-alert_error',
    type === 'offline' && 'slds-alert_offline'
  );
  const alertLegacyTypeClass = classNames(
    isLegacy && 'slds-theme_alert-texture',
    type === 'info' && isLegacy && 'slds-theme_info',
    type === 'warning' && isLegacy && 'slds-theme_warning',
    type === 'error' && isLegacy && 'slds-theme_error',
    type === 'offline' && isLegacy && 'slds-theme_offline'
  );

  return (
    <div
      className={classNames(
        'slds-notify slds-notify_alert',
        alertTypeClass,
        alertLegacyTypeClass
      )}
      role="alert"
    >
      <span className="slds-assistive-text">{type}</span>
      {children}
      <div className="slds-notify__close">
        <ButtonIcon
          className={classNames(
            type !== 'warning' && 'slds-button_icon-inverse'
          )}
          symbol="close"
          assistiveText="Close"
          title="Close"
          size="small"
        />
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'error', 'offline']),
  children: PropTypes.node,
  isLegacy: PropTypes.bool
};

Alert.defaultProps = {
  type: 'info'
};

export default Alert;
