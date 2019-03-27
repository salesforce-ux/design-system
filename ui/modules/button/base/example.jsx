import React from 'react';
import Button from '../';
import Icon from '../../icon';

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
    element: <Button variant="inverse">Inverse Button</Button>
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
  },
  {
    id: 'button-left-icon',
    label: 'With left icon',
    element: (
      <Button
        variant="neutral"
        leftIcon={<Icon size="xx-small" symbol="download" />}
      >
        Download
      </Button>
    )
  },
  {
    id: 'button-right-icon',
    label: 'With right icon',
    element: (
      <Button
        variant="neutral"
        rightIcon={<Icon size="xx-small" symbol="new_window" />}
      >
        Learn More
      </Button>
    )
  },
  {
    id: 'base-link',
    label: 'Base link',
    element: <Button use="a">Base Link</Button>
  },
  {
    id: 'neutral-link',
    label: 'Neutral link',
    element: (
      <Button use="a" variant="neutral">
        Neutral Link
      </Button>
    )
  },
  {
    id: 'brand-link',
    label: 'Brand link',
    element: (
      <Button use="a" variant="brand">
        Brand Link
      </Button>
    )
  },
  {
    id: 'brand-outline-link',
    label: 'Brand outline link',
    element: (
      <Button use="a" variant="brand-outline">
        Brand Outline Link
      </Button>
    )
  },
  {
    id: 'destructive-link',
    label: 'Destructive link',
    element: (
      <Button use="a" variant="destructive">
        Destructive Link
      </Button>
    )
  },
  {
    id: 'destructive-text-link',
    label: 'Destructive text link',
    element: (
      <Button use="a" variant="destructive-text">
        Destructive text Link
      </Button>
    )
  },
  {
    id: 'success-link',
    label: 'Success link',
    element: (
      <Button use="a" variant="success">
        Success Link
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
      <Button disabled variant="inverse">
        Inverse Button
      </Button>
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
