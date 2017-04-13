/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICHorizAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ComboboxContainer, Listbox, ListboxItem, EntityOption }
  from '../base/example';

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true }>
    <ListboxItem>
      <EntityOption
        id={ listboxOptionId01 }
        entityTitle="Acme"
        entityMeta={ true }
        focused={ props.focused }
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={ listboxOptionId02 }
        entityTitle="Salesforce.com, Inc."
        entityMeta={ true }
      />
    </ListboxItem>
  </Listbox>;

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          autocomplete={ true }
          inputIcon="right"
          inputIconRightSymbol="search"
          listbox={ <ListboxDropdown /> }
        />
      </div>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen={ true }
          autocomplete={ true }
          inputIcon="right"
          inputIconRightSymbol="search"
          listbox={ <ListboxDropdown focused={true} /> }
          aria-activedescendant={ listboxOptionId01 }
        />
      </div>
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element:
      <ComboboxContainer
        autocomplete={ true }
        inputIcon="both"
        inputIconLeftSprite="standard"
        inputIconLeftSymbol="account"
        inputButtonIcon={true}
        inputIconRightSymbol="close"
        value="Salesforce.com, Inc."
        listbox={ <ListboxDropdown /> }
      />
  }
];
