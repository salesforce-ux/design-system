import React from 'react';
import { storiesOf } from '@storybook/react';
import * as NavigationBarExamples from './navigation-bar/example';
import * as NavigationTabBarExamples from './navigation-tab-bar/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [NavigationBarExamples, NavigationTabBarExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Global Navigation', module).add(
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
      page: () => <DocsPage title="Global Navigation" Docs={Docs} />
    }
  }
);
