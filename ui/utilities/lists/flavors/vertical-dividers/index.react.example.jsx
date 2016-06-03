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
    id: 'vertical-dividers-top',
    label: 'Top',
    element:
      <ul className={pf('has-dividers--top')}>
        <li className={pf('item')}>List item with top divider</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-top-space',
    label: 'Top with space',
    element:
      <ul className={pf('has-dividers--top-space')}>
        <li className={pf('item')}>List item with top divider with space</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-top',
    label: 'Top with link',
    element:
      <ul className={pf('has-dividers--top has-block-links')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and top divider</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-top-space',
    label: 'Top with link and space',
    element:
      <ul className={pf('has-dividers--top has-block-links--space')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and top divider</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-dividers-bottom',
    label: 'Bottom',
    element:
      <ul className={pf('has-dividers--bottom')}>
        <li className={pf('item')}>List item with bottom divider</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-bottom-space',
    label: 'Bottom with space',
    element:
      <ul className={pf('has-dividers--bottom-space')}>
        <li className={pf('item')}>List item with bottom divider with space</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-bottom',
    label: 'Bottom with link',
    element:
      <ul className={pf('has-dividers--bottom has-block-links')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and bottom divider</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-bottom-space',
    label: 'Bottom with link and space',
    element:
      <ul className={pf('has-dividers--bottom has-block-links--space')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and bottom divider with space</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-dividers-around',
    label: 'Around',
    element:
      <ul className={pf('has-dividers--around')}>
        <li className={pf('item')}>List item with around divider</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-around-space',
    label: 'Around with space',
    element:
      <ul className={pf('has-dividers--around-space')}>
        <li className={pf('item')}>List item with around divider with space</li>
        <li className={pf('item')}>List Item</li>
        <li className={pf('item')}>List Item</li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-around',
    label: 'Around with link',
    element:
      <ul className={pf('has-dividers--around has-block-links')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and around divider</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-dividers-link-around-space',
    label: 'Around with link and space',
    element:
      <ul className={pf('has-dividers--around has-block-links--space')}>
        <li className={pf('item')}><a href="javascript:void(0);">List item with link and around divider with space</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
        <li className={pf('item')}><a href="javascript:void(0);">List Item</a></li>
      </ul>
  }
];
