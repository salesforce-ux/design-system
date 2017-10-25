// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Panel } from '../detail/example';
import { PanelBody } from '../detail/example';
import { PanelSection } from '../detail/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div
    className="demo-only slds-grid"
    style={{ height: '800px', maxWidth: '420px', overflow: 'hidden' }}
  >
    {props.children}
  </div>
);

export let Filters = props => (
  <div className={classNames('slds-filters', props.className)}>
    {props.children}
  </div>
);

export let FiltersHeader = props => (
  <div
    className={classNames(
      'slds-filters__header slds-grid slds-has-divider_bottom-space',
      props.className
    )}
  >
    {props.children}
  </div>
);

export let FiltersBody = props => (
  <div className="slds-filters__body">{props.children}</div>
);

export let FiltersFooter = props => (
  <div className="slds-filters__footer slds-grid slds-shrink-none">
    <button className="slds-button_reset slds-text-link">Add Filter</button>
    <button className="slds-button_reset slds-text-link slds-col_bump-left">
      Remove All
    </button>
  </div>
);

export let FilterObject = props => {
  let ariaDesribedBy;
  if (props.errorMessage) {
    ariaDesribedBy = 'error-filter-01';
  }

  return (
    <li className="slds-item slds-hint-parent">
      <div
        className={classNames(
          'slds-filters__item slds-grid slds-grid_vertical-align-center',
          props.className
        )}
      >
        <button
          className="slds-button_reset slds-grow slds-has-blur-focus"
          aria-describedby={ariaDesribedBy}
          disabled={props.disabled}
        >
          <span className="slds-assistive-text">Edit filter:</span>
          {props.type ? (
            <span className="slds-show slds-text-body_small">{props.type}</span>
          ) : null}
          <span className="slds-show">{props.children}</span>
        </button>
        {props.removable ? (
          <ButtonIcon
            className="slds-button_icon slds-button_icon-small"
            iconClassName="slds-button__icon_hint"
            symbol="close"
            assistiveText={
              props.type
                ? 'Remove filter: ' + props.type + ' ' + props.children
                : 'Remove filter: ' + props.children
            }
            title={'Remove ' + props.children}
          />
        ) : null}
      </div>
      {props.errorMessage ? (
        <p
          id={ariaDesribedBy}
          className="slds-text-color_error slds-m-top_xx-small"
        >
          {props.errorMessage}
        </p>
      ) : null}
    </li>
  );
};

/// ////////////////////////////////////////
// State Constructor(s)
/// ////////////////////////////////////////

let Default = props => (
  <Demo>
    <Panel className="slds-panel_filters">
      <PanelBody className="slds-grid slds-grid_vertical">
        <Filters>
          <FiltersHeader>
            <h2 className="slds-align-middle slds-text-heading_small">
              Filter
            </h2>
            <ButtonIcon
              className="slds-col_bump-left slds-button_icon slds-button_icon-small"
              symbol="forward"
              assistiveText="Close Filter Panel"
              title="Close Filter Panel"
            />
          </FiltersHeader>
          <FiltersBody>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <h3 className="slds-text-body_small slds-m-vertical_x-small">
              Matching all these filters
            </h3>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Created Date" removable>
                equals THIS WEEK
              </FilterObject>
              <FilterObject type="List Price" removable>
                greater than "500"
              </FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>
);

let NewFilter = props => (
  <Demo>
    <Panel className="slds-panel_filters">
      <PanelBody className="slds-grid slds-grid_vertical">
        <Filters>
          <FiltersHeader className="slds-grid_align-spread">
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Save</button>
          </FiltersHeader>
          <FiltersBody>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <h3 className="slds-text-body_small slds-m-vertical_x-small">
              Matching all these filters
            </h3>
            <ul className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Created Date" removable>
                equals THIS WEEK
              </FilterObject>
              <FilterObject type="List Price" removable>
                greater than "500"
              </FilterObject>
              <FilterObject className="slds-is-new" removable>
                New Filter
              </FilterObject>
            </ul>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>
);

let ErrorPanel = props => (
  <Demo>
    <Panel className="slds-panel_filters">
      <PanelBody className="slds-grid slds-grid_vertical">
        <Filters>
          <FiltersHeader className="slds-grid_align-spread">
            <button className="slds-button slds-button_neutral">Cancel</button>
            <button className="slds-button slds-button_brand">Save</button>
          </FiltersHeader>
          <FiltersBody>
            <div
              className="slds-text-color_error slds-m-bottom_x-small"
              role="alert"
            >
              Filters could not be applied. Please fix the validation errors
              below.
            </div>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <h3 className="slds-text-body_small slds-m-vertical_x-small">
              Matching all these filters
            </h3>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Created Date" removable>
                equals THIS WEEK
              </FilterObject>
              <FilterObject type="List Price" removable>
                greater than "500"
              </FilterObject>
              <FilterObject
                className="slds-has-error"
                type="Stage"
                errorMessage="Error Message"
                removable
              >
                equals "Red"
              </FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>
);

let Locked = props => (
  <Demo>
    <Panel className="slds-panel_filters">
      <PanelBody className="slds-grid slds-grid_vertical">
        <Filters>
          <FiltersHeader>
            <h2 className="slds-align-middle slds-text-heading_small">
              Filter
            </h2>
            <ButtonIcon
              className="slds-col_bump-left slds-button_icon slds-button_icon-small"
              symbol="forward"
              assistiveText="Close Filter Panel"
              title="Close Filter Panel"
            />
          </FiltersHeader>
          <FiltersBody>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Show Me">All Products</FilterObject>
            </ol>
            <h3 className="slds-text-body_small slds-m-vertical_x-small">
              Matching all these filters
            </h3>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject type="Created Date" removable>
                equals THIS WEEK
              </FilterObject>
              <FilterObject type="List Price" removable>
                greater than "500"
              </FilterObject>
            </ol>
            <h3 className="slds-text-body_small slds-m-vertical_x-small slds-grid">
              Locked Filters
              <SvgIcon
                className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_x-small"
                sprite="utility"
                symbol="lock"
              />
            </h3>
            <ol className="slds-list_vertical slds-list_vertical-space">
              <FilterObject className="slds-is-locked" type="Name" disabled>
                equals "ACME"
              </FilterObject>
            </ol>
          </FiltersBody>
          <FiltersFooter />
        </Filters>
      </PanelBody>
    </Panel>
  </Demo>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default <Default />;

export let states = [
  {
    id: 'filtering-new-object',
    label: 'New filter',
    element: <NewFilter />
  },
  {
    id: 'filtering-error',
    label: 'Error',
    element: <ErrorPanel />
  },
  {
    id: 'filtering-locked',
    label: 'Locked Filters',
    element: <Locked />
  }
];
