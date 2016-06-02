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

export let states = [
  {
    id: 'horizontal-list-left',
    label: 'Left',
    element:
      <ul className={pf('list--horizontal has-dividers--left')}>
        <li className={pf('item')}>Horizontal List with dot dividers to the left</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-link-left',
    label: 'Left with link',
    element:
      <ul className={pf('list--horizontal has-dividers--left has-block-links')}>
        <li className={pf('item')}><a href="javascript:void(0);">Horizontal List with block level links and dot dividers</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-link-space-left',
    label: 'Left with link space',
    element:
      <ul className={pf('list--horizontal has-dividers--left has-block-links--space')}>
        <li className={pf('item')}><a href="javascript:void(0);">Horizontal List with block level links and dot dividers with space</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-right',
    label: 'Right',
    element:
      <ul className={pf('list--horizontal has-dividers--right')}>
        <li className={pf('item')}>Horizontal List with dot dividers to the right</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-link-right',
    label: 'Right with link',
    element:
      <ul className={pf('list--horizontal has-dividers--right has-block-links')}>
        <li className={pf('item')}><a href="javascript:void(0);">Horizontal List with block level links and dot dividers</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-link-space-right',
    label: 'Right with link space',
    element:
      <ul className={pf('list--horizontal has-dividers--right has-block-links--space')}>
        <li className={pf('item')}><a href="javascript:void(0);">Horizontal List with block level links and dot dividers with space</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  }
];
