// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { ActionIcon } from '../action/example';
import { UtilityIcon } from '../base/example';
const { matchesMarkup } = createHelpers(__dirname);

describe('Icon Action', () => {
  it('renders an x-small action icon', () =>
    matchesMarkup(<ActionIcon className="slds-icon_x-small" />));
  it('renders an xx-small action icon', () =>
    matchesMarkup(<ActionIcon className="slds-icon_xx-small" />));
});

describe('Utility Icon', () => {
  it('should render a utility icon', () => {
    matchesMarkup(<UtilityIcon />);
  });

  it('should render a utility xx-small icon', () => {
    matchesMarkup(<UtilityIcon size="xx-small" />);
  });

  it('should render a utility x-small icon', () => {
    matchesMarkup(<UtilityIcon size="x-small" />);
  });

  it('should render a utility small icon', () => {
    matchesMarkup(<UtilityIcon size="small" />);
  });

  it('should render a utility large icon', () => {
    matchesMarkup(<UtilityIcon size="large" />);
  });

  it('should render a utility icon with currentColor', () => {
    matchesMarkup(<UtilityIcon useCurrentColor />);
  });
});

describe('RTL icons', () => {
  it('should render a horizontally flipped icon', () =>
    matchesMarkup(
      <div dir="rtl" style={{ width: '32px' }}>
        <UtilityIcon
          containerClassName="slds-icon_flip"
          className="slds-icon-text-default"
          symbol="picklist_type"
          title="List icon"
          assistiveText="List icon"
        />
      </div>
    ));
});
