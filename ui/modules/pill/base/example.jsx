import React from 'react';
import Pill from '../';

export default <Pill>Label</Pill>;

export const examples = [
  {
    id: 'pill-link',
    label: 'Pill with link',
    element: <Pill>Pill with link</Pill>
  },
  {
    id: 'pill-action',
    label: 'Pill with action',
    element: <Pill>Pill with action</Pill>
  },
  {
    id: 'pill-avatar',
    label: 'Pill with avatar',
    element: <Pill>Pill with avatar</Pill>
  },
  {
    id: 'pill-icon',
    label: 'Pill with icon',
    element: <Pill>Pill with icon</Pill>
  }
];

export let states = [
  {
    id: 'pill-error',
    label: 'Pill with error',
    element: <Pill>Pill with error</Pill>
  }
];
