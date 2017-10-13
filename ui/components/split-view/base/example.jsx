// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import ButtonIcon from '../../button-icons/';

const results = [
  {
    unread: true,
    colOne: 'Riley Shultz',
    colTwo: '99',
    colThree: 'Biotech, Inc.',
    colFour: 'Nurturing'
  },
  {
    unread: true,
    colOne: 'Jason A. - VP of Sales',
    colTwo: '92',
    colThree: 'Case Management Solutions',
    colFour: 'Contacted'
  },
  {
    unread: true,
    colOne: 'Josh Smith',
    colTwo: '90',
    colThree: 'Acme, Inc.',
    colFour: 'Contacted'
  },
  {
    unread: true,
    colOne: 'Bobby Tree',
    colTwo: '89',
    colThree: 'Salesforce, Inc.',
    colFour: 'Closing'
  },
  {
    selected: true,
    colOne: 'Riley Shultz',
    colTwo: '74',
    colThree: 'Tesla',
    colFour: 'Contacted'
  },
  {
    unread: true,
    colOne: 'Andy Smith',
    colTwo: '72',
    colThree: 'Universal Technologies',
    colFour: 'New'
  },
  {
    colOne: 'Jim Steele',
    colTwo: '71',
    colThree: 'BigList, Inc.',
    colFour: 'New'
  },
  {
    colOne: 'John Gardner',
    colTwo: '70',
    colThree: '3C Systems',
    colFour: 'Contacted'
  },
  {
    colOne: 'Sarah Loehr',
    colTwo: '68',
    colThree: 'MedLife, Inc.',
    colFour: 'New'
  }
];

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let SplitView = props => (
  <div
    className={classNames(
      'slds-split-view_container',
      props.hidden ? 'slds-is-closed' : 'slds-is-open'
    )}
  >
    <ButtonIcon
      aria-controls="split-view-id"
      aria-expanded={props.hidden ? 'false' : 'true'}
      className={classNames(
        'slds-button_icon slds-split-view__toggle-button',
        props.hidden ? 'slds-is-closed' : 'slds-is-open'
      )}
      iconClassName="slds-button__icon_x-small"
      symbol="left"
      assistiveText={props.hidden ? 'Open Split View' : 'Close Split View'}
      title={props.hidden ? 'Open Split View' : 'Close Split View'}
    />
    <article
      aria-hidden={props.hidden ? 'true' : 'false'}
      id="split-view-id"
      className={classNames(
        'slds-split-view slds-grid slds-grid_vertical slds-grow',
        props.className
      )}
    >
      <header className="slds-split-view__header">
        <div className="slds-grid slds-grid_vertical-align-center slds-m-bottom_xx-small">
          <div className="slds-has-flexi-truncate">
            <div className="slds-media slds-media_center">
              <div className="slds-media__figure">
                <div className="slds-icon_container slds-icon-standard-lead">
                  <SvgIcon
                    className="slds-icon"
                    sprite="standard"
                    symbol="lead"
                  />
                  <span className="slds-assistive-text">Leads</span>
                </div>
              </div>
              <div className="slds-media__body">
                <h1 className="slds-text-heading_small slds-text-color_default slds-p-right_x-small">
                  <button
                    className="slds-button slds-button_reset slds-type-focus slds-truncate"
                    aria-haspopup="true"
                    title=""
                  >
                    <span className="slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center">
                      <span className="slds-truncate" title="My Leads">
                        My Leads
                      </span>
                      <SvgIcon
                        className="slds-button__icon slds-button__icon_right slds-no-flex"
                        sprite="utility"
                        symbol="down"
                      />
                    </span>
                  </button>
                </h1>
              </div>
            </div>
          </div>
          <div className="slds-no-flex slds-grid">
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions"
            />
          </div>
        </div>
        <div className="slds-grid slds-grid_vertical-align-center">
          <p className="slds-text-body_small slds-text-color_weak">
            42 items &bull; Updated just now
          </p>
          <div className="slds-no-flex slds-grid slds-col_bump-left">
            <div className="slds-button-group">
              <ButtonIcon
                hasDropdown
                className="slds-button_icon slds-button_icon-container-more"
                symbol="side_list"
                title="Display As Split View"
                assistiveText="Display As Split View"
              />
            </div>
            <div className="slds-button-group">
              <ButtonIcon
                className="slds-button_icon slds-button_icon-container"
                symbol="refresh"
                title="Refresh List"
                assistiveText="Refresh List"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="slds-grid slds-grid_vertical">
        <div className="slds-split-view__list-header slds-grid slds-text-title_caps">
          <span className="slds-assistive-text">Sorted by:</span>
          <span>
            Lead Score
            <SvgIcon
              className="slds-icon slds-icon_xx-small slds-icon-text-default slds-align-top"
              sprite="utility"
              symbol="arrowdown"
            />
          </span>
          <span className="slds-assistive-text">- Descending</span>
        </div>
        <ul
          aria-multiselectable="true"
          className="slds-scrollable_y"
          role="listbox"
          aria-label="Select an item to open it in a new workspace tab."
        >
          {props.children}
        </ul>
      </div>
    </article>
  </div>
);

