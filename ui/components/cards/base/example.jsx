// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { TileMedia } from '../../tiles/base/example';
import { StandardIcon } from '../../icons/standard/example';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import {
  Table,
  THead,
  THeadTr,
  ColumnTh,
  ColumnHeader,
  TBody,
  TBodyTr,
  RowTh,
  Td,
  ReadOnlyCell
} from '../../data-tables/';

const headerAction = (
  <button className="slds-button slds-button_neutral">New</button>
);

const bodyTable = (
  <Table isFixedLayout isBordered hasNoRowHover hasCellBuffer type="advanced">
    <THead>
      <THeadTr>
        <ColumnTh>
          <ColumnHeader columnName="Name" />
        </ColumnTh>
        <ColumnTh>
          <ColumnHeader columnName="Company" />
        </ColumnTh>
        <ColumnTh>
          <ColumnHeader columnName="Title" />
        </ColumnTh>
        <ColumnTh>
          <ColumnHeader columnName="Email" />
        </ColumnTh>
      </THeadTr>
    </THead>
    <TBody>
      <TBodyTr>
        <RowTh>
          <ReadOnlyCell cellLink="javascript:void(0);" cellText="Amy Choi" />
        </RowTh>
        <Td type="advanced">
          <ReadOnlyCell cellText="Company One" />
        </Td>
        <Td type="advanced">
          <ReadOnlyCell cellText="Director of Operations" />
        </Td>
        <Td type="advanced">
          <ReadOnlyCell cellText="adam@company.com" />
        </Td>
      </TBodyTr>
    </TBody>
  </Table>
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
  }
];
