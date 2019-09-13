import React from 'react';
import Pill from '../';

const Demo = props => (
  <div className="demo-only" style={{ width: '6rem' }} dir={props.dir}>
    {props.children}
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Pill>Label</Pill>;

export const examples = [
  {
    id: 'pill-link',
    label: 'Pill with link',
    element: <Pill actionUrl="https://some-url">Pill with link</Pill>
  },
  {
    id: 'pill-icon',
    label: 'Pill with icon',
    element: (
      <Pill
        startMedia="icon"
        iconBoundarySize="small"
        iconSize="small"
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
        startMedia="icon"
        iconBoundarySize="x-small"
        iconSize="x-small"
        iconSprite="standard"
        iconSymbol="account"
        iconAssistiveText="Account"
        actionUrl="https://some-url"
      >
        Pill with icon and link
      </Pill>
    )
  },
  {
    id: 'pill-truncated',
    label: 'Pill with truncated content',
    element: (
      <Demo className="demo-only">
        <Pill>Pill label that is longer than the area that contains it</Pill>
      </Demo>
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
