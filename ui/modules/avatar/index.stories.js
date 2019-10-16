import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [BaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, ['examples']);

storiesOf('Modules/Avatar', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component, demoStyles, demoProps }) => (
      <StoryFrame
        component={component}
        label={label}
        styles={demoStyles}
        key={`kitchen-sink-${label}-${idx}`}
        demoProps={demoProps}
      />
    ))
  )
);
