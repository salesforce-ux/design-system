// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */
import React from 'react';

import { GlobalHeaderDeprecated } from '../base/example';
import GlobalHeader from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Global Header', () => {
  it('renders a deprecated global header', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated />);
  });
  it('renders a deprecated global header with favorites selected', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated favoritesSelected />);
  });
  it('renders a deprecated global header with favorites disabled', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated favoritesDisabled />);
  });
  it('renders a deprecated global header with actions menu showing', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated actions />);
  });
  it('renders a deprecated global header with setup menu showing', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated setup />);
  });
  it('renders a deprecated global header with search expanded', () => {
    return matchesMarkupAndStyle(<GlobalHeaderDeprecated expanded />);
  });
  it('renders a deprecated global header with search expanded and with search term', () => {
    return matchesMarkupAndStyle(
      <GlobalHeaderDeprecated expanded searchingFor="ibm" />
    );
  });
  it('renders a global header', () => {
    return matchesMarkupAndStyle(<GlobalHeader />);
  });
});
