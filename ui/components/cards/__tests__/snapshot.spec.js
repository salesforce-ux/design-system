/* eslint-env jest */
import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import { EinsteinCard } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Card Article', () => {
  it('renders a basic card article', () =>
    matchesMarkupAndStyle(<Card>Anything can go into the card body</Card>));
  it('renders a basic card article with boundary', () =>
    matchesMarkupAndStyle(
      <Card hasCardBoundary>Anything can go into the card body</Card>
    ));
});

describe('Card Header', () => {
  it('renders a simple card header', () =>
    matchesMarkupAndStyle(
      <CardHeader title="Card Header" href="javascript:void(0);" />
    ));
  it('renders a card header with icon', () =>
    matchesMarkupAndStyle(
      <CardHeader
        title="Card Header"
        href="javascript:void(0);"
        symbol="contact"
      />
    ));
  it('renders a card header with action', () =>
    matchesMarkupAndStyle(
      <CardHeader
        title="Card Header"
        href="javascript:void(0);"
        action={
          <button className="slds-button slds-button_neutral">New</button>
        }
      />
    ));
  it('renders a card header with icon and action', () =>
    matchesMarkupAndStyle(
      <CardHeader
        title="Card Header"
        href="javascript:void(0);"
        symbol="contact"
        action={
          <button className="slds-button slds-button_neutral">New</button>
        }
      />
    ));
});

describe('Card Body', () => {
  it('renders an empty card body', () => matchesMarkupAndStyle(<CardBody />));
  it('renders a card body with content', () =>
    matchesMarkupAndStyle(
      <CardBody>Anything can go into the card body</CardBody>
    ));
  it('renders a card body with padding', () =>
    matchesMarkupAndStyle(
      <CardBody hasPadding>Anything can go into the card body</CardBody>
    ));
});

describe('Card Footer', () => {
  it('renders an empty card footer', () =>
    matchesMarkupAndStyle(<CardFooter />));
  it('renders a card footer with content', () =>
    matchesMarkupAndStyle(
      <CardFooter>
        View All <span className="slds-assistive-text">Accounts</span>
      </CardFooter>
    ));
});

describe('Einstein Card', () => {
  it('renders a base einstein card', () =>
    matchesMarkupAndStyle(<EinsteinCard />));
  it('renders an einstein card with icon', () =>
    matchesMarkupAndStyle(<EinsteinCard hasIcon />));
  it('renders an einstein card with actions', () =>
    matchesMarkupAndStyle(<EinsteinCard hasActions />));
  it('renders an einstein card with icon and actions', () =>
    matchesMarkupAndStyle(<EinsteinCard hasIcon hasActions />));
});

describe('Card', () => {
  it('renders a base card empty', () =>
    matchesMarkupAndStyle(
      <Card>
        <CardHeader
          title="Card Header"
          href="javascript:void(0);"
          symbol="contact"
        />
        <CardBody />
        <CardFooter />
      </Card>
    ));
  it('renders a base card without a footer', () =>
    matchesMarkupAndStyle(
      <Card>
        <CardHeader
          title="Card Header"
          href="javascript:void(0);"
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
      </Card>
    ));
  it('renders a base card with empty footer', () =>
    matchesMarkupAndStyle(
      <Card>
        <CardHeader
          title="Card Header"
          href="javascript:void(0);"
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter />
      </Card>
    ));
  it('renders a base card with content in footer', () =>
    matchesMarkupAndStyle(
      <Card>
        <CardHeader
          title="Card Header"
          href="javascript:void(0);"
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
    ));
});
