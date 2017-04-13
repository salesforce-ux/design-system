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
import { Popover } from '../../popovers/base/example';
import _ from 'lodash';

const ListboxList = props =>
  <Listbox className="slds-dropdown--length-10" vertical>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="Acme" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="Edge SLA" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="Express Logistics SLA" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="GenePoint Lab Generators" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="GenePoint SLA" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="Pyramid Emergency Generators" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="United Oil Installations" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="United Oil Plant Standby Generators" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="United Oil SLA" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="United Oil Standby Generators" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="University of AZ Installations" entityMeta />
    </ListboxItem>
    <ListboxItem>
      <EntityOption id={_.uniqueId('listbox-option-id-')} entityTitle="University of AZ Portable Generators" entityMeta />
    </ListboxItem>
  </Listbox>;

export default (
  <Popover
    className="slds-nubbin--top-left"
    bodyClassName="slds-p-horizontal--none"
  >
    <ComboboxContainer
      inputContainerClassName="slds-m-around--small"
      hideLabel
      autocomplete
      isOpen
      inputIcon="left"
      inputIconLeftSymbol="search"
      listbox={<ListboxList />}
      staticListbox
      placeholder="Quick find..."
    />
  </Popover>
);
