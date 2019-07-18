import { storiesOf } from '@storybook/react';
import * as ExpandableSectionExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf(
  'Components/Vertical Navigation/Expandable Section',
  module
);

ExpandableSectionExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ExpandableSectionExamples.states, example.id)
  );
});
