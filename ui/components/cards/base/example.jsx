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
import { Spinner } from '../../spinners/base/example';
import { NoTask } from '../../illustration/custom';
import {
  Illustration,
  IllustrationText
} from '../../illustration/base/example';

const headerAction = (
  <button className="slds-button slds-button_neutral">New</button>
);

const bodyTable = (
  <Table
    isFixedLayout
    isBordered
    hasNoRowHover
    hasCellBuffer
    type="advanced"
    ariaLabel="Example table in a Card"
  >
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
          <ReadOnlyCell cellLink cellText="Amy Choi" />
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
      href
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
      href
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
      href
      symbol="contact"
      action={headerAction}
    />
    <CardBody hasPadding>
      <Card>
        <CardHeader
          title="Contacts"
          href
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
          href
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
          href
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
          href
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
        href
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
        href
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

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Card>
        <CardHeader
          title="Accounts"
          href
          symbol="account"
          action={<button className="slds-button slds-button_neutral">New</button>}
        />
        <CardBody hasPadding>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  }
];

export let states = [
  {
    id: 'empty',
    label: 'Empty',
    element: (
      <Card>
        <CardHeader
          title="Card Header"
          href
          symbol="contact"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody />
        <CardFooter />
      </Card>
    )
  },
  {
    id: 'empty-illustration',
    label: 'Empty with illustration',
    element: (
      <Card>
        <CardHeader title="Tasks" href symbol="task" />
        <CardBody hasPadding>
          <Illustration>
            <NoTask />
            <IllustrationText
              heading="No new tasks"
              message="Nothing needs your attention right now. Check back later."
            />
          </Illustration>
        </CardBody>
      </Card>
    )
  },
  {
    id: 'loading',
    label: 'Loading',
    element: (
      <Card>
        <CardHeader title="Tasks" href symbol="task" />
        <CardBody hasPadding>
          <Spinner className="slds-spinner_small" />
        </CardBody>
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
    id: 'with-no-header',
    label: 'With no header',
    element: (
      <Card>
        <CardBody hasPadding>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'visibly-hidden-card-header',
    label: 'Visibly hidden card header',
    element: (
      <Card>
        <CardHeader title="Card Header" href className="slds-assistive-text" />
        <CardBody hasPadding>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'body-has-no-padding',
    label: 'Body with no padding',
    element: (
      <Card>
        <CardHeader title="Accounts" href symbol="account" />
        <CardBody>Card Body</CardBody>
      </Card>
    )
  },
  {
    id: 'body-has-padding',
    label: 'Body with padding',
    element: (
      <Card>
        <CardHeader title="Accounts" href symbol="account" />
        <CardBody hasPadding>Card Body with Padding</CardBody>
      </Card>
    )
  },
  {
    id: 'has-no-footer',
    label: 'No footer',
    element: (
      <Card>
        <CardHeader title="Accounts" href showIcon symbol="account" />
        <CardBody hasPadding>Card Body</CardBody>
        <CardFooter />
      </Card>
    )
  },
  {
    id: 'has-footer',
    label: 'Has footer',
    element: (
      <Card>
        <CardHeader title="Accounts" href showIcon symbol="account" />
        <CardBody hasPadding>Card Body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'nested-no-boundary',
    label: 'Nested with no boundary',
    element: (
      <Card>
        <CardHeader title="Outer Card Header" href symbol="account" />
        <CardBody hasPadding>
          <Card>
            <CardHeader title="Card Header" href symbol="account" />
            <CardBody hasPadding>
              This is a nested card with no styling (default)
            </CardBody>
            <CardFooter>
              View All <span className="slds-assistive-text">Accounts</span>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'nested-with-boundary',
    label: 'Nested with boundary',
    element: (
      <Card>
        <CardHeader title="Outer Card Header" href symbol="account" />
        <CardBody hasPadding>
          <Card hasCardBoundary>
            <CardHeader title="Card Header" href symbol="account" />
            <CardBody hasPadding>
              This is a card inside an `slds-card` to illustrate how
              `slds-card_boundary` adds a rounded border when desired.
            </CardBody>
            <CardFooter>
              View All <span className="slds-assistive-text">Accounts</span>
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'with-long-truncated-title',
    label: 'With long truncated title',
    demoStyles: 'max-width: 360px;',
    storybookStyles: true,
    element: (
      <Card>
        <CardHeader
          title="Card Header Title With Exceptionally Long Title"
          href
          symbol="account"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody hasPadding>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  },
  {
    id: 'styling-hooks',
    label: 'Styling Hooks',
    demoStyles: `
      --slds-c-card-color-background: #f3f3f3;
      --slds-c-card-radius-border: 8px;
      --slds-c-card-shadow: rgba(0,0,0,.15) 0 4px 8px, rgba(0,0,0,.05) 0 2px 4px;
      --slds-c-card-spacing-block-start: 1.5rem;
      --slds-c-card-spacing-block-end: 0.5rem;
      --slds-c-card-spacing-inline: 1rem;
      --slds-c-card-title-font-size: 1.5rem;
      --slds-c-card-header-spacing-block-start: 0;
      --slds-c-card-header-spacing-inline-start: 1.5rem;
      --slds-c-card-header-spacing-inline-end: 1.5rem;
      --slds-c-card-body-spacing-inline-start: 1.5rem;
      --slds-c-card-body-spacing-inline-end: 1.5rem;
      --slds-c-card-body-spacing-block-end: 1rem;
      --slds-c-card-footer-spacing-block-start: 0.5rem;
      --slds-c-card-footer-spacing-block-end: 0;
      --slds-c-card-footer-spacing-inline-start: 1.5rem;
      --slds-c-card-footer-spacing-inline-end: 1.5rem;
      --slds-c-card-footer-font-size: 0.75rem;
      --slds-c-card-footer-text-align: right;
    `,
    storybookStyles: true,
    element: (
      <Card>
        <CardHeader
          title="Accounts"
          href
          symbol="account"
          action={
            <button className="slds-button slds-button_neutral">New</button>
          }
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Accounts</span>
        </CardFooter>
      </Card>
    )
  }
];
