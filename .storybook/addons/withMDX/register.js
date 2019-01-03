import React, { lazy, Suspense } from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';

import '../../../ui/index.scss';
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
    const docsPathArr = params.storyFile
      ? `${params.storyFile
          .split('/')
          .filter((slug, index) => index > 0 && index <= 3)
          .join('/')}`
      : '';

    this.setState({
      kind: params.kind,
      story: params.story,
      mdxFilePath: docsPathArr
    });
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('SLDS/add_mdx', this.onAddMDX);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddMDX('');
    });
  }

  renderMDXDoxs(mdxFilePath) {
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

  // This is some cleanup tasks when the Notes panel is unmounting.
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
