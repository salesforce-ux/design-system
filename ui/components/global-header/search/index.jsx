// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { SearchResults, TypeaheadSearchResults } from './data';

/**
 * Result Options
 */
const SearchResultOptions = props => (
  <li role="presentation" key={props.index}>
    <span
      className={classNames(
        'slds-lookup__item-action slds-media',
        props.advanced &&
          'slds-lookup__item-action_label slds-text-body_small slds-has-focus'
      )}
      id={`option-${props.index}`}
      role="option"
    >
      <SvgIcon
        className={classNames(
          'slds-icon slds-media__figure',
          props.iconSet === 'utility'
            ? 'slds-icon_x-small slds-icon-text-default'
            : `slds-icon-${props.iconSet ||
                'standard'}-${props.icon} slds-icon_small`
        )}
        sprite={props.iconSet || 'standard'}
        symbol={props.icon}
      />
      <span className="slds-media__body">
        <span className="slds-lookup__result-text">
          {props.keyword ? (
            !props.advanced ? (
              <mark>{props.keyword}</mark>
            ) : (
              `"${props.keyword.toLowerCase()}"`
            )
          ) : null}{' '}
          {props.name}
        </span>
        <span className="slds-lookup__result-meta slds-text-body_small">
          {props.object} {props.field && `• ${props.field}`}
        </span>
      </span>
    </span>
  </li>
);

class GlobalSearch extends Component {
  constructor() {
    super();
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults(key) {
    const result = this.props.value
      ? TypeaheadSearchResults[key]
      : SearchResults[key];
    return (
      <SearchResultOptions
        key={key}
        index={key}
        advanced={result.advanced}
        keyword={this.props.value}
        name={result.name}
        iconSet={result.iconSet}
        icon={result.icon}
        object={result.object}
        field={result.field}
      />
    );
  }

  render() {
    const { expanded, value } = this.props;

    return (
      <div
        className={classNames(
          'slds-form-element slds-lookup',
          expanded ? 'slds-is-open' : null
        )}
        aria-expanded={expanded ? 'true' : 'false'}
        aria-haspopup="listbox"
        role="combobox"
      >
        <label className="slds-assistive-text" htmlFor="global-search-01">
          Search Salesforce
        </label>

        <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right">
          <SvgIcon
            className="slds-input__icon slds-input__icon_left"
            sprite="utility"
            symbol="search"
          />
          <input
            aria-activedescendant={value ? 'option-item0' : null}
            aria-autocomplete="list"
            aria-controls={expanded && 'global-search-list-01'}
            autoComplete="off"
            className="slds-input slds-lookup__search-input"
            id="global-search-01"
            placeholder="Search Salesforce"
            role="textbox"
            type="text"
            defaultValue={value && value.toLowerCase()}
          />
          {value && (
            <button className="slds-input__icon slds-input__icon_right slds-button slds-button_icon">
              <SvgIcon
                className="slds-button__icon"
                sprite="utility"
                symbol="clear"
              />
              <span className="slds-assistive-text">
                Clear the current search term
              </span>
            </button>
          )}
        </div>
        {expanded && (
          <div
            className="slds-lookup__menu"
            role="listbox"
            id="global-search-list-01"
          >
            <ul
              className="slds-lookup__list"
              role={value ? 'presentation' : 'group'}
              aria-label={!value && 'Recent Items'}
            >
              {!value && (
                <li role="presentation">
                  <h3
                    role="presentation"
                    className="slds-lookup__item_label slds-text-body_small"
                  >
                    Recent Items
                  </h3>
                </li>
              )}
              {value
                ? Object.keys(TypeaheadSearchResults).map(this.renderResults)
                : Object.keys(SearchResults).map(this.renderResults)}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default GlobalSearch;
