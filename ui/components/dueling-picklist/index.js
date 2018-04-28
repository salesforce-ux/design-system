// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../shared/helpers';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const MultiSelect = props => {
  return (
    <div
      className="slds-form-element"
      role="group"
      aria-labelledby="picklist-group-label"
    >
      <div
        id="picklist-group-label"
        className="slds-form-element__label slds-form-element__legend slds-text-title_caps"
      >
        Select Options
      </div>
      <div className="slds-dueling-list">
        <div
          className="slds-assistive-text"
          id="drag-live-region"
          aria-live="assertive"
        >
          {props.dataSet.liveRegionText}
        </div>
        <div className="slds-assistive-text" id="option-drag-label">
          {props.dataSet.optionDragLabel}
        </div>
        <SelectionGroup
          disabled={props.disabled}
          isResponsive={props.isResponsive}
          group={props.dataSet.selectionGroups[0]}
        />
        <MoveButtons
          direction="horizontal"
          targetA={props.dataSet.selectionGroups[0].label}
          targetB={props.dataSet.selectionGroups[1].label}
          disabled={props.disabled}
        />
        <SelectionGroup
          disabled={props.disabled}
          isResponsive={props.isResponsive}
          group={props.dataSet.selectionGroups[1]}
        />
        {!props.noReorder && (
          <MoveButtons disabled={props.disabled} direction="vertical" />
        )}
      </div>
    </div>
  );
};

export const MultiSelectViewMode = props => {
  return (
    <div className="slds-dueling-list">
      <div className="slds-form-element">
        <span className="slds-form-element__label">Selected Languages</span>
        <div className="slds-form-element__control">
          <span className="slds-form-element__static">
            Arabic, Chinese, English, German
          </span>
        </div>
      </div>
    </div>
  );
};

const MoveButtons = props => {
  const firstButtonText =
    'Move Selection ' +
    (props.direction === 'vertical' ? 'Up' : 'to ' + props.targetB);
  const secondButtonText =
    'Move Selection ' +
    (props.direction === 'vertical' ? 'Down' : 'to ' + props.targetA);
  return (
    <div className="slds-dueling-list__column">
      <button
        className="slds-button slds-button_icon slds-button_icon-container"
        title={firstButtonText}
        disabled={props.disabled}
      >
        <SvgIcon
          className="slds-button__icon"
          sprite="utility"
          symbol={props.direction === 'vertical' ? 'up' : 'right'}
        />
        <span className="slds-assistive-text">{firstButtonText}</span>
      </button>
      <button
        className="slds-button slds-button_icon slds-button_icon-container"
        title={secondButtonText}
        disabled={props.disabled}
      >
        <SvgIcon
          className="slds-button__icon"
          sprite="utility"
          symbol={props.direction === 'vertical' ? 'down' : 'left'}
        />
        <span className="slds-assistive-text">{secondButtonText}</span>
      </button>
    </div>
  );
};

const SelectionGroup = props => {
  const groupLabelID = _.uniqueId('label-');
  return (
    <div
      className={classNames('slds-dueling-list__column', {
        'slds-dueling-list__column_responsive': props.isResponsive
      })}
    >
      <span className="slds-form-element__label" id={groupLabelID}>
        {props.group.label}
      </span>
      <ListBox
        disabled={props.disabled}
        options={props.group.options}
        ariaLabelledby={groupLabelID}
        listboxLabel={props.group.label}
      />
    </div>
  );
};

const ListBox = props => (
  <div
    className={classNames('slds-dueling-list__options', {
      'slds-is-disabled': props.disabled
    })}
  >
    <ul
      aria-describedby="option-drag-label"
      aria-disabled={props.disabled}
      aria-labelledby={props.ariaLabelledby}
      aria-multiselectable="true"
      className="slds-listbox slds-listbox_vertical"
      role="listbox"
    >
      {props.options.map(option => (
        <Option
          key={_.uniqueId('cell-resize-handle-')}
          option={option}
          listboxLabel={props.listboxLabel}
        />
      ))}
    </ul>
  </div>
);

