// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { Popover } from '../base/example';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

export const FeedbackHeader = props => (
  <header className={classNames('slds-popover__header')}>
    <div className="slds-media slds-media_center slds-has-flexi-truncate ">
      {props.symbol ? (
        <div className="slds-media__figure">
          <UtilityIcon
            className={classNames('slds-icon_x-small', {
              'slds-icon-text-default': props.iconDefault
            })}
            symbol={props.symbol}
            title={false}
            assistiveText={false}
          />
        </div>
      ) : null}
      <div className="slds-media__body">
        <h2
          className="slds-truncate slds-text-heading_medium"
          id={props.headingId}
          title={props.title || 'Title'}
        >
          {props.title}
        </h2>
      </div>
    </div>
  </header>
);

export let FeedbackFooter = props => (
  <div className="slds-grid slds-grid_vertical-align-center">
    <p>Footer Item</p>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Popover
    className="slds-popover_error slds-nubbin_bottom-left"
    headingId={headingUniqueId}
    header={
      <FeedbackHeader
        headingId={headingUniqueId}
        title="Resolve error"
        symbol="error"
      />
    }
    closeButton
    inverse
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
        className="slds-popover_error slds-nubbin_bottom-left"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="Resolve error"
            symbol="error"
          />
        }
        footer={<FeedbackFooter />}
        closeButton
        inverse
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
