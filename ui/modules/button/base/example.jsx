import React from 'react';
import Button from '../';
import ShadowExample from '../../../shared/shadow/example';

const ButtonExample = () => <Button>Button</Button>;

export const examples = [
  {
    id: 'button-neutral',
    label: 'Neutral',
    element: <Button variant="neutral">Neutral Button</Button>
  },
  {
    id: 'button-brand',
    label: 'Brand',
    element: <Button variant="brand">Brand Button</Button>
  },
  {
    id: 'button-brand-outline',
    label: 'Brand Outline',
    element: <Button variant="brand-outline">Brand Outline Button</Button>
  },
  {
    id: 'button-inverse',
    label: 'Inverse',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button variant="inverse">Inverse Button</Button>
      </div>
    )
  },
  {
    id: 'button-destructive',
    label: 'Destructive',
    element: <Button variant="destructive">Destructive Button</Button>
  },
  {
    id: 'button-destructive-text',
    label: 'Destructive Text',
    element: <Button variant="destructive-text">Destructive Text Button</Button>
  },
  {
    id: 'button-success',
    label: 'Success',
    element: <Button variant="success">Success Button</Button>
  },
  {
    id: 'button-full-width',
    label: 'Full width',
    element: (
      <Button size="full-width" variant="neutral">
        Full Width Neutral Button
      </Button>
    )
  }
];

export let states = [
  {
    id: 'button-disabled',
    label: 'Disabled',
    element: <Button disabled>Button</Button>
  },
  {
    id: 'button-neutral-disabled',
    label: 'Neutral Disabled',
    element: (
      <Button disabled variant="neutral">
        Neutral Button
      </Button>
    )
  },
  {
    id: 'button-brand-disabled',
    label: 'Brand Disabled',
    element: (
      <Button disabled variant="brand">
        Brand Button
      </Button>
    )
  },
  {
    id: 'button-brand-outline-disabled',
    label: 'Brand Outline Disabled',
    element: (
      <Button disabled variant="brand-outline">
        Brand Outline Button
      </Button>
    )
  },
  {
    id: 'button-inverse-disabled',
    label: 'Inverse Disabled',
    element: (
      <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
        <Button disabled variant="inverse">
          Inverse Button
        </Button>
      </div>
    )
  },
  {
    id: 'button-destructive-disabled',
    label: 'Destructive Disabled',
    element: (
      <Button disabled variant="destructive">
        Destructive Button
      </Button>
    )
  },
  {
    id: 'button-destructive-text-disabled',
    label: 'Destructive Text Disabled',
    element: (
      <Button disabled variant="destructive-text">
        Destructive Text Button
      </Button>
    )
  },
  {
    id: 'button-success-disabled',
    label: 'Success Disabled',
    element: (
      <Button disabled variant="success">
        Success Button
      </Button>
    )
  }
];

export default ButtonExample;
