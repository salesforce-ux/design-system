// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Menu, MenuList, MenuItem } from '../../menus/dropdown/example';
import ButtonIcon from '../../button-icons/';
import { TileMedia } from '../../tiles/base/example';
import { StandardIcon } from '../../icons/standard/example';
import classNames from 'classnames';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import { EinsteinHeader } from '../../einstein-header/base';

const headerActionOverflow = (
  <button
    className="slds-button slds-button_icon-border-filled slds-button_icon-x-small"
    aria-haspopup="true"
  >
    <SvgIcon className="slds-button__icon" sprite="utility" symbol="down" />
    <span className="slds-assistive-text">More Options</span>
  </button>
);

const headerAction = (
  <button className="slds-button slds-button_neutral">New</button>
);

const headerSearch = (
  <div className="slds-input-has-icon slds-input-has-icon_left slds-size_1-of-3">
    <SvgIcon
      className="slds-input__icon slds-icon-text-default"
      sprite="utility"
      symbol="search"
    />
    <label htmlFor="text-input-01" className="slds-assistive-text">
      Find in List
    </label>
    <input
      id="text-input-01"
      className="slds-input"
      type="text"
      placeholder="Find in List"
    />
  </div>
);

const bodyTable = (
  <table className="slds-table slds-table_fixed-layout slds-table_bordered slds-no-row-hover slds-table_cell-buffer">
    <thead>
      <tr className="slds-text-title_caps">
        <th scope="col">
          <div className="slds-truncate" title="Name">
            Name
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Company">
            Company
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Title">
            Title
          </div>
        </th>
        <th scope="col">
          <div className="slds-truncate" title="Email">
            Email
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="slds-hint-parent">
        <th scope="row">
          <div className="slds-truncate" title="Adam Choi">
            <a href="javascript:void(0);">Amy Choi</a>
          </div>
        </th>
        <td>
          <div className="slds-truncate" title="Company One">
            Company One
          </div>
        </td>
        <td>
          <div className="slds-truncate" title="Director of Operations">
            Director of Operations
          </div>
        </td>
        <td>
          <div className="slds-truncate" title="adam@company.com">
            adam@company.com
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

const bodyTiles = (
  <ul className="slds-grid slds-wrap slds-grid_pull-padded">
    <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
      <TileMedia
        actions
        className="slds-card__tile"
        media={
          <StandardIcon
            className="slds-icon_small"
            symbol="contact"
            assistiveText="Contact"
          />
        }
        title="Related Record Title 1"
      />
    </li>
    <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
      <TileMedia
        actions
        className="slds-card__tile"
        media={
          <StandardIcon
            className="slds-icon_small"
            symbol="contact"
            assistiveText="Contact"
          />
        }
        title="Related Record Title 1"
      />
    </li>
    <li className="slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3">
      <TileMedia
        actions
        className="slds-card__tile"
        media={
          <StandardIcon
            className="slds-icon_small"
            symbol="contact"
            assistiveText="Contact"
          />
        }
        title="Related Record Title 1"
      />
    </li>
  </ul>
);

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const CardWithDataTable = props => (
  <Card>
    <CardHeader
      title="Contacts (1)"
      href="javascript:void(0);"
      symbol="contact"
      action={headerAction}
    />
    <CardBody>{bodyTable}</CardBody>
    <CardFooter>
      View All <span className="slds-assistive-text">Contacts</span>
    </CardFooter>
  </Card>
);

export const CardWithTiles = props => (
  <Card>
    <CardHeader
      title="Contacts (3)"
      href="javascript:void(0);"
      symbol="contact"
      action={headerAction}
    />
    <CardBody hasPadding>{bodyTiles}</CardBody>
    <CardFooter>
      View All <span className="slds-assistive-text">Contacts</span>
    </CardFooter>
  </Card>
);

export const NestedCards = props => (
  <Card>
    <CardHeader
      title="Outer Card Header"
      href="javascript:void(0);"
      symbol="contact"
      action={headerAction}
    />
    <CardBody hasPadding>
      <Card>
        <CardHeader
          title="Contacts"
          href="javascript:void(0);"
          symbol="contact"
          action={headerAction}
        />
        <CardBody hasPadding>
          This is a card inside an `slds-card` to show how styling is removed
          when cards are nested inside each other.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader
          title="Contacts"
          href="javascript:void(0);"
          symbol="contact"
          action={headerAction}
        />
        <CardBody hasPadding>
          This is a card inside an `slds-card` to show how styling is removed
          when cards are nested inside each other.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
      <Card hasCardBoundary>
        <CardHeader
          title="Contacts"
          href="javascript:void(0);"
          symbol="contact"
          action={headerAction}
        />
        <CardBody hasPadding>
          This is a card inside an `slds-card` to illustrate how
          `slds-card_boundary` adds a rounded border when desired.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
      <Card hasCardBoundary>
        <CardHeader
          title="Contacts"
          href="javascript:void(0);"
          symbol="contact"
          action={headerAction}
        />
        <CardBody hasPadding>
          This is a card inside an `slds-card` to illustrate how
          `slds-card_boundary` adds a rounded border when desired.
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
    </CardBody>
  </Card>
);

export const WrappedCards = props => (
  <div className="slds-card-wrapper">
    <header>
      <h2 className="slds-text-heading_medium">Outer card wrapper header</h2>
    </header>
    <Card>
      <CardHeader
        title="Contacts"
        href="javascript:void(0);"
        symbol="contact"
        action={headerAction}
      />
      <CardBody>
        This is a card inside an `slds-card-wrapper` to show how styling is
        removed when cards are nested inside.
      </CardBody>
      <CardFooter>
        View All <span className="slds-assistive-text">Contacts</span>
      </CardFooter>
    </Card>
    <Card hasCardBoundary>
      <CardHeader
        title="Contacts"
        href="javascript:void(0);"
        symbol="contact"
        action={headerAction}
      />
      <CardBody hasPadding>
        This is a card inside an `slds-card-wrapper` to illustrate how
        `slds-card_boundary` adds a rounded border when desired.
      </CardBody>
      <CardFooter>
        View All <span className="slds-assistive-text">Contacts</span>
      </CardFooter>
    </Card>
  </div>
);

export const EinsteinCard = props => (
  <Card>
    <EinsteinHeader
      className="slds-card__header"
      headerTitle="Einstein (10+)"
      hasLink
      actions={props.hasActions}
      symbol={props.hasIcon && 'salesforce1'}
    />
    <CardBody hasPadding>Card Body</CardBody>
    <CardFooter>
      View All{' '}
      <span className="slds-assistive-text">Einstein Recommendations</span>
    </CardFooter>
  </Card>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Card>
    <CardHeader
      title="Card Header"
      href="javascript:void(0);"
      symbol="account"
      action={<button className="slds-button slds-button_neutral">New</button>}
    />
    <CardBody hasPadding>Anything can go into the card body</CardBody>
    <CardFooter>
      View All <span className="slds-assistive-text">Accounts</span>
    </CardFooter>
  </Card>
);

export let states = [
  {
    id: 'empty',
    label: 'Empty',
    element: (
      <Card>
        <CardHeader
          title="Card Header"
          href="javascript:void(0);"
          symbol="contact"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody />
        <CardFooter />
      </Card>
    )
  }
];

export let examples = [
  {
    id: 'related-list-table',
    label: 'With data-table',
    element: <CardWithDataTable />
  },
  {
    id: 'related-list-tiles',
    label: 'With tiles',
    element: <CardWithTiles />
  },
  {
    id: 'nested-cards',
    label: 'Nested cards',
    element: <NestedCards />
  },
  {
    id: 'card-wrapper',
    label: 'Wrapped cards',
    element: <WrappedCards />
  },
  {
    id: 'einstein-base',
    label: 'Einstein card',
    element: <EinsteinCard />
  },
  {
    id: 'einstein-with-icon',
    label: 'Einstein card - with icon',
    element: <EinsteinCard hasIcon />
  },
  {
    id: 'einstein-with-icon-and-actions',
    label: 'Einstein card - with icon and actions',
    element: <EinsteinCard hasIcon hasActions />
  }
];
