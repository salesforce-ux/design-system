/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteFormatText, RteFormatBody, RteAlignText, RteInsertContent, RteInsertUser, RteTextarea, RteClearFormatting, RteOverflow } from 'ui/components/rich-text-editor/flavors/base/index.react.example';
import { Tooltip } from 'ui/components/tooltips/flavors/base/index.react.example';
import className from 'classnames';

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
  },
  {
    id: 'focused',
    label: 'Focused',
    element:
      <Demo>
        <RichTextEditor className="slds-has-focus">
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
  },
  {
    id: 'filled-out',
    label: 'Filled Out',
    element:
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

          <RteTextarea text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <Demo>
        <RichTextEditor className="slds-has-error">
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteInsertUser />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Post to feed..." aria-describedby="rte-error-01" />
          <div id="rte-error-01" className="slds-form-element__help slds-p-around--small">This field is required</div>
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element:
      <Demo>
        <RichTextEditor>
          <RteToolbar disabledButtons disabledLabel="disabled">
            <RteFormatText tabIndexSetting="0" disabledButtons />
            <RteFormatBody disabledButtons />
            <RteAlignText disabledButtons />
            <RteInsertContent disabledButtons />
            <RteInsertUser disabledButtons />
            <RteClearFormatting disabledButtons />
          </RteToolbar>

          <RteTextarea placeholder="Post to feed..." disabled />
        </RichTextEditor>
      </Demo>
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element:
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

          <RteTextarea />

          <Tooltip className="slds-nubbin--top-left" id="bold" style={{position: 'absolute', top: '48px', left: '2px'}}>
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
          <RteToolbar>
            <RteFormatText tabIndexSetting="0" />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteInsertUser />
            <RteOverflow />
          </RteToolbar>

          <RteTextarea />
        </RichTextEditor>
      </Demo>
  }
];
