import React from 'react';
import Card from '../';
import Button from '../../button';
import ShadowExample from '../../../shared/shadow/example';

const CardExample = () => (
  <Card title="Card Title" href="javascript:void(0);">
    Card Body
  </Card>
);

export const states = [
  {
    id: 'empty',
    label: 'Empty Card',
    element: (
      <Card
        title="Card Title"
        footer={false}
        hasActions
        actions={<Button variant="neutral">New</Button>}
      />
    )
  }
];

export const examples = [
  {
    id: 'with-actions',
    label: 'With Header Actions',
    element: (
      <Card
        title="Card Title"
        hasActions
        actions={<Button variant="neutral">New</Button>}
      >
        Card Body
      </Card>
    )
  },
  {
    id: 'no-header',
    label: 'No Header',
    element: <Card>Card Body</Card>
  },
  {
    id: 'has-no-footer',
    label: 'No Footer',
    element: (
      <Card footer={false} title="Card Title">
        Card Body
      </Card>
    )
  },
  {
    id: 'full-bleed',
    label: 'Full-bleed',
    element: (
      <Card title="Card Title" hasFullBleed>
        <img
          src="assets/images/themes/oneSalesforce/banner-user-default.png"
          alt="Image of mountains and a hot air ballon"
        />
      </Card>
    )
  },
  {
    id: 'bare',
    label: 'Bare Cards with no Borders (Default for nested Cards)',
    element: (
      <Card title="Parent Card Title" footer={false}>
        <Card isBare title="Nested Child Card Title" footer={false}>
          This is a nested card with no styling (default)
        </Card>
      </Card>
    )
  },
  {
    id: 'card-boundary',
    label: 'Nested Cards with Borders',
    element: (
      <Card title="Parent Card Title" footer={false}>
        <Card hasBoundary title="Nested Child Card Title" footer={false}>
          This is a nested card with no styling (default)
        </Card>
      </Card>
    )
  },
  {
    id: 'card-wrapper',
    label: 'Multiple Cards with a Card Wrapper',
    element: (
      <Card>
        <Card isBare title="Nested Child Card Title">
          This is a nested card with no styling (default)
        </Card>
        <Card hasBoundary title="Nested Child Card Title">
          This is a nested card with no styling (default)
        </Card>
      </Card>
    )
  }
];

export default CardExample;
