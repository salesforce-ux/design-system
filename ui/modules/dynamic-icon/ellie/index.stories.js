import { storiesOf } from '@storybook/react';
import * as EllieExamples from './example';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Modules/Dynamic Icons/Ellie', module);

stories.add('Base', () => EllieExamples.default);

EllieExamples.states.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(EllieExamples.states, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example))
  );
});

EllieExamples.examples.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(EllieExamples.examples, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example))
  );
});
