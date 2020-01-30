import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as EinsteinExamples from './einstein/example';
import * as WrapperExamples from './wrapper/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [BaseExamples, EinsteinExamples, WrapperExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Cards', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Cards" Docs={Docs} />
    }
  }
);
