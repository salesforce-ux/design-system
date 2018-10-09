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

export const IndicatorUnread = props => (
  <span
    aria-label="New Activity"
    className="slds-indicator_unread"
    title="New Activity"
  />
);

export const IndicatorContainer = props => (
  <span className="slds-indicator-container">{props.children}</span>
);

IndicatorContainer.propTypes = {
  children: PropTypes.node
};
