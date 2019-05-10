import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import Button from '../../button';

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
  },
  {
    id: 'card-customization',
    label: 'Card Customization',
    element: (
      <Card
        custom
        customization={`
          :host {
            --c-card-border-width: 0;
            --c-card-box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
            --c-card-border-radius: 4px;
            --c-card-header-spacing-vertical: 0;
            --c-card-header-spacing-horizontal: 0;
            --c-card-footer-text-align: left;
            --c-card-footer-border-width: 0;
          }
          :host .lwc-card__header {
            border-radius: inherit;
            overflow: hidden;
          }
        `}
      >
        <CardHeader>
          <img
            src="assets/images/themes/oneSalesforce/banner-user-default.png"
            alt="Image of mountains and a hot air ballon"
          />
        </CardHeader>
        <CardBody>
          <h2 className="lwc-card__header-title">Custom Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            magni ipsam modi quas! Et, nihil mollitia dolor maxime maiores
            doloremque odit! Quod, consequuntur. Est, sequi. Nulla sunt aliquam
            ipsum adipisci!
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="brand-outline">Read Article</Button>
        </CardFooter>
      </Card>
    )
  }
];

export default CardExample;
