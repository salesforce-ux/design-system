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

export const Context = props =>
  <div style={{ minHeight: '20rem' }}>
    {props.children}
  </div>;

export default (
  <div className="slds-page-header slds-brand-band slds-brand-band_flaps slds-brand-band_overlay">
    <div className="slds-grid slds-page-header__row">
      <div className="slds-brand-band__overlay">
        <div className="slds-media slds-brand-band__overlay-content">
          <div className="slds-media__figure">
            <StandardIcon className="slds-icon_large" symbol="opportunity" assistiveText={false} />
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
      <div className="slds-col--bump-left slds-no-flex">
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
    </div>
    <div className="slds-grid slds-page-header__row">
      <div className="slds-col--bump-left">
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small" aria-expanded="false">
          <ButtonIcon
            className="slds-button_icon-more"
            symbol="settings"
            hasDropdown
            assistiveText="List View Controls"
            title="List View Controls"
          />
        </div>
        <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_xx-small" aria-expanded="false">
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
);

export let examples = [
  {
    id: 'standalone',
    label: 'Standalone - Size small',
    element: <div className="slds-brand-band slds-brand-band_solo slds-brand-band_small" />
  },
  {
    id: 'standalone',
    label: 'Standalone - Size medium',
    element: <div className="slds-brand-band slds-brand-band_solo slds-brand-band_medium" />
  },
  {
    id: 'standalone',
    label: 'Standalone - Size large',
    element: <div className="slds-brand-band slds-brand-band_solo slds-brand-band_large" />
  },
  {
    id: 'object-home',
    label: 'Object home',
    element:
    <div className="slds-page-header slds-brand-band slds-brand-band_flaps slds-brand-band_overlay">
      <div className="slds-grid slds-page-header__row">
        <div className="slds-brand-band__overlay">
          <div className="slds-media slds-brand-band__overlay-content">
            <div className="slds-media__figure">
              <StandardIcon className="slds-icon_large" symbol="opportunity" assistiveText={false} />
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
        <div className="slds-col--bump-left slds-no-flex">
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
      </div>
      <div className="slds-grid slds-page-header__row">
        <div className="slds-col--bump-left">
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small" aria-expanded="false">
            <ButtonIcon
              className="slds-button_icon-more"
              symbol="settings"
              hasDropdown
              assistiveText="List View Controls"
              title="List View Controls"
            />
          </div>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_xx-small" aria-expanded="false">
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
  },
  {
    id: 'record-home',
    label: 'Record home',
    element:
    <div className="slds-page-header slds-brand-band slds-brand-band_flaps slds-brand-band_overlay">
      <div className="slds-grid slds-page-header__row">
        <div className="slds-brand-band__overlay">
          <div className="slds-media slds-brand-band__overlay-content">
            <div className="slds-media__figure">
              <StandardIcon className="slds-icon_large" symbol="opportunity" assistiveText={false} />
            </div>
            <div className="slds-media__body">
              <nav>
                <ol className="slds-breadcrumb slds-line-height_reset">
                  <li className="slds-breadcrumb__item">
                    <span>Opportunities</span>
                  </li>
                </ol>
              </nav>
              <h1 className="slds-page-header__title slds-m-right_small slds-align-middle slds-truncate" title="this should match the Record Title">Acme - 1,200 Widgets</h1>
            </div>
          </div>
        </div>
        <div className="slds-col--bump-left slds-no-flex">
          <StatefulButton className="slds-button_neutral slds-not-selected" />
          <div className="slds-button-group" role="group">
            <button className="slds-button slds-button_neutral">Edit</button>
            <button className="slds-button slds-button_neutral">Delete</button>
            <button className="slds-button slds-button_neutral">Clone</button>
            <div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last" aria-expanded="false">
              <ButtonIcon
                className="slds-button_icon-border-filled"
                symbol="down"
                aria-haspopup="true"
                assistiveText="More Actions"
                title="More Actions" />
            </div>
          </div>
        </div>
      </div>
      <ul className="slds-grid slds-page-header__row slds-page-header__detail-row">
        <li className="slds-page-header__detail-block">
          <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 1">Field 1</p>
          <p className="slds-text-body_regular slds-truncate" title="Description that demonstrates truncation with a long text field">
            Description that demonstrates truncation with a long text field.
          </p>
        </li>
        <li className="slds-page-header__detail-block">
          <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field2 (3)">
            Field 2 (3)
            <ButtonIcon
              className="slds-button_icon"
              iconClassName="slds-button__icon_small"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions"
              title="More Actions"
            />
          </p>
          <p className="slds-text-body_regular">Multiple Values</p>
        </li>
        <li className="slds-page-header__detail-block">
          <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 3">Field 3</p>
          <a href="javascript:void(0);">Hyperlink</a>
        </li>
        <li className="slds-page-header__detail-block">
          <p className="slds-text-title slds-truncate slds-m-bottom_xx-small" title="Field 4">Field 4</p>
          <p>Description (2-line truncation—must use JS to truncate).</p>
        </li>
      </ul>
    </div>
  },
  {
    id: 'card',
    label: 'Card',
    element:
      <Card className="slds-brand-band">
        <CardHeader symbol="contact" actions><span className="slds-text-heading_small">Card Header</span></CardHeader>
        <CardBody className="slds-card__body_inner">Card Body (custom goes in here)</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
  }
];
