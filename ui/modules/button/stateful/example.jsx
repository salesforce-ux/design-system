import React from 'react';
import StatefulButton from './';

export default <StatefulButton accessibleText="Follow" />;

export const states = [
  {
    id: 'stateful-button-disabled',
    label: 'Disabled',
    element: <StatefulButton accessibleText="Follow" disabled />
  }
];
