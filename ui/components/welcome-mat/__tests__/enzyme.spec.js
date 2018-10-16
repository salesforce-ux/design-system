// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import { mount, render, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMat from '../';
import { sampleTiles, WelcomeMatMarketingContent } from '../helpers';
import WelcomeMatContent from '../WelcomeMatContent';
import WelcomeMatContentTrailhead from '../WelcomeMatContentTrailhead';
import WelcomeMatTile from '../WelcomeMatTile';

const tiles = sampleTiles();
const twoTilesCompleted = [
  Object.assign({}, tiles[0], { completed: true }),
  Object.assign({}, tiles[1], { completed: true }),
  ...tiles.slice(2)
];

describe('Welcome Mat Component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<WelcomeMat />, document.createElement('div'));
  });

  it('correctly renders with completed steps', () => {
    const rendered = render(<WelcomeMat tiles={twoTilesCompleted} />);
    expect(rendered.find('.slds-welcome-mat__tile_complete')).toHaveLength(2);
  });

  it('correctly renders in info-only mode', () => {
    const rendered = render(<WelcomeMat isInfoOnly />);
    expect(
      rendered.find('.slds-welcome-mat').hasClass('slds-welcome-mat_info-only')
    ).toBe(true);
    expect(
      rendered
        .find('.slds-welcome-mat__tiles')
        .hasClass('slds-welcome-mat__tiles_info-only')
    ).toBe(true);
  });

  it('correctly renders in splash mode', () => {
    const rendered = render(
      <WelcomeMat
        tiles={null}
        content={({ labelId }) => (
          <WelcomeMatMarketingContent labelId={labelId} />
        )}
      />
    );
    expect(
      rendered.find('.slds-welcome-mat').hasClass('slds-welcome-mat_splash')
    ).toBe(true);
    expect(
      rendered.find('.slds-welcome-mat__info').hasClass('slds-size_1-of-1')
    ).toBe(true);
  });
});

describe('Welcome Mat Tile Component', () => {
  it('renders a tile without crashing', () => {
    ReactDOM.render(<WelcomeMatTile />, document.createElement('div'));
  });

  it('correctly adds default tile content', () => {
    const rendered = render(<WelcomeMatTile />);
    expect(rendered.find('.slds-icon-utility-animal_and_nature').length).toBe(
      1
    );
    expect(rendered.find('.slds-welcome-mat__tile-title').text()).toBe(
      'Welcome to Salesforce!'
    );
    expect(rendered.find('.slds-welcome-mat__tile-description').text()).toBe(
      'Lorem ipsum dolor sit amet, lorem ipsum dolor.'
    );
  });

  it('correctly applies completed prop', () => {
    const rendered = shallow(<WelcomeMatTile tile={twoTilesCompleted[0]} />);
    expect(rendered.find('.slds-welcome-mat__tile_complete').exists()).toBe(
      true
    );
  });
});

describe('Welcome Mat Content Component', () => {
  const complete = 3;
  const total = 5;
  const completePercent = complete / total * 100;
  const example = render(
    <WelcomeMatContent complete={complete} total={total} />
  );

  it('renders without crashing', () => {
    ReactDOM.render(<WelcomeMatContent />, document.createElement('div'));
  });

  it('correctly implements completed count props', () => {
    expect(example.find('strong').html()).toBe(
      `${complete}/${total} units completed`
    );
  });

  it('shows the correct progress bar progress', () => {
    expect(example.find('.slds-progress-bar__value').attr('style')).toBe(
      `width:${completePercent}%`
    );
  });
});

describe('Welcome Mat Trailhead Content Component', () => {
  const shallowNew = shallow(<WelcomeMatContentTrailhead />);
  const shallowComplete = shallow(
    <WelcomeMatContentTrailhead complete={5} total={5} />
  );
  const wrapper = mount(<WelcomeMatContentTrailhead complete={5} total={5} />);

  it('renders without crashing', () => {
    ReactDOM.render(
      <WelcomeMatContentTrailhead />,
      document.createElement('div')
    );
  });

  it('shows the correct initial progress', () => {
    const initialText = ['Lightning Explorer', '0/5 units completed'];

    shallowNew.find('.slds-welcome-mat__info-progress p').forEach((p, pi) => {
      expect(p.text()).toBe(initialText[pi]);
    });
  });

  it('shows the correct completed message', () => {
    const completedText = [
      'Lightning Explorer',
      'Cha-ching! You earned the badge.'
    ];

    shallowComplete
      .find('.slds-welcome-mat__info-progress p')
      .forEach((p, pi) => {
        expect(p.text()).toBe(completedText[pi]);
      });
  });

  it('renders a brand button when complete', () => {
    expect(wrapper.find('.slds-button').exists()).toBe(true);
    expect(wrapper.find('.slds-button_brand').exists()).toBe(true);
  });
});

describe('Welcome Mat / Modal Markup Separation', () => {
  const wrapper = mount(<WelcomeMat />);

  it('renders a welcome mat within modal content', () => {
    expect(
      wrapper.find('.slds-modal__content .slds-welcome-mat').exists()
    ).toBe(true);
    expect(
      wrapper
        .find(
          '.slds-modal__content .slds-welcome-mat .slds-welcome-mat__content'
        )
        .exists()
    ).toBe(true);
  });
});
