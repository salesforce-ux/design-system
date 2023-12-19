// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '../../tooltips/base/example';
import SvgIcon from '../../../shared/svg-icon';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Backdrop
} from '../../modals/base/example';
import { ProgressBar } from '../../progress-bar';

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
      <div
        className="slds-progress__marker slds-progress__marker_icon"
        tabIndex="0"
      >
        <SvgIcon
          className="slds-icon slds-icon_xx-small"
          sprite="utility"
          symbol="success"
        />
        <span className="slds-assistive-text">
          {props.done ? props.children + ' - Completed' : null}
        </span>
      </div>
    ) : props.error ? (
      <div
        className="slds-progress__marker slds-progress__marker_icon"
        tabIndex="0"
      >
        <SvgIcon
          className="slds-icon slds-icon_xx-small"
          sprite="utility"
          symbol="error"
        />
        <span className="slds-assistive-text">
          {props.error ? props.children + ' - Error' : null}
        </span>
      </div>
    ) : (
      <div
        className="slds-progress__marker"
        tabIndex="0"
      >
        <span className="slds-assistive-text">
          {props.children} {props.active ? '- Active' : null}
        </span>
      </div>
    )}
  </li>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="0">
          <Step active>Step 1</Step>
          <Step>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  }
];

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
        <Backdrop>
          <Modal className="slds-modal_large" aria-labelledby="header43">
            <ModalHeader>
              <h1 id="header43" className="slds-text-heading_medium">
                Modal header
              </h1>
            </ModalHeader>
            <ModalContent className="slds-grow slds-p-around_medium" />
            <ModalFooter className="slds-grid slds-grid_align-spread">
              <button className="slds-button slds-button_neutral" aria-label="Cancel and close">Cancel</button>
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
        </Backdrop>
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
