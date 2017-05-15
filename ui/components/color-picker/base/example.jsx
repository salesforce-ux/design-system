// ui/components/button/base/examples.jsx

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export default (
  <div className='slds-color-picker'>
    <div className='slds-color-picker__summary'>
      <label
        className='slds-color-picker__summary-label'
        for='color-picker-summary-input'
      >
        Choose Color
      </label>
      
      <input
        type='text'
        className='color-picker__summary-input slds-input'
        id='slds-color-picker-summary-input'
      />
    </div>

    <section
      className='slds-color-picker__selector slds-popover'
      role='dialog'
      aria-label='Color Selector'
      aria-describedby='dialog-body-id-263'
    >
      <div className='slds-popover__body' id='dialog-body-id-263'>
        <div className='slds-tabs--default'>
          <ul className='slds-tabs--default__nav' role='tablist'>
            <li className="slds-tabs--default__item slds-active" title="Default" role="presentation">
              <a className="slds-tabs--default__link" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">
                Default
              </a>
            </li>
            <li className="slds-tabs--default__item" title="Custom" role="presentation">
              <a className="slds-tabs--default__link" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">
                Custom
              </a>
            </li>
          </ul>
        
          <div id="tab-default-1" className="slds-tabs--default__content slds-hide" role="tabpanel" aria-labelledby="tab-default-1__item">
            <div className='slds-color-picker__swatches'>
              <div key='swatch-0' className='slds-swatch' style={{background: '#e3abec'}}></div>
              <div key='swatch-1' className='slds-swatch' style={{background: '#c2dbf7'}}></div>
              <div key='swatch-2' className='slds-swatch' style={{background: '#9fd6ff'}}></div>
              <div key='swatch-3' className='slds-swatch' style={{background: '#9de7da'}}></div>
              <div key='swatch-4' className='slds-swatch' style={{background: '#9df0c0'}}></div>
              <div key='swatch-5' className='slds-swatch' style={{background: '#fff099'}}></div>
              <div key='swatch-6' className='slds-swatch' style={{background: '#fed49a'}}></div>

              <div key='swatch-7' className='slds-swatch' style={{background: '#d073e0'}}></div>
              <div key='swatch-8' className='slds-swatch' style={{background: '#86baf3'}}></div>
              <div key='swatch-9' className='slds-swatch' style={{background: '#5ebbff'}}></div>
              <div key='swatch-11' className='slds-swatch' style={{background: '#44d8be'}}></div>
              <div key='swatch-12' className='slds-swatch' style={{background: '#3be282'}}></div>
              <div key='swatch-13' className='slds-swatch' style={{background: '#ffe654'}}></div>
              <div key='swatch-14' className='slds-swatch' style={{background: '#ffb758'}}></div>

              <div key='swatch-15' className='slds-swatch' style={{background: '#bd35bd'}}></div>
              <div key='swatch-16' className='slds-swatch' style={{background: '#5779c1'}}></div>
              <div key='swatch-17' className='slds-swatch' style={{background: '#5ebbff'}}></div>
              <div key='swatch-18' className='slds-swatch' style={{background: '#00aea9'}}></div>
              <div key='swatch-19' className='slds-swatch' style={{background: '#3cba4c'}}></div>
              <div key='swatch-20' className='slds-swatch' style={{background: '#f5bc25'}}></div>
              <div key='swatch-21' className='slds-swatch' style={{background: '#f99221'}}></div>

              <div key='swatch-22' className='slds-swatch' style={{background: '#580d8c'}}></div>
              <div key='swatch-23' className='slds-swatch' style={{background: '#001970'}}></div>
              <div key='swatch-24' className='slds-swatch' style={{background: '#0a2399'}}></div>
              <div key='swatch-25' className='slds-swatch' style={{background: '#0b7477'}}></div>
              <div key='swatch-26' className='slds-swatch' style={{background: '#0b6b50'}}></div>
              <div key='swatch-27' className='slds-swatch' style={{background: '#b67e11'}}></div>
              <div key='swatch-28' className='slds-swatch' style={{background: '#b85d0d'}}></div>
            </div>
          </div>
    
          <div id="tab-default-2" className="slds-tabs--default__content slds-show" role="tabpanel" aria-labelledby="tab-default-2__item">
            <div className='slds-color-picker__custom'>
              <div className='slds-color-picker__custom-range' style={{background: '#8cea19'}}>
                <div className='slds-color-picker__range-selector' style={{top: '40px', left: '120px'}}></div>
              </div>
  
              <input type='range' className='slds-color-picker__hue-slider' />


            </div>
          </div>
        </div>
      </div>

      <footer className="slds-color-picker__selector-footer slds-popover__footer">
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Done</button>
      </footer>
    </section>
  </div>
);