import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonGroupsBaseExamples from './base/example';
import * as ButtonGroupsIconExamples from './icon/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

const examples = [ButtonGroupsBaseExamples, ButtonGroupsIconExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Modules/Button Group/', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ id, label, component }) => {
      return (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${id}-${idx}`}
        />
      );
    })
  )
);
