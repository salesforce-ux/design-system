// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Tooltip } from '../../tooltips/base/example';
import { ProgressBar } from '../../progress-bar/base/example';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Progress = props => (
  <div className={classNames('slds-progress', props.className)}>
    <ol className="slds-progress__list">{props.children}</ol>
    <ProgressBar className="slds-progress-bar_x-small" value={props.value} />
  </div>
);

export let Step = props => (
  <li
    className={classNames(
      'slds-progress__item',
      props.className,
      props.active ? 'slds-is-active' : null,
      props.done ? 'slds-is-completed' : null,
      props.error ? 'slds-has-error' : null
    )}
  >
    {props.done && !props.error ? (
      <ButtonIcon
        className="slds-button_icon slds-progress__marker slds-progress__marker_icon"
        symbol="success"
        aria-describedby={props['aria-describedby']}
        assistiveText={props.done ? props.children + ' - Completed' : null}
        title={props.done ? props.children + ' - Completed' : null}
      />
    ) : props.error ? (
      <ButtonIcon
        className="slds-button_icon slds-progress__marker slds-progress__marker_icon"
        symbol="error"
        aria-describedby={props['aria-describedby']}
        assistiveText={props.error ? props.children + ' - Error' : null}
        title={props.error ? props.children + ' - Error' : null}
      />
    ) : (
      <button
        className="slds-button slds-progress__marker"
        aria-describedby={props['aria-describedby']}
      >
        <span className="slds-assistive-text">
          {props.children} {props.active ? '- Active' : null}
        </span>
      </button>
    )}
  </li>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ padding: '1rem' }}>
    <Progress value="0">
      <Step active>Step 1</Step>
      <Step>Step 2</Step>
      <Step>Step 3</Step>
      <Step>Step 4</Step>
      <Step>Step 5</Step>
    </Progress>
  </div>
);

export let states = [
  {
    id: 'next-step',
    label: 'Next Step',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'has-error',
    label: 'Step - Error',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step error>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element: (
      <div className="demo-only" style={{ padding: '3rem 1rem 0' }}>
        <Progress value="50">
          <Step done>Step 1</Step>
          <Step done>Step 2</Step>
          <Step active aria-describedby="step-3-tooltip">
            Step 3
          </Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
        <Tooltip
          className="slds-nubbin_bottom"
          id="step-3-tooltip"
          style={{
            position: 'absolute',
            top: '0px',
            left: 'calc(50% + 7px)',
            transform: 'translateX(-50%)'
          }}
        >
          Verify Email
        </Tooltip>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'modal',
    label: 'In a modal',
    element: (
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal className="slds-modal_large" aria-labelledby="header43">
          <ModalHeader>
            <h2 id="header43" className="slds-text-heading_medium">
              Modal Header
            </h2>
          </ModalHeader>
          <ModalContent className="slds-grow slds-p-around_medium" />
          <ModalFooter className="slds-grid slds-grid_align-spread">
            <button className="slds-button slds-button_neutral">Cancel</button>
            <Progress className="slds-progress_shade" value="25">
              <Step done>Step 1</Step>
              <Step active>Step 2</Step>
              <Step>Step 3</Step>
              <Step>Step 4</Step>
              <Step>Step 5</Step>
            </Progress>
            <button className="slds-button slds-button_brand">Save</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'shade',
    label: 'On a gray background',
    element: (
      <div
        className="demo-only"
        style={{ background: '#F3F2F2', padding: '1rem' }}
      >
        <Progress className="slds-progress_shade" value="25">
          <Step done>Step 1</Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  }
];
