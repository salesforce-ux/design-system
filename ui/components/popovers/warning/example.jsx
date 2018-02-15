// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Popover } from '../base/example';
import { FeedbackHeader, FeedbackFooter } from '../error/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Popover
    className="slds-popover_warning slds-nubbin_bottom-left"
    headingId={headingUniqueId}
    bodyClassName="slds-popover_warning__body"
    header={
      <FeedbackHeader
        headingId={headingUniqueId}
        title="Review warning"
        symbol="warning"
        iconDefault
      />
    }
    closeButton
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.{' '}
      <a href="javascript:void(0);" title="Learn More">
        Learn More
      </a>
    </p>
  </Popover>
);

export let examples = [
  {
    id: 'with-footer',
    label: 'With Footer',
    element: (
      <Popover
        className="slds-popover_warning slds-nubbin_bottom-left"
        bodyClassName="slds-popover_warning__body"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="Review warning"
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
          <a href="javascript:void(0);" title="Learn More">
            Learn More
          </a>
        </p>
      </Popover>
    )
  }
];
