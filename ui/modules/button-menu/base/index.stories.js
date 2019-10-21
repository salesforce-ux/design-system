import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonMenuExamples from './example';
import {
  getDisplayElementById,
  getStoryWrapperDecorator
} from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Button Menu/Base', module).add(
  'Base',
  () => ButtonMenuExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Button Menu" Docs={Docs} />
    }
  }
);

ButtonMenuExamples.states.forEach(example => {
  storiesOf('Modules/Button Menu/Base/States', module).add(
    example.label,
    () => getDisplayElementById(ButtonMenuExamples.states, example.id),
    getStoryWrapperDecorator(example),
    {
      docs: {
        page: () => <DocsPage title="Button Menu" Docs={Docs} />
      }
    }
  );
});

ButtonMenuExamples.examples.forEach(example => {
  storiesOf('Modules/Button Menu/Base/Examples', module).add(
    example.label,
    () => getDisplayElementById(ButtonMenuExamples.examples, example.id),
    getStoryWrapperDecorator(example),
    {
      docs: {
        page: () => <DocsPage title="Button Menu" Docs={Docs} />
      }
    }
  );
});
