/* eslint-env jest */
import React from 'react';
import { EinsteinHeader } from '../../einstein-header/base';
import { Card, CardBody, CardFooter } from '../base/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname, 8080);

it('renders an einstein card', () =>
  matchesMarkupAndStyle(
    <Card>
      <EinsteinHeader
        className="slds-card__header"
        headerTitle="Einstein (10+)"
        hasLink
      />
      <CardBody className="slds-card__body_inner">Card Body Text</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ));
