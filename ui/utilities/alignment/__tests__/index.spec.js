/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders absolute center utility', () => {
  it('renders utility', () =>
    matchesMarkupAndStyle(
      <div className="slds-align_absolute-center" style={{ height: '5rem' }}>
        This content will be positioned in the absolute center of its container
      </div>
    ));

  it('renders utility nested in a flex container', () =>
    matchesMarkupAndStyle(
      <div className="slds-grid" style={{ height: '5rem' }}>
        <div className="slds-align_absolute-center">
          This content will be positioned in the absolute center of its
          container
        </div>
      </div>
    ));
});
