import { storiesOf } from '@storybook/react';
import * as FeatureExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Popovers/Feature', module).add(
  'Base',
  () => FeatureExamples.default
);

FeatureExamples.examples.map(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FeatureExamples.examples, example.id)
  );
});
