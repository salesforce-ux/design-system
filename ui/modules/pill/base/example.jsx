import React from 'react';
import styled from 'styled-components';

import Pill from '../';

const Truncate = styled.div`
  width: 6rem;
`;

export default <Pill>Label</Pill>;

export const examples = [
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
    element: (
      <Truncate>
        <Pill>Pill label that is longer than the area that contains it</Pill>
      </Truncate>
    )
  }
];

export const states = [
  {
    id: 'pill-error',
    label: 'Pill with error',
    element: <Pill variant="error">Pill with error</Pill>
  }
];
