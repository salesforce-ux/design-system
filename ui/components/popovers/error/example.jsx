// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { UtilityIcon } from '../../icons/base/example';
import { Popover } from '../base-legacy/example';
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
  <div className="slds-grid slds-grid_vertical-align-center slds-grid_align-end">
    <button className="slds-button slds-button_neutral">Learn More</button>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Error',
    id: 'error-default',
    label: 'Error – default',
    element: (
      <Popover
        className="slds-popover_error slds-nubbin_bottom-left"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="We hit a snag."
            symbol="error"
          />
        }
        closeButton
        inverse
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
    context: 'Error',
    id: 'with-top-nubbin',
    label: 'Error With Top Nubbin',
    element: (
      <Popover
        className="slds-popover_error slds-nubbin_top"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="We hit a snag."
            symbol="error"
          />
        }
        closeButton
        inverse
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
    context: 'Error',
    id: 'with-footer',
    label: 'Error With Footer',
    element: (
      <Popover
        className="slds-popover_error slds-nubbin_bottom-left"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="We hit a snag."
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
          <a href="#" onClick={e => e.preventDefault()} title="Learn More">
            Learn More
          </a>
        </p>
      </Popover>
    )
  },
  {
    context: 'Error',
    id: 'with-bullet-list',
    label: 'Error With Bullet List',
    element: (
      <Popover
        className="slds-popover_error slds-nubbin_bottom-left"
        headingId={headingUniqueId}
        header={
          <FeedbackHeader
            headingId={headingUniqueId}
            title="We hit a snag."
            symbol="error"
          />
        }
        footer={<FeedbackFooter />}
        closeButton
        inverse
      >
        <ul className="slds-list_dotted">
          <li>Details about error #1</li>
          <li>Details about error #2</li>
          <li>Details about error #3</li>
        </ul>
      </Popover>
    )
  }
];
