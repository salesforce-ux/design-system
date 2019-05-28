import { storiesOf } from '@storybook/react';
import * as IntegratedExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/File Selector/Integrated', module).add(
  'Base',
  () => IntegratedExamples.default
);

IntegratedExamples.states.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(IntegratedExamples.states, example.id)
  );
});
