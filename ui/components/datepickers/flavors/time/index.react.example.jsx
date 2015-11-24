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
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className='demo-only' style={{height: '225px'}}>
  <div className={pf('dropdown dropdown--left datepicker--time')} aria-hidden="false" data-selection="time">
    <ul className={pf('datepicker--time__list')}>
      <li aria-selected="false">12:00am</li>
      <li aria-selected="false">12:30am</li>
      <li aria-selected="false">1:00am</li>
      <li aria-selected="false">1:30am</li>
      <li aria-selected="false">2:00am</li>
      <li aria-selected="false">2:30am</li>
      <li aria-selected="false">3:00am</li>
      <li aria-selected="false">3:30am</li>
      <li aria-selected="false">4:00am</li>
      <li aria-selected="false">4:30am</li>
      <li aria-selected="false">5:00am</li>
      <li aria-selected="false">5:30am</li>
      <li aria-selected="false">6:00am</li>
      <li aria-selected="false">6:30am</li>
      <li aria-selected="false">7:00am</li>
      <li aria-selected="false">7:30am</li>
      <li aria-selected="false">8:00am</li>
      <li aria-selected="false">8:30am</li>
      <li aria-selected="false">9:00am</li>
      <li aria-selected="false">9:30am</li>
      <li aria-selected="false">10:00am</li>
      <li aria-selected="false">10:30am</li>
      <li aria-selected="false">11:00am</li>
      <li aria-selected="false">11:30am</li>
      <li aria-selected="false">12:00pm</li>
      <li aria-selected="false">12:30pm</li>
      <li aria-selected="false">1:00pm</li>
      <li aria-selected="false">1:30pm</li>
      <li aria-selected="false">2:00pm</li>
      <li aria-selected="false">2:30pm</li>
      <li aria-selected="false">3:00pm</li>
      <li aria-selected="false">3:30pm</li>
      <li aria-selected="false">4:00pm</li>
      <li aria-selected="false">4:30pm</li>
      <li aria-selected="false">5:00pm</li>
      <li aria-selected="false">5:30pm</li>
      <li aria-selected="false">6:00pm</li>
      <li aria-selected="false">6:30pm</li>
      <li aria-selected="false">7:00pm</li>
      <li aria-selected="false">7:30pm</li>
      <li aria-selected="false">8:00pm</li>
      <li aria-selected="false">8:30pm</li>
      <li aria-selected="false">9:00pm</li>
      <li aria-selected="false">9:30pm</li>
      <li aria-selected="false">10:00pm</li>
      <li aria-selected="false">10:30pm</li>
      <li aria-selected="false">11:00pm</li>
      <li aria-selected="false">11:30pm</li>
    </ul>
  </div>
</div>
);
