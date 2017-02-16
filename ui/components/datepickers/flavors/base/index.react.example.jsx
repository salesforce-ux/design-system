/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';
import { Select } from 'ui/components/select/flavors/base/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Datepicker = props =>
  <div
    aria-hidden="false"
    aria-label="Date picker: June"
    className={classNames('slds-datepicker', props.className)}
    role="dialog"
  >
    {props.children}
  </div>;

let DatepickerHeader = props =>
  <div className="slds-datepicker__filter slds-grid">
    <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow">
      <div className="slds-align-middle">
        <ButtonIcon
          assistiveText="Previous Month"
          className="slds-button--icon-container"
          symbol="left"
          title="Previous Month"
        />
      </div>
      <h2 aria-atomic="true" aria-live="assertive" className="slds-align-middle" id="month">
        June
      </h2>
      <div className="slds-align-middle">
        <ButtonIcon
          assistiveText="Next Month"
          className="slds-button--icon-container"
          symbol="right"
          title="Next Month"
        />
      </div>
    </div>
    <div className="slds-shrink-none">
      <label className="slds-assistive-text" htmlFor="select-01">Pick a Year</label>
      <Select>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
      </Select>
    </div>
  </div>;

let Weekdays = props =>
  <tr id="weekdays">
    <th id="Sunday" scope="col"><abbr title="Sunday">Sun</abbr></th>
    <th id="Monday" scope="col"><abbr title="Monday">Mon</abbr></th>
    <th id="Tuesday" scope="col"><abbr title="Tuesday">Tue</abbr></th>
    <th id="Wednesday" scope="col"><abbr title="Wednesday">Wed</abbr></th>
    <th id="Thursday" scope="col"><abbr title="Thursday">Thu</abbr></th>
    <th id="Friday" scope="col"><abbr title="Friday">Fri</abbr></th>
    <th id="Saturday" scope="col"><abbr title="Saturday">Sat</abbr></th>
  </tr>;

let Week = props =>
  <tr {...props}>
    {props.children}
  </tr>;

let Day = props =>
  <td
    aria-disabled={props['aria-disabled']}
    aria-selected={props['aria-selected']}
    className={props.className}
    role="gridcell"
    tabIndex={props.tabIndex}
  >
    <span className="slds-day">{props.children}</span>
  </td>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className="slds-dropdown slds-dropdown--left">
      <DatepickerHeader />
      <table aria-labelledby="month" aria-multiselectable="true" className="slds-datepicker__month" role="grid">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">31</Day>
            <Day aria-selected="false" tabIndex="0">1</Day>
            <Day aria-selected="false">2</Day>
            <Day aria-selected="false">3</Day>
            <Day aria-selected="false">4</Day>
            <Day aria-selected="false">5</Day>
            <Day aria-selected="false">6</Day>
          </Week>
          <Week>
            <Day aria-selected="false">7</Day>
            <Day aria-selected="false">8</Day>
            <Day aria-selected="false">9</Day>
            <Day aria-selected="false">10</Day>
            <Day aria-selected="false">11</Day>
            <Day aria-selected="false">12</Day>
            <Day aria-selected="false">13</Day>
          </Week>
          <Week>
            <Day aria-selected="false">14</Day>
            <Day aria-selected="false">15</Day>
            <Day aria-selected="false">16</Day>
            <Day aria-selected="false">17</Day>
            <Day aria-selected="false">18</Day>
            <Day aria-selected="false">19</Day>
            <Day aria-selected="false">20</Day>
          </Week>
          <Week>
            <Day aria-selected="false">21</Day>
            <Day aria-selected="false">22</Day>
            <Day aria-selected="false">23</Day>
            <Day aria-selected="false">24</Day>
            <Day aria-selected="false">25</Day>
            <Day aria-selected="false">26</Day>
            <Day aria-selected="false">27</Day>
          </Week>
          <Week>
            <Day aria-selected="false">28</Day>
            <Day aria-selected="false">29</Day>
            <Day aria-selected="false">30</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">1</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">2</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">3</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell">
              <span className="slds-show--inline-block slds-text-link slds-p-bottom--x-small">
                Today
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Datepicker>
  </Demo>;

