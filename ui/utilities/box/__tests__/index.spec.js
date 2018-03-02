/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { render, mount } from 'enzyme';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders box utilities', () => {
  it('renders box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box">
        <p>This is a regular-sized box.</p>
      </div>
    ));

  it('renders xx small box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-box_xx-small">
        <p>This is a regular-sized box.</p>
      </div>
    ));

  it('renders x small box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-box_x-small">
        <p>This is a regular-sized box.</p>
      </div>
    ));

  it('renders small box', () =>
    matchesMarkupAndStyle(
      <div className="slds-box slds-box_small">
        <p>This is a regular-sized box.</p>
      </div>
    ));

  it('renders actionable box with interactions', () => {
    const el = mount(
      <a
        href="javascript:void(0);"
        className="slds-box slds-box_link"
        style={{ display: 'block' }}
      >
        <p>This is an actionable box with interactions.</p>
      </a>
    );
    return matchesMarkupAndStyle(
      el
        .find('.slds-box_link')
        .at(0)
        .simulate('mouseEnter')
        .html()
    );
  });
});
