import { storiesOf } from '@storybook/react';
import * as WalkthroughExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Walkthrough', module).add(
  'Base',
  () => WalkthroughExamples.default
);

WalkthroughExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(WalkthroughExamples.examples, example.id)
  );
});
