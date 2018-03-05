/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders float utilities', () => {
  it('renders float left', () =>
    matchesMarkupAndStyle(
      <div className="slds-clearfix">
        <div className="slds-float_left">
          <p>I’m floooaaaating</p>
        </div>
      </div>
    ));

  it('renders float right', () =>
    matchesMarkupAndStyle(
      <div className="slds-clearfix">
        <div className="slds-float_right">
          <p>I’m floooaaaating</p>
        </div>
      </div>
    ));

  it('renders float none', () =>
    matchesMarkupAndStyle(
      <div className="slds-float_none">
        <p>I’m not floooaaaating</p>
      </div>
    ));

  it('renders floats with a clearfix', () =>
    matchesMarkupAndStyle(
      <div className="slds-clearfix">
        <div className="slds-float_left">
          <p>I’m floooaaaating</p>
        </div>
        <div className="slds-float_right">
          <p>I’m floooaaaating</p>
        </div>
      </div>
    ));
});
