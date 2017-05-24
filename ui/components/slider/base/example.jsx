// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { FormElement } from '../../form-element/base/example';

/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */

const sliderId = 'slider-id-01';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const SliderLabel = props =>
  <span>
    Slider Label<br />
    {props.min || '0'} - {props.max || '100'}
  </span>;

const Slider = props =>
  <div className={classNames('slds-slider', props.className)}>
    <input
      id={props.id || sliderId}
      className="slds-slider__range"
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step}
      disabled={props.disabled}
    />
    <span className="slds-slider__value" aria-hidden="true">{props.value}</span>
  </div>;

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default (
  <FormElement label={<SliderLabel />} inputId={sliderId}>
    <Slider value="50" />
  </FormElement>
);

// States
export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <FormElement label={<SliderLabel />} inputId={sliderId}>
        <Slider value="50" disabled />
      </FormElement>
  },
  {
    id: 'value-0',
    label: 'Value: 0',
    element:
      <FormElement label={<SliderLabel min="0" max="100" />} inputId={sliderId}>
        <Slider value="0" />
      </FormElement>
  },
  {
    id: 'value-25',
    label: 'Value: 25',
    element:
      <FormElement label={<SliderLabel min="0" max="100" />} inputId={sliderId}>
        <Slider value="25" />
      </FormElement>
  },
  {
    id: 'value-50',
    label: 'Value: 50',
    element:
      <FormElement label={<SliderLabel min="0" max="100" />} inputId={sliderId}>
        <Slider value="50" />
      </FormElement>
  },
  {
    id: 'value-75',
    label: 'Value: 75',
    element:
      <FormElement label={<SliderLabel min="0" max="100" />} inputId={sliderId}>
        <Slider value="75" />
      </FormElement>
  },
  {
    id: 'value-100',
    label: 'Value: 100',
    element:
      <FormElement label={<SliderLabel min="0" max="100" />} inputId={sliderId}>
        <Slider value="100" />
      </FormElement>
  },
];

// Examples
export let examples = [
  {
    id: 'min-max',
    label: 'Min/Max Range',
    element:
      <FormElement label={<SliderLabel min="0" max="400" />} inputId={sliderId}>
        <Slider value="200" min="0" max="400" />
      </FormElement>
  },
  {
    id: 'steps',
    label: 'Min/Max Range with Steps',
    element:
      <FormElement label={<SliderLabel min="0" max="400" />} inputId={sliderId}>
        <Slider value="200" min="0" max="400" step="100" />
      </FormElement>
  },
  {
    id: 'width-x-small',
    label: 'Width: x-small',
    element:
      <FormElement label={<SliderLabel />} inputId={sliderId}>
        <Slider className="slds-size_x-small" value="50" />
      </FormElement>
  },
  {
    id: 'width-small',
    label: 'Width: small',
    element:
      <FormElement label={<SliderLabel />} inputId={sliderId}>
        <Slider className="slds-size_small" value="50" />
      </FormElement>
  },
  {
    id: 'width-medium',
    label: 'Width: medium',
    element:
      <FormElement label={<SliderLabel />} inputId={sliderId}>
        <Slider className="slds-size_medium" value="50" />
      </FormElement>
  },
  {
    id: 'width-large',
    label: 'Width: large',
    element:
      <FormElement label={<SliderLabel />} inputId={sliderId}>
        <Slider className="slds-size_large" value="50" />
      </FormElement>
  }
];
