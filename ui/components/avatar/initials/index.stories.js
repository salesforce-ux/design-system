import { storiesOf } from '@storybook/react';
import * as InitialsExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Avatar/Initials', module).add(
  'Base',
  () => InitialsExamples.default
);

InitialsExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(InitialsExamples.examples, example.id)
  );
});
