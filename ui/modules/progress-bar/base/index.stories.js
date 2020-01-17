import { storiesOf } from '@storybook/react';
import * as BaseExamples from './example';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Modules/Progress Bar/Base', module);

BaseExamples.states.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(BaseExamples.states, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example))
  );
});

BaseExamples.examples.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(BaseExamples.examples, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example))
  );
});
