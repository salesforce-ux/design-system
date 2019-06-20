import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as InlineEditExamples from './inline-edit/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [BaseExamples, InlineEditExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/List Builder', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