const Option = props => (
  <li role="presentation" className="slds-listbox__item">
    <div
      className={classNames(
        'slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline',
        {
          'slds-is-grabbed': props.option.isGrabbed,
          'slds-is-selected': props.option.isSelected
        }
      )}
      aria-selected={props.option.isSelected}
      draggable="true"
      role="option"
      tabIndex={props.option.tabIndex}
    >
      <span className="slds-media__body">
        <span className="slds-truncate" title={props.option.text}>
          {props.option.text}
        </span>
      </span>
      {props.option.locked && (
        <span className="slds-media__figure slds-media__figure_reverse">
          <span className="slds-icon_container" title="Locked item">
            <SvgIcon
              className="slds-icon slds-icon_x-small slds-icon-text-default"
              sprite="utility"
              symbol="lock"
            />
            <span className="slds-assistive-text">
              {' '}
              : item cannot be removed from {props.listboxLabel}
            </span>
          </span>
        </span>
      )}
    </div>
  </li>
);

/// ////////////////////////////////////////
// States
/// ////////////////////////////////////////

export const DefaultSnapShot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const DisabledSnapShot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const LockedSnapShot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists. Required items must remain in the second category.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false,
          locked: true
        },
        {
          text: 'Option 5',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const SelectedSnapShot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const MultiSelectedSnapShot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: -1,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const GrabbedSnapShot = {
  liveRegionText:
    'Option 5: current position 2 of 2. Press up or down arrows to move within list.',
  optionDragLabel: '',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: true
        }
      ]
    }
  ]
};

export const MovedInSnapShot = {
  liveRegionText: 'Option 5: current position 1 of 2.',
  optionDragLabel: '',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 5',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: true
        },
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const DroppedSnapShot = {
  liveRegionText: 'Option 5: final position 1 of 2.',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 5',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const MoveToSnapShot = {
  liveRegionText: 'Option 3: Moved to Second Category.',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'First Category',
      options: [
        {
          text: 'Option 1',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 2',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 6',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Second Category',
      options: [
        {
          text: 'Option 4',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 5',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Option 3',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const CountriesSnapshot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'Available Languages',
      options: [
        {
          text: 'Arabic',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Dutch',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'German',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Hindi',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Tobagonian Creole English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Selected Languages',
      options: [
        {
          text: 'Chinese',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const SelectedCountriesSnapshot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'Available Languages',
      options: [
        {
          text: 'Arabic',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Dutch',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'German',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Hindi',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Tobagonian Creole English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Selected Languages',
      options: [
        {
          text: 'Chinese',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const MultipleSelectedCountriesSnapshot = {
  liveRegionText: '',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'Available Languages',
      options: [
        {
          text: 'Arabic',
          tabIndex: -1,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Dutch',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'German',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Hindi',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Tobagonian Creole English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Selected Languages',
      options: [
        {
          text: 'Chinese',
          tabIndex: 0,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    }
  ]
};

export const DroppedCountriesSnapshot = {
  liveRegionText: 'Arabic and German: Moved to Selected Languages.',
  optionDragLabel:
    'Press space bar when on an item, to move it within the list. CMD plus left and right arrow keys, to move items between lists.',
  selectionGroups: [
    {
      label: 'Available Languages',
      options: [
        {
          text: 'Dutch',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Hindi',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'Tobagonian Creole English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        }
      ]
    },
    {
      label: 'Selected Languages',
      options: [
        {
          text: 'Arabic',
          tabIndex: -1,
          isSelected: true,
          isGrabbed: false
        },
        {
          text: 'Chinese',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'English',
          tabIndex: -1,
          isSelected: false,
          isGrabbed: false
        },
        {
          text: 'German',
          tabIndex: 0,
          isSelected: true,
          isGrabbed: false
        }
      ]
    }
  ]
};
