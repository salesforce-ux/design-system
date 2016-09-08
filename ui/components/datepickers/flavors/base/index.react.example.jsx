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
  <tr {...props}>
    {props.children}
  </tr>;

let Day = props =>
  <td className={props.className} headers={props.dayHeaders} role="gridcell" aria-disabled={props.ariaDisabled} aria-selected={props.ariaSelected}>
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
          <Week id="week1">
            <Day className={pf('disabled-text')} dayHeaders="Sunday week1" ariaDisabled="true" ariaSelected="false">31</Day>
            <Day dayHeaders="Monday week1" ariaSelected="false">1</Day>
            <Day dayHeaders="Tuesday week1" ariaSelected="false">2</Day>
            <Day dayHeaders="Wednesday week1" ariaSelected="false">3</Day>
            <Day dayHeaders="Thursday week1" ariaSelected="false">4</Day>
            <Day dayHeaders="Friday week1" ariaSelected="false">5</Day>
            <Day dayHeaders="Saturday week1" ariaSelected="false">6</Day>
          </Week>
          <Week id="week2">
            <Day dayHeaders="Sunday week2" ariaSelected="false">7</Day>
            <Day dayHeaders="Monday week2" ariaSelected="false">8</Day>
            <Day dayHeaders="Tuesday week2" ariaSelected="false">9</Day>
            <Day dayHeaders="Wednesday week2" ariaSelected="false">10</Day>
            <Day dayHeaders="Thursday week2" ariaSelected="false">11</Day>
            <Day dayHeaders="Friday week2" ariaSelected="false">12</Day>
            <Day dayHeaders="Saturday week2" ariaSelected="false">13</Day>
          </Week>
          <Week id="week3">
            <Day dayHeaders="Sunday week3" ariaSelected="false">14</Day>
            <Day dayHeaders="Monday week3" ariaSelected="false">15</Day>
            <Day dayHeaders="Tuesday week3" ariaSelected="false">16</Day>
            <Day dayHeaders="Wednesday week3" ariaSelected="false">17</Day>
            <Day className={pf('is-today')} dayHeaders="Thursday week3" ariaSelected="false">18</Day>
            <Day dayHeaders="Friday week3" ariaSelected="false">19</Day>
            <Day dayHeaders="Saturday week3" ariaSelected="false">20</Day>
          </Week>
          <Week id="week4">
            <Day dayHeaders="Sunday week4" ariaSelected="false">21</Day>
            <Day dayHeaders="Monday week4" ariaSelected="false">22</Day>
            <Day dayHeaders="Tuesday week4" ariaSelected="false">23</Day>
            <Day dayHeaders="Wednesday week4" ariaSelected="false">24</Day>
            <Day dayHeaders="Thursday week4" ariaSelected="false">25</Day>
            <Day dayHeaders="Friday week4" ariaSelected="false">26</Day>
            <Day dayHeaders="Saturday week4" ariaSelected="false">27</Day>
          </Week>
          <Week id="week5">
            <Day dayHeaders="Sunday week5" ariaSelected="false">28</Day>
            <Day dayHeaders="Monday week5" ariaSelected="false">29</Day>
            <Day dayHeaders="Tuesday week5" ariaSelected="false">30</Day>
            <Day className={pf('disabled-text')} dayHeaders="Wednesday week5" ariaDisabled="true" ariaSelected="false">1</Day>
            <Day className={pf('disabled-text')} dayHeaders="Thursday week5" ariaDisabled="true" ariaSelected="false">2</Day>
            <Day className={pf('disabled-text')} dayHeaders="Friday week5" ariaDisabled="true" ariaSelected="false">3</Day>
            <Day className={pf('disabled-text')} dayHeaders="Saturday week5" ariaDisabled="true" ariaSelected="false">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0);" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
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
          <Week id="week11">
            <Day className={pf('disabled-text')} dayHeaders="Sunday week11" ariaDisabled="true" ariaSelected="false">31</Day>
            <Day dayHeaders="Monday week11" ariaSelected="false">1</Day>
            <Day dayHeaders="Tuesday week11" ariaSelected="false">2</Day>
            <Day dayHeaders="Wednesday week11" ariaSelected="false">3</Day>
            <Day dayHeaders="Thursday week11" ariaSelected="false">4</Day>
            <Day dayHeaders="Friday week11" ariaSelected="false">5</Day>
            <Day dayHeaders="Saturday week11" ariaSelected="false">6</Day>
          </Week>
          <Week id="week12">
            <Day dayHeaders="Sunday week12" ariaSelected="false">7</Day>
            <Day dayHeaders="Monday week12" ariaSelected="false">8</Day>
            <Day dayHeaders="Tuesday week12" ariaSelected="false">9</Day>
            <Day dayHeaders="Wednesday week12" ariaSelected="false">10</Day>
            <Day dayHeaders="Thursday week12" ariaSelected="false">11</Day>
            <Day dayHeaders="Friday week12" ariaSelected="false">12</Day>
            <Day dayHeaders="Saturday week12" ariaSelected="false">13</Day>
          </Week>
          <Week id="week13">
            <Day dayHeaders="Sunday week13" ariaSelected="false">14</Day>
            <Day dayHeaders="Monday week13" ariaSelected="false">15</Day>
            <Day dayHeaders="Tuesday week13" ariaSelected="false">16</Day>
            <Day dayHeaders="Wednesday week13" ariaSelected="false">17</Day>
            <Day className={pf('is-today')} dayHeaders="Thursday week13" ariaSelected="false">18</Day>
            <Day dayHeaders="Friday week13" ariaSelected="false">19</Day>
            <Day dayHeaders="Saturday week13" ariaSelected="false">20</Day>
          </Week>
          <Week id="week14">
            <Day dayHeaders="Sunday week14" ariaSelected="false">21</Day>
            <Day dayHeaders="Monday week14" ariaSelected="false">22</Day>
            <Day className={pf('is-selected')} dayHeaders="Tuesday week14" ariaSelected="true">23</Day>
            <Day dayHeaders="Wednesday week14" ariaSelected="false">24</Day>
            <Day dayHeaders="Thursday week14" ariaSelected="false">25</Day>
            <Day dayHeaders="Friday week14" ariaSelected="false">26</Day>
            <Day dayHeaders="Saturday week14" ariaSelected="false">27</Day>
          </Week>
          <Week id="week15">
            <Day dayHeaders="Sunday week15" ariaSelected="false">28</Day>
            <Day dayHeaders="Monday week15" ariaSelected="false">29</Day>
            <Day dayHeaders="Tuesday week15" ariaSelected="false">30</Day>
            <Day className={pf('disabled-text')} dayHeaders="Wednesday week15" ariaDisabled="true" ariaSelected="false">1</Day>
            <Day className={pf('disabled-text')} dayHeaders="Thursday week15" ariaDisabled="true" ariaSelected="false">2</Day>
            <Day className={pf('disabled-text')} dayHeaders="Friday week15" ariaDisabled="true" ariaSelected="false">3</Day>
            <Day className={pf('disabled-text')} dayHeaders="Saturday week15" ariaDisabled="true" ariaSelected="false">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0);" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
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
          <Week id="week21">
            <Day className={pf('disabled-text')} dayHeaders="Sunday week21" ariaDisabled="true" ariaSelected="false">31</Day>
            <Day dayHeaders="Monday week21" ariaSelected="false">1</Day>
            <Day dayHeaders="Tuesday week21" ariaSelected="false">2</Day>
            <Day dayHeaders="Wednesday week21" ariaSelected="false">3</Day>
            <Day dayHeaders="Thursday week21" ariaSelected="false">4</Day>
            <Day dayHeaders="Friday week21" ariaSelected="false">5</Day>
            <Day dayHeaders="Saturday week21" ariaSelected="false">6</Day>
          </Week>
          <Week id="week22">
            <Day dayHeaders="Sunday week22" ariaSelected="false">7</Day>
            <Day dayHeaders="Monday week22" ariaSelected="false">8</Day>
            <Day dayHeaders="Tuesday week22" ariaSelected="false">9</Day>
            <Day dayHeaders="Wednesday week22" ariaSelected="false">10</Day>
            <Day dayHeaders="Thursday week22" ariaSelected="false">11</Day>
            <Day dayHeaders="Friday week22" ariaSelected="false">12</Day>
            <Day dayHeaders="Saturday week22" ariaSelected="false">13</Day>
          </Week>
          <Week id="week23">
            <Day dayHeaders="Sunday week23" ariaSelected="false">14</Day>
            <Day dayHeaders="Monday week23" ariaSelected="false">15</Day>
            <Day dayHeaders="Tuesday week23" ariaSelected="false">16</Day>
            <Day dayHeaders="Wednesday week23" ariaSelected="false">17</Day>
            <Day className={pf('is-today')} dayHeaders="Thursday week23" ariaSelected="false">18</Day>
            <Day dayHeaders="Friday week23" ariaSelected="false">19</Day>
            <Day dayHeaders="Saturday week23" ariaSelected="false">20</Day>
          </Week>
          <Week id="week24" className={pf('has-multi-row-selection')}>
            <Day dayHeaders="Sunday week24" ariaSelected="false">21</Day>
            <Day dayHeaders="Monday week24" ariaSelected="false">22</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Tuesday week24" ariaSelected="true">23</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Wednesday week24" ariaSelected="true">24</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Thursday week24" ariaSelected="true">25</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Friday week24" ariaSelected="true">26</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Saturday week24" ariaSelected="true">27</Day>
          </Week>
          <Week id="week25" className={pf('has-multi-row-selection')}>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Sunday week25" ariaSelected="true">28</Day>
            <Day className={pf('is-selected is-selected-multi')} dayHeaders="Monday week25" ariaSelected="true">29</Day>
            <Day dayHeaders="Tuesday week25" ariaSelected="false">30</Day>
            <Day className={pf('disabled-text')} dayHeaders="Wednesday week25" ariaDisabled="true" ariaSelected="false">1</Day>
            <Day className={pf('disabled-text')} dayHeaders="Thursday week25" ariaDisabled="true" ariaSelected="false">2</Day>
            <Day className={pf('disabled-text')} dayHeaders="Friday week25" ariaDisabled="true" ariaSelected="false">3</Day>
            <Day className={pf('disabled-text')} dayHeaders="Saturday week25" ariaDisabled="true" ariaSelected="false">4</Day>
          </Week>
          <tr>
            <td colSpan="7" role="gridcell"><a href="javascript:void(0);" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
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
