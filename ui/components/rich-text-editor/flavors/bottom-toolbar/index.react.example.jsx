// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteToolbarBottom, RteFormatFont, RteFormatText, RteFormatColor, RteFormatBody, RteAlignText, RteInsertContent, RteTextarea, RteClearFormatting, RteOverflow, RteOverflowDown, RteOverflowUp } from 'ui/components/rich-text-editor/flavors/base/index.react.example';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';
import classNames from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." />
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'focused',
    label: 'Focused',
    element:
      <Demo>
        <RichTextEditor className="slds-has-focus">
          <RteTextarea placeholder="Compose text..." />
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element:
      <Demo>
        <RichTextEditor>
          <RteTextarea text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Demo>
        <RichTextEditor className="slds-has-error">
          <RteTextarea placeholder="Compose text..." aria-describedby="rte-error-01" />
          <div id="rte-error-01" className="slds-form-element__help slds-p-around--small">This field is required</div>
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." disabled />
          <RteToolbarBottom disabledButtons disabledLabel="disabled">
            <RteFormatText tabIndexSetting="0" disabledButtons />
            <RteFormatBody disabledButtons />
            <RteClearFormatting disabledButtons />
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element:
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." />
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" hasTooltip />
            <RteFormatBody />
            <RteClearFormatting />
          </RteToolbarBottom>
          <Tooltip className="slds-nubbin--bottom-left" id="bold" style={{position: 'absolute', top: '60px', left: '2px'}}>
            Bold <kbd>cmd+b</kbd>
          </Tooltip>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'overflow',
    label: 'Overflow',
    element:
      <Demo>
        <RichTextEditor>
          <RteTextarea placeholder="Compose text..." />
          <RteToolbarBottom>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteOverflow>
              <RteOverflowUp />
            </RteOverflow>
          </RteToolbarBottom>
        </RichTextEditor>
      </Demo>
  }
];
