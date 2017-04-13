// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteFormatText, RteFormatBody, RteAlignText, RteInsertContent, RteInsertUser, RteTextarea, RteClearFormatting } from '../base/example';
import { Tooltip } from '../../tooltips/base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Demo>
    <RichTextEditor>
      <RteToolbar>
        <RteFormatText tabIndexSetting="0" />
        <RteFormatBody />
        <RteAlignText />
        <RteInsertContent />
        <RteInsertUser />
        <RteClearFormatting />
      </RteToolbar>

      <RteTextarea placeholder="Post to feed..." />
    </RichTextEditor>
  </Demo>
);
