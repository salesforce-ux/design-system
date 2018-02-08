import React from 'react';
import WelcomeMat from '../';

export default <WelcomeMat trailhead />;

export let states = [
  {
    id: 'trailhead-complete',
    label: 'Trailhead Complete',
    element: <WelcomeMat trailhead complete={5} />
  }
];
