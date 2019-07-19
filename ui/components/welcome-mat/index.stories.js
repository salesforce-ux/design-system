import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as InfoOnlyExamples from './info-only/example';
import * as SplashExamples from './splash/example';
import * as TrailheadConnectedExamples from './trailhead-connected/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  BaseExamples,
  InfoOnlyExamples,
  SplashExamples,
  TrailheadConnectedExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Welcome Mat', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        styles={`height: 48rem`}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
