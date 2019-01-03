import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

const withMDX = makeDecorator({
  name: 'withMDX',
  parameterName: 'mdx',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();

    // take things from the context and emit them on the channel
    // for the panel to listen for and react to
    channel.emit('SLDS/add_mdx', {
      kind: context.kind,
      story: context.story,
      storyFile: context.parameters.fileName
    });

    return getStory(context);
  }
});

export default withMDX;
