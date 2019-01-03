import React, { lazy, Suspense } from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';

// import the framework to make the docs _look_ like the framework, plus we rely on it for buttons in the code blocks
import '../../../ui/index.scss';
// import the docs specific styles
import '../../../shared/styles/doc.scss';

import ErrorBoundary from './error-boundary';

const MDXPanel = styled.div({
  fontFamily: "'Salesforce Sans', sans-serif",
  padding: 20,
  width: '100%',
  overflow: 'auto'
});

class MDX extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: '',
      story: '',
      mdxFilePath: ''
    };
    this.onAddMDX = this.onAddMDX.bind(this);
  }

  onAddMDX(params) {
    // create a string that represents the reletive path to the docs file, for this specific story file
    // './ui/components/buttons/stateful/index.stories.js' -> 'ui/components/buttons' | ''
    const docsPathPart = params.storyFile
      ? `${params.storyFile
          .split('/')
          .filter((slug, index) => index > 0 && index <= 3)
          .join('/')}`
      : '';

    this.setState({
      kind: params.kind,
      story: params.story,
      mdxFilePath: docsPathPart
    });
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the mdx and render it.
    channel.on('SLDS/add_mdx', this.onAddMDX);

    // Clear the current mdx on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddMDX('');
    });
  }

  renderMDXDoxs(mdxFilePath) {
    //dynamically import the docs file reletive to the storyfile
    const Mdx = lazy(() => import(`../../../${mdxFilePath}/docs.mdx`));
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Mdx />
        </Suspense>
      </ErrorBoundary>
    );
  }

  render() {
    const { kind, mdxFilePath } = this.state;
    const { active } = this.props;

    return active ? (
      <MDXPanel>
        {mdxFilePath ? this.renderMDXDoxs(mdxFilePath) : 'no docs'}
      </MDXPanel>
    ) : null;
  }

  // This is some cleanup tasks when the MDX panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener('SLDS/add_mdx', this.onAddMDX);
  }
}

// Register the addon with a unique name.
addons.register('SLDS', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('SLDS/panel', {
    title: 'Docs mdx',
    render: ({ active }) => (
      <MDX channel={addons.getChannel()} api={api} active={active} />
    )
  });
});
