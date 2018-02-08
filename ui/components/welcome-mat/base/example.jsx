import React from 'react';
import WelcomeMat from '../';

export default <WelcomeMat />;

export let states = [
  {
    id: 'with-completed-tiles',
    label: 'With Completed Tiles',
    element: <WelcomeMat complete={2} />
  }
];
