/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders interaction utilities', () => {
  it('renders link reset', () =>
    matchesMarkupAndStyle(
      <a href="javascript:void(0);" className="slds-text-link_reset">
        Link
      </a>
    ));

  it('renders link reset with text link inside', () =>
    matchesMarkupAndStyle(
      <a href="javascript:void(0);" className="slds-text-link_reset">
        This text is a link but looks like normal text...<span className="slds-text-link">More</span>.
      </a>
    ));

  it('renders link reset with halo focus', () =>
    matchesMarkupAndStyle(
      <a href="javascript:void(0);" className="slds-has-blur-focus">
        Link with halo focus
      </a>
    ));

  it('renders button reset', () =>
    matchesMarkupAndStyle(
      <button className="slds-button slds-text-link_reset">Button</button>
    ));

  it('renders hover interactions on a span', () =>
    matchesMarkupAndStyle(
      <span className="slds-text-link_faux">
        Span with faux link interactions
      </span>
    ));
});
