/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

const MultiSelect = (props) => {
  return(
    <div className="slds-picklist--draggable slds-grid">
      <div className="slds-assistive-text" id="drag-live-region" aria-live="assertive">{ props.dataSet.liveRegionText }</div>
      <div className="slds-assistive-text" id="option-drag-label">{ props.dataSet.optionDragLabel }</div>
      <SelectionGroup group={ props.dataSet.selectionGroups[0] }></SelectionGroup>
      <MoveButtons direction="horizontal" targetA={ props.dataSet.selectionGroups[0].label } targetB={ props.dataSet.selectionGroups[1].label }></MoveButtons>
      <SelectionGroup group={ props.dataSet.selectionGroups[1] }></SelectionGroup>
      <MoveButtons direction="vertical"></MoveButtons>
    </div>
  );
};

const MoveButtons = props =>
  <div className="slds-grid slds-grid--vertical">
    <button className="slds-button slds-button--icon-container">
      <SvgIcon className="slds-button__icon" sprite="utility" symbol={ (props.direction === 'vertical') ? 'up' : 'right' } />
      <span className="slds-assistive-text">Move Selection { (props.direction === 'vertical') ? 'Up' : 'to ' + props.targetB }</span>
    </button>
    <button className="slds-button slds-button--icon-container">
      <SvgIcon className="slds-button__icon" sprite="utility" symbol={ (props.direction === 'vertical') ? 'down' : 'left' } />
      <span className="slds-assistive-text">Move Selection { (props.direction === 'vertical') ? 'Down' : 'to ' + props.targetA }</span>
    </button>
  </div>;

const SelectionGroup = (props) => {
  const groupLabelID = _.uniqueId('label-');
  return(
    <div className="slds-form-element">
      <span className="slds-form-element__label" id={ groupLabelID }>{ props.group.label }</span>
      <ListBox options={ props.group.options } ariaLabelledby={ groupLabelID }></ListBox>
    </div>
  );
};

const ListBox = props =>
  <div
    className="slds-picklist"
    role="application"
  >
    <ul
      aria-describedby="option-drag-label"
      aria-labelledby={props.ariaLabelledby}
      aria-multiselectable="true"
      className="slds-picklist__options slds-picklist__options--multi"
      role="listbox"
      tabIndex="0"
    >
      { props.options.map(option =>
        <Option key={ _.uniqueId('cell-resize-handle-') } option={ option }></Option>
      )}
    </ul>
  </div>;

const Option = props =>
  <li
    aria-selected={ props.option.isSelected }
    className={className('slds-picklist__item slds-is-draggable', props.option.isGrabbed ? 'slds-is-grabbed' : null)}
    draggable="true"
    role="option"
    tabIndex={ props.option.tabIndex }
  >
    <span className="slds-truncate">{ props.option.text }</span>
  </li>;

///////////////////////////////////////////
// States
///////////////////////////////////////////

const DefaultSnapShot = {
  'liveRegionText': '',
  'optionDragLabel': 'Press space bar when on an item, to move it within the list',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const SelectedSnapShot = {
  'liveRegionText': '',
  'optionDragLabel': 'Press space bar when on an item, to move it within the list',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const MultiSelectedSnapShot = {
  'liveRegionText': '',
  'optionDragLabel': 'Press space bar when on an item, to move it within the list',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': -1,
          'isSelected': true,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const GrabbedSnapShot = {
  'liveRegionText': 'Option 3: current position 3 of 4. Press up or down arrows to move within list.',
  'optionDragLabel': '',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': true,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const MovedInSnapShot = {
  'liveRegionText': 'Option 3: current position 2 of 4.',
  'optionDragLabel': '',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': true,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const DroppedSnapShot = {
  'liveRegionText': 'Option 3: final position 2 of 4.',
  'optionDragLabel': 'Press space bar when on an item, to move it within the list',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

const MoveToSnapShot = {
  'liveRegionText': 'Option 3: Moved to Second Category.',
  'optionDragLabel': 'Press space bar when on an item, to move it within the list',
  'selectionGroups': [
    {
      'label': 'First Category',
      'options': [
        {
          'text': 'Option 1',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 2',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 6',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        }
      ]
    },{
      'label': 'Second Category',
      'options': [
        {
          'text': 'Option 4',
          'tabIndex': 0,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 5',
          'tabIndex': -1,
          'isSelected': false,
          'isGrabbed': false,
        },
        {
          'text': 'Option 3',
          'tabIndex': 0,
          'isSelected': true,
          'isGrabbed': false,
        }
      ]
    }
  ]
};

export let states = [
  {
    id: 'multi-select',
    label: 'Default',
    element:
      <MultiSelect dataSet={ DefaultSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-selected-item',
    label: 'Selected Item',
    element:
      <MultiSelect dataSet={ SelectedSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-multi-selected-items',
    label: 'Multiple Selected Items',
    element:
      <MultiSelect dataSet={ MultiSelectedSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-grabbed',
    label: 'Grabbed',
    element:
      <MultiSelect dataSet={ GrabbedSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-moved-in',
    label: 'Moved in list',
    element:
      <MultiSelect dataSet={ MovedInSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-dropped',
    label: 'Dropped',
    element:
      <MultiSelect dataSet={ DroppedSnapShot }></MultiSelect>
  },
  {
    id: 'multi-select-moved-to',
    label: 'Moved to list',
    element:
      <MultiSelect dataSet={ MoveToSnapShot }></MultiSelect>
  }
];
