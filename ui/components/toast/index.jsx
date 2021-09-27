import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonIcon from '../button-icons/';

const Toast = props => {
  const { containerClassName, className, type, children } = props;

  return (
    <div className={classNames('slds-notify_container', containerClassName)}>
      <div
        className={classNames(
          'slds-notify slds-notify_toast',
          className,
          type && 'slds-theme_' + type
        )}
        role="status"
      >
        <span className="slds-assistive-text">{type}</span>
        {children}
        <div className="slds-notify__close">
          <ButtonIcon
            className="slds-button_icon-inverse"
            iconClassName="slds-button__icon_large"
            symbol="close"
            assistiveText="Close"
            title="Close"
          />
        </div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  children: PropTypes.node
};

Toast.defaultProps = {
  type: 'info'
};

export default Toast;
