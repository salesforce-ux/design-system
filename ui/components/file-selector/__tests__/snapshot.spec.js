// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

// import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { getDisplayElementById } from '../../../shared/helpers';
import baseExamples from '../base/example';
import imageExamples from '../image/example';
import integratedExamples from '../integrated/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('File Selector', () => {
  it('renders a default file selector', () =>
    matchesMarkup(getDisplayElementById(baseExamples, 'default'))
  )

  it('renders a file selector with error', () =>
    matchesMarkup(getDisplayElementById(baseExamples, 'file-selector-files-error'))
  )

  it('renders a file selector dragover', () =>
    matchesMarkup(getDisplayElementById(baseExamples, 'file-selector-files-dragover'))
  )

  it('renders a file selector dragover with error', () =>
    matchesMarkup(getDisplayElementById(baseExamples, 'file-selector-files-dragover-error'))
  )
})

describe('File Selector - Images', () => {
  it('renders a default file selector for images', () =>
    matchesMarkup(getDisplayElementById(imageExamples, 'default'))
  )

  it('renders a file selector for images with error', () =>
    matchesMarkup(getDisplayElementById(imageExamples.state, 'file-selector-images-error'))
  )

  it('renders a file selector for images with dragover', () =>
    matchesMarkup(getDisplayElementById(imageExamples.state, 'file-selector-images-dragover'))
  )

  it('renders a file selector for images with dragover error', () =>
    matchesMarkup(getDisplayElementById(imageExamples.state, 'file-selector-images-dragover-error'))
  )
})

describe('Integrated File Selector', () => {
  it('renders a default integrated file selector', () =>
    matchesMarkup(getDisplayElementById(integratedExamples, 'default'))
  )

  it('renders an integrated file selector with drag', () =>
    matchesMarkup(getDisplayElementById(integratedExamples.state, 'integrated-file-selector-drag'))
  )

  it('renders an integrated file selector with dragover', () =>
    matchesMarkup(getDisplayElementById(integratedExamples.state, 'integrated-file-selector-dragover'))
  )

  it('renders an integrated file selector with dragover error', () =>
    matchesMarkup(getDisplayElementById(integratedExamples.state, 'integrated-file-selector-dragover-error'))
  )
})
