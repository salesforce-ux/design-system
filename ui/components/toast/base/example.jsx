// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Toast from '../';
import { UtilityIcon } from '../../icons/base/example';

export default [
  {
    id: 'default',
    label: 'Base - default',
    element: (
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
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    )
  }
];

export let states = [
  {
    id: 'success',
    label: 'Success (Theme Class)',
    element: (
      <Toast type="success" containerClassName="slds-is-relative">
        <UtilityIcon
          containerClassName="slds-m-right_small slds-no-flex slds-align-top"
          className="slds-icon_small"
          assistiveText={false}
          symbol="success"
        />
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small ">
            Account{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              ACME - 100
            </a>{' '}
            widgets was created.
          </h2>
        </div>
      </Toast>
    )
  },
  {
    id: 'warning',
    label: 'Warning (Theme Class)',
    element: (
      <Toast type="warning" containerClassName="slds-is-relative">
        <UtilityIcon
          containerClassName="slds-m-right_small slds-no-flex slds-align-top"
          className="slds-icon_small"
          assistiveText={false}
          symbol="warning"
        />
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small ">
            Can’t share file “report-q3.pdf” with the{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              selected users
            </a>
            .
          </h2>
        </div>
      </Toast>
    )
  },
  {
    id: 'error',
    label: 'Error (Theme Class)',
    element: (
      <Toast type="error" containerClassName="slds-is-relative">
        <UtilityIcon
          containerClassName="slds-m-right_small slds-no-flex slds-align-top"
          className="slds-icon_small"
          assistiveText={false}
          symbol="error"
        />
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small ">
            Can’t save lead “Sally Wong” because{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              another lead
            </a>{' '}
            has the same name.
          </h2>
        </div>
      </Toast>
    )
  },
  {
    id: 'error-with-details',
    label: 'Error With Details (Theme Class)',
    element: (
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
            Here's some detail of{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              what happened
            </a>
            , being very descriptive and transparent.
          </p>
        </div>
      </Toast>
    )
  }
];

export let examples = [
  {
    id: 'small',
    label: 'Small Column',
    demoStyles: 'width: 25rem',
    storybookStyles: true,
    element: (
      <div className="slds-region_narrow">
        <Toast type="info" containerClassName="slds-is-relative">
          <div className="slds-notify__content">
            <h2 className="slds-text-heading_small">
              26 potential{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                duplicate leads
              </a>{' '}
              were found.
            </h2>
          </div>
        </Toast>
      </div>
    )
  }
];
