/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import Toast from '../index';
import { UtilityIcon } from '../../icons/base/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Toast', () => {
  it('renders a default toast for info', () =>
    matchesMarkup(
      <Toast>
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">
            26 potential duplicate leads were found.{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    ));

  it('renders an info toast', () =>
    matchesMarkup(
      <Toast type="info">
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">
            26 potential duplicate leads were found.{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    ));
  it('renders an error toast', () =>
    matchesMarkup(
      <Toast type="error">
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">
            26 potential duplicate leads were found.{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    ));
  it('renders a warning toast', () =>
    matchesMarkup(
      <Toast type="warning">
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">
            26 potential duplicate leads were found.{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    ));
  it('renders a success toast', () =>
    matchesMarkup(
      <Toast type="success">
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small">
            26 potential duplicate leads were found.{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              Select Leads to Merge
            </a>
          </h2>
        </div>
      </Toast>
    ));
  it('renders a relative toast', () =>
    matchesMarkup(
      <Toast type="success" containerClassName="slds-is-relative">
        <UtilityIcon
          containerClassName="slds-m-right_small slds-no-flex slds-align-top"
          className="slds-icon_small"
          assistiveText={false}
          symbol="success"
        />
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small ">
            Account{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              ACME - 100
            </a>{' '}
            widgets was created.
          </h2>
        </div>
      </Toast>
    ));
  it('renders a toast with an icon', () =>
    matchesMarkup(
      <Toast type="success">
        <UtilityIcon
          containerClassName="slds-m-right_small slds-no-flex slds-align-top"
          className="slds-icon_small"
          assistiveText={false}
          symbol="success"
        />
        <div className="slds-notify__content">
          <h2 className="slds-text-heading_small ">
            Account{' '}
            <a href="#" onClick={e => e.preventDefault()}>
              ACME - 100
            </a>{' '}
            widgets was created.
          </h2>
        </div>
      </Toast>
    ));
});
