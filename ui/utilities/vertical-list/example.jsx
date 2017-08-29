// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'vertical-list',
    label: 'Default',
    element: (
      <ul>
        <li>Vertical List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    )
  },
  {
    id: 'unordered-list-decimal',
    label: 'Dotted',
    element: (
      <ul className="slds-list_dotted">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    )
  },
  {
    id: 'ordered-list-decimal',
    label: 'Decimal',
    element: (
      <ol className="slds-list_ordered">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ol>
    )
  },
  {
    id: 'vertical-list-links',
    label: 'Links',
    element: (
      <ul>
        <li>
          <a href="javascript:void(0);">Vertical List with links</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-list-block-links',
    label: 'Block links',
    element: (
      <ul className="slds-has-block-links">
        <li>
          <a href="javascript:void(0);">Vertical List with block links</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-list-block-links-space',
    label: 'Block links with space',
    element: (
      <ul className="slds-has-block-links_space">
        <li>
          <a href="javascript:void(0);">
            Vertical List with block links with space
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-list-inline-block-links',
    label: 'Inline block links',
    element: (
      <ul className="slds-has-inline-block-links">
        <li>
          <a href="javascript:void(0);">
            Vertical List with inline-block links
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-list-inline-block-links-space',
    label: 'Inline block links with space',
    element: (
      <ul className="slds-has-inline-block-links_space">
        <li>
          <a href="javascript:void(0);">
            Vertical List with inline-block links with space
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-list-nested',
    label: 'Nested vertical lists',
    element: (
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
    )
  },
  {
    id: 'vertical-dividers-top',
    label: 'Top',
    element: (
      <ul className="slds-has-dividers_top">
        <li className="slds-item">List item with top divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-top-space',
    label: 'Top with space',
    element: (
      <ul className="slds-has-dividers_top-space">
        <li className="slds-item">List item with top divider with space</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-top',
    label: 'Top with link',
    element: (
      <ul className="slds-has-dividers_top slds-has-block-links">
        <li className="slds-item">
          <a href="javascript:void(0);">List item with link and top divider</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-top-space',
    label: 'Top with link and space',
    element: (
      <ul className="slds-has-dividers_top slds-has-block-links_space">
        <li className="slds-item">
          <a href="javascript:void(0);">List item with link and top divider</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-bottom',
    label: 'Bottom',
    element: (
      <ul className="slds-has-dividers_bottom">
        <li className="slds-item">List item with bottom divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-bottom-space',
    label: 'Bottom with space',
    element: (
      <ul className="slds-has-dividers_bottom-space">
        <li className="slds-item">List item with bottom divider with space</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-bottom',
    label: 'Bottom with link',
    element: (
      <ul className="slds-has-dividers_bottom slds-has-block-links">
        <li className="slds-item">
          <a href="javascript:void(0);">
            List item with link and bottom divider
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-bottom-space',
    label: 'Bottom with link and space',
    element: (
      <ul className="slds-has-dividers_bottom slds-has-block-links_space">
        <li className="slds-item">
          <a href="javascript:void(0);">
            List item with link and bottom divider with space
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-around',
    label: 'Around',
    element: (
      <ul className="slds-has-dividers_around">
        <li className="slds-item">List item with around divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-around-space',
    label: 'Around with space',
    element: (
      <ul className="slds-has-dividers_around-space">
        <li className="slds-item">List item with around divider with space</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-around',
    label: 'Around with link',
    element: (
      <ul className="slds-has-dividers_around slds-has-block-links">
        <li className="slds-item">
          <a href="javascript:void(0);">
            List item with link and around divider
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  },
  {
    id: 'vertical-dividers-link-around-space',
    label: 'Around with link and space',
    element: (
      <ul className="slds-has-dividers_around slds-has-block-links_space">
        <li className="slds-item">
          <a href="javascript:void(0);">
            List item with link and around divider with space
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    )
  }
];
