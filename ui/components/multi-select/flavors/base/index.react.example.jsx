// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
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
    <button className="slds-button slds-button--icon-container" title={ 'Move Selection ' + (props.direction === 'vertical') ? 'Up' : 'to ' + props.targetB }>
      <SvgIcon className="slds-button__icon" sprite="utility" symbol={ (props.direction === 'vertical') ? 'up' : 'right' } />
      <span className="slds-assistive-text">Move Selection { (props.direction === 'vertical') ? 'Up' : 'to ' + props.targetB }</span>
    </button>
    <button className="slds-button slds-button--icon-container" title={'Move Selection ' +  (props.direction === 'vertical') ? 'Down' : 'to ' + props.targetA }>
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
    className={classNames('slds-picklist__item slds-is-draggable', props.option.isGrabbed ? 'slds-is-grabbed' : null)}
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
  'optionDragLabel': 'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
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
  'optionDragLabel': 'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
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
  'optionDragLabel': 'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
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
  'optionDragLabel': 'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
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
  'optionDragLabel': 'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
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
