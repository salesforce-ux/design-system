// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Spinner from '../';

const commonDemoStyles = `
height: 6rem;

&.demo_inverse {
  background-color: #16325c;
}
`;

const defaultComponent = <Spinner size="medium" />;

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default',
    demoProps: {
      isViewport: true
    },
    element: defaultComponent
  },
  {
    id: 'inlined',
    label: 'Inlined',
    demoStyles: `
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
    `,
    demoProps: {
      isViewport: true
    },
    element: <Spinner size="medium" position="relative" />
  },
  {
    id: 'without-container',
    label: 'Without Container',
    demoProps: {
      className: 'demo_inverse'
    },
    element: <Spinner size="medium" />
  },
  {
    id: 'with-container',
    label: 'With Container',
    demoProps: {
      className: 'demo_inverse'
    },
    element: <Spinner hasContainer size="medium" />
  },
  {
    id: 'fixed-container',
    label: 'Fixed Container',
    demoProps: {
      isViewport: true,
      className: 'demo_inverse'
    },
    element: <Spinner hasContainer position="fixed" size="medium" />
  },
  {
    id: 'inverse',
    label: 'On inverse background',
    demoProps: {
      className: 'demo_inverse'
    },
    element: <Spinner hasContainer size="medium" color="inverse" />
  },
  {
    id: 'delayed',
    label: 'With 300ms delay',
    element: <Spinner hasContainer isDelayed size="medium" />
  },
  {
    id: 'brand',
    label: 'With brand colors',
    element: <Spinner hasContainer size="medium" color="brand" />
  },
  {
    id: 'xx-small',
    label: 'Size Xx-Small',
    element: <Spinner hasContainer size="xx-small" />
  },
  {
    id: 'x-small',
    label: 'Size X-Small',
    element: <Spinner hasContainer size="x-small" />
  },
  {
    id: 'small',
    label: 'Size Small',
    element: <Spinner hasContainer size="small" />
  },
  {
    id: 'medium',
    label: 'Size Medium',
    element: <Spinner hasContainer size="medium" />
  },
  {
    id: 'large',
    label: 'Size Large',
    element: <Spinner hasContainer size="large" />
  },
  {
    id: 'right-to-left-xx-small',
    label: 'RTL support - Size Xx-Small',
    demoProps: {
      dir: 'rtl'
    },
    element: <Spinner size="xx-small" />
  },
  {
    id: 'right-to-left-x-small',
    label: 'RTL support - Size X-Small',
    demoProps: {
      dir: 'rtl'
    },
    element: <Spinner size="x-small" />
  },
  {
    id: 'right-to-left-small',
    label: 'RTL support - Size Small',
    demoProps: {
      dir: 'rtl'
    },
    element: <Spinner size="small" />
  },
  {
    id: 'right-to-left-medium',
    label: 'RTL support - Size Medium',
    demoProps: {
      dir: 'rtl'
    },
    element: <Spinner size="medium" />
  },
  {
    id: 'right-to-left-large',
    label: 'RTL support - Size Large',
    demoProps: {
      dir: 'rtl'
    },
    element: <Spinner size="large" />
  },
  {
    id: 'hidden',
    label: 'Hidden',
    element: <Spinner hasContainer isHidden />
  }
].map(example => ({
  ...example,
  demoStyles: [commonDemoStyles, example.demoStyles || ''].join('\n')
}));
