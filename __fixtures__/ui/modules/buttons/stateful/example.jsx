import React from 'react';
import { Button } from '../';

const ButtonExample = () => <Button>Button</Button>;

export const examples = [
  {
    id: 'button-neutral',
    label: 'Neutral',
    element: <Button variant="neutral">Neutral Button</Button>
  }
];

export let states = [
  {
    id: 'button-disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  }
];

export default ButtonExample;
