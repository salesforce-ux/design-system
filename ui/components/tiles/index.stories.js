import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as ArticleExamples from './article/example';
import * as AvatarExamples from './avatar/example';
import * as BoardExamples from './board/example';
import * as IconExamples from './icon/example';
import * as ListExamples from './list/example';
import * as TaskExamples from './task/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  BaseExamples,
  ArticleExamples,
  AvatarExamples,
  BoardExamples,
  IconExamples,
  ListExamples,
  TaskExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Tiles', module).add('Kitchen Sink', () =>
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
