/* eslint-env jest */
import React from 'react';
import { Magnet } from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders top magnet', () =>
  matchesMarkupAndStyle(<Magnet className="slds-has-top-magnet" />));

it('renders bottom magnet', () =>
  matchesMarkupAndStyle(<Magnet className="slds-has-bottom-magnet" />));

it('renders touching magnets', () =>
  matchesMarkupAndStyle(
    <div>
      <Magnet className="slds-has-bottom-magnet" />
      <Magnet className="slds-has-top-magnet" />
    </div>
  ));
