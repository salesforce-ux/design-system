/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const SvgIcon = require('app_modules/ui/svg-icon');
const ButtonIcon = require('ui/components/buttons/flavors/icon/index.react');
const Input = require('ui/components/forms/flavors/input/index.react');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only' style={{height: '330px'}}>
  <div className={pf('dropdown dropdown--left datepicker')} aria-hidden="false" data-selection="single">
    <div className={pf('datepicker__filter grid')}>
      <div className={pf('datepicker__filter--month grid grid--align-spread size--3-of-4')}>
        <div className={pf('align-middle')}>
          <ButtonIcon flavor="icon-container" iconFlavor="small" sprite="utility" symbol="left" assistiveText="Previous Month" />
        </div>
        <h2 id="month" className={pf('align-middle')} aria-live="assertive" aria-atomic="true">June</h2>
        <div className={pf('align-middle')}>
          <ButtonIcon flavor="icon-container" iconFlavor="small" sprite="utility" symbol="right" assistiveText="Next Month" />
        </div>
      </div>
      <div className={pf('picklist picklist--fluid shrink-none')}>
        <button id="year" className={pf('button button--neutral picklist__label')}
          aria-haspopup="true">
          2015 <SvgIcon className={pf('icon icon--small')} sprite="utility" symbol="down" />
        </button>
      </div>
    </div>
    <table className={pf('datepicker__month')} role="grid" aria-labelledby="month">
      <thead>
        <tr id="weekdays">
          <th id="Sunday"><abbr title="Sunday">Sun</abbr></th>
          <th id="Monday"><abbr title="Monday">Mon</abbr></th>
          <th id="Tuesday"><abbr title="Tuesday">Tue</abbr></th>
          <th id="Wednesday"><abbr title="Wednesday">Wed</abbr></th>
          <th id="Thursday"><abbr title="Thursday">Thu</abbr></th>
          <th id="Friday"><abbr title="Friday">Fri</abbr></th>
          <th id="Saturday"><abbr title="Saturday">Sat</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={pf('disabled-text')} headers="Sunday" role="gridcell" aria-disabled="true"><span className={pf('day')}>31</span></td>
          <td headers="Monday" role="gridcell" aria-selected="false"><span className={pf('day')}>1</span></td>
          <td headers="Tuesday" role="gridcell" aria-selected="false"><span className={pf('day')}>2</span></td>
          <td headers="Wednesday" role="gridcell" aria-selected="false"><span className={pf('day')}>3</span></td>
          <td headers="Thursday" role="gridcell" aria-selected="false"><span className={pf('day')}>4</span></td>
          <td headers="Friday" role="gridcell" aria-selected="false"><span className={pf('day')}>5</span></td>
          <td headers="Saturday" role="gridcell" aria-selected="false"><span className={pf('day')}>6</span></td>
        </tr>
        <tr>
          <td headers="Sunday" role="gridcell" aria-selected="false"><span className={pf('day')}>7</span></td>
          <td headers="Monday" role="gridcell" aria-selected="false"><span className={pf('day')}>8</span></td>
          <td headers="Tuesday" role="gridcell" aria-selected="false"><span className={pf('day')}>9</span></td>
          <td headers="Wednesday" role="gridcell" aria-selected="false"><span className={pf('day')}>10</span></td>
          <td headers="Thursday" role="gridcell" aria-selected="false"><span className={pf('day')}>11</span></td>
          <td headers="Friday" role="gridcell" aria-selected="false"><span className={pf('day')}>12</span></td>
          <td headers="Saturday" role="gridcell" aria-selected="false"><span className={pf('day')}>13</span></td>
        </tr>
        <tr>
          <td headers="Sunday" role="gridcell" aria-selected="false"><span className={pf('day')}>14</span></td>
          <td headers="Monday" role="gridcell" aria-selected="false"><span className={pf('day')}>15</span></td>
          <td headers="Tuesday" role="gridcell" aria-selected="false"><span className={pf('day')}>16</span></td>
          <td headers="Wednesday" role="gridcell" aria-selected="false"><span className={pf('day')}>17</span></td>
          <td className={pf('is-today')} headers="Thursday" role="gridcell" aria-selected="false"><span className={pf('day')}>18</span></td>
          <td headers="Friday" role="gridcell" aria-selected="false"><span className={pf('day')}>19</span></td>
          <td headers="Saturday" role="gridcell" aria-selected="false"><span className={pf('day')}>20</span></td>
        </tr>
        <tr>
          <td headers="Sunday" role="gridcell" aria-selected="false"><span className={pf('day')}>21</span></td>
          <td headers="Monday" role="gridcell" aria-selected="false"><span className={pf('day')}>22</span></td>
          <td className={pf('is-selected')} headers="Tuesday" role="gridcell" aria-selected="true"><span className={pf('day')}>23</span></td>
          <td headers="Wednesday" role="gridcell" aria-selected="false"><span className={pf('day')}>24</span></td>
          <td headers="Thursday" role="gridcell" aria-selected="false"><span className={pf('day')}>25</span></td>
          <td headers="Friday" role="gridcell" aria-selected="false"><span className={pf('day')}>26</span></td>
          <td headers="Saturday" role="gridcell" aria-selected="false"><span className={pf('day')}>27</span></td>
        </tr>
        <tr>
          <td headers="Sunday" role="gridcell" aria-selected="false"><span className={pf('day')}>28</span></td>
          <td headers="Monday" role="gridcell" aria-selected="false"><span className={pf('day')}>29</span></td>
          <td headers="Tuesday" role="gridcell" aria-selected="false"><span className={pf('day')}>30</span></td>
          <td className={pf('disabled-text')} headers="Wednesday" role="gridcell" aria-disabled="true"><span className={pf('day')}>1</span></td>
          <td className={pf('disabled-text')} headers="Thursday" role="gridcell" aria-disabled="true"><span className={pf('day')}>2</span></td>
          <td className={pf('disabled-text')} headers="Friday" role="gridcell" aria-disabled="true"><span className={pf('day')}>3</span></td>
          <td className={pf('disabled-text')} headers="Saturday" role="gridcell" aria-disabled="true"><span className={pf('day')}>4</span></td>
        </tr>
        <tr>
          <td colSpan="7" role="gridcell"><a href="javascript:void(0)" className={pf('show--inline-block p-bottom--x-small')}>Today</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
);
