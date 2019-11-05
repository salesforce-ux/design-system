/* eslint-env jest */
import React from 'react';
import { Magnet } from '../';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders top magnet', () =>
  matchesMarkup(<Magnet className="slds-has-top-magnet" />));

it('renders bottom magnet', () =>
  matchesMarkup(<Magnet className="slds-has-bottom-magnet" />));

it('renders touching magnets', () =>
  matchesMarkup(
    <div>
      <Magnet className="slds-has-bottom-magnet" />
      <Magnet className="slds-has-top-magnet" />
    </div>
  ));
