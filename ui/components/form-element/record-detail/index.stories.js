import { storiesOf } from '@storybook/react';
import * as FormElementRecordDetailExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';

import '../../../index.scss';

const stories = storiesOf('Components/Form Element/Record Detail', module).add(
  'Base',
  () => FormElementRecordDetailExamples.default
);

FormElementRecordDetailExamples.examples.forEach(example => {
  stories.add(example.label, () =>
    getDisplayElementById(FormElementRecordDetailExamples.examples, example.id)
  );
});
