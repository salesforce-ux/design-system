// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import _ from 'lodash';

// component imports
import { Button } from '../../buttons/base/example';
import Tabs from '../../tabs/index.react';
import { Popover } from '../../popovers/base/example';
import {
  FormElement,
  FormElementLabel,
  FormElementControl,
  Input
} from '../../input/base/example';

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

const Swatch = (props) => (
  <span key={_.uniqueId('swatch-')} className="slds-swatch" style={{background: props.color}} />
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
    const popoverFooter = (
      <div className='slds-color-picker__selector-footer'>
        <Button className='slds-button--neutral'>Cancel</Button>
        <Button className='slds-button--brand'>Done</Button>
      </div>
    );

    return (
      <div className="slds-color-picker">
        <div className="slds-color-picker__summary">
          <label
            className="slds-color-picker__summary-label"
            for="color-picker-summary-input"
          >
            Choose Color
          </label>

          <Button className='slds-button--neutral'>
            <span className="slds-swatch" style={{background: 'hsl(220, 46%, 55%)'}} />
          </Button>

          <input
            type="text"
            className="color-picker__summary-input slds-input"
            id="slds-color-picker-summary-input"
            defaultValue="#5679C0"
          />
        </div>

        <Popover className='slds-color-picker__selector' footer={popoverFooter}>
          <Tabs selectedIndex={selectedTabIndex}>
            <Tabs.Item title='Default'>
              <div className='slds-color-picker__swatches'>
                {swatchColors.map((swatch, index) => 
                  <Swatch color={swatch} index={index} />
                )}
              </div>
            </Tabs.Item>

            <Tabs.Item title='Custom'>
              <div className='slds-color-picker__custom'>
                <div className="slds-color-picker__custom-range" style={{background: 'hsl(220, 100%, 50%)'}}>
                  <div className="slds-color-picker__range-selector" style={{top: '55%', left: '46%'}} />
                </div>

                <div className="slds-color-picker__hue-and-preview">
                  <input type="range" className="slds-color-picker__hue-slider" min="0" max="360" defaultValue="208" />
                  <span className="slds-swatch" style={{background: '#5679C0'}} />
                </div>

                <div className="slds-color-picker__custom-inputs">
                  <FormElement className='slds-color-picker__input-custom-hex'>
                    <FormElementLabel>Hex</FormElementLabel>
                    <FormElementControl>
                      <Input defaultValue='#5679C0' />
                    </FormElementControl>
                  </FormElement>

                  <FormElement>
                    <FormElementLabel>R</FormElementLabel>
                    <FormElementControl>
                      <Input defaultValue='86' />
                    </FormElementControl>
                  </FormElement>

                  <FormElement>
                    <FormElementLabel>G</FormElementLabel>
                    <FormElementControl>
                      <Input defaultValue='121' />
                    </FormElementControl>
                  </FormElement>

                  <FormElement>
                    <FormElementLabel>B</FormElementLabel>
                    <FormElementControl>
                      <Input defaultValue='192' />
                    </FormElementControl>
                  </FormElement>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </Popover>
      </div>
    );
  }
}

export default (
  <ColorPicker />
);

export const states = [
  {
    id: 'custom-tab-selected',
    label: 'Custom Tab Selected',
    element: <ColorPicker selectedTabIndex={1} />
  }
]
