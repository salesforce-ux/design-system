import React from 'react';
import { storiesOf } from '@storybook/react';
import * as StatefulButtonExamples from '../stateful/example';
import { getDisplayElementById } from '../../../shared/helpers';
import DocsPage from '../../../../shared/components/DocsPage';
import Docs from '../docs.mdx';

storiesOf('Modules/Button/Stateful', module).add(
  'Default',
  () => StatefulButtonExamples.default,
  {
    docs: {
      page: () => <DocsPage title="Button" Docs={Docs} />
    }
  }
);

StatefulButtonExamples.states.forEach(state => {
  storiesOf('Modules/Button/Stateful/States', module).add(
    state.label,
    () => getDisplayElementById(StatefulButtonExamples.states, state.id),
    {
      docs: {
        page: () => <DocsPage title="Button" Docs={Docs} />
      }
    }
  );
});
