/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Input from 'ui/components/forms/flavors/input/index.react';
import Menu from 'ui/components/menus/index.react';
import className from 'classnames';
import { Select as Select } from 'ui/components/forms/flavors/select/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Datepicker = props =>
  <div className={className(pf('datepicker'), props.className)} aria-hidden="false">
    {props.children}
  </div>;

let DatepickerHeader = props =>
  <div className={pf('datepicker__filter grid')}>
    <div className={pf('datepicker__filter--month grid grid--align-spread grow')}>
      <div className={pf('align-middle')}>
        <ButtonIcon flavor="icon-container" iconFlavor="small" sprite="utility" symbol="left" assistiveText="Previous Month" />
      </div>
      <h2 id="month" className={pf('align-middle')} aria-live="assertive" aria-atomic="true">June</h2>
      <div className={pf('align-middle')}>
        <ButtonIcon flavor="icon-container" iconFlavor="small" sprite="utility" symbol="right" assistiveText="Next Month" />
      </div>
    </div>
    <div className={pf('shrink-none')}>
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
  <tr className={props.className}>
    {props.children}
  </tr>;

let Day = props =>
  <td className={props.className} headers={props.day} role="gridcell" aria-disabled={props.ariaDisabled} aria-selected={props.ariaSelected}>
    <span className={pf('day')}>{props.children}</span>
  </td>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className={pf('dropdown dropdown--left')}>
      <DatepickerHeader />
      <table className={pf('datepicker__month')} role="grid" aria-labelledby="month">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day className={pf('disabled-text')} day="Sunday" ariaDisabled="true">31</Day>
            <Day day="Monday" ariaDisabled="true">1</Day>
            <Day day="Tuesday" ariaDisabled="true">2</Day>
            <Day day="Wednesday" ariaDisabled="true">3</Day>
            <Day day="Thursday" ariaDisabled="true">4</Day>
            <Day day="Friday" ariaDisabled="true">5</Day>
            <Day day="Saturday" ariaDisabled="true">6</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaDisabled="true">7</Day>
            <Day day="Monday" ariaDisabled="true">8</Day>
            <Day day="Tuesday" ariaDisabled="true">9</Day>
            <Day day="Wednesday" ariaDisabled="true">10</Day>
            <Day day="Thursday" ariaDisabled="true">11</Day>
            <Day day="Friday" ariaDisabled="true">12</Day>
            <Day day="Saturday" ariaDisabled="true">13</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaDisabled="true">14</Day>
            <Day day="Monday" ariaDisabled="true">15</Day>
            <Day day="Tuesday" ariaDisabled="true">16</Day>
            <Day day="Wednesday" ariaDisabled="true">17</Day>
            <Day className={pf('is-today')} day="Thursday" ariaDisabled="true">18</Day>
            <Day day="Friday" ariaDisabled="true">19</Day>
            <Day day="Saturday" ariaDisabled="true">20</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaDisabled="true">21</Day>
            <Day day="Monday" ariaDisabled="true">22</Day>
            <Day day="Tuesday" ariaDisabled="true">23</Day>
            <Day day="Wednesday" ariaDisabled="true">24</Day>
            <Day day="Thursday" ariaDisabled="true">25</Day>
            <Day day="Friday" ariaDisabled="true">26</Day>
            <Day day="Saturday" ariaDisabled="true">27</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaDisabled="true">28</Day>
            <Day day="Monday" ariaDisabled="true">29</Day>
            <Day day="Tuesday" ariaDisabled="true">30</Day>
            <Day className={pf('disabled-text')} day="Wednesday" ariaDisabled="true">1</Day>
            <Day className={pf('disabled-text')} day="Thursday" ariaDisabled="true">2</Day>
            <Day className={pf('disabled-text')} day="Friday" ariaDisabled="true">3</Day>
            <Day className={pf('disabled-text')} day="Saturday" ariaDisabled="true">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0)" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
          </tr>
        </tbody>
      </table>
    </Datepicker>
  </Demo>;

