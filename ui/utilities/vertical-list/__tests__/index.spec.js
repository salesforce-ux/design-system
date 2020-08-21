/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders vertical list utiltiies', () => {
  it('renders unordered list', () =>
    matchesMarkup(
      <ul>
        <li>Vertical List</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    ));

  it('renders nested unordered lists', () =>
    matchesMarkup(
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
    ));

  it('renders unordered list with links', () =>
    matchesMarkup(
      <ul>
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Vertical List with links
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

  it('renders unordered list with block links', () =>
    matchesMarkup(
      <ul className="slds-has-block-links">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Vertical List with links
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

  it('renders unordered list with padded block links', () =>
    matchesMarkup(
      <ul className="slds-has-block-links_space">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Vertical List with links
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

  it('renders unordered list with inline-block links', () =>
    matchesMarkup(
      <ul className="slds-has-inline-block-links">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Vertical List with links
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

  it('renders unordered list with padded inline-block links', () =>
    matchesMarkup(
      <ul className="slds-has-inline-block-links_space">
        <li>
          <a href="#" onClick={e => e.preventDefault()}>
            Vertical List with links
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

  it('renders dotted list style', () =>
    matchesMarkup(
      <ul className="slds-list_dotted">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    ));

  it('renders decimal list style', () =>
    matchesMarkup(
      <ol className="slds-list_ordered">
        <li>Basic ordered list</li>
        <li>List Item</li>
        <li>List Item</li>
      </ol>
    ));

  it('renders top dividers on list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_top">
        <li className="slds-item">List item with top divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders top dividers on padded list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_top-space">
        <li className="slds-item">List item with top divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders top dividers on list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_top slds-has-block-links">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and top divider
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

  it('renders top dividers on padded list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_top slds-has-block-links_space">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and top divider
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

  it('renders bottom dividers on list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_bottom">
        <li className="slds-item">List item with bottom divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders bottom dividers on padded list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_bottom-space">
        <li className="slds-item">List item with bottom divider with space</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders bottom dividers on list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_bottom slds-has-block-links">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and bottom divider
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

  it('renders bottom dividers on padded list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_bottom slds-has-block-links_space">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and bottom divider with space
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

  it('renders dividers around the list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_around">
        <li className="slds-item">List item with around divider</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders dividers around the padded list items', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_around-space">
        <li className="slds-item">List item with around divider with space</li>
        <li className="slds-item">List Item</li>
        <li className="slds-item">List Item</li>
      </ul>
    ));

  it('renders dividers around the list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_around slds-has-block-links">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and around divider
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

  it('renders dividers around the padded list items with block links', () =>
    matchesMarkup(
      <ul className="slds-has-dividers_around slds-has-block-links_space">
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item with link and around divider with space
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

  it('renders list items with interactions', () =>
    matchesMarkup(
      <ul className="slds-has-list-interactions slds-has-block-links_space">
        <li className="slds-item slds-is-selected">
          <a href="#" onClick={e => e.preventDefault()}>
            List item
          </a>
        </li>
        <li className="slds-item">
          <a href="#" onClick={e => e.preventDefault()}>
            List item
          </a>
        </li>
      </ul>
    ));
});
