/* eslint-env jest */
import React from 'react';
import { Tooltip } from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);
describe('Base Tooltip', () => {
  it('renders a base tooltip', () =>
    matchesMarkup(<Tooltip className="slds-nubbin_bottom-left" />));
  it('renders a base tooltip with learn more', () =>
    matchesMarkup(
      <Tooltip className="slds-nubbin_bottom-left" hasLearnMore />
    ));
});
