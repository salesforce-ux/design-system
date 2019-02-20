/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('print utilities', () => {
  it('hides rendered text only when printing', () =>
    matchesMarkupAndStyle(
      <div className="slds-no-print">I am hidden when printing</div>
    ));
});
