/* eslint-env jest */
import React from 'react';

import { UtilityBar, UtilityBarItem, UtilityPanel } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);
describe('Base Docked Utility Bar ', () => {
  it('renders a base docked utility bar', () => matchesMarkup(<UtilityBar />));
  it('renders a base docked utility bar with closed panel', () =>
    matchesMarkup(<UtilityBar panel={<UtilityPanel header="Call" />} />));
  it('renders a base docked utility bar with opened panel', () =>
    matchesMarkup(
      <UtilityBar
        panel={<UtilityPanel className="slds-is-open" header="Call" />}
      />
    ));
});

describe('Base Docked Utility Bar - Utility Bar Item', () => {
  it('renders a default utility bar item', () =>
    matchesMarkup(<UtilityBarItem symbol="call">Call</UtilityBarItem>));
  it('renders a utility bar item with notification', () =>
    matchesMarkup(<UtilityBarItem symbol="omni_channel" notification />));
  it('renders a utility bar item with pop out', () =>
    matchesMarkup(
      <UtilityBarItem hasPopOut active symbol="clock">
        History
      </UtilityBarItem>
    ));
});

describe('Base Docked Utility Bar - Utility Bar Panel', () => {
  it('renders a default utility bar panel', () =>
    matchesMarkup(<UtilityPanel header="Call" />));
  it('renders an open utility bar panel', () =>
    matchesMarkup(<UtilityPanel className="slds-is-open" header="Call" />));
});
