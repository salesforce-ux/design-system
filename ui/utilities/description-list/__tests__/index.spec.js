/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('renders description list utilities', () => {
  it('renders description list', () =>
    matchesMarkup(
      <dl>
        <dt>First Label:</dt>
        <dd>Description for first label</dd>
        <dt>Second Label:</dt>
        <dd>Description for second label</dd>
      </dl>
    ));

  it('renders description list with inline name/value pair', () =>
    matchesMarkup(
      <dl className="slds-dl_inline">
        <dt className="slds-dl_inline__label">First Label:</dt>
        <dd className="slds-dl_inline__detail">Description for first label</dd>
        <dt className="slds-dl_inline__label">Second Label:</dt>
        <dd className="slds-dl_inline__detail">Description for second label</dd>
      </dl>
    ));

  it('renders description list with horizontal name/value pair', () =>
    matchesMarkup(
      <dl className="slds-dl_horizontal">
        <dt className="slds-dl_horizontal__label">First Label:</dt>
        <dd className="slds-dl_horizontal__detail">
          Description for first label
        </dd>
        <dt className="slds-dl_horizontal__label">Second Label:</dt>
        <dd className="slds-dl_horizontal__detail">Second description</dd>
      </dl>
    ));

  it('renders description list with inline name/value pair in narrow region', () =>
    matchesMarkup(
      <div className="slds-region_narrow" style={{ width: '360px' }}>
        <dl className="slds-dl_inline">
          <dt className="slds-dl_inline__label">First Label:</dt>
          <dd className="slds-dl_inline__detail">
            Description for first label
          </dd>
          <dt className="slds-dl_inline__label">Second Label:</dt>
          <dd className="slds-dl_inline__detail">Second description</dd>
        </dl>
      </div>
    ));

  it('renders description list with horizontal name/value pair in narrow region', () =>
    matchesMarkup(
      <div className="slds-region_narrow" style={{ width: '360px' }}>
        <dl className="slds-dl_horizontal">
          <dt className="slds-dl_horizontal__label">First Label:</dt>
          <dd className="slds-dl_horizontal__detail">
            Description for first label
          </dd>
          <dt className="slds-dl_horizontal__label">Second Label:</dt>
          <dd className="slds-dl_horizontal__detail">Second description</dd>
        </dl>
      </div>
    ));
});
