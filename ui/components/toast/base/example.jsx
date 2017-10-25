// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

export let Toast = props => {
  const { containerClassName, className, type, children, ...rest } = props;

  return (
    <div className={classNames('slds-notify_container', containerClassName)}>
      <div
        className={classNames(
          'slds-notify slds-notify_toast',
          className,
          type ? 'slds-theme_' + type : null
        )}
        role="alert"
      >
        <span className="slds-assistive-text">{type || 'info'}</span>
        {children}
        <ButtonIcon
          className="slds-notify__close slds-button_icon-inverse"
          iconClassName="slds-button__icon_large"
          symbol="close"
          assistiveText="Close"
          title="Close"
        />
      </div>
    </div>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '4rem' }}>
    <Toast type="info" containerClassName="slds-is-relative">
      <UtilityIcon
        containerClassName="slds-m-right_small slds-no-flex slds-align-top"
        className="slds-icon_small"
        assistiveText={false}
        symbol="info"
      />
      <div className="slds-notify__content">
        <h2 className="slds-text-heading_small">
          26 potential duplicate leads were found.{' '}
          <a href="javascript:void(0);">Select Leads to Merge</a>
        </h2>
      </div>
    </Toast>
  </div>
);

export let states = [
  {
    id: 'success',
    label: 'Success',
    element: (
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="success" containerClassName="slds-is-relative">
          <UtilityIcon
            containerClassName="slds-m-right_small slds-no-flex slds-align-top"
            className="slds-icon_small"
            assistiveText={false}
            symbol="success"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading_small ">
              Account <a href="javascript:void(0);">ACME - 100</a> widgets was
              created.
            </h2>
          </div>
        </Toast>
      </div>
    )
  },
  {
    id: 'warning',
    label: 'Warning',
    element: (
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="warning" containerClassName="slds-is-relative">
          <UtilityIcon
            containerClassName="slds-m-right_small slds-no-flex slds-align-top"
            className="slds-icon_small"
            assistiveText={false}
            symbol="warning"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading_small ">
              Can’t share file “report-q3.pdf” with the selected users.
            </h2>
          </div>
        </Toast>
      </div>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="error" containerClassName="slds-is-relative">
          <UtilityIcon
            containerClassName="slds-m-right_small slds-no-flex slds-align-top"
            className="slds-icon_small"
            assistiveText={false}
            symbol="error"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading_small ">
              Can’t save lead “Sally Wong” because another lead has the same
              name.
            </h2>
          </div>
        </Toast>
      </div>
    )
  },
  {
    id: 'error-with-details',
    label: 'Error With Details',
    element: (
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="error" containerClassName="slds-is-relative">
          <UtilityIcon
            containerClassName="slds-m-right_small slds-no-flex slds-align-top"
            className="slds-icon_small"
            assistiveText={false}
            symbol="error"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading_small">
              You've encountered some errors when trying to save edits to Samuel
              Smith.
            </h2>
            <p>
              Here's some detail of what happened, being very descriptive and
              transparent.
            </p>
          </div>
        </Toast>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'small',
    label: 'Small Column',
    element: (
      <div className="demo-only" style={{ height: '4rem', width: '25rem' }}>
        <div className="slds-region_narrow slds-is-relative">
          <Toast type="info" containerClassName="slds-is-absolute">
            <div className="slds-notify__content">
              <h2 className="slds-text-heading_small">
                26 potential duplicate leads were found.
              </h2>
            </div>
          </Toast>
        </div>
      </div>
    )
  }
];
