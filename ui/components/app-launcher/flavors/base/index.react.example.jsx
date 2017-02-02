/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';
import { AppLauncherTile } from 'ui/components/app-launcher/flavors/tile/index.react.example';
import { Section, SectionContent, SectionTitle, SectionTitleAction } from 'ui/utilities/text/flavors/section-title/index.react.example';
import classNames from 'classnames';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////
let AppLauncherModal = props =>
  <Modal className="slds-modal--large slds-app-launcher" aria-labelledby="header43">
    <ModalHeader className="slds-app-launcher__header slds-grid slds-grid--align-spread slds-grid--vertical-align-center">
      <h2 id="header43" className="slds-text-heading--medium">App Launcher</h2>
      <div className="slds-app-launcher__header-search">
        <div className="slds-form-element">
          <label htmlFor="app-launcher-search" className="slds-form-element__label slds-assistive-text">Find an app</label>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--left">
            <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
            <input type="search" className="slds-input" id="app-launcher-search" placeholder="Find an app" />
          </div>
        </div>
      </div>
      <button className="slds-button slds-button--neutral">App Exchange</button>
    </ModalHeader>
    <ModalContent className="slds-app-launcher__content slds-p-around--medium">
      <Section className="slds-is-open">
        <SectionTitle>
          <SectionTitleAction isOpen={true} referenceId="appsContent">
            All Apps
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen={true} referenceId="appsContent">
          <div className="slds-assistive-text" id="drag-live-region" aria-live="assertive">
            {props.dragDropLiveRegion}
          </div>
          <div className="slds-assistive-text" id={props.dragDropId}>
            {props.dragDropInstructions}
          </div>
          <ul className="slds-grid slds-grid--pull-padded slds-wrap">
            {props.appTiles.map((tile, i) => {
              return (
                <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3" key={i}>
                  <AppLauncherTile draggable figureClass={tile.figureClass} grabbed={tile.grabbed} objectInitials={tile.initials} referenceId={tile.dragDropId}>
                    <span className="slds-text-link">{tile.label}</span>
                    <p>{tile.description}<span className="slds-text-link">More</span></p>
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
          <SectionTitleAction isOpen={true} referenceId="itemsContent">
            All Items
          </SectionTitleAction>
        </SectionTitle>
        <SectionContent isOpen={true} referenceId="itemsContent">
          <ul className="slds-grid slds-grid--pull-padded slds-wrap">
            {props.itemTiles.map((tile, i) => {
              return (
                <li className="slds-p-horizontal--small slds-size--xx-small" key={i}>
                  <AppLauncherTile flavor="small" symbol={tile.symbol}>
                    <p className="slds-truncate slds-text-link" title={tile.label}>{tile.label}</p>
                  </AppLauncherTile>
                </li>
              );
            })}
          </ul>
        </SectionContent>
      </Section>
    </ModalContent>
  </Modal>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

/*
 * DragDropId relates app launcher tile anchor aria-describedby to the div that holds the instructions for drag & drop
 */
const dragDropId = 'drag-instructions';

const itemTiles = [
  { label: 'Accounts', symbol: 'account' },
  { label: 'Announcements', symbol: 'announcement' },
  { label: 'Approvals', symbol: 'approval' },
  { label: 'Campaigns', symbol: 'campaign' },
  { label: 'Cases', symbol: 'case' },
  { label: 'Coaching', symbol: 'coaching' },
  { label: 'Contacts', symbol: 'contact' },
];

/*
 * Tile data for All Apps section inside example.
 * Using data instead of hard-coding becase we want to move the position of one App Tile based on state (ie. moved, dropped).
 */
const appTiles = [
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
    description: 'The key to call center and contact center management is more...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-91',
    grabbed: false,
    initials: 'CC',
    label: 'Call Center'
  },
  {
    description: 'Areas of Focus are used to track customer support for your...',
    dragDropId: dragDropId,
    figureClass: 'slds-icon-custom-50',
    grabbed: false,
    initials: 'CS',
    label: 'Customer Support Communitiy'
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

const appTilesGrabbed = appTiles.slice(0);
appTilesGrabbed[0] = Object.assign({}, appTilesGrabbed[0], {grabbed: true});
const appTilesMoved = moveItemPosition(appTiles, 0, 2);
appTilesMoved[2] = Object.assign({}, appTilesMoved[2], {grabbed: true});
const appTilesDropped = moveItemPosition(appTiles, 0, 3);

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
    <div className="demo-only" style={{ height: '800px' }}>
      <AppLauncherModal
        appTiles={appTiles}
        dragDropId={dragDropId}
        dragDropInstructions="Press space bar to move this app within the list."
        dragDropLiveRegion=""
        itemTiles={itemTiles}
      />
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  },
  {
    id: 'grabbed',
    label: 'Grabbed',
    element:
    <div className="demo-only" style={{ height: '800px' }}>
      <AppLauncherModal
        appTiles={appTilesGrabbed}
        dragDropId={dragDropId}
        dragDropInstructions=""
        dragDropLiveRegion="Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app"
        grabbed
        itemTiles={itemTiles}
      />
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  },
  {
    id: 'moved',
    label: 'Moved in list',
    element:
    <div className="demo-only" style={{ height: '800px' }}>
      <AppLauncherModal
        appTiles={appTilesMoved}
        dragDropId={dragDropId}
        dragDropInstructions=""
        dragDropLiveRegion="Sales Cloud: new position 3 of 6."
        itemTiles={itemTiles}
      />
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  },
  {
    id: 'dropped',
    label: 'Dropped',
    element:
    <div className="demo-only" style={{ height: '800px' }}>
      <AppLauncherModal
        appTiles={appTilesDropped}
        dragDropId={dragDropId}
        dragDropInstructions="Press space bar to move this app within the list."
        dragDropLiveRegion="Sales Cloud: final position 4 of 6."
        itemTiles={itemTiles}
      />
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  }
];
