/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { prefix as pf } from 'app_modules/ui/util/component';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Popover = props =>
<div className={pf(`popover nubbin--${props.nubbinPosition}`)} role="dialog">
  <div className={pf('popover__body')}>
    <code>
      {pf('popover')}
      <br />
      {pf(`nubbin--${props.nubbinPosition}`)}
    </code>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!</p>
  </div>
</div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'left',
    label: 'Left',
    element: <Popover nubbinPosition="left" />
  },
  {
    id: 'left-top',
    label: 'Left (top)',
    element: <Popover nubbinPosition="left-top" />
  },
  {
    id: 'left-bottom',
    label: 'Left (bottom)',
    element: <Popover nubbinPosition="left-bottom" />
  },
  {
    id: 'top',
    label: 'Top',
    element: <Popover nubbinPosition="top" />
  },
  {
    id: 'top-left',
    label: 'Top (left)',
    element: <Popover nubbinPosition="top-left" />
  },
  {
    id: 'top-right',
    label: 'Top (right)',
    element: <Popover nubbinPosition="top-right" />
  },
  {
    id: 'right',
    label: 'Right',
    element: <Popover nubbinPosition="right" />
  },
  {
    id: 'right-top',
    label: 'Right (top)',
    element: <Popover nubbinPosition="right-top" />
  },
  {
    id: 'right-bottom',
    label: 'Right (bottom)',
    element: <Popover nubbinPosition="right-bottom" />
  },
  {
    id: 'bottom',
    label: 'Bottom',
    element: <Popover nubbinPosition="bottom" />
  },
  {
    id: 'bottom-left',
    label: 'Bottom (left)',
    element: <Popover nubbinPosition="bottom-left" />
  },
  {
    id: 'bottom-right',
    label: 'Bottom (right)',
    element: <Popover nubbinPosition="bottom-right" />
  }
];
