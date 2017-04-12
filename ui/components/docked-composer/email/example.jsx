// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from 'ui/components/avatar/base/example';
import { Pill } from 'ui/components/pills/base/example';
import { ButtonIcon } from 'ui/components/button-icons/base/example';
import { DockedComposerPanel } from 'ui/components/docked-composer/base/example';
import { ComboboxContainer, Listbox, ListboxItem, EntityOption }
  from 'ui/components/combobox/base/example';
import { ListboxPill }
  from 'ui/components/pills/listbox-of-pill-options/example';
import SvgIcon from 'app_modules/ui/svg-icon';
import { RichTextEditor, RteToolbar, RteFormatFont, RteFormatText, RteFormatColor, RteFormatBody, RteAlignText, RteInsertContent, RteTextarea, RteClearFormatting } from 'ui/components/rich-text-editor/base/example';
import { FormElement } from 'ui/components/form-layout/element/example';
import { Input } from 'ui/components/input/base/example';

const Footer = props =>
  <div className="slds-col--bump-left slds-grid slds-grid--vertical-align-center">
    <div className="slds-grid slds-m-right--small" role="toolbar">
      <ul className="slds-grid" aria-label="Insert content">
        <li>
          <ButtonIcon
            className="slds-button--icon-small"
            symbol="link"
            assistiveText="Attach File"
            title="Attach File"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button--icon-small"
            symbol="insert_template"
            assistiveText="Insert Template"
            title="Insert Template"
            tabIndex="-1"
          />
        </li>
        <li>
          <ButtonIcon
            className="slds-button--icon-small"
            symbol="insert_tag_field"
            assistiveText="Insert HTML"
            title="Insert HTML"
            tabIndex="-1"
          />
        </li>
      </ul>
      <ButtonIcon
        className="slds-button--icon-small"
        symbol="preview"
        assistiveText="Preview"
        title="Preview"
        tabIndex="-1"
      />
    </div>
    <button className="slds-button slds-button--brand">Send</button>
  </div>;

export default (
  <div className="demo-only" style={{ height: '500px' }}>
    <DockedComposerPanel
      className="slds-is-open"
      header="New Email"
      headerSymbol="email"
      footer={ <Footer /> }
    >
      <div className="slds-email-composer">
        <ComboboxContainer
          id="recipients-to"
          formClassName="slds-email-composer__combobox"
          aria-controls="selected-recipients-to"
          selectedOptionsInline={true}
          staticListbox={true}
          label="To"
          placeholder=" "
          autocomplete={true}
        >
          <Listbox
            id="selected-recipients-to"
            aria-label="Recipients:"
            inline={ true }
          >
            <ListboxItem>
              <ListboxPill label="jrogers@cloudhub.com" tabIndex="0">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <img
                    alt="Person name"
                    src="/assets/images/avatar2.jpg"
                    title="User avatar"
                  />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
          </Listbox>
        </ComboboxContainer>
        <ComboboxContainer
          id="recipients-bcc"
          formClassName="slds-email-composer__combobox"
          selectedOptionsInline={true}
          staticListbox={true}
          label="Bcc"
          placeholder=" "
          autocomplete={true}
        />
        <ComboboxContainer
          id="recipients-cc"
          formClassName="slds-email-composer__combobox"
          selectedOptionsInline={true}
          staticListbox={true}
          label="Cc"
          placeholder=" "
          autocomplete={true}
        />
        <FormElement
          label="Enter subject"
          hideLabel={true}
          inputId="input-subject-01"
        >
          <Input
            id="input-subject-01"
            className="slds-input--bare"
            placeholder="Enter Subject"
          />
        </FormElement>
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
    </DockedComposerPanel>
  </div>
);
