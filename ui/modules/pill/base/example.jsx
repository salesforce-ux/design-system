import React from 'react';

import Pill from '../';

export default <Pill>Label</Pill>;

export let examples = [
  {
    id: 'pill-link',
    label: 'Pill with link',
    element: <Pill actionUrl="javascript:void(0);">Pill with link</Pill>
  },
  {
    id: 'pill-icon',
    label: 'Pill with icon',
    element: (
      <Pill
        media="icon"
        iconSprite="standard"
        iconSymbol="account"
        iconAssistiveText="Account"
      >
        Pill with icon
      </Pill>
    )
  },
  {
    id: 'pill-icon-link',
    label: 'Pill with icon and link',
    element: (
      <Pill
        media="icon"
        iconSprite="standard"
        iconSymbol="account"
        iconAssistiveText="Account"
        actionUrl="javascript:void(0);"
      >
        Pill with icon and link
      </Pill>
    )
  },
  {
    id: 'pill-truncated',
    label: 'Pill with truncated content',
    demoStyles: 'width: 3rem;',
    element: (
      <Pill>Pill label that is longer than the area that contains it</Pill>
    )
  }
];

export let states = [
  {
    id: 'pill-error',
    label: 'Pill with error',
    element: <Pill variant="error">Pill with error</Pill>
  }
];
