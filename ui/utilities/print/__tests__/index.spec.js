/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('print utilities', () => {
  it('hides rendered text only when printing', () =>
    matchesMarkup(
      <div className="slds-no-print">I am hidden when printing</div>
    ));
});
