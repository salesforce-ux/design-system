// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  AvatarGroup,
  AvatarGrouped,
  AvatarGroupContent,
  AvatarImage,
  AvatarGroupedIcon,
  AvatarGroupedUserInitials
} from '../';

describe('avatar group', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<AvatarGroup />, document.createElement('div'));
  });
});

describe('avatar group sizes', () => {
  const wrapper = mount(<AvatarGroup />);

  ['large', 'medium', 'small', 'x-small'].map(size => {
    it(`renders a ${size} avatar group`, () => {
      wrapper.setProps({ size: size });
      expect(
        wrapper.find('.slds-avatar-group').hasClass(`slds-avatar-group_${size}`)
      ).toEqual(true);
    });
  });
});

describe('avatar group large with image and icon', () => {
  const wrapper = mount(
    <AvatarGroup size="large">
      <AvatarGrouped isPrimary>
        <AvatarImage />
      </AvatarGrouped>
      <AvatarGrouped>
        <AvatarGroupedIcon />
      </AvatarGrouped>
    </AvatarGroup>
  );

  it('renders a primary and secondary avatar in the correct order', () => {
    const wrapperAvatarGrouped = wrapper.find('.slds-avatar-grouped');
    expect(
      wrapperAvatarGrouped.at(0).hasClass('slds-avatar-grouped__primary')
    ).toEqual(true);
    expect(
      wrapperAvatarGrouped.at(1).hasClass('slds-avatar-grouped__secondary')
    ).toEqual(true);
  });

  it('renders only one child per avatar', () => {
    expect(
      wrapper.find('.slds-avatar-grouped__primary').children().length
    ).toEqual(1);
    expect(
      wrapper.find('.slds-avatar-grouped__secondary').children().length
    ).toEqual(1);
  });

  it('renders a grouped avatar icon', () => {
    expect(wrapper.find('svg').hasClass('slds-avatar-grouped__icon')).toEqual(
      false
    );
    expect(
      wrapper.find('.slds-icon_container').hasClass('slds-avatar-grouped__icon')
    ).toEqual(true);
  });

  it('renders a grouped avatar img', () => {
    expect(
      wrapper
        .find('.slds-avatar-grouped__primary')
        .childAt(0)
        .getDOMNode().tagName
    ).toEqual('IMG');
  });
});

describe('avatar group small with user initials and img', () => {
  const wrapper = mount(
    <AvatarGroup size="small">
      <AvatarGrouped isPrimary>
        <AvatarGroupedUserInitials />
      </AvatarGrouped>
      <AvatarGrouped>
        <AvatarGroupedIcon />
      </AvatarGrouped>
    </AvatarGroup>
  );

  it('renders a grouped avatar with user initials', () => {
    expect(
      wrapper
        .find('.slds-avatar-grouped__primary')
        .childAt(0)
        .getDOMNode().tagName
    ).toEqual('ABBR');
    expect(
      wrapper
        .find('.slds-avatar-grouped__secondary')
        .childAt(0)
        .exists('.slds-icon_container')
    ).toEqual(true);
  });
});

describe('avatar group small with user initials and img', () => {
  const wrapper = mount(
    <AvatarGroup size="small">
      <AvatarGroupContent type="user-initials" isInverse />
    </AvatarGroup>
  );

  it('renders a grouped avatar with inversed user initials', () => {
    expect(
      wrapper
        .find('.slds-avatar-grouped')
        .first()
        .hasClass('slds-avatar-grouped_inverse')
    ).toEqual(true);

    expect(
      wrapper
        .find('.slds-avatar-grouped')
        .first()
        .childAt(0)
        .exists('.slds-avatar__initials_inverse')
    ).toEqual(true);
  });
});
