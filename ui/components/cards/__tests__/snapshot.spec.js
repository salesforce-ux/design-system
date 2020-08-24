/* eslint-env jest */
import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import { EinsteinCard } from '../einstein/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Card Article', () => {
  it('renders a basic card article', () =>
    matchesMarkup(<Card>Anything can go into the card body</Card>));
  it('renders a basic card article with boundary', () =>
    matchesMarkup(
      <Card hasCardBoundary>Anything can go into the card body</Card>
    ));
});

describe('Card Header', () => {
  it('renders a simple card header', () =>
    matchesMarkup(
      <CardHeader
        title="Card Header"
        href="#"
        onClick={e => e.preventDefault()}
      />
    ));
  it('renders a card header with icon', () =>
    matchesMarkup(
      <CardHeader
        title="Card Header"
        href="#"
        onClick={e => e.preventDefault()}
        symbol="contact"
      />
    ));
  it('renders a card header with action', () =>
    matchesMarkup(
      <CardHeader
        title="Card Header"
        href="#"
        onClick={e => e.preventDefault()}
        action={
          <button className="slds-button slds-button_neutral">New</button>
        }
      />
    ));
  it('renders a card header with icon and action', () =>
    matchesMarkup(
      <CardHeader
        title="Card Header"
        href="#"
        onClick={e => e.preventDefault()}
        symbol="contact"
        action={
          <button className="slds-button slds-button_neutral">New</button>
        }
      />
    ));
});

describe('Card Body', () => {
  it('renders an empty card body', () => matchesMarkup(<CardBody />));
  it('renders a card body with content', () =>
    matchesMarkup(<CardBody>Anything can go into the card body</CardBody>));
  it('renders a card body with padding', () =>
    matchesMarkup(
      <CardBody hasPadding>Anything can go into the card body</CardBody>
    ));
});

describe('Card Footer', () => {
  it('renders an empty card footer', () => matchesMarkup(<CardFooter />));
  it('renders a card footer with content', () =>
    matchesMarkup(
      <CardFooter>
        View All <span className="slds-assistive-text">Accounts</span>
      </CardFooter>
    ));
});

describe('Einstein Card', () => {
  it('renders a base einstein card', () => matchesMarkup(<EinsteinCard />));
  it('renders an einstein card with icon', () =>
    matchesMarkup(<EinsteinCard hasIcon />));
  it('renders an einstein card with actions', () =>
    matchesMarkup(<EinsteinCard hasActions />));
  it('renders an einstein card with icon and actions', () =>
    matchesMarkup(<EinsteinCard hasIcon hasActions />));
});

describe('Card', () => {
  it('renders a base card empty', () =>
    matchesMarkup(
      <Card>
        <CardHeader
          title="Card Header"
          href="#"
          onClick={e => e.preventDefault()}
          symbol="contact"
        />
        <CardBody />
        <CardFooter />
      </Card>
    ));
  it('renders a base card without a footer', () =>
    matchesMarkup(
      <Card>
        <CardHeader
          title="Card Header"
          href="#"
          onClick={e => e.preventDefault()}
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
      </Card>
    ));
  it('renders a base card with empty footer', () =>
    matchesMarkup(
      <Card>
        <CardHeader
          title="Card Header"
          href="#"
          onClick={e => e.preventDefault()}
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter />
      </Card>
    ));
  it('renders a base card with content in footer', () =>
    matchesMarkup(
      <Card>
        <CardHeader
          title="Card Header"
          href="#"
          onClick={e => e.preventDefault()}
          symbol="contact"
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
    ));
  it('renders a base card with header visibly hidden', () =>
    matchesMarkup(
      <Card>
        <CardHeader
          title="Card Header"
          href="#"
          onClick={e => e.preventDefault()}
          symbol="contact"
          className="slds-assistive-text"
        />
        <CardBody>Anything can go into the card body</CardBody>
        <CardFooter>
          View All <span className="slds-assistive-text">Contacts</span>
        </CardFooter>
      </Card>
    ));
});
