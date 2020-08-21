/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders horizontal list utilities', () => {
  it('renders horizontal list', () =>
    matchesMarkup(
      <ul className="slds-list_horizontal">
        <li>Horizontal List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    ));

  it('renders horizontal list with inline links', () =>
    matchesMarkup(
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
    ));

  it('renders horizonta list with block links', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with padded block links', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with inline-block links', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with padded inline-block links', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with left dividers', () =>
    matchesMarkup(
      <ul className="slds-list_horizontal slds-has-dividers_left">
        <li className="slds-item">
          Horizontal List with dot dividers to the left
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders horizontal list with block links and left dividers', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with padded block links and left dividers', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with right dividers', () =>
    matchesMarkup(
      <ul className="slds-list_horizontal slds-has-dividers_right">
        <li className="slds-item">
          Horizontal List with dot dividers to the right
        </li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders horizontal list with block links and right dividers', () =>
    matchesMarkup(
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
    ));

  it('renders horizontal list with padded block links and right dividers', () =>
    matchesMarkup(
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
    ));
});
