/* eslint-env jest */
import React from 'react';
import {
  appTiles,
  appTilesGrabbed,
  appTilesMoved,
  appTilesDropped,
  appTilesSearch,
  AppLauncherModal,
  AppLauncherTile,
  dragDropId,
  itemTiles,
  searchItemTiles
} from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default app launcher', () =>
  matchesMarkup(
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
  ));

it('renders an app tile with a tooltip', () =>
  matchesMarkup(
    <AppLauncherTile
      figureClass="slds-icon-custom-27"
      objectInitials="SC"
      label="Sales Cloud"
      description="The primary internal Salesforce org. Used to run our online sales business..."
      hasTooltip
      tooltipText="The primary internal Salesforce org. Used to run our online sales business and manage accounts."
      index="x"
    />
  ));

it('renders a grabbed app launcher', () =>
  matchesMarkup(
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
  ));

it('renders a moved app launcher', () =>
  matchesMarkup(
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
  ));

it('renders a dropped app launcher', () =>
  matchesMarkup(
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
  ));

it('renders a search app launcher', () =>
  matchesMarkup(
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
  ));
