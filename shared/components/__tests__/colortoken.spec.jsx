// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import ColorToken from '../ColorToken';

describe('Color Token', () => {
  it('Renders the color of the token', () => {
    const wrapper = shallow(
      <ColorToken tokenSet="force-base" token="COLOR_BACKGROUND" />
    );
    expect(wrapper.find('.doc-token__image > div').length).toEqual(1);
  });
});