let Selected = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className={pf('dropdown dropdown--left')}>
      <DatepickerHeader />
      <table className={pf('datepicker__month')} role="grid" aria-labelledby="month">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day className={pf('disabled-text')} day="Sunday" ariaDisabled="true">31</Day>
            <Day day="Monday" ariaSelected="false">1</Day>
            <Day day="Tuesday" ariaSelected="false">2</Day>
            <Day day="Wednesday" ariaSelected="false">3</Day>
            <Day day="Thursday" ariaSelected="false">4</Day>
            <Day day="Friday" ariaSelected="false">5</Day>
            <Day day="Saturday" ariaSelected="false">6</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">7</Day>
            <Day day="Monday" ariaSelected="false">8</Day>
            <Day day="Tuesday" ariaSelected="false">9</Day>
            <Day day="Wednesday" ariaSelected="false">10</Day>
            <Day day="Thursday" ariaSelected="false">11</Day>
            <Day day="Friday" ariaSelected="false">12</Day>
            <Day day="Saturday" ariaSelected="false">13</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">14</Day>
            <Day day="Monday" ariaSelected="false">15</Day>
            <Day day="Tuesday" ariaSelected="false">16</Day>
            <Day day="Wednesday" ariaSelected="false">17</Day>
            <Day className={pf('is-today')} day="Thursday" ariaSelected="false">18</Day>
            <Day day="Friday" ariaSelected="false">19</Day>
            <Day day="Saturday" ariaSelected="false">20</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">21</Day>
            <Day day="Monday" ariaSelected="false">22</Day>
            <Day className={pf('is-selected')} day="Tuesday" ariaSelected="true">23</Day>
            <Day day="Wednesday" ariaSelected="false">24</Day>
            <Day day="Thursday" ariaSelected="false">25</Day>
            <Day day="Friday" ariaSelected="false">26</Day>
            <Day day="Saturday" ariaSelected="false">27</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">28</Day>
            <Day day="Monday" ariaSelected="false">29</Day>
            <Day day="Tuesday" ariaSelected="false">30</Day>
            <Day className={pf('disabled-text')} day="Wednesday" ariaDisabled="true">1</Day>
            <Day className={pf('disabled-text')} day="Thursday" ariaDisabled="true">2</Day>
            <Day className={pf('disabled-text')} day="Friday" ariaDisabled="true">3</Day>
            <Day className={pf('disabled-text')} day="Saturday" ariaDisabled="true">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0)" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
          </tr>
        </tbody>
      </table>
    </Datepicker>
  </Demo>;

let MultiSelected = props =>
  <Demo style={{height: '330px'}}>
    <Datepicker className={pf('dropdown dropdown--left')}>
      <DatepickerHeader />
      <table className={pf('datepicker__month')} role="grid" aria-labelledby="month">
        <thead>
          <Weekdays />
        </thead>
        <tbody>
          <Week>
            <Day className={pf('disabled-text')} day="Sunday" ariaDisabled="true">31</Day>
            <Day day="Monday" ariaSelected="false">1</Day>
            <Day day="Tuesday" ariaSelected="false">2</Day>
            <Day day="Wednesday" ariaSelected="false">3</Day>
            <Day day="Thursday" ariaSelected="false">4</Day>
            <Day day="Friday" ariaSelected="false">5</Day>
            <Day day="Saturday" ariaSelected="false">6</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">7</Day>
            <Day day="Monday" ariaSelected="false">8</Day>
            <Day day="Tuesday" ariaSelected="false">9</Day>
            <Day day="Wednesday" ariaSelected="false">10</Day>
            <Day day="Thursday" ariaSelected="false">11</Day>
            <Day day="Friday" ariaSelected="false">12</Day>
            <Day day="Saturday" ariaSelected="false">13</Day>
          </Week>
          <Week>
            <Day day="Sunday" ariaSelected="false">14</Day>
            <Day day="Monday" ariaSelected="false">15</Day>
            <Day day="Tuesday" ariaSelected="false">16</Day>
            <Day day="Wednesday" ariaSelected="false">17</Day>
            <Day className={pf('is-today')} day="Thursday" ariaSelected="false">18</Day>
            <Day day="Friday" ariaSelected="false">19</Day>
            <Day day="Saturday" ariaSelected="false">20</Day>
          </Week>
          <Week className={pf('has-multi-row-selection')}>
            <Day day="Sunday" ariaSelected="false">21</Day>
            <Day day="Monday" ariaSelected="false">22</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Tuesday" ariaSelected="true">23</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Wednesday" ariaSelected="true">24</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Thursday" ariaSelected="true">25</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Friday" ariaSelected="true">26</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Saturday" ariaSelected="true">27</Day>
          </Week>
          <Week className={pf('has-multi-row-selection')}>
            <Day className={pf('is-selected is-selected-multi')} day="Sunday" ariaSelected="true">28</Day>
            <Day className={pf('is-selected is-selected-multi')} day="Monday" ariaSelected="true">29</Day>
            <Day day="Tuesday" ariaSelected="false">30</Day>
            <Day className={pf('disabled-text')} day="Wednesday" ariaDisabled="true">1</Day>
            <Day className={pf('disabled-text')} day="Thursday" ariaDisabled="true">2</Day>
            <Day className={pf('disabled-text')} day="Friday" ariaDisabled="true">3</Day>
            <Day className={pf('disabled-text')} day="Saturday" ariaDisabled="true">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0)" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
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
