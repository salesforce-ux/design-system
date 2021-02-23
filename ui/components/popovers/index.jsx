import React, { Children, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Popover } from './base-legacy/example';
import { FeedbackHeader } from './error/example';
import { createCustomPropType } from '../../shared/helpers';
import EmptyLink from '../../shared/empty-link/';

/**
 * Popover Content - Markup within the popover triggered by the button icon
 */
const PopoverContent = () => (
  <p>
    The flow has 1 error that must be fixed before you can save.{' '}
    <EmptyLink title="Learn More">Learn more.</EmptyLink>
  </p>
);

/**
 * Button Popover - Button that triggers a popover with focus trapping
 */
const PopoverExperience = ({
  activeError,
  assistiveText,
  children,
  isWarning,
  isError,
  parentCallback,
  parentCallbackData,
  size,
  title,
  type
}) => {
  /**
   * References
   *
   * buttonIconRef - References the button that triggers the popover
   * popoverRef - References popover triggered by button icon
   */
  const buttonIconRef = useRef();
  const popoverRef = useRef();

  /**
   * States
   *
   * alertPopoverOffset - Tracks the position of the popover relative to the button icon that triggered it
   * showPopover - Tracks if the popover should be visible or not
   * hasKeyboardAccess - Tracks if the popover was triggered by the keyboard
   */
  const [alertPopoverOffset, setAlertPopoverOffset] = useState();
  const [showPopover, setPopover] = useState(false);
  const [hasKeyboardAccess, setKeyboardAccess] = useState(false);

  /**
   * Handler for click event
   */
  const onClick = () => {
    showPopover ? onClose() : onOpen();
  };

  /**
   * Handler for opening the popup
   */
  const onOpen = () => {
    buttonIconRef.current.focus();
    setPopover(true);
  };

  /**
   * Handler for closing the popup
   */
  const onClose = () => {
    buttonIconRef.current.focus();
    setPopover(false);
    setKeyboardAccess(false);
    parentCallback(parentCallbackData);
  };

  /**
   * Handler for button icon losing focus
   */
  const onBlur = () => {
    if (!hasKeyboardAccess) {
      setPopover(false);
      parentCallback(parentCallbackData);
    }
  };

  /**
   * Handler for Esc key
   */
  const onEscKey = () => {
    if (showPopover) {
      onClose();
    }
  };

  /**
   * Focus Trapping
   */
  const onTabKey = e => {
    if (showPopover) {
      setKeyboardAccess(true);
      const focusableModalElements = popoverRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableModalElements[0];
      const lastElement =
        focusableModalElements[focusableModalElements.length - 1];
      if (!e.shiftKey && document.activeElement !== firstElement) {
        firstElement.focus();
        return e.preventDefault();
      }
      if (e.shiftKey && document.activeElement !== lastElement) {
        lastElement.focus();
        e.preventDefault();
      }
    }
  };

  /**
   * Side Effects - Listen for keystrokes for focus trapping
   */
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener('keydown', keyListener);
    return () => document.removeEventListener('keydown', keyListener);
  });
  const keyListenersMap = new Map([[27, onEscKey], [9, onTabKey]]);

  /**
   * Side Effects - Get positioning data corresponding to window
   */
  useEffect(() => {
    const { current } = buttonIconRef;
    const windowResize = () => {
      setAlertPopoverOffset({
        right: `${document.body.clientWidth -
          current.getBoundingClientRect().x -
          current.offsetWidth * 1.5 +
          6}px`,
        top: `${current.getBoundingClientRect().y +
          current.offsetHeight +
          window.scrollY +
          15}px`
      });
    };
    windowResize();
    window.addEventListener('resize', windowResize);
    return () => document.removeEventListener('resize', windowResize);
  }, []);

  /**
   * Side Effects - Adjust state from external components
   */
  useEffect(() => {
    if (activeError) {
      onOpen();
    }
  }, [activeError]);

  const computedStyles = {
    position: 'absolute',
    ...alertPopoverOffset
  };

  const headingId = uniqueId('example-unique-id-');

  return (
    <>
      {Children.only(children) &&
        React.cloneElement(children, {
          size: size,
          feedback: type,
          symbol: type,
          assistiveText: assistiveText,
          title: title,
          onClick: onClick,
          onBlur: onBlur,
          innerRef: buttonIconRef
        })}
      {showPopover &&
        ReactDOM.createPortal(
          <Popover
            isWarning={isWarning}
            isError={isError}
            headingId={headingId}
            style={computedStyles}
            onClose={onClose}
            header={
              <FeedbackHeader
                headingId={headingId}
                title={`Review ${type}`}
                symbol={type}
              />
            }
            closeButton
            iconDefault={type === 'warning'}
            inverse={type === 'error'}
            innerRef={popoverRef}
            nubbinPosition="top right"
          >
            <PopoverContent />
          </Popover>,
          document.body
        )}
    </>
  );
};

const activeErrorPropType = createCustomPropType(
  false,
  (props, propName, componentName) => {
    if (!props.isError && props[propName]) {
      return new Error('activeError must be used with an error popover');
    }
  }
);

const childrenPropType = createCustomPropType(
  true,
  (props, propName, componentName) => {
    const validInputs = ['Button', 'ButtonIcon'];
    React.Children.forEach(props[propName], child => {
      if (!validInputs.includes(child.type.name)) {
        throw new Error(
          `${componentName} child should be one of the type: ${validInputs.join(
            ', '
          )}`
        );
      }
    });
  }
);

PopoverExperience.propTypes = {
  activeError: activeErrorPropType,
  assistiveText: PropTypes.string,
  children: childrenPropType,
  isWarning: PropTypes.bool,
  isError: PropTypes.bool,
  parentCallback: PropTypes.func,
  parentCallbackData: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string
};

export default PopoverExperience;
