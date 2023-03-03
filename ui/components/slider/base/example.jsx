// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { FormElement } from '../../form-element';
import uniqueId from 'lodash.uniqueid';
/* -----------------------------------------------------------------------------
    Variables
----------------------------------------------------------------------------- */


const errorMessageId = uniqueId('error-message-id-');

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const SliderLabel = props => (
  <span className="slds-slider-label">
    <span className="slds-slider-label__label">Slider Label</span>
    <span className="slds-slider-label__range">
      {props.min || '0'} - {props.max || '100'}
    </span>
  </span>
);

export const Slider = (props) => {
  return (
    <div className={classNames('slds-slider', props.className)}>
      <input
        aria-describedby={props['aria-describedby']}
        id={props.id || uniqueId('slider-id-')}
        className="slds-slider__range"
        type="range"
        defaultValue={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        disabled={props.disabled}
      />
      <span className="slds-slider__value" aria-hidden="true">
        {props.value}
      </span>
    </div>
  );
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
let newDefaultid = uniqueId('slider-id-');
export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newDefaultid} />}
        inputId={newDefaultid}
      >
        <Slider value="50" id={newDefaultid} />
      </FormElement>
    )
  }
];

// States
let newStateId = uniqueId('slider-id-');
export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} />}
        inputId={newStateId}
      >
        <Slider value="50" disabled id={newStateId} />
      </FormElement>
    )
  },
  {
    id: 'value-0',
    label: 'Value: 0',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} min="0" max="100" />}
        inputId={newStateId}
      >
        <Slider value="0" id={newStateId} />
      </FormElement>
    )
  },
  {
    id: 'value-25',
    label: 'Value: 25',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} min="0" max="100" />}
        inputId={newStateId}
      >
        <Slider value="25" id={newStateId} />
      </FormElement>
    )
  },
  {
    id: 'value-50',
    label: 'Value: 50',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} min="0" max="100" />}
        inputId={newStateId}
      >
        <Slider value="50" id={newStateId} />
      </FormElement>
    )
  },
  {
    id: 'value-75',
    label: 'Value: 75',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} min="0" max="100" />}
        inputId={newStateId}
      >
        <Slider value="75" id={newStateId} />
      </FormElement>
    )
  },
  {
    id: 'value-100',
    label: 'Value: 100',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newStateId} min="0" max="100" />}
        inputId={newStateId}
      >
        <Slider value="100" id={newStateId} />
      </FormElement>
    )
  }
];

// Examples
let newExampleId = uniqueId('slider-id-');
export let examples = [
  {
    id: 'min-max',
    label: 'Min/Max Range',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} min="0" max="400" />}
        inputId={newExampleId}
      >
        <Slider value="200" min="0" max="400" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'steps',
    label: 'Min/Max Range with Steps',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} min="0" max="400" />}
        inputId={newExampleId}
      >
        <Slider value="200" min="0" max="400" step="100" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'width-x-small',
    label: 'Width: x-small',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider className="slds-size_x-small" value="50" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'width-small',
    label: 'Width: small',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider className="slds-size_small" value="50" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'width-medium',
    label: 'Width: medium',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider className="slds-size_medium" value="50" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'width-large',
    label: 'Width: large',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider className="slds-size_large" value="50" id={newExampleId} />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        hasError
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider
          aria-describedby={errorMessageId}
          className="slds-size_large"
          value="50"
          id={newExampleId}
        />
        <div id={errorMessageId} className="slds-form-element__help">
          There is a problem with this field
        </div>
      </FormElement>
    )
  },
  {
    id: 'vertical',
    label: 'Vertical',
    element: (
      <FormElement
        labelContent={<SliderLabel id={newExampleId} />}
        inputId={newExampleId}
      >
        <Slider value="50" className="slds-slider_vertical" id={newExampleId} />
      </FormElement>
    )
  }
];
