// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import FauxInput from './';

// Examples
export const examples = [
  {
    id: 'faux-input',
    label: 'Faux Input',
    element: <FauxInput assistiveText="Lorem Ipsum" />
  },
  {
    id: 'faux-input-with-label',
    label: 'Faux Input with Label',
    element: <FauxInput label="Label Text" assistiveText="Lorem Ipsum" />
  }
];
