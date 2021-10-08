// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Popover } from '../base-legacy/example';
import { FeedbackHeader, FeedbackFooter } from '../error/example';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Warning',
    id: 'warning-default',
    label: 'Warning – default',
    element: (
      <Popover
        className="slds-popover_warning slds-nubbin_bottom-left"
        headingId={headingUniqueId}
        bodyClassName="slds-popover_warning__body"
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="Just a heads up&hellip;"
            symbol="warning"
            iconDefault
          />
        }
        closeButton
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.{' '}
          <a href="#" onClick={e => e.preventDefault()} title="Learn More">
            Learn More
          </a>
        </p>
      </Popover>
    )
  }
];

export let examples = [
  {
    context: 'Warning',
    id: 'with-top-nubbin',
    label: 'Warning With Top Nubbin',
    element: (
      <Popover
        className="slds-popover_warning slds-nubbin_top"
        bodyClassName="slds-popover_warning__body"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="Just a heads up&hellip;"
            symbol="warning"
            iconDefault
          />
        }
        closeButton
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.{' '}
          <a href="#" onClick={e => e.preventDefault()} title="Learn More">
            Learn More
          </a>
        </p>
      </Popover>
    )
  },
  {
    context: 'Warning',
    id: 'with-footer',
    label: 'Warning With Footer',
    element: (
      <Popover
        className="slds-popover_warning slds-nubbin_bottom-left"
        bodyClassName="slds-popover_warning__body"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="Just a heads up&hellip;"
            symbol="warning"
            iconDefault
          />
        }
        footer={<FeedbackFooter />}
        closeButton
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.{' '}
          <a href="#" onClick={e => e.preventDefault()} title="Learn More">
            Learn More
          </a>
        </p>
      </Popover>
    )
  }
];
