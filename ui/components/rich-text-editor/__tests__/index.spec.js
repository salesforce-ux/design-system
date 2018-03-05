// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
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

const RteOutput = props => (
  <div className="slds-rich-text-editor__output slds-grid">
    <div
      aria-describedby={props['aria-describedby']}
      aria-label="Compose text"
      contentEditable={!props.disabled ? 'true' : null}
      suppressContentEditableWarning
      className="slds-rich-text-area__content slds-grow"
    >
      <ol>
        <li>Outer List</li>
        <li>
          Outer List
          <ol>
            <li>Inner List</li>
            <li>Inner List</li>
          </ol>
        </li>
        <li>Outer List</li>
        <li>Outer List</li>
      </ol>
    </div>
  </div>
);

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

it('renders a RTE output with indentation', () =>
  matchesMarkupAndStyle(<RteOutput />));
