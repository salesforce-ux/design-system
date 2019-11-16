import React from 'react';
import StatefulButton from './';

export const examples = [
  {
    id: 'stateful-button',
    label: 'Stateful',
    element: <StatefulButton accessibleText="Follow" />
  },
  {
    id: 'stateful-button-disabled',
    label: 'Stateful (Disabled)',
    element: <StatefulButton accessibleText="Follow" disabled />
  }
];
