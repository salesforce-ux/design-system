// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../shared/svg-icon';
import { UtilityIcon } from '../icons/base/example';
import _ from '../../shared/helpers';

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
    role="img"
  />
);

export const IndicatorContainer = props => (
  <span className="slds-indicator-container">{props.children}</span>
);

IndicatorContainer.propTypes = {
  children: PropTypes.node
};

export const TabObjectIcon = props => (
  <span className="slds-icon_container" title={_.startCase(props.symbol)}>
    <SvgIcon
      className="slds-icon slds-icon_small slds-icon-text-default"
      sprite="standard"
      symbol={props.symbol}
    />
    <span className="slds-assistive-text">{_.startCase(props.symbol)}</span>
  </span>
);
TabObjectIcon.displayName = 'TabObjectIcon';
TabObjectIcon.propTypes = {
  symbol: PropTypes.string
};
TabObjectIcon.defaultProps = {
  symbol: 'case'
};

export const TabStatusLevelIcon = props => (
  <span className="slds-m-horizontal_xx-small">
    <UtilityIcon
      assistiveText={props.level}
      size="x-small"
      symbol={props.level}
      title={props.level}
      useCurrentColor={props.level === 'warning'}
    />
  </span>
);
TabStatusLevelIcon.displayName = 'TabWarningIcon';
TabStatusLevelIcon.propTypes = {
  level: PropTypes.oneOf(['error', 'success', 'warning']).isRequired
};

export const TabItemIconContainer = props => {
  return (
    <React.Fragment>
      {props.statusLevel ? (
        <TabStatusLevelIcon level={props.statusLevel} />
      ) : (
        <TabObjectIcon symbol={props.symbol} />
      )}
    </React.Fragment>
  );
};
TabItemIconContainer.displayName = 'TabItemIconContainer';
TabItemIconContainer.propTypes = {
  statusLevel: PropTypes.oneOf(['error', 'success', 'warning']),
  symbol: PropTypes.string
};
