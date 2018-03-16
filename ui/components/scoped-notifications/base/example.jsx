// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export const ScopedNoti = props => (
  <div
    className={classNames(
      'slds-scoped-notification slds-media slds-media_center',
      props.className
    )}
    role="status"
  >
    <div className="slds-media__figure">
      <UtilityIcon
        title="information"
        className={classNames('slds-icon_small', props.iconClassName)}
        assistiveText="information"
        symbol="info"
      />
    </div>
    <div className="slds-media__body">
      <p>
        It looks as if duplicates exist for this lead.{' '}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <ScopedNoti iconClassName="slds-icon-text-default" />;

export let examples = [
  {
    id: 'light-theme',
    label: 'Light Theme',
    element: (
      <ScopedNoti
        className="slds-scoped-notification_light"
        iconClassName="slds-icon-text-default"
      />
    )
  },
  {
    id: 'dark-theme',
    label: 'Dark theme',
    element: <ScopedNoti className="slds-scoped-notification_dark" />
  }
];
