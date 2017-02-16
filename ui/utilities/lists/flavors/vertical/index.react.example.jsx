// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'vertical-list',
    label: 'Default',
    element:
      <ul>
        <li>Vertical List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
  },
  {
    id: 'unordered-list-decimal',
    label: 'Dotted',
    element:
      <ul className="slds-list--dotted">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
  },
  {
    id: 'ordered-list-decimal',
    label: 'Decimal',
    element:
      <ol className="slds-list--ordered">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ol>
  },
  {
    id: 'vertical-list-links',
    label: 'Links',
    element:
      <ul>
        <li><a href="javascript:void(0);">Vertical List with links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-list-block-links',
    label: 'Block links',
    element:
      <ul className="slds-has-block-links">
        <li><a href="javascript:void(0);">Vertical List with block links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-list-block-links-space',
    label: 'Block links with space',
    element:
      <ul className="slds-has-block-links--space">
        <li><a href="javascript:void(0);">Vertical List with block links with space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-list-inline-block-links',
    label: 'Inline block links',
    element:
      <ul className="slds-has-inline-block-links">
        <li><a href="javascript:void(0);">Vertical List with inline-block links</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-list-inline-block-links-space',
    label: 'Inline block links with space',
    element:
      <ul className="slds-has-inline-block-links--space">
        <li><a href="javascript:void(0);">Vertical List with inline-block links with space</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
        <li><a href="javascript:void(0);">List Item</a></li>
      </ul>
  },
  {
    id: 'vertical-list-nested',
    label: 'Nested vertical lists',
    element:
      <ul>
        <li>Vertical List with nested vertical lists</li>
        <li>List Item</li>
        <li>
          <ul className="slds-is-nested">
            <li>Nested Vertical List</li>
            <li>List Item</li>
            <li>
              <ul className="slds-is-nested">
                <li>Nested Vertical List</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
  }
];
