import React from 'react';
import { storiesOf } from '@storybook/react';
import * as HeaderExamples from './header/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [HeaderExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Trial Bar', module).add('Kitchen Sink', () =>
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
