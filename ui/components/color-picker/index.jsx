// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import _ from 'lodash';
import SvgIcon from '../../shared/svg-icon';

// component imports
import { Button } from '../buttons/base/example';
import Tabs from '../tabs/index.react';
import { Popover } from '../popovers/base/example';
import {
  FormElement,
  FormElementLabel,
  FormElementControl,
  Input
} from '../input/base/example';

const swatchColors = [
  '#e3abec',
  '#c2dbf7',
  '#9fd6ff',
  '#9de7da',
  '#9df0c0',
  '#fff099',
  '#fed49a',
  '#d073e0',
  '#86baf3',
  '#5ebbff',
  '#44d8be',
  '#3be282',
  '#ffe654',
  '#ffb758',
  '#bd35bd',
  '#5779c1',
  '#5ebbff',
  '#00aea9',
  '#3cba4c',
  '#f5bc25',
  '#f99221',
  '#580d8c',
  '#001970',
  '#0a2399',
  '#0b7477',
  '#0b6b50',
  '#b67e11',
  '#b85d0d'
];

/**
 * Swatch Subcomponent
 */
const Swatch = (props) => (
  <span key={_.uniqueId('swatch-')} className="slds-swatch" style={{background: props.color}} />
);

/**
 * Summary Subcomponent
 */
export const ColorPickerSummary = (props) => (
  <div className="slds-color-picker__summary">
    <label
      className="slds-color-picker__summary-label"
      htmlFor="color-picker-summary-input"
    >
      Choose Color
    </label>

    <Button className="slds-color-picker__summary-button slds-button_icon slds-button_icon-more" aria-haspopup title="Choose Color">
      <Swatch color="hsl(220, 46%, 55%)" />
      <SvgIcon
        className="slds-button__icon slds-button__icon_small"
        sprite="utility"
        symbol="down"
      />
    </Button>

    <input
      type="text"
      className="slds-color-picker__summary-input slds-input"
      id="slds-color-picker-summary-input"
      defaultValue="#5679C0"
    />
  </div>
);

/**
 * Swatches (list of Swatch elements) Subcomponent
 */
export const ColorPickerSwatches = (props) => (
  <ul className="slds-color-picker__swatches" role="listbox">
    {swatchColors.map((swatch, index) =>
      <li key={_.uniqueId('color-picker-swatch-')} className="slds-color-picker__swatch" role="presentation">
        <a role="option" href="#">
          <Swatch color={swatch} index={index} />
        </a>
      </li>
    )}
  </ul>
);

/**
 * Custom Picker Subcomponent
 */
export const ColorPickerCustom = (props) => (
  <div className="slds-color-picker__custom">
    <p id="color-picker-instructions" className="slds-assistive-text">Use arrow keys to select a saturation and lightness, on an x and y axis.</p>
    <div className="slds-color-picker__custom-range" style={{background: 'hsl(220, 100%, 50%)'}}>
      <a
        className="slds-color-picker__range-indicator"
        style={{top: '55%', left: '46%'}}
        href="#"
        aria-live="assertive"
        aria-atomic="true"
        aria-describedBy="color-picker-instructions"
      >
        <span className="slds-assistive-text">Saturation: 46%. Lightness: 45%.</span>
      </a>
    </div>

    <div className="slds-color-picker__hue-and-preview">
      <input type="range" className="slds-color-picker__hue-slider" min="0" max="360" defaultValue="208" />
      <Swatch color="#5679C0" />
    </div>

    <div className="slds-color-picker__custom-inputs">
      <FormElement className="slds-color-picker__input-custom-hex">
        <FormElementLabel>Hex</FormElementLabel>
        <FormElementControl>
          <Input defaultValue="#5679C0" />
        </FormElementControl>
      </FormElement>

      <FormElement>
        <FormElementLabel>
          <abbr title="Red">R</abbr>
        </FormElementLabel>
        <FormElementControl>
          <Input defaultValue="86" />
        </FormElementControl>
      </FormElement>

      <FormElement>
        <FormElementLabel>
          <abbr title="Green">G</abbr>
        </FormElementLabel>
        <FormElementControl>
          <Input defaultValue="121" />
        </FormElementControl>
      </FormElement>

      <FormElement>
        <FormElementLabel>
          <abbr title="blue">B</abbr>
        </FormElementLabel>
        <FormElementControl>
          <Input defaultValue="192" />
        </FormElementControl>
      </FormElement>
    </div>
  </div>
);

/**
 * Footer Subcomponent
 */
export const ColorPickerFooter = () => (
  <div className="slds-color-picker__selector-footer">
    <Button className="slds-button--neutral">Cancel</Button>
    <Button className="slds-button--brand">Done</Button>
  </div>
);

class ColorPicker extends React.Component {
  constructor (props) {
    super();

    this.state = {
      selectedTabIndex: props.selectedTabIndex || 0
    };
  }

  render () {
    const { selectedTabIndex } = this.state;

    return (
      <div className="slds-color-picker">
        <ColorPickerSummary />

        <Popover
          title="Choose a color"
          className="slds-color-picker__selector"
          footer={<ColorPickerFooter />}
        >
          <Tabs selectedIndex={selectedTabIndex}>
            <Tabs.Item title="Default">
              <ColorPickerSwatches />
            </Tabs.Item>

            <Tabs.Item title="Custom">
              <ColorPickerCustom />
            </Tabs.Item>
          </Tabs>
        </Popover>
      </div>
    );
  }
}

export default ColorPicker;
