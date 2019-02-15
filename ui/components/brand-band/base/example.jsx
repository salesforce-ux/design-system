// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import BrandBand from '../';

export default <BrandBand size="medium" />;

export let examples = [
  {
    id: 'brand-band-small',
    label: 'Small',
    element: <BrandBand size="small" />
  },
  {
    id: 'brand-band-large',
    label: 'Large',
    element: <BrandBand size="large" />
  },
  {
    id: 'brand-band-no-image',
    label: 'No Image',
    element: <BrandBand size="none" />
  },
  {
    id: 'brand-band-large-group',
    label: 'Large Group',
    element: <BrandBand size="large" image="group" />
  },
  {
    id: 'brand-band-large-user',
    label: 'Large User',
    element: <BrandBand size="large" image="user" />
  }
];
