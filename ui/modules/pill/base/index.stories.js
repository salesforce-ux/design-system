import React from 'react';
import { storiesOf } from '@storybook/react';
import * as PillExamples from './example';
import {
  getDisplayElementById,
  getExampleStoryParams,
  getStoryWrapperDecorator
} from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Pill/Base', module).add(
  'Default',
  () => PillExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Pill" Docs={Docs} />
    }
  }
);

PillExamples.states.forEach(example => {
  storiesOf('Modules/Pill/Base/States', module).add(
    example.label,
    () => getDisplayElementById(PillExamples.states, example.id),
    {
      docs: {
        page: () => <DocsPage title="Pill" Docs={Docs} />
      }
    }
  );
});

PillExamples.examples.forEach(example => {
  storiesOf('Modules/Pill/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(PillExamples.examples, example.id),
    getExampleStoryParams(getStoryWrapperDecorator(example), {
      docs: {
        page: () => <DocsPage title="Pill" Docs={Docs} />
      }
    })
  );
});
