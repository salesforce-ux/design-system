// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CodeBlock, { ToggleButton } from '../CodeBlock';
import Copy from '../Copy';

const wrapper = shallow(
  <CodeBlock>
    <div>Testing!</div>
  </CodeBlock>
);

describe('Renders CodeBlock component', () => {
  it('Renders copy to clipboard component', () => {
    expect(wrapper.find(Copy).length).toEqual(1);
  });

  it('Renders toggle code button component', () => {
    expect(wrapper.find(ToggleButton).length).toEqual(1);
  });

  it('Renders CodeBlock code', () => {
    expect(wrapper.find('pre.language-html').length).toEqual(1);
  });
});
