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
    id: 'horizontal-list',
    label: 'Default',
    element:
      <ul className={pf('list--horizontal')}>
        <li>Horizontal List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
  },
  {
    id: 'horizontal-list-links',
    label: 'Links',
    element:
      <ul className={pf('list--horizontal')}>
        <li><a href="javascript:void(0);">Horizontal List with inline level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-block-links',
    label: 'Block links',
    element:
      <ul className={pf('list--horizontal has-block-links')}>
        <li><a href="javascript:void(0);">Horizontal List with block level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-block-links-space',
    label: 'Block links with space',
    element:
      <ul className={pf('list--horizontal has-block-links--space')}>
        <li><a href="javascript:void(0);">Horizontal List with block level links and space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-inline-block-links',
    label: 'Inline block links',
    element:
      <ul className={pf('list--horizontal has-inline-block-links')}>
        <li><a href="javascript:void(0);">Horizontal List with inline-block level links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'horizontal-list-inline-block-links-space',
    label: 'Inline block links with space',
    element:
      <ul className={pf('list--horizontal has-inline-block-links--space')}>
        <li><a href="javascript:void(0);">Horizontal List with inline-block level links and space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  }
];
