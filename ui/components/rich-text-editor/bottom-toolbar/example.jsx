// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteToolbarBottom, RteFormatText, RteFormatBody, RteTextarea, RteClearFormatting } from 'ui/components/rich-text-editor/base/example';
import { Tooltip } from 'ui/components/tooltips/base/example';
import classNames from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <Demo>
    <RichTextEditor>
      <RteTextarea placeholder="Compose text..." />

      <RteToolbar className="slds-rich-text-editor__toolbar_bottom">
        <RteFormatText tabIndexSetting="0" />
        <RteFormatBody />
        <RteClearFormatting />
      </RteToolbar>
    </RichTextEditor>
  </Demo>
);
