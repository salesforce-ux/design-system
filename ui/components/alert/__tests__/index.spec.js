/* eslint-env jest */
import React from 'react';
import Alert from '../';
import { UtilityIcon } from '../../icons/base/example';
import EmptyLink from '../../../shared/empty-link/';
import Heading from '../../../shared/heading/';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a base alert', () =>
  matchesMarkup(
    <Alert>
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="user"
      />
      <Heading level="2">
        Logged in as John Smith (johnsmith@acme.com).{' '}
        <EmptyLink>Log out</EmptyLink>
      </Heading>
    </Alert>
  ));

it('renders a warning alert', () =>
  matchesMarkup(
    <Alert type="warning">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="warning"
      />
      <Heading level="2">
        Your browser is outdated. Your Salesforce experience may be degraded.{' '}
        <EmptyLink>More Information</EmptyLink>
      </Heading>
    </Alert>
  ));

it('renders a error alert', () =>
  matchesMarkup(
    <Alert type="error">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="error"
      />
      <Heading level="2">
        Your browser is currently not supported. Your Salesforce may be
        degraded. <EmptyLink>More Information</EmptyLink>
      </Heading>
    </Alert>
  ));

it('renders a offline alert', () =>
  matchesMarkup(
    <Alert type="offline">
      <UtilityIcon
        containerClassName="slds-m-right_x-small"
        className="slds-icon_x-small"
        assistiveText={false}
        symbol="offline"
      />
      <Heading level="2">
        You are in offline mode. <EmptyLink>More Information</EmptyLink>
      </Heading>
    </Alert>
  ));
