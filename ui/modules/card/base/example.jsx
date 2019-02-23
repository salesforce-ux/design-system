import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../';
import Button from '../../button';

const CardExample = () => (
  <Card
    title="Card Title"
    href="javascript:void(0);"
    bodyHasPadding
    footer="View All"
  >
    Card Body
  </Card>
);

export const CardExampleCustom = () => (
  <Card custom>
    <CardHeader
      title="Custom Card Title"
      hasActions
      actions={<Button variant="neutral">New</Button>}
    />
    <CardBody>Card Body</CardBody>
    <CardFooter>View All</CardFooter>
  </Card>
);

export default CardExample;
