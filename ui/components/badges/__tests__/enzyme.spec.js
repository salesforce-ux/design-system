// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { LightestBadge, InverseBadge, Badge, BadgeIcon } from '../';

describe('badge', () => {
  it('renders base without crashing', () => {
    ReactDOM.render(<Badge>Lovely badge</Badge>, document.createElement('div'));
  });

  it('renders inverse variant without crashing', () => {
    ReactDOM.render(
      <InverseBadge>Lovely badge</InverseBadge>,
      document.createElement('div')
    );
  });

  it('renders light variant without crashing', () => {
    ReactDOM.render(
      <LightestBadge>Lovely badge</LightestBadge>,
      document.createElement('div')
    );
  });
});

describe('light badge with icon', () => {
  const wrapper = mount(
    <Badge isLightest>
      <BadgeIcon symbol="moneybag" />
      423 Credits Available
    </Badge>
  ).find('.slds-badge');

  it('renders a light badge', () => {
    expect(wrapper.hasClass('slds-badge_lightest')).toEqual(true);
  });

  it('renders a light badge with icon on the left', () => {
    expect(wrapper.childAt(0).exists('.slds-badge__icon')).toEqual(true);
  });

  it('renders an icon container', () => {
    expect(
      wrapper
        .find('.slds-badge__icon')
        .childAt(0)
        .exists('.slds-icon_container')
    ).toEqual(true);
  });

  it('renders an svg in the icon', () => {
    expect(
      wrapper
        .find('.slds-badge__icon .slds-icon_container')
        .childAt(0)
        .exists('svg.slds-icon')
    ).toEqual(true);
  });
});

describe('inverse badge with right icon', () => {
  const wrapper = mount(
    <InverseBadge>
      423 Credits Available
      <BadgeIcon symbol="moneybag" isInverse align="right" />
    </InverseBadge>
  ).find('.slds-badge');

  it('renders an inverse badge', () => {
    expect(wrapper.hasClass('slds-badge_inverse')).toEqual(true);
  });

  it('renders an inverse icon', () => {
    expect(
      wrapper.find('.slds-badge__icon').hasClass('slds-badge__icon_inverse')
    ).toEqual(true);
  });

  it('renders an icon on the right', () => {
    expect(
      wrapper.find('.slds-badge__icon').hasClass('slds-badge__icon_right')
    ).toEqual(true);
  });
});
