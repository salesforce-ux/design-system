import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as CommentExamples from './comment/example';
import * as PostExamples from './post/example';
import * as PostAttachmentsExamples from './post-with-attachments/example';
import * as PostCommentsExamples from './post-with-comments/example';
import * as PostQuestionExamples from './post-with-question/example';
import * as SmallColumnExamples from './small-column/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  CommentExamples,
  PostExamples,
  PostAttachmentsExamples,
  PostCommentsExamples,
  PostQuestionExamples,
  SmallColumnExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Feeds', module).add(
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
      page: () => <DocsPage title="Feeds" Docs={Docs} />
    }
  }
);
