import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as MobileStackExamples from './mobile-stack/example';
import * as ScrollingExamples from './scrolling/example';
import * as SubTabsExamples from './sub-tabs/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  BaseExamples,
  MobileStackExamples,
  ScrollingExamples,
  SubTabsExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Tabs', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        styles={`min-height: 10rem`}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
