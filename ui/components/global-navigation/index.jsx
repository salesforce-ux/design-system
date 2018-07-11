// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';

// Shared components for Global Nav and Tabs -> Subtabs
export const IndicatorUnsaved = props => (
  <abbr
    className="slds-indicator_unsaved"
    title={props.title || 'Tab Not Saved'}
    aria-label={props.title || 'Tab Not Saved'}
  >
    *
  </abbr>
);

IndicatorUnsaved.propTypes = {
  title: PropTypes.string
};

export const IndicatorUnread = props => {
  let assistiveTextContent;
  if (props.tabType === 'menuItem') {
    assistiveTextContent = 'New Activity';
  } else if (props.tabType === 'overflow') {
    assistiveTextContent = 'New Tab activity within More Tabs menu';
  } else if (props.tabType === 'main') {
    assistiveTextContent = `New activity in Tab: ${props.tabName}`;
  }
  return (
    <span
      aria-label={
        props.tabType === 'main' || props.tabType === 'overflow'
          ? 'New Activity'
          : null
      }
      className="slds-indicator_unread"
      role={
        props.tabType === 'main' || props.tabType === 'overflow'
          ? 'alert'
          : null
      }
      title="New Activity"
    >
      <span className="slds-assistive-text">{assistiveTextContent}</span>
    </span>
  );
};

// If tab type is main, you must supply a tab name for the assistive text
IndicatorUnread.propTypes = {
  tabType: PropTypes.oneOf(['main', 'overflow', 'menuItem']),
  tabName: function(props, propName) {
    if (
      props['tabType'] === 'main' &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        'Please provide a tab name as a string for any main navigation tabs!'
      );
    }
  }
};

export const IndicatorContainer = props => (
  <span className="slds-indicator-container">{props.children}</span>
);

IndicatorContainer.propTypes = {
  children: PropTypes.node
};
