import { storiesOf } from '@storybook/react';
import * as MobileStackExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tabs/Mobile Stack', module).add(
  'Base',
  () => MobileStackExamples.default
);

MobileStackExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(MobileStackExamples.examples, example.id)
  );
});

MobileStackExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(MobileStackExamples.states, example.id)
  );
});
