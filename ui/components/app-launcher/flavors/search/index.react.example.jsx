// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

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
  <Modal aria-labelledby="header43" className="slds-modal--large slds-app-launcher">
    <ModalHeader className="slds-app-launcher__header slds-grid slds-grid--align-spread slds-grid--vertical-align-center">
      <h2 id="header43" className="slds-text-heading--medium">App Launcher</h2>
      <div className="slds-app-launcher__header-search">
        <div className="slds-form-element">
          <label htmlFor="app-launcher-search" className="slds-form-element__label slds-assistive-text">Find an app</label>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--left">
            <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
            <input type="search" className="slds-input" id="app-launcher-search" placeholder="sales" />
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
          <ul className="slds-grid slds-grid--pull-padded slds-wrap">
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="SC" figureClass="slds-icon-custom-27" draggable>
                <span className="slds-text-link"><mark>Sales</mark> Cloud</span>
                <p>The primary internal Salesforce org. Used to run our...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
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
            <li className="slds-p-horizontal--small slds-size--xx-small">
              <AppLauncherTile flavor="small" symbol="account">
                <p className="slds-truncate slds-text-link" title="Sales Invoices"><mark>Sales</mark> Invoices</p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--xx-small">
              <AppLauncherTile flavor="small" symbol="announcement">
                <p className="slds-truncate slds-text-link" title="Sales Objects"><mark>Sales</mark> Objects</p>
              </AppLauncherTile>
            </li>
          </ul>
        </SectionContent>
      </Section>
    </ModalContent>
  </Modal>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '800px' }}>
    <AppLauncherModal />
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
