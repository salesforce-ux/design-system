/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders horizontal list utilities', () => {
  it('renders horizontal list', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal">
        <li>Horizontal List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    ));

  it('renders horizontal list with inline links', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal">
        <li>
          <a href="javascript:void(0);">
            Horizontal List with inline level links
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizonta list with block links', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-block-links">
        <li>
          <a href="javascript:void(0);">
            Horizontal List with block level links
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with padded block links', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-block-links_space">
        <li>
          <a href="javascript:void(0);">
            Horizontal List with block level links and space
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with inline-block links', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-inline-block-links">
        <li>
          <a href="javascript:void(0);">
            Horizontal List with inline-block level links
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with padded inline-block links', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-inline-block-links_space">
        <li>
          <a href="javascript:void(0);">
            Horizontal List with inline-block level links and space
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li>
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with left dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_left">
        <li className="slds-item">
          Horizontal List with dot dividers to the left
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders horizontal list with block links and left dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_left slds-has-block-links">
        <li className="slds-item">
          <a href="javascript:void(0);">
            Horizontal List with block level links and dot dividers
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with padded block links and left dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_left slds-has-block-links_space">
        <li className="slds-item">
          <a href="javascript:void(0);">
            Horizontal List with block level links and dot dividers with space
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with right dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_right">
        <li className="slds-item">
          Horizontal List with dot dividers to the right
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders horizontal list with block links and right dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_right slds-has-block-links">
        <li className="slds-item">
          <a href="javascript:void(0);">
            Horizontal List with block level links and dot dividers
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));

  it('renders horizontal list with padded block links and right dividers', () =>
    matchesMarkupAndStyle(
      <ul className="slds-list_horizontal slds-has-dividers_right slds-has-block-links_space">
        <li className="slds-item">
          <a href="javascript:void(0);">
            Horizontal List with block level links and dot dividers with space
          </a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
        <li className="slds-item">
          <a href="javascript:void(0);">List Item</a>
        </li>
      </ul>
    ));
});
