// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { UtilityIcon } from '../../icons/base/example';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Progress = props => {
  const { hasSuccessBar, className, style, hasBorders, value = 0 } = props;

  return (
    <div
      className={classNames(
        'slds-progress slds-progress_vertical',
        { 'slds-progress_success': hasSuccessBar },
        className
      )}
      style={style}
    >
      <ol
        className={classNames('slds-progress__list', {
          'slds-progress__list-bordered': hasBorders
        })}
      >
        {props.children}
      </ol>
      <div
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
        aria-labelledby={props['aria-labelledby']}
        role="progressbar"
      >
        <span className="slds-assistive-text">Progress: {`${value}%`}</span>
      </div>
    </div>
  );
};

export let Step = props => {
  const {
    className,
    active,
    done,
    error,
    hasSuccessMarker,
    assistiveText
  } = props;

  return (
    <li
      className={classNames(
        'slds-progress__item',
        className,
        active ? 'slds-is-active' : null,
        done ? 'slds-is-completed' : null,
        error ? 'slds-has-error' : null
      )}
    >
      {done || error ? (
        <UtilityIcon
          className="slds-icon slds-icon_xx-small"
          containerClassName={classNames(
            'slds-progress__marker',
            'slds-progress__marker_icon',
            { 'slds-progress__marker_icon-success': done && hasSuccessMarker }
          )}
          symbol={done ? 'success' : 'error'}
          aria-describedby={props['aria-describedby']}
          assistiveText={done ? 'Complete' : 'Error'}
          title={done ? 'Complete' : 'Error'}
        />
      ) : (
        <div
          className="slds-progress__marker"
          aria-describedby={props['aria-describedby']}
        >
          {active && <span className="slds-assistive-text">Active</span>}
        </div>
      )}
      <div className="slds-progress__item_content slds-grid slds-grid_align-spread">
        {props.children}
      </div>
    </li>
  );
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ padding: '1rem', height: '350px' }}>
    <Progress>
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
        <Progress className="slds-progress_shade" value="50">
          <Step done>Step 1</Step>
          <Step done>Step 2</Step>
          <Step active>Step 3</Step>
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
          <Step done hasSuccessMarker>
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
        <Progress value="75">
          <Step done>Step 1</Step>
          <Step done>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Step>
          <Step done>Step 3</Step>
          <Step active>Step 4</Step>
          <Step>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'varying-stage-size-with-completed',
    label: 'With varying stage sizes and multiple completed steps',
    element: (
      <Progress value="100">
        <Step done>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Step>
        <Step done>Step 2</Step>
        <Step done>Step 3</Step>
        <Step done>Step 4</Step>
        <Step done>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat ut aliquip ex ea commodo
          consequat.
        </Step>
      </Progress>
    )
  }
];
