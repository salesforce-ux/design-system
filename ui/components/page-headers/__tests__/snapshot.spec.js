/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { PageHeader } from '../base/example';
import { ObjectHome } from '../object-home/example';
import { RecordHome } from '../record-home/example';
import { RecordHomeVertical } from '../record-home-vertical/example';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders a page header', () => {
  xit('renders base page header', () => matchesMarkupAndStyle(<PageHeader />));

  xit('renders object home page header', () =>
    matchesMarkupAndStyle(<ObjectHome />));

  xit('renders record home page header', () =>
    matchesMarkupAndStyle(<RecordHome />));

  xit('renders vertical record home page header', () =>
    matchesMarkupAndStyle(<RecordHomeVertical />));
});
