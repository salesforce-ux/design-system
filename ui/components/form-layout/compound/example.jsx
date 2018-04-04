// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Tooltip } from '../../tooltips/base/example';

export const CompoundForm = props => (
  <div className="demo-only" style={{ width: '440px' }}>
    <div className="slds-form slds-form_compound">
      <fieldset className="slds-form-element">
        <legend
          className={classNames(
            'slds-form-element__label',
            'slds-form-element__legend',
            'slds-text-title_caps',
            { 'slds-form-element__legend_has-tooltip': props.tooltip }
          )}
        >
          Location
        </legend>
        {props.tooltip && (
          <div className="slds-form-element__icon">
            <button
              aria-describedby="help"
              className="slds-button slds-button_icon"
            >
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default"
                sprite="utility"
                symbol="info"
              />
              <span className="slds-assistive-text">Help</span>
            </button>
            <Tooltip
              className="slds-nubbin_bottom-left"
              id="help"
              style={{
                position: 'absolute',
                top: '-45px',
                left: '-15px',
                width: '170px'
              }}
            >
              Some helpful information
            </Tooltip>
          </div>
        )}
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <div className="slds-form-element slds-size_1-of-2">
              <label className="slds-form-element__label" htmlFor="input-01">
                Latitude
              </label>
              <input id="input-01" className="slds-input" type="text" />
            </div>
            <div className="slds-form-element slds-size_1-of-2">
              <label className="slds-form-element__label" htmlFor="input-02">
                Longitude
              </label>
              <input id="input-02" className="slds-input" type="text" />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="slds-form-element">
        <legend className="slds-form-element__label slds-text-title_caps">
          Address
        </legend>
        <div className="slds-form-element__group">
          <div className="slds-form-element__row">
            <div className="slds-form-element slds-size_1-of-1">
              <label className="slds-form-element__label" htmlFor="input-03">
                Street
              </label>
              <input id="input-03" className="slds-input" type="text" />
            </div>
          </div>
          <div className="slds-form-element__row">
            <div className="slds-form-element slds-size_1-of-2">
              <label className="slds-form-element__label" htmlFor="input-04">
                City
              </label>
              <input id="input-04" className="slds-input" type="text" />
            </div>
            <div className="slds-form-element slds-size_1-of-2">
              <label className="slds-form-element__label" htmlFor="input-05">
                State
              </label>
              <input id="input-05" className="slds-input" type="text" />
            </div>
          </div>
          <div className="slds-form-element__row">
            <div className="slds-form-element slds-size_1-of-2">
              <label className="slds-form-element__label" htmlFor="input-06">
                ZIP Code
              </label>
              <input id="input-06" className="slds-input" type="text" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
);
