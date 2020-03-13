import { storiesOf } from '@storybook/react';
import * as EqExamples from './example';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Modules/Dynamic Icons/Eq', module);

stories.add('Base', () => EqExamples.default);

EqExamples.examples.map(example => {
  stories.add(
    example.label,
    () => getDisplayElementById(EqExamples.examples, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example))
  );
});
