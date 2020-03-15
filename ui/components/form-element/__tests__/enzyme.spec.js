// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import { RecordDetailField } from '../record-detail';

describe('Record Detail', () => {
  it('render option as a string', () => {
    const rendered = mount(<RecordDetailField value="option" type="text" />);
    expect(rendered.find('.slds-form-element__static').text()).toBe('option');
  });
  it('render option as an array of strings with line breaks', () => {
    const wrapper = mount(<RecordDetailField value={['a', 'b', 'c']} />);
    expect(wrapper.find('.slds-form-element__static').html()).toBe(
      `<div class="slds-form-element__static">a<br>b<br>c<br></div>`
    );
  });
  it('render option as a React element if type is richtext', () => {
    const foo = <div>test</div>;
    const wrapper = mount(<RecordDetailField value={foo} type="richtext" />);
    expect(wrapper.find('.slds-form-element__static').html()).toBe(
      `<div class="slds-form-element__static"><div>test</div></div>`
    );
  });
  it('render option as a React element if type is checkbox', () => {
    const foo = <div>test</div>;
    const wrapper = mount(<RecordDetailField value={foo} type="checkbox" />);
    expect(wrapper.find('.slds-form-element__static').html()).toBe(
      `<div class="slds-form-element__static"><div>test</div></div>`
    );
  });
});
