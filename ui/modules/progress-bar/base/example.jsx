// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ProgressBar from '..';

const verticalDemoStyles = `height: 200px;`;

const defaultComponent = <ProgressBar currentValue={25} />;

export default defaultComponent;

export let states = [
  {
    id: 'zero',
    label: '0% complete',
    element: <ProgressBar currentValue={0} />
  },
  {
    id: '25',
    label: '25% complete',
    element: <ProgressBar currentValue={25} />
  },
  {
    id: '50',
    label: '50% complete',
    element: <ProgressBar currentValue={50} />
  },
  {
    id: '75',
    label: '75% complete',
    element: <ProgressBar currentValue={75} />
  },
  {
    id: '100',
    label: '100% complete',
    element: <ProgressBar currentValue={100} />
  },
  {
    id: 'vertical-zero',
    label: 'Vertical 0% complete',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={0} isVertical />
  },
  {
    id: 'vertical-25',
    label: 'Vertical 25% complete',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={25} isVertical />
  },
  {
    id: 'vertical-50',
    label: 'Vertical 50% complete',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={50} isVertical />
  },
  {
    id: 'vertical-75',
    label: 'Vertical 75% complete',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={75} isVertical />
  },
  {
    id: 'vertical-100',
    label: 'Vertical 100% complete',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={100} isVertical />
  }
];

export let examples = [
  {
    id: 'success',
    label: 'Success',
    element: <ProgressBar isSuccess currentValue={75} />
  },
  {
    id: 'circular',
    label: 'Circular',
    element: <ProgressBar shape="circular" currentValue={75} />
  },
  {
    id: 'thickness-x-small',
    label: 'X-Small Thickness',
    element: <ProgressBar size="x-small" currentValue={75} />
  },
  {
    id: 'thickness-small',
    label: 'Small Thickness',
    element: <ProgressBar size="small" currentValue={75} />
  },
  {
    id: 'thickness-medium',
    label: 'Medium Thickness',
    element: <ProgressBar size="medium" currentValue={75} />
  },
  {
    id: 'thickness-large',
    label: 'Large Thickness',
    element: <ProgressBar size="large" currentValue={75} />
  },
  {
    id: 'vertical-thickness-x-small',
    label: 'Vertical X-Small Thickness',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={75} size="x-small" isVertical />
  },
  {
    id: 'vertical-thickness-small',
    label: 'Vertical Small Thickness',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={75} size="small" isVertical />
  },
  {
    id: 'vertical-thickness-medium',
    label: 'Vertical Medium Thickness',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={75} size="medium" isVertical />
  },
  {
    id: 'vertical-thickness-large',
    label: 'Vertical Large Thickness',
    demoStyles: verticalDemoStyles,
    element: <ProgressBar currentValue={75} size="large" isVertical />
  }
];
