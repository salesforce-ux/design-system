import React from 'react';
import { storiesOf } from '@storybook/react';
import * as ButtonGroupExamples from './example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Button Group/Icon', module).add(
  'Default',
  () => ButtonGroupExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Button Group" Docs={Docs} />
    }
  }
);

ButtonGroupExamples.states.forEach(states => {
  storiesOf('Modules/Button Group/Icon/States', module).add(
    states.label,
    () => getDisplayElementById(ButtonGroupExamples.states, states.id),
    {
      docs: {
        page: () => <DocsPage title="Button Group" Docs={Docs} />
      }
    }
  );
});

ButtonGroupExamples.examples.forEach(examples => {
  storiesOf('Modules/Button Group/Icon/Examples', module).add(
    examples.label,
    () => getDisplayElementById(ButtonGroupExamples.examples, examples.id),
    {
      docs: {
        page: () => <DocsPage title="Button Group" Docs={Docs} />
      }
    }
  );
});