let Selected = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className="slds-dropdown slds-dropdown--left">
      <DatepickerHeader />
      <table className="slds-datepicker__month" aria-labelledby="month" role="grid">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">31</Day>
            <Day aria-selected="false" tabIndex="0">1</Day>
            <Day aria-selected="false">2</Day>
            <Day aria-selected="false">3</Day>
            <Day aria-selected="false">4</Day>
            <Day aria-selected="false">5</Day>
            <Day aria-selected="false">6</Day>
          </Week>
          <Week>
            <Day aria-selected="false">7</Day>
            <Day aria-selected="false">8</Day>
            <Day aria-selected="false">9</Day>
            <Day aria-selected="false">10</Day>
            <Day aria-selected="false">11</Day>
            <Day aria-selected="false">12</Day>
            <Day aria-selected="false">13</Day>
          </Week>
          <Week>
            <Day aria-selected="false">14</Day>
            <Day aria-selected="false">15</Day>
            <Day aria-selected="false">16</Day>
            <Day aria-selected="false">17</Day>
            <Day aria-selected="false" className="slds-is-today">
              <span className="slds-assistive-text">Today: </span>
              18
            </Day>
            <Day aria-selected="false">19</Day>
            <Day aria-selected="false">20</Day>
          </Week>
          <Week>
            <Day aria-selected="false">21</Day>
            <Day aria-selected="false">22</Day>
            <Day aria-selected="true" className="slds-is-selected">23</Day>
            <Day aria-selected="false">24</Day>
            <Day aria-selected="false">25</Day>
            <Day aria-selected="false">26</Day>
            <Day aria-selected="false">27</Day>
          </Week>
          <Week>
            <Day aria-selected="false">28</Day>
            <Day aria-selected="false">29</Day>
            <Day aria-selected="false">30</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">1</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">2</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">3</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell">
              <span className="slds-show--inline-block slds-text-link slds-p-bottom--x-small">
                Today
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Datepicker>
  </Demo>;

let MultiSelected = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className="slds-dropdown slds-dropdown--left">
      <DatepickerHeader />
      <table className="slds-datepicker__month" role="grid" aria-labelledby="month">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">31</Day>
            <Day aria-selected="false" tabIndex="0">1</Day>
            <Day aria-selected="false">2</Day>
            <Day aria-selected="false">3</Day>
            <Day aria-selected="false">4</Day>
            <Day aria-selected="false">5</Day>
            <Day aria-selected="false">6</Day>
          </Week>
          <Week>
            <Day aria-selected="false">7</Day>
            <Day aria-selected="false">8</Day>
            <Day aria-selected="false">9</Day>
            <Day aria-selected="false">10</Day>
            <Day aria-selected="false">11</Day>
            <Day aria-selected="false">12</Day>
            <Day aria-selected="false">13</Day>
          </Week>
          <Week>
            <Day aria-selected="false">14</Day>
            <Day aria-selected="false">15</Day>
            <Day aria-selected="false">16</Day>
            <Day aria-selected="false">17</Day>
            <Day aria-selected="false" className="slds-is-today">
              <span className="slds-assistive-text">Today: </span>
              18
            </Day>
            <Day aria-selected="false">19</Day>
            <Day aria-selected="false">20</Day>
          </Week>
          <Week className="slds-has-multi-row-selection">
            <Day aria-selected="false">21</Day>
            <Day aria-selected="false">22</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">23</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">24</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">25</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">26</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">27</Day>
          </Week>
          <Week className="slds-has-multi-row-selection">
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">28</Day>
            <Day aria-selected="true" className="slds-is-selected slds-is-selected-multi">29</Day>
            <Day aria-selected="false">30</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">1</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">2</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">3</Day>
            <Day aria-disabled="true" aria-selected="false" className="slds-disabled-text">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell">
              <span className="slds-show--inline-block slds-text-link slds-p-bottom--x-small">
                Today
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </Datepicker>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'datepicker-default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'datepicker-day-selected',
    label: 'Date selected',
    element: <Selected />
  },
  {
    id: 'datepicker-multi-day-selected',
    label: 'Multiple Date Range Selected',
    element: <MultiSelected />
  }
];
