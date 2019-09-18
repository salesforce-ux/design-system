import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as CustomLogicExamples from './custom-logic/example';
import * as FiltersExamples from './filters/example';
import * as FormulaExamples from './formula/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  CustomLogicExamples,
  FiltersExamples,
  FormulaExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Expression', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }, idx) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Expression" Docs={Docs} />
    }
  }
);
