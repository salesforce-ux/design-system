// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import { Path, PathTrack, PathStep, PathCoaching } from '../';

describe('Path', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<Path />, document.createElement('div'));
  });

  it('renders with coaching flag', () => {
    const rendered = shallow(<Path hasCoaching />);
    expect(rendered.hasClass('slds-path_has-coaching')).toBe(true);
  });

  it('renders with open coaching flags', () => {
    const rendered = shallow(<Path coachingOpen />);
    expect(rendered.hasClass('slds-is-expanded')).toBe(true);
  });
});

describe('Path Track', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<PathTrack />, document.createElement('div'));
  });

  it('renders with coaching button', () => {
    const rendered = shallow(<PathTrack hasCoaching />);
    expect(rendered.find('.slds-path__trigger').length).toBe(1);
  });

  it('renders with open coaching button', () => {
    const rendered = shallow(<PathTrack hasCoaching coachingOpen />);
    expect(
      rendered.find('.slds-path__trigger').hasClass('slds-path__trigger_open')
    ).toBe(true);
  });

  it('renders with overflow buttons', () => {
    const rendered = render(<PathTrack hasOverflow />);
    expect(
      rendered.find('.slds-path__scroll-controls .slds-button').length
    ).toBe(2);
  });

  it('correctly sets coachingId aria-controls on both trigger buttons (visible & not)', () => {
    const rendered = render(
      <PathTrack hasCoaching coachingId="path-coaching-custom" />
    );
    expect(
      rendered.find('button[aria-controls="path-coaching-custom"]').length
    ).toBe(2);
  });

  it('renders the correct stage name', () => {
    const rendered = shallow(<PathTrack stageName="Won" />);
    expect(rendered.find('.slds-path__stage-name').text()).toBe('Stage: Won');
  });
});

describe('Path Step', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<PathStep />, document.createElement('div'));
  });

  it('renders with label', () => {
    const rendered = shallow(<PathStep label="Won" />);
    expect(rendered.find('.slds-path__title').text()).toBe('Won');
  });

  it('renders with single state class', () => {
    const rendered = shallow(<PathStep stepState={['complete']} />);
    expect(rendered.find('.slds-is-complete').length).toBe(1);
  });

  it('renders with multiple state classes', () => {
    const rendered = shallow(<PathStep stepState={['active', 'current']} />);
    expect(rendered.find('.slds-is-active.slds-is-current').length).toBe(1);
  });

  it('renders with correct active state modifications', () => {
    const rendered = shallow(<PathStep stepState={['active']} />);
    const anchor = rendered.find('.slds-path__link');

    expect(anchor.prop('tabIndex')).toBe(0);
    expect(anchor.prop('aria-selected')).toBe(true);
  });

  it('renders with correct complete state modifications', () => {
    const rendered = shallow(<PathStep stepState={['complete']} />);

    expect(rendered.find('.slds-assistive-text').text()).toBe('Stage Complete');
  });

  it('renders with the correct path id', () => {
    const rendered = shallow(<PathStep index={1} />);
    expect(rendered.find('.slds-path__link').prop('id')).toBe('path-1');
  });
});

describe('Path Coaching', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<PathCoaching />, document.createElement('div'));
  });

  it('sets correct coaching id', () => {
    const rendered = shallow(<PathCoaching coachingId="path-coaching-1" />);
    expect(rendered.prop('id')).toBe('path-coaching-1');
  });

  it('renders custom coaching fields', () => {
    const rendered = render(
      <PathCoaching
        coachingData={{
          rows: [
            {
              fields: [
                {
                  type: 'text',
                  label: 'Foo',
                  value: 'Bar'
                }
              ]
            }
          ]
        }}
      />
    );

    expect(rendered.find('.slds-form-element__label').text()).toBe('Foo');
    expect(rendered.find('.slds-form-element__static').text()).toBe('Bar');
  });

  it('renders custom path guidance content', () => {
    const customContent = <p key="guidance-1">Guidance</p>;

    const rendered = shallow(<PathCoaching pathGuidance={[customContent]} />);

    expect(
      rendered.find('.slds-path__guidance-content').contains(customContent)
    ).toBe(true);
  });
});
