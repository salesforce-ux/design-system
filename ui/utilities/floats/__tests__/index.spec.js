/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders float utilities', () => {
  it('renders float left', () =>
    matchesMarkup(
      <div className="slds-clearfix">
        <div className="slds-float_left">
          <p>I’m floooaaaating</p>
        </div>
      </div>
    ));

  it('renders float right', () =>
    matchesMarkup(
      <div className="slds-clearfix">
        <div className="slds-float_right">
          <p>I’m floooaaaating</p>
        </div>
      </div>
    ));

  it('renders float none', () =>
    matchesMarkup(
      <div className="slds-float_none">
        <p>I’m not floooaaaating</p>
      </div>
    ));

  it('renders floats with a clearfix', () =>
    matchesMarkup(
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
