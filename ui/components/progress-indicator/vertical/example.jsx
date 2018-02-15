// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { UtilityIcon } from '../../icons/base/example';
import { ProgressBar } from '../../progress-bar/base/example';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Progress = props => (
  <div
    className={classNames(
      'slds-progress slds-progress_vertical',
      props.className
    )}
  >
    <ol className="slds-progress__list">{props.children}</ol>
    <div className="box">
      <ProgressBar
        isVertical
        className="slds-progress-bar_x-small"
        value={props.value}
      />
    </div>
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
      <UtilityIcon
        className="slds-icon slds-icon_xx-small"
        containerClassName={classNames(
          'slds-progress__marker',
          'slds-progress__marker_icon',
          { 'slds-progress__marker_icon-success': props.isSuccess }
        )}
        symbol="success"
        aria-describedby={props['aria-describedby']}
        assistiveText={props.done ? props.children + ' - Completed' : null}
        title={props.done ? props.children + ' - Completed' : null}
      />
    ) : props.error ? (
      <UtilityIcon
        className="slds-icon slds-icon_xx-small"
        containerClassName="slds-progress__marker slds-progress__marker_icon"
        symbol="warning"
        aria-describedby={props['aria-describedby']}
        assistiveText={props.error ? props.children + ' - Error' : null}
        title={props.error ? props.children + ' - Error' : null}
      />
    ) : (
      <div
        className="slds-progress__marker"
        aria-describedby={props['aria-describedby']}
      >
        <span className="slds-assistive-text">
          {props.children} {props.active ? '- Active' : null}
        </span>
      </div>
    )}
    <div>{props.children}</div>
  </li>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
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
      <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
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
      <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step error>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'shade',
    label: 'On a gray background',
    element: (
      <div
        className="demo-only"
        style={{ background: '#F3F2F2', padding: '1rem', height: '350px' }}
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
  },
  {
    id: 'green-success',
    label: 'With a green success check',
    element: (
      <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
        <Progress value="25">
          <Step done isSuccess>
            Step 1
          </Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'varying-stage-size',
    label: 'With varying stage sizes',
    element: (
      <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step active>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Step>
        </Progress>
      </div>
    )
  }
];
