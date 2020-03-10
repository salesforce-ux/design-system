import React from 'react';
import { storiesOf } from '@storybook/react';
import * as LabelExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Label/Base', module).add(
  'Base',
  () => LabelExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Label" Docs={Docs} />
    }
  }
);

LabelExamples.examples.forEach(example => {
  storiesOf('Modules/Label/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(LabelExamples.examples, example.id),
    {
      docs: {
        page: () => <DocsPage title="Label" Docs={Docs} />
      }
    }
  );
});

LabelExamples.states.forEach(state => {
  storiesOf('Modules/Label/Base/States', module).add(
    state.label,
    () => getDisplayElementById(LabelExamples.states, state.id),
    {
      docs: {
        page: () => <DocsPage title="Label" Docs={Docs} />
      }
    }
  );
});
