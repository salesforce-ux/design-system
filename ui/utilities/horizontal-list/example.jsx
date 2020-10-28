// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'horizontal-list',
    label: 'Default',
    element: (
      <ul className="slds-list_horizontal">
        <li>Horizontal List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-links',
    label: 'Links',
    element: (
      <ul className="slds-list_horizontal">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with inline level links
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-block-links',
    label: 'Block links',
    element: (
      <ul className="slds-list_horizontal slds-has-block-links">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-block-links-space',
    label: 'Block links with space',
    element: (
      <ul className="slds-list_horizontal slds-has-block-links_space">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links and space
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-inline-block-links',
    label: 'Inline block links',
    element: (
      <ul className="slds-list_horizontal slds-has-inline-block-links">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with inline-block level links
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-inline-block-links-space',
    label: 'Inline block links with space',
    element: (
      <ul className="slds-list_horizontal slds-has-inline-block-links_space">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with inline-block level links and space
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-left',
    label: 'Divider on Left',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_left">
        <li className="slds-item">
          Horizontal List with dot dividers to the left
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-link-left',
    label: 'Divider on Left with link',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_left slds-has-block-links">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links and dot dividers
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-link-space-left',
    label: 'Divider on Left with link space',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links and dot dividers with space
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-right',
    label: 'Divider on Right',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_right">
        <li className="slds-item">
          Horizontal List with dot dividers to the right
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-link-right',
    label: 'Divider on Right with link',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_right slds-has-block-links">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links and dot dividers
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-link-space-right',
    label: 'Divider on Right with link space',
    element: (
      <ul className="slds-list_horizontal slds-has-dividers_right slds-has-block-links_space">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with block level links and dot dividers with space
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  },
  {
    id: 'horizontal-list-large',
    label: 'List with large spacing',
    element: (
      <ul className="slds-list_horizontal slds-list_horizontal-large">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            Horizontal List with large spacing between links
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List Item
          </a>
        </li>
      </ul>
    )
  }
];
