/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { PageHeader } from '../base/example';
import { ObjectHome } from '../object-home/example';
import { RecordHome } from '../record-home/example';
import { RecordHomeVertical } from '../record-home-vertical/example';
const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('renders a page header', () => {
  it('renders base page header', () => matchesMarkupAndStyle(<PageHeader />));

  it('renders object home page header', () =>
    matchesMarkupAndStyle(<ObjectHome />));

  it('renders record home page header', () =>
    matchesMarkupAndStyle(<RecordHome />));

  it('renders vertical record home page header', () =>
    matchesMarkupAndStyle(<RecordHomeVertical />));
});
