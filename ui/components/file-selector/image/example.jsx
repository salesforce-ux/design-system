// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import FileSelector from '../';

export default [
  {
    id: 'default',
    label: 'Files - Default',
    demoStyles: 'max-width: 320px',
    storybookStyles: true,
    element: <FileSelector images />
  }
];

export let states = [
  {
    id: 'file-selector-images-error',
    label: 'Error',
    demoStyles: 'max-width: 320px',
    storybookStyles: true,
    element: (
      <FileSelector images error />
    )
  },
  {
    id: 'file-selector-images-dragover',
    label: 'Dragover',
    demoStyles: 'max-width: 320px',
    storybookStyles: true,
    element: (
      <FileSelector images dragover />
    )
  },
  {
    id: 'file-selector-images-dragover-error',
    label: 'Dragover with error',
    demoStyles: 'max-width: 320px',
    storybookStyles: true,
    element: (
      <FileSelector
        images
        dragoverError
        error
      />
    )
  }
];
