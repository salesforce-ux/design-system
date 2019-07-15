import React from 'react';
import { storiesOf } from '@storybook/react';
import * as EllieExamples from './ellie/example';
import * as EqExamples from './eq/example';
import * as GlobalActionHelpExamples from './global-action-help/example';
import * as ScoreExamples from './score/example';
import * as StrengthExamples from './strength/example';
import * as TrendExamples from './trend/example';
import * as TypingExamples from './typing/example';
import * as WaffleExamples from './waffle/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [
  EllieExamples,
  EqExamples,
  GlobalActionHelpExamples,
  ScoreExamples,
  StrengthExamples,
  TrendExamples,
  TypingExamples,
  WaffleExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Dynamic Icons', module).add('Kitchen Sink', () =>
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
