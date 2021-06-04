// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import {
  Modal,
  ModalHeader,
  ModalContent,
  Backdrop
} from '../../modals/base/example';
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionTitleAction
} from '../../expandable-section/base/example';
import { Avatar } from '../../avatar/base/example';
import { ButtonIconStateful } from '../../button-icons/stateful/example';
import { Tooltip } from '../../tooltips/base/example';
import classNames from 'classnames';

const exampleDemoStyles = 'height: 800px;';

export const Context = props => (
  <div style={{ height: '800px' }}>{props.children}</div>
);

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////
export let AppLauncherModal = props => (
  <Modal
    className="slds-modal_large slds-app-launcher"
    aria-labelledby="header43"
  >
    <ModalHeader className="slds-grid slds-grid_align-spread slds-grid_vertical-align-center">
      <h2 id="header43" className="slds-text-heading_medium">
        App launcher
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
          <ul className="slds-grid slds-grid_pull-padded slds-wrap">
            {props.appTiles.map((tile, i) => {
              return (
                <li
                  className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"
                  key={i}
                >
                  <AppLauncherTile
                    figureClass={tile.figureClass}
                    grabbed={tile.grabbed}
                    objectInitials={tile.initials}
                    label={tile.label}
                    description={tile.description}
                    hasTooltip={tile.hasTooltip}
                    tooltipText={tile.tooltipText}
                    index={i}
                  />
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
                    href="#"
                    className="slds-truncate"
                    title={tile.label}
                    onClick={e => e.preventDefault()}
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
  <div
    draggable
    className={classNames(
      'slds-app-launcher__tile slds-text-link_reset slds-is-draggable',
      props.className,
      {
        'slds-is-grabbed': props.grabbed
      }
    )}
  >
    <div className="slds-app-launcher__tile-figure">
      <Avatar className="slds-avatar_large">
        <abbr
          className={classNames('slds-avatar__initials', props.figureClass)}
          title={props.label}
        >
          {props.objectInitials}
        </abbr>
      </Avatar>
      <div className="slds-m-top_xxx-small">
        <ButtonIconStateful
          aria-pressed={props.grabbed ? 'true' : 'false'}
          assistiveText="Reorder"
          selected={props.grabbed}
          symbol="rows"
          title="Reorder"
        />
      </div>
    </div>
    <div className="slds-app-launcher__tile-body">
      <a href="#" onClick={e => e.preventDefault()}>
        {props.label}
      </a>
      <p>
        {props.description}{' '}
        {props.hasTooltip && (
          <button
            aria-describedby={`help-${props.index}`}
            className="slds-button slds-button_reset slds-text-link"
          >
            More
          </button>
        )}
      </p>
      <Tooltip
        className={classNames('slds-nubbin_top-right', {
          'slds-hide': !props.tooltipText
        })}
        id={`help-${props.index}`}
        style={{ position: 'absolute', top: '80px', right: '30px' }}
      >
        {props.tooltipText}
      </Tooltip>
    </div>
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

/*
 * DragDropId relates app launcher tile anchor aria-describedby to the div that holds the instructions for drag & drop
 */
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
    description:
      'The primary internal Salesforce org. Used to run our online sales business...',
    hasTooltip: true,
    figureClass: 'slds-icon-custom-27',
    grabbed: false,
    initials: 'SC',
    label: 'Sales Cloud'
  },
  {
    description: 'Salesforce Marketing Cloud lets businesses of any size...',
    hasTooltip: true,
    figureClass: 'slds-icon-custom-59',
    grabbed: false,
    initials: 'MC',
    label: 'Marketing Cloud'
  },
  {
    description: 'Community for managing employee benefits and time off.',
    hasTooltip: false,
    figureClass: 'slds-icon-custom-10',
    grabbed: false,
    initials: 'HR',
    label: 'HR Concierge'
  },
  {
    description: 'Manage your finances across multiple financial platforms...',
    hasTooltip: true,
    figureClass: 'slds-icon-custom-6',
    grabbed: false,
    initials: 'MM',
    label: 'My Money'
  },
  {
    description:
      'The key to call center and contact center management is more...',
    hasTooltip: true,
    figureClass: 'slds-icon-custom-91',
    grabbed: false,
    initials: 'CC',
    label: 'Call Center'
  },
  {
    description:
      'Areas of Focus are used to track customer support for your...',
    hasTooltip: true,
    figureClass: 'slds-icon-custom-50',
    grabbed: false,
    initials: 'CS',
    label: 'Customer Support Community'
  }
];

export const appTilesSearch = [
  {
    description: 'The primary internal Salesforce org. Used to run our...',
    hasTooltip: true,
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

const defaultComponent = (
  <Backdrop>
    <AppLauncherModal
      appTiles={appTiles}
      dragDropLiveRegion=""
      itemTiles={itemTiles}
    />
  </Backdrop>
);

export default defaultComponent;

export let states = [
  {
    id: 'default',
    label: 'Default',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: defaultComponent
  },
  {
    id: 'grabbed',
    label: 'Tile grabbed',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <Backdrop>
        <AppLauncherModal
          appTiles={appTilesGrabbed}
          dragDropLiveRegion="Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app"
          grabbed
          itemTiles={itemTiles}
        />
      </Backdrop>
    )
  },
  {
    id: 'moved',
    label: 'Tile moved in list',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <Backdrop>
        <AppLauncherModal
          appTiles={appTilesMoved}
          dragDropLiveRegion="Sales Cloud: new position 3 of 6."
          itemTiles={itemTiles}
        />
      </Backdrop>
    )
  },
  {
    id: 'dropped',
    label: 'Tile dropped',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <Backdrop>
        <AppLauncherModal
          appTiles={appTilesDropped}
          dragDropLiveRegion="Sales Cloud: final position 4 of 6."
          itemTiles={itemTiles}
        />
      </Backdrop>
    )
  },
  {
    id: 'search',
    label: 'Search',
    demoStyles: exampleDemoStyles,
    storybookStyles: true,
    element: (
      <Backdrop>
        <AppLauncherModal
          appTiles={appTilesSearch}
          dragDropLiveRegion=""
          itemTiles={searchItemTiles}
          searchTerm="sales"
        />
      </Backdrop>
    )
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    demoStyles: 'width: 360px; height: 13rem; position: relative; padding: 0;',
    storybookStyles: true,
    element: (
      <AppLauncherTile
        figureClass="slds-icon-custom-27"
        objectInitials="SC"
        label="Sales Cloud"
        description="The primary internal Salesforce org. Used to run our online sales business..."
        hasTooltip
        tooltipText="The primary internal Salesforce org. Used to run our online sales business and manage accounts."
        index="x"
      />
    )
  }
];
