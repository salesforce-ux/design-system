/* eslint-env jest */
import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { List } from '../example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders truncation utilities', () => {
  it('renders single line truncation and title attr', () =>
    matchesMarkupAndStyle(
      <div style={{ width: '200px' }}>
        <p
          className="slds-truncate"
          title="Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."
        >
          Long text field with many lines and truncation will look like this.
          Even though the text might go on for ages and ages.
        </p>
      </div>
    ));

  it('renders single line flexbox truncation on nested grid containers', () =>
    matchesMarkupAndStyle(
      <div className="slds-grid" style={{ width: '200px' }}>
        <div className="slds-grid slds-has-flexi-truncate">
          <p
            className="slds-truncate"
            title="Long text field with many lines and truncation will look like this. Even though the text might go on for ages and ages."
          >
            Long text field with many lines and truncation will look like this.
            Even though the text might go on for ages and ages.
          </p>
        </div>
      </div>
    ));

  it('renders single line truncation with a 25% max width', () =>
    matchesMarkupAndStyle(<List width="25" />));

  it('renders single line truncation with a 33% max width', () =>
    matchesMarkupAndStyle(<List width="33" />));

  it('renders single line truncation with a 50% max width', () =>
    matchesMarkupAndStyle(<List width="50" />));

  it('renders single line truncation with a 66% max width', () =>
    matchesMarkupAndStyle(<List width="66" />));

  it('renders single line truncation with a 75% max width', () =>
    matchesMarkupAndStyle(<List width="75" />));
});
