// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Modal, ModalHeader, ModalContent } from '../../modals/base/example';
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionTitleAction
} from '../../expandable-section/base/example';
import { Avatar } from '../../avatar/base/example';
import classNames from 'classnames';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////
export let AppLauncherModal = props => (
  <Modal
    className="slds-modal_large slds-app-launcher"
    aria-labelledby="header43"
  >
    <ModalHeader className="slds-app-launcher__header slds-grid slds-grid_align-spread slds-grid_vertical-align-center">
      <h2 id="header43" className="slds-text-heading_medium">
        App Launcher
      </h2>
      <div className="slds-app-launcher__header-search">
        <div className="slds-form-element">
          <label
            htmlFor="app-launcher-search"
            className="slds-form-element__label slds-assistive-text"
          >
            Find an app
          </label>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
            <SvgIcon
              className="slds-input__icon"
              sprite="utility"
              symbol="search"
            />
            <input
              type="search"
              className="slds-input"
              id="app-launcher-search"
              placeholder="Find an app"
              defaultValue={props.searchTerm}
            />
          </div>
        </div>
      </div>
      <button className="slds-button slds-button_neutral">App Exchange</button>
    </ModalHeader>
    <ModalContent className="slds-app-launcher__content slds-p-around_medium">
      <Section className="slds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen referenceId="appsContent">
            All Apps
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen referenceId="appsContent">
          <div
            className="slds-assistive-text"
            id="drag-live-region"
            aria-live="assertive"
          >
            {props.dragDropLiveRegion}
          </div>
          <div className="slds-assistive-text" id={props.dragDropId}>
            {props.dragDropInstructions}
          </div>
          <ul className="slds-grid slds-grid_pull-padded slds-wrap">
            {props.appTiles.map((tile, i) => {
              return (
                <li
                  className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"
                  key={i}
                >
                  <AppLauncherTile
                    draggable
                    figureClass={tile.figureClass}
                    grabbed={tile.grabbed}
                    objectInitials={tile.initials}
                    referenceId={tile.dragDropId}
                  >
                    <span className="slds-text-link">{tile.label}</span>
                    <p>
                      {tile.description}
                      <span className="slds-text-link">More</span>
                    </p>
                  </AppLauncherTile>
                </li>
              );
            })}
          </ul>
        </SectionContent>
      </Section>
      <hr />
      <Section className="slds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen referenceId="itemsContent">
            All Items
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen referenceId="itemsContent">
          <ul className="slds-grid slds-wrap">
            {props.itemTiles.map((tile, i) => {
              return (
                <li
                  className="slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5"
                  key={i}
                >
                  <a
                    href="javascript:void(0);"
                    className="slds-truncate"
                    title={tile.label}
                  >
                    {tile.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </SectionContent>
      </Section>
    </ModalContent>
  </Modal>
);

export const AppLauncherTile = props => (
  <a
    aria-describedby={props.draggable ? props.referenceId : null}
    draggable={props.draggable}
    href="javascript:void(0);"
    className={classNames(
      'slds-app-launcher__tile slds-text-link_reset',
      props.className,
      {
        'slds-is-draggable': props.draggable,
        'slds-app-launcher__tile_small': props.flavor === 'small',
        'slds-is-grabbed': props.grabbed
      }
    )}
  >
    <div
      className={classNames('slds-app-launcher__tile-figure', {
        'slds-app-launcher__tile-figure_small': props.flavor === 'small'
      })}
    >
      {props.symbol ? (
        <SvgIcon
          className={
            'slds-icon slds-icon-standard-' + props.symbol + ' slds-icon_large'
          }
          sprite="standard"
          symbol={props.symbol}
        />
      ) : (
        <Avatar className="slds-avatar_large">
          <abbr
            className={classNames('slds-avatar__initials', props.figureClass)}
            title="company name"
          >
            {props.objectInitials}
          </abbr>
        </Avatar>
      )}
      {props.draggable ? (
        <span
          className="slds-icon_container"
          title="Drag item to a new location"
        >
          <SvgIcon
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            sprite="utility"
            symbol="rows"
          />
        </span>
      ) : null}
    </div>
    <div
      className={classNames('slds-app-launcher__tile-body', {
        'slds-app-launcher__tile-body_small': props.flavor === 'small'
      })}
    >
      {props.children}
    </div>
  </a>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

/*
 * DragDropId relates app launcher tile anchor aria-describedby to the div that holds the instructions for drag & drop
 */
export const dragDropId = 'drag-instructions';

export const itemTiles = [
  { label: 'Accounts', symbol: 'account' },
  { label: 'Announcements', symbol: 'announcement' },
  { label: 'Approvals', symbol: 'approval' },
  { label: 'Campaigns', symbol: 'campaign' },
  { label: 'Cases', symbol: 'case' },
  { label: 'Coaching', symbol: 'coaching' },
  { label: 'Contacts', symbol: 'contact' }
];

export const searchItemTiles = [
  {
    label: (
      <span>
        <mark>Sales</mark> Invoices
      </span>
    ),
    symbol: 'account'
  },
  {
    label: (
      <span>
        <mark>Sales</mark> Objects
      </span>
    ),
    symbol: 'announcement'
  }
];

/*
 * Tile data for All Apps section inside example.
 * Using data instead of hard-coding becase we want to move the position of one App Tile based on state (ie. moved, dropped).
 */
export const appTiles = [
  {
    description: 'The primary internal Salesforce org. Used to run our...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-27',
    grabbed: false,
    initials: 'SC',
    label: 'Sales Cloud'
  },
  {
    description: 'Salesforce Marketing Cloud lets businesses of any size...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-59',
    grabbed: false,
    initials: 'MC',
    label: 'Marketing Cloud'
  },
  {
    description: 'Community for managing employee benefits and time off.',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-10',
    grabbed: false,
    initials: 'HR',
    label: 'HR Concierge'
  },
  {
    description: 'Manage your finances across multiple financial platforms...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-6',
    grabbed: false,
    initials: 'MM',
    label: 'My Money'
  },
  {
    description:
      'The key to call center and contact center management is more...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-91',
    grabbed: false,
    initials: 'CC',
    label: 'Call Center'
  },
  {
    description:
      'Areas of Focus are used to track customer support for your...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-50',
    grabbed: false,
    initials: 'CS',
    label: 'Customer Support Communitiy'
  }
];

export const appTilesSearch = [
  {
    description: 'The primary internal Salesforce org. Used to run our...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-27',
    grabbed: false,
    initials: 'SC',
    label: (
      <span>
        <mark>Sales</mark> Cloud
      </span>
    )
  }
];

/*
 * Helpers to position the App Tile for each state (ie. moved, dropped, etc.)
 */
const moveItemPosition = function(arr, from, to) {
  let copyArr = arr.slice(0);
  copyArr.splice(to, 0, copyArr.splice(from, 1)[0]);
  return copyArr;
};

export const appTilesGrabbed = appTiles.slice(0);
appTilesGrabbed[0] = Object.assign({}, appTilesGrabbed[0], { grabbed: true });
export const appTilesMoved = moveItemPosition(appTiles, 0, 2);
appTilesMoved[2] = Object.assign({}, appTilesMoved[2], { grabbed: true });
export const appTilesDropped = moveItemPosition(appTiles, 0, 3);

export default (
  <div className="demo-only" style={{ height: '800px' }}>
    <AppLauncherModal
      appTiles={appTiles}
      dragDropId={dragDropId}
      dragDropInstructions="Press space bar to move this app within the list."
      dragDropLiveRegion=""
      itemTiles={itemTiles}
    />
    <div className="slds-backdrop slds-backdrop_open" />
  </div>
);

export let states = [
  {
    id: 'grabbed',
    label: 'Tile grabbed',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesGrabbed}
          dragDropId={dragDropId}
          dragDropInstructions=""
          dragDropLiveRegion="Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app"
          grabbed
          itemTiles={itemTiles}
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'moved',
    label: 'Tile moved in list',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesMoved}
          dragDropId={dragDropId}
          dragDropInstructions=""
          dragDropLiveRegion="Sales Cloud: new position 3 of 6."
          itemTiles={itemTiles}
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'dropped',
    label: 'Tile dropped',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesDropped}
          dragDropId={dragDropId}
          dragDropInstructions="Press space bar to move this app within the list."
          dragDropLiveRegion="Sales Cloud: final position 4 of 6."
          itemTiles={itemTiles}
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'search',
    label: 'Search',
    element: (
      <div className="demo-only" style={{ height: '800px' }}>
        <AppLauncherModal
          appTiles={appTilesSearch}
          dragDropId={dragDropId}
          dragDropInstructions="Press space bar to move this app within the list."
          dragDropLiveRegion=""
          itemTiles={searchItemTiles}
          searchTerm="sales"
        />
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  }
];
