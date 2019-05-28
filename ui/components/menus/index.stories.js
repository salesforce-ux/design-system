import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ActionOverflowExamples from './action-overflow/example';
import * as DropdownExamples from './dropdown/example';
import * as DropdownHeightExamples from './dropdown-height/example';
import * as DropdownPositioningExamples from './dropdown-positioning/example';
import * as SubmenuExamples from './submenu/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  ActionOverflowExamples,
  DropdownExamples,
  DropdownHeightExamples,
  DropdownPositioningExamples,
  SubmenuExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Menus', module).add('Kitchen Sink', () =>
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
