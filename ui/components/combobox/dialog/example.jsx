// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox from '../';
import { UtilityIcon } from '../../icons/base/example';
import _ from '../../../shared/helpers';
import { Popover } from '../../popovers/base/example';
import { Button } from '../../buttons/base/example';
import { Fieldset } from '../../form-element';
import { Checkbox } from '../../checkbox/base/example';

const popoverId01 = 'popover-unique-id-01';
const popoverId02 = 'popover-unique-id-02';
const popoverId03 = 'popover-unique-id-03';
const popoverId04 = 'popover-unique-id-04';
const popoverId05 = 'popover-unique-id-05';
const popoverId06 = 'popover-unique-id-06';
const popoverId07 = 'popover-unique-id-07';

const STORY_SINK_CONTEXT = 'Dialog';

export const ComboboxWithDialog = () => {
  const popoverId = _.uniqueId('popover-id-');
  return (
    <Combobox
      id={_.uniqueId('combobox-id-')}
      aria-controls={popoverId}
      label="Languages"
      selectOnly
      inputIconPosition="right"
      rightInputIcon={
        <UtilityIcon
          symbol="down"
          className="slds-icon slds-icon_x-small slds-icon-text-default"
          containerClassName="slds-input__icon slds-input__icon_right"
          assistiveText={false}
          title={false}
        />
      }
      resultsType="dialog"
      results={
        <Popover
          popoverId={popoverId}
          title="Language Options"
          isFullWidth
          isHidden
          hasFormFooter
          size="small"
          footer={
            <React.Fragment>
              <Button />
              <Button />
            </React.Fragment>
          }
        >
          <div>Any content can go here in this Dialog</div>
        </Popover>
      }
    />
  );
};

export default [
  {
    context: STORY_SINK_CONTEXT,
    id: `${STORY_SINK_CONTEXT.toLowerCase()}-default`,
    label: `${STORY_SINK_CONTEXT} default`,
    element: <ComboboxWithDialog />
  }
];

export let states = [
  {
    context: STORY_SINK_CONTEXT,
    id: 'open',
    label: 'Open',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId01}
        label="Languages"
        selectOnly
        isOpen
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId01}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <div>Any content can go here in this Dialog</div>
          </Popover>
        }
      />
    )
  }
];

export let examples = [
  {
    context: STORY_SINK_CONTEXT,
    id: 'with-checkbox-group',
    label: 'With Checkbox Group',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId02}
        label="Languages"
        selectOnly
        isOpen
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId02}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" />
              <Checkbox label="Tobagonian Creole English" />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'selecting-options',
    label: 'Selecting Options',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId03}
        label="Languages"
        selectOnly
        isOpen
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId03}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" checked />
              <Checkbox label="Tobagonian Creole English" checked />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'open-one-option-selected',
    label: 'Open - One Option Selected ',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId04}
        label="Languages"
        selectOnly
        isOpen
        value="German"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId04}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" checked />
              <Checkbox label="Tobagonian Creole English" />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'closed-one-option-selected',
    label: 'Closed - One Option Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId05}
        label="Languages"
        selectOnly
        value="German"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId05}
            title="Language Options"
            isHidden
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" checked />
              <Checkbox label="Tobagonian Creole English" />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'open-two-or-more-options-selected',
    label: 'Open - Two or More Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId06}
        label="Languages"
        selectOnly
        isOpen
        value="2 options selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId06}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" checked />
              <Checkbox label="Tobagonian Creole English" checked />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  },
  {
    context: STORY_SINK_CONTEXT,
    id: 'closed-two-or-more-options-selected',
    label: 'Closed - Two or More Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={popoverId07}
        label="Languages"
        selectOnly
        value="2 options selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId07}
            title="Language Options"
            isHidden
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button isNeutral>Cancel</Button>
                <Button isBrand>Done</Button>
              </React.Fragment>
            }
          >
            <Fieldset label="Select up to 2">
              <Checkbox label="English" />
              <Checkbox label="German" checked />
              <Checkbox label="Tobagonian Creole English" checked />
              <Checkbox label="Spanish" />
            </Fieldset>
          </Popover>
        }
      />
    )
  }
];
