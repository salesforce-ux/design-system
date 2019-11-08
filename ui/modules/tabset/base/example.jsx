// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Tabset from '../';
import Tab from '../tab';

export default (
  <Tabset>
    <Tab label="Tab 1">
      <p>This is tab 1 content</p>
      <p>It can be any html</p>
    </Tab>

    <Tab label="Tab 2">
      <p>This is tab 2 content</p>
      <p>It can be any html</p>
    </Tab>

    <Tab label="Tab 3">
      <p>This is tab 3 content</p>
      <p>It can be any html</p>
    </Tab>
  </Tabset>
);

export const examples = [
  {
    id: 'with-overflow',
    label: 'With Overflow',
    element: <div>tbd.</div>
  },
  {
    id: 'with-start-icon',
    label: 'With Start Icon',
    element: (
      <Tabset>
        <Tab
          label="Opportunities"
          startIcon={{ sprite: 'standard', symbol: 'opportunity' }}
        >
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Cases" startIcon={{ sprite: 'standard', symbol: 'case' }}>
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Products"
          startIcon={{ sprite: 'standard', symbol: 'product' }}
        >
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'with-end-icon',
    label: 'With End Icon',
    element: (
      <Tabset>
        <Tab label="Opportunities">
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Cases"
          endIcon={{ sprite: 'utility', symbol: 'error' }}
          endIconAltText="There is an error"
          endIconColor="error"
        >
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Products">
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'with-nested-scoped-tabs',
    label: 'With Nested Scoped Tabs',
    element: (
      <Tabset>
        <Tab label="Opportunities">
          <Tabset variant="scoped">
            <Tab label="Nested Item 1">
              <p>Nested Item 1.</p>
            </Tab>
            <Tab label="Nested Item 2">
              <p>Nested Item 2.</p>
            </Tab>
            <Tab label="Nested Item 3">
              <p>Nested Item 3.</p>
            </Tab>
          </Tabset>
        </Tab>

        <Tab label="Cases">
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Products">
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'vertical',
    label: 'Vertical Tabset',
    element: (
      <Tabset variant="vertical">
        <Tab label="Tab 1">
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Tab 2">
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab label="Tab 3">
          <p>This is tab 3 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Bureau
            boat. Curabitur aliquet nibh nec urna. The only no, bananas or
            protein which, real estate or not. But the price of approval pull
            Laoreet care, macro free members of the lion, the need now sit nibh
            temperature. Relay pump. In order to therapy. Smartphones.
          </p>
          <p>
            However, law enforcement, before and Vulputate weekend, peanut foot
            is always the fear of leaks of mourning for propaganda. Soccer free
            chili, throat monitoring, please anyone, pregnant, that is. But the
            message. Bureau present element temperature. But always lorem at
            felis. Manufacturing weekend, the lake is a driver shafts, or my
            Performance Pakistan, now sapien football volleyball football
            players. Foot boat athletics, football protein, the fermentation and
            protein but, pot.
          </p>
          <p>
            Soccer sometimes soft sapien. But the laughter. Phasellus lacinia,
            magna a ullamcorper nisl lacus, suscipit bibendum lectus arcu, vitae
            facilisis libero the project, from the pure. But even stress. Magna
            pede gas, ecological variable, with undergraduate, skirt or, relax.
            Stress and pot. Even kids mauris graduated. Land now, in front of,
            mattis eget, gravida vitae, ultricies ac, arcu. The lion entire foot
            to fit a football skirt, beef or players.
          </p>
          <p>
            Recommended start. Clinical layer soft peanut. A platform for my
            kids a lot ullamcorper vehicles. Integer laughter from the
            television. No one mass pull carrots nibh libero. Now salad tanks,
            one layer jaws not, either Planning, inexpensive. For thermal Bureau
            region. The entire shooting. We need a funny bow pregnant et. Now my
            targeted in advance. Live nibh eu financing it.
          </p>
          <p>
            As of the valley, at times, consectetuer sem sit amet, odio augue
            aliquam leo, eleifend et sit eget tortor nibh sed augue. Integer eu
            magna sit amet metus fermentum posuere. Soccer a lot, but
            unfortunately there is no element hairstyle. Each fermentation. When
            Pulls Rays Even xdis ut, instantly. Nutrition undergraduate and
            peanut-free. To my sauce or ceramic. Stress et. Clinical pain may be
            pregnant, but the valley. Before disease. Live basketball mourning
            now. Stress and pain. Even asset. Microwave malesuada undergraduate
            tank. Till fears. chat pregnant
          </p>
        </Tab>
      </Tabset>
    )
  },
  {
    id: 'vertical-with-icons',
    label: 'Vertical Tabset with Icons',
    element: (
      <Tabset variant="vertical">
        <Tab
          label="Opportunities"
          startIcon={{ sprite: 'standard', symbol: 'opportunity' }}
        >
          <p>This is tab 1 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Cases"
          startIcon={{ sprite: 'standard', symbol: 'case' }}
          endIcon={{ sprite: 'utility', symbol: 'error' }}
          endIconAltText="There is an error"
          endIconColor="error"
        >
          <p>This is tab 2 content</p>
          <p>It can be any html</p>
        </Tab>

        <Tab
          label="Products"
          startIcon={{ sprite: 'standard', symbol: 'product' }}
        >
          <p>This is tab 3 content</p>
          <p>It can be any html</p>
        </Tab>
      </Tabset>
    )
  }
];
