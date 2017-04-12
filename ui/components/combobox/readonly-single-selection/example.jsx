/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICHorizAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ComboboxContainer, Listbox, ListboxItem, Option } from 'ui/components/combobox/base/example';

const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical={ true }>
    <ListboxItem>
      <Option
        id={ listboxOptionId01 }
        title="Option A"
        focused={ props.focused }
        selected={ props.selected }
      />
    </ListboxItem>
    <ListboxItem>
      <Option id={ listboxOptionId02 } title="Option B" />
    </ListboxItem>
  </Listbox>;

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          readonly={true}
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
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
          readonly={true}
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
          listbox={ <ListboxDropdown focused={true} /> }
          aria-activedescendant={ listboxOptionId01 }
        />
      </div>
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          readonly={true}
          isOpen={ true }
          inputIcon="right"
          inputIconRightSymbol="down"
          value="Option A"
          listbox={ <ListboxDropdown selected={true} /> }
        />
      </div>
  },
  {
    id: 'closed-option-selected',
    label: 'Option Selected',
    element:
      <ComboboxContainer
        readonly={true}
        inputIcon="right"
        inputButtonIcon={true}
        inputIconRightSymbol="close"
        value="Option A"
        listbox={ <ListboxDropdown focused={true} selected={true} /> }
      />
  }
];
