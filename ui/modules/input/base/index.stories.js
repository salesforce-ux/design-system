import React from 'react';
import { storiesOf } from '@storybook/react';
import * as InputExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Input/Base', module).add(
  'Base',
  () => InputExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Input" Docs={Docs} />
    }
  }
);

InputExamples.examples.forEach(example => {
  storiesOf('Modules/Input/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(InputExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Input" Docs={Docs} />
      }
    }
  );
});

InputExamples.states.forEach(state => {
  storiesOf('Modules/Input/Base/States', module).add(
    state.label,
    () => getDisplayElementById(InputExamples.states, state.id),
    {
      docs: {
        page: () => <DocsPage title="Input" Docs={Docs} />
      }
    }
  );
});
