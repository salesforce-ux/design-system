import React from 'react';
import WelcomeMat from '../';

export default <WelcomeMat />;

export let states = [
  {
    id: 'completed',
    label: 'steps-complete',
    element: <WelcomeMat showAsCompleted />
  }
];
