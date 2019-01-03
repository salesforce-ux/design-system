import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';

const withMDX = makeDecorator({
  name: 'withMDX',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();

    // Our simple API above simply sets the notes parameter to a string,
    // which we send to the channel
    channel.emit('SLDS/add_mdx', {
      kind: context.kind,
      story: context.story,
      storyFile: context.parameters.fileName
    });

    return getStory(context);
  }
});

export default withMDX;
