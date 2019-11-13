/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders border utilities', () => {
  it('renders top border', () =>
    matchesMarkup(
      <div className="slds-border_top">This should have a top border.</div>
    ));

  it('renders right border', () =>
    matchesMarkup(
      <div className="slds-border_right">This should have a right border.</div>
    ));

  it('renders bottom border', () =>
    matchesMarkup(
      <div className="slds-border_bottom">
        This should have a bottom border.
      </div>
    ));

  it('renders left border', () =>
    matchesMarkup(
      <div className="slds-border_left">This should have a left border.</div>
    ));
});
