import { storiesOf } from '@storybook/react';
import * as ScrollingExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Tabs/Scrolling', module);

ScrollingExamples.states.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(ScrollingExamples.states, example.id)
  );
});