let Row = props => (
  <li
    className={classNames(
      'slds-split-view__list-item',
      props.className,
      props.unread ? 'slds-is-unread' : null
    )}
    role="presentation"
  >
    <a
      href="javascript:void(0);"
      aria-selected={!!props.selected}
      role="option"
      className="slds-split-view__list-item-action slds-grow slds-has-flexi-truncate"
      tabIndex={props.tabIndex}
    >
      {props.unread ? (
        <abbr
          className="slds-indicator_unread"
          title="Unread Item"
          aria-label="Unread Item"
        >
          <span className="slds-assistive-text">●</span>
        </abbr>
      ) : null}
      <div className="slds-grid slds-wrap">
        <span
          className="slds-truncate slds-text-body_regular slds-text-color_default"
          title={props.colOne || 'Object Name'}
        >
          {props.colOne || 'Column 1'}
        </span>
        <span
          className="slds-truncate slds-col_bump-left"
          title={props.colTwo || 'Column 2'}
        >
          {props.colTwo || 'Column 2'}
        </span>
      </div>
      <div className="slds-grid slds-wrap">
        <span className="slds-truncate" title={props.colThree || 'Column 3'}>
          {props.colThree || 'Column 3'}
        </span>
        <span
          className="slds-truncate slds-col_bump-left"
          title={props.colFour || 'Column 4'}
        >
          {props.colFour || 'Column 4'}
        </span>
      </div>
    </a>
  </li>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <div
    className="demo-only"
    style={{ display: 'flex', width: '20rem', height: '37.5rem' }}
  >
    <SplitView>
      {results
        .slice(0, 5)
        .map((result, i) => (
          <Row
            key={i}
            colOne={result.colOne}
            colTwo={result.colTwo}
            colThree={result.colThree}
            colFour={result.colFour}
            tabIndex={i === 0 ? 0 : -1}
          />
        ))}
    </SplitView>
  </div>
);

export let states = [
  {
    id: 'selected-item',
    label: 'Selected Item',
    element: (
      <div
        className="demo-only"
        style={{ display: 'flex', width: '20rem', height: '37.5rem' }}
      >
        <SplitView>
          {results
            .slice(0, 5)
            .map((result, i) => (
              <Row
                key={i}
                selected={result.selected}
                colOne={result.colOne}
                colTwo={result.colTwo}
                colThree={result.colThree}
                colFour={result.colFour}
                tabIndex={i === 0 ? 0 : -1}
              />
            ))}
        </SplitView>
      </div>
    )
  },
  {
    id: 'overflow',
    label: 'Overflow',
    element: (
      <div
        className="demo-only"
        style={{ display: 'flex', width: '20rem', height: '37.5rem' }}
      >
        <SplitView>
          {results.map((result, i) => (
            <Row
              key={i}
              colOne={result.colOne}
              colTwo={result.colTwo}
              colThree={result.colThree}
              colFour={result.colFour}
              tabIndex={i === 0 ? 0 : -1}
            />
          ))}
        </SplitView>
      </div>
    )
  },
  {
    id: 'unread',
    label: 'Unread Items',
    element: (
      <div
        className="demo-only"
        style={{ display: 'flex', width: '20rem', height: '37.5rem' }}
      >
        <SplitView>
          {results.map((result, i) => (
            <Row
              key={i}
              unread={result.unread}
              colOne={result.colOne}
              colTwo={result.colTwo}
              colThree={result.colThree}
              colFour={result.colFour}
              tabIndex={i === 0 ? 0 : -1}
            />
          ))}
        </SplitView>
      </div>
    )
  },
  {
    id: 'panel-collapsed',
    label: 'Collapsed Panel',
    element: (
      <div
        className="demo-only"
        style={{ display: 'flex', width: '20rem', height: '37.5rem' }}
      >
        <SplitView hidden>
          {results.map((result, i) => (
            <Row
              key={i}
              unread={result.unread}
              colOne={result.colOne}
              colTwo={result.colTwo}
              colThree={result.colThree}
              colFour={result.colFour}
              tabIndex={i === 0 ? 0 : -1}
            />
          ))}
        </SplitView>
      </div>
    )
  }
];
