// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
import { ButtonIcon } from '../../button-icons/base/example';
import { StatefulButton } from '../../buttons/stateful/example';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '../../cards/base/example';
import { ObjectHome } from '../object-home/example';
import { RecordHome } from '../record-home/example';

export const Context = props =>
  <div style={{ minHeight: '20rem', backgroundColor: '#E0E5EE' }}>
    {props.children}
  </div>;

export default (
  <div className="slds-brand-band slds-brand-band_small">
    <div className="slds-page-header">
      <div className="slds-grid slds-page-header__row">
        <div className="slds-page-header__overlay">
          <div className="slds-media slds-page-header__overlay-content">
            <div className="slds-media__figure">
              <StandardIcon className="slds-page-header__icon" symbol="opportunity" assistiveText={false} />
            </div>
            <div className="slds-media__body">
              <nav>
                <ol className="slds-breadcrumb slds-line-height_reset">
                  <li className="slds-breadcrumb__item">
                    <span>Opportunities</span>
                  </li>
                </ol>
              </nav>
              <h1 className="slds-page-header__title slds-p-right_x-small">
                <button
                  className="slds-button slds-text-link--faux slds-truncate"
                  aria-haspopup="true"
                  title=""
                >
                  <span className="slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center">
                    <span className="slds-truncate" title="">Recently Viewed</span>
                    <UtilityIcon className="slds-icon--x-small" symbol="down" />
                  </span>
                </button>
              </h1>
              <p className="slds-text-body_small">10 items &bull; Updated 13 minutes ago</p>
            </div>
          </div>
        </div>
        <div className="slds-page-header__utility-group slds-col--bump-left slds-no-flex">
          <div className="slds-page-header__action-bar">
            <div className="slds-button-group" role="group">
              <button className="slds-button slds-button_neutral">New</button>
              <div className="slds-button_last">
                <ButtonIcon
                  className="slds-button_icon-border-filled"
                  symbol="down"
                  aria-haspopup="true"
                  assistiveText="More Actions"
                  title="More Actions" />
              </div>
            </div>
          </div>
          <div className="slds-page-header__button-bar">
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small">
              <ButtonIcon
                className="slds-button_icon-more"
                symbol="settings"
                hasDropdown
                assistiveText="List View Controls"
                title="List View Controls"
              />
            </div>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_xx-small">
              <ButtonIcon
                className="slds-button_icon-more"
                symbol="table"
                hasDropdown
                assistiveText="Change view"
                title="Change view"
              />
            </div>
            <ButtonIcon
              className="slds-m-left_xx-small slds-button_icon-border-filled"
              symbol="edit"
              assistiveText="Edit List"
              title="Edit List"
            />
            <ButtonIcon
              className="slds-m-left_xx-small slds-button_icon-border-filled"
              symbol="refresh"
              assistiveText="Refresh"
              title="Refresh"
            />
            <div className="slds-button-group" role="group">
              <ButtonIcon
                className="slds-button_icon-border-filled"
                symbol="chart"
                assistiveText="Charts"
                title="Charts"
              />
              <ButtonIcon
                className="slds-button_icon-border-filled"
                symbol="filterList"
                assistiveText="Filters"
                title="Filters"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export let examples = [
  {
    id: 'object-home',
    label: 'Object home',
    element:
    <div className="slds-brand-band slds-brand-band_small">
      <ObjectHome />
    </div>
  },
  {
    id: 'record-home',
    label: 'Record home',
    element:
    <div className="slds-brand-band slds-brand-band_small">
      <RecordHome />
    </div>
  },
  {
    id: 'standalone-small',
    label: 'Standalone - Size small',
    element: <div className="slds-brand-band slds-brand-band slds-brand-band_small" />
  },
  {
    id: 'standalone-medium',
    label: 'Standalone - Size medium',
    element: <div className="slds-brand-band slds-brand-band slds-brand-band_medium" />
  },
  {
    id: 'standalone-large',
    label: 'Standalone - Size large',
    element: <div className="slds-brand-band slds-brand-band slds-brand-band_large" />
  },
  {
    id: 'standalone-full',
    label: 'Standalone - Size Full',
    element: <div className="slds-brand-band slds-brand-band slds-brand-band_full" />
  },
  {
    id: 'template',
    label: 'Page layout template',
    element:
    <div style={{ backgroundColor: '#e0e5ee' }}>
      <div className="slds-grid">
        <div className="slds-size_8-of-12 slds-p-around_medium slds-brand-band slds-brand-band_large">
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        </div>
        <div className="slds-size_4-of-12 slds-p-around_medium">
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
            <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  }
];
