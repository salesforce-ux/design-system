// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.setup';
import {
  RichTextEditor,
  RteToolbar,
  RteFormatFont,
  RteFormatText,
  RteFormatColor,
  RteFormatBody,
  RteAlignText,
  RteInsertContent,
  RteClearFormatting,
  RteTextarea
} from '../base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders an RTE toolbar in a narrow space', () =>
  matchesMarkupAndStyle(
    <div className="slds-region_narrow">
      <RichTextEditor>
        <RteToolbar>
          <RteFormatFont />
          <RteFormatText tabIndexSetting="-1" />
          <RteFormatColor />
          <RteFormatBody />
          <RteAlignText />
          <RteInsertContent />
          <RteClearFormatting />
        </RteToolbar>

        <RteTextarea placeholder="Compose Email..." />
      </RichTextEditor>
    </div>
  ));
