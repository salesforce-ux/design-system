// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteFormatText, RteFormatBody, RteInsertContent, RteTextarea, RteClearFormatting } from 'ui/components/rich-text-editor/base/example';
import { Tooltip } from 'ui/components/tooltips/base/example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Demo>
    <RichTextEditor>
      <RteToolbar>
        <RteFormatText tabIndexSetting="0" />
        <RteFormatBody />
        <RteInsertContent />
        <RteClearFormatting />
      </RteToolbar>
      <RteTextarea placeholder="Compose Note..." />
    </RichTextEditor>
  </Demo>
);
