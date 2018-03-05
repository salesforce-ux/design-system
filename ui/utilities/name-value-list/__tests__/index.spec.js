/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders name-value-list utilities', () => {
  it('renders horizontal name/value pair list', () =>
    matchesMarkupAndStyle(
      <dl className="slds-list_horizontal slds-wrap">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for second label"
        >
          Description for second label
        </dd>
      </dl>
    ));
  it('renders inline name/value pair list', () =>
    matchesMarkupAndStyle(
      <dl className="slds-list_inline">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for second label"
        >
          Description for second label
        </dd>
      </dl>
    ));
  it('renders stacked name/value pair list', () =>
    matchesMarkupAndStyle(
      <dl className="slds-list_stacked">
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="First Label"
        >
          First Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for first label"
        >
          Description for first label
        </dd>
        <dt
          className="slds-item_label slds-text-color_weak slds-truncate"
          title="Second Label"
        >
          Second Label:
        </dt>
        <dd
          className="slds-item_detail slds-truncate"
          title="Description for second label"
        >
          Description for second label
        </dd>
      </dl>
    ));
});
