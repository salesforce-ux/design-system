// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { FormElement, Fieldset } from '../';
import { CompoundFormElement, CompoundFormRow } from '../compound/';
import Input from '../../input/';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { FormElementCheckboxStandalone } from '../../checkbox/form-element';
import { MultiSelect, DefaultSnapShot } from '../../dueling-picklist/';
import Combobox from '../../combobox/';
import Listbox from '../../combobox/listbox/';
import { UtilityIcon } from '../../icons/base/example';

export const ObjectFieldTypes = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          isRequired: true,
          link: true,
          component: (
            <FormElement
              inputId="stacked-form-element-id-01"
              labelContent="Assigned To"
              isRequired
              isEditing
              isStacked
            >
              <Input
                id="stacked-form-element-id-01"
                readOnly
                defaultValue="Jack Rogers"
                required
              />
            </FormElement>
          )
        },
        {
          type: 'lookup',
          label: 'Team Name',
          value: 'Salesforce Lightning Design System',
          link: true,
          component: (
            <Combobox
              id="stacked-combobox-id-01"
              label="Team Name"
              aria-controls="stacked-listbox-id-01"
              autocomplete
              isEditing
              isStacked
              inputIconPosition="right"
              rightInputIcon={
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="clear"
                  title="Clear the text input"
                  assistiveText="Clear the text input"
                />
              }
              results={
                <Listbox
                  id="stacked-listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
              resultsType="listbox"
              value="Salesforce Lightning Design System"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox',
          label: 'Security Assessment Required?',
          value: (
            <UtilityIcon
              symbol="steps"
              size="x-small"
              useCurrentColor
              assistiveText="False"
              title="False"
            />
          ),
          component: (
            <FormElementCheckboxStandalone
              labelContent="Security Assessment Required?"
              isEditing
              isStacked
            />
          )
        },
        {
          type: 'picklist',
          label: 'Status',
          component: (
            <Combobox
              id="stacked-combobox-id-02"
              label="Status"
              aria-controls="stacked-listbox-id-02"
              readonly
              isEditing
              isStacked
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
              results={
                <Listbox
                  id="stacked-listbox-id-02"
                  snapshot={{}}
                  type="plain"
                  count={2}
                  visualSelection
                />
              }
              resultsType="listbox"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox-group',
          label: 'Personalization Settings',
          value: 'Disable end user personalization',
          component: (
            <Fieldset label="App Personalization Settings" isEditing isStacked>
              <Checkbox
                label="Disable end user personalization"
                name="default"
                checked
              />
              <Checkbox
                label="Don't automatically create temporary tabs"
                name="default"
              />
            </Fieldset>
          )
        },
        {
          type: '',
          label: '',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'SLA Serial Number',
          value: '5367',
          hasTooltip: true,
          component: (
            <FormElement
              labelContent="SLA Serial Number"
              inputId="stacked-form-element-id-02"
              hasTooltip
              isEditing
              isStacked
            >
              <Input id="stacked-form-element-id-02" defaultValue="5367" />
            </FormElement>
          )
        },
        {
          type: 'date',
          label: 'SLA Expiration Date',
          value: '1/1/2018',
          component: (
            <FormElement
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Date"
              inputId="stacked-form-element-id-03"
              hasRightIcon
              isEditing
              isStacked
            >
              <Input id="stacked-form-element-id-03" defaultValue="1/1/2018" />
              <ButtonIcon
                className="slds-input__icon slds-input__icon_right"
                symbol="event"
                assistiveText="Select a date"
                title="Select a date"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'location',
          label: 'Location',
          value: '10.283, 54.293',
          component: (
            <CompoundFormElement labelContent="Location" isEditing isStacked>
              <CompoundFormRow>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Longitude"
                    inputId="stacked-location-longitude-01"
                  >
                    <Input
                      id="stacked-location-longitude-01"
                      defaultValue="10.283"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Latitude"
                    inputId="stacked-location-latitude-01"
                  >
                    <Input
                      id="stacked-location-latitude-01"
                      defaultValue="54.293"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        },
        {
          type: 'multiselect',
          label: 'Selected Languages',
          value: 'Arabic, Chinese, English, German',
          component: (
            <MultiSelect
              isEditing
              isStacked
              dataSet={DefaultSnapShot}
              isResponsive
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'address',
          label: 'Billing Address',
          value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
          link: true,
          isRequired: true,
          hasTooltip: true,
          component: (
            <CompoundFormElement
              labelContent="Billing Address"
              isAddress
              isEditing
              isRequired
              hasTooltip
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Billing Street"
                    inputId="stacked-form-element-id-04"
                  >
                    <Textarea
                      id="stacked-form-element-id-04"
                      defaultValue="525 S. Lexington Ave"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing City"
                    inputId="stacked-form-element-id-05"
                  >
                    <Input
                      id="stacked-form-element-id-05"
                      defaultValue="Burlington"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing State/Province"
                    inputId="stacked-form-element-id-06"
                  >
                    <Input
                      id="stacked-form-element-id-06"
                      defaultValue="NC"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing Zip/Postal Code"
                    inputId="stacked-form-element-id-07"
                  >
                    <Input
                      id="stacked-form-element-id-07"
                      defaultValue="27215"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing Country"
                    inputId="stacked-form-element-id-08"
                  >
                    <Input
                      id="stacked-form-element-id-08"
                      defaultValue="USA"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        },
        {
          type: 'address',
          label: 'Shipping Address',
          value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
          link: true,
          component: (
            <CompoundFormElement
              labelContent="Shipping Address"
              isAddress
              isEditing
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Shipping Street"
                    inputId="stacked-form-element-id-09"
                  >
                    <Textarea
                      id="stacked-form-element-id-09"
                      defaultValue="312 Constitution Place"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping City"
                    inputId="stacked-form-element-id-10"
                  >
                    <Input
                      id="stacked-form-element-id-10"
                      defaultValue="Austin"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping State/Province"
                    inputId="stacked-form-element-id-11"
                  >
                    <Input id="stacked-form-element-id-11" defaultValue="TX" />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping Zip/Postal Code"
                    inputId="stacked-form-element-id-12"
                  >
                    <Input
                      id="stacked-form-element-id-12"
                      defaultValue="78767"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping Country"
                    inputId="stacked-form-element-id-13"
                  >
                    <Input id="stacked-form-element-id-13" defaultValue="USA" />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          label: 'Description',
          value: [
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
          ],
          column: 1,
          component: (
            <FormElement
              labelContent="Description"
              inputId="stacked-form-element-id-14"
              isStacked
              isEditing
              column={1}
            >
              <Textarea
                id="stacked-form-element-id-14"
                defaultValue="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."
              />
            </FormElement>
          )
        }
      ]
    }
  ]
};

export const ObjectFieldTypesHorizontal = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          isRequired: true,
          link: true,
          component: (
            <FormElement
              isHorizontal
              inputId="horizontal-form-element-id-01"
              labelContent="Assigned To"
              isRequired
              isEditing
            >
              <Input
                id="horizontal-form-element-id-01"
                readOnly
                defaultValue="Jack Rogers"
                required
              />
            </FormElement>
          )
        },
        {
          type: 'lookup',
          label: 'Team Name',
          value: 'Salesforce Lightning Design System',
          link: true,
          component: (
            <Combobox
              isHorizontal
              id="horizontal-combobox-id-01"
              label="Team Name"
              aria-controls="horizontal-listbox-id-01"
              isEditing
              autocomplete
              inputIconPosition="right"
              rightInputIcon={
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="clear"
                  title="Clear the text input"
                  assistiveText="Clear the text input"
                />
              }
              results={
                <Listbox
                  id="horizontal-listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
              resultsType="listbox"
              value="Salesforce Lightning Design System"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox',
          label: 'Security Assessment Required?',
          value: (
            <UtilityIcon
              symbol="steps"
              size="x-small"
              useCurrentColor
              assistiveText="False"
              title="False"
            />
          ),
          component: (
            <FormElementCheckboxStandalone
              labelContent="Security Assessment Required?"
              isHorizontal
              isEditing
            />
          )
        },
        {
          type: 'picklist',
          label: 'Status',
          component: (
            <Combobox
              isHorizontal
              id="horizontal-combobox-id-02"
              label="Status"
              aria-controls="horizontal-listbox-id-02"
              readonly
              isEditing
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
              results={
                <Listbox
                  id="horizontal-listbox-id-02"
                  snapshot={{}}
                  type="plain"
                  count={2}
                  visualSelection
                />
              }
              resultsType="listbox"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox-group',
          label: 'Personalization Settings',
          value: 'Disable end user personalization',
          component: (
            <Fieldset
              isHorizontal
              label="App Personalization Settings"
              isEditing
            >
              <Checkbox
                label="Disable end user personalization"
                name="default"
                checked
              />
              <Checkbox
                label="Don't automatically create temporary tabs"
                name="default"
              />
            </Fieldset>
          )
        },
        {
          type: '',
          label: '',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'SLA Serial Number',
          value: '5367',
          hasTooltip: true,
          component: (
            <FormElement
              isHorizontal
              labelContent="SLA Serial Number"
              inputId="horizontal-form-element-id-02"
              hasTooltip
              isEditing
            >
              <Input id="horizontal-form-element-id-02" defaultValue="5367" />
            </FormElement>
          )
        },
        {
          type: 'date',
          label: 'SLA Expiration Date',
          value: '1/1/2018',
          component: (
            <FormElement
              isHorizontal
              isEditing
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Date"
              inputId="horizontal-form-element-id-03"
              hasRightIcon
            >
              <Input
                id="horizontal-form-element-id-03"
                defaultValue="1/1/2018"
              />
              <ButtonIcon
                className="slds-input__icon slds-input__icon_right"
                symbol="event"
                assistiveText="Select a date"
                title="Select a date"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          label: 'Description',
          value: [
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
          ],
          column: 1,
          component: (
            <FormElement
              isHorizontal
              labelContent="Description"
              inputId="horizontal-form-element-id-14"
              isEditing
              column={1}
            >
              <Textarea
                id="horizontal-form-element-id-14"
                defaultValue="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'location',
          label: 'Location',
          value: '10.283, 54.293',
          component: (
            <CompoundFormElement labelContent="Location" isEditing isHorizontal>
              <CompoundFormRow>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Longitude"
                    inputId="horizontal-location-longitude-01"
                  >
                    <Input
                      id="horizontal-location-longitude-01"
                      defaultValue="10.283"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Latitude"
                    inputId="horizontal-location-latitude-01"
                  >
                    <Input
                      id="horizontal-location-latitude-01"
                      defaultValue="54.293"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        },
        {
          type: 'multiselect',
          label: 'Selected Languages',
          value: 'Arabic, Chinese, English, German',
          component: (
            <MultiSelect
              isStacked
              isEditing
              dataSet={DefaultSnapShot}
              isResponsive
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'address',
          label: 'Billing Address',
          value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
          link: true,
          isRequired: true,
          hasTooltip: true,
          component: (
            <CompoundFormElement
              labelContent="Billing Address"
              isAddress
              isEditing
              isRequired
              hasTooltip
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Billing Street"
                    inputId="horizontal-form-element-id-04"
                  >
                    <Textarea
                      id="horizontal-form-element-id-04"
                      defaultValue="525 S. Lexington Ave"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing City"
                    inputId="horizontal-form-element-id-05"
                  >
                    <Input
                      id="horizontal-form-element-id-05"
                      defaultValue="Burlington"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing State/Province"
                    inputId="horizontal-form-element-id-06"
                  >
                    <Input
                      id="horizontal-form-element-id-06"
                      defaultValue="NC"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing Zip/Postal Code"
                    inputId="horizontal-form-element-id-07"
                  >
                    <Input
                      id="horizontal-form-element-id-07"
                      defaultValue="27215"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing Country"
                    inputId="horizontal-form-element-id-08"
                  >
                    <Input
                      id="horizontal-form-element-id-08"
                      defaultValue="USA"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        },
        {
          type: 'address',
          label: 'Shipping Address',
          value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
          link: true,
          component: (
            <CompoundFormElement
              labelContent="Shipping Address"
              isAddress
              isEditing
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Shipping Street"
                    inputId="horizontal-form-element-id-09"
                  >
                    <Textarea
                      id="horizontal-form-element-id-09"
                      defaultValue="312 Constitution Place"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping City"
                    inputId="horizontal-form-element-id-10"
                  >
                    <Input
                      id="horizontal-form-element-id-10"
                      defaultValue="Austin"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping State/Province"
                    inputId="horizontal-form-element-id-11"
                  >
                    <Input
                      id="horizontal-form-element-id-11"
                      defaultValue="TX"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping Zip/Postal Code"
                    inputId="horizontal-form-element-id-12"
                  >
                    <Input
                      id="horizontal-form-element-id-12"
                      defaultValue="78767"
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping Country"
                    inputId="horizontal-form-element-id-13"
                  >
                    <Input
                      id="horizontal-form-element-id-13"
                      defaultValue="USA"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        }
      ]
    }
  ]
};

export const ObjectFieldTypesHorizontalWithError = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          component: (
            <FormElement
              isHorizontal
              inputId="horizontal-form-element-id-01"
              labelContent="Assigned To"
              isEditing
            >
              <Input
                id="horizontal-form-element-id-01"
                readOnly
                defaultValue="Jack Rogers"
              />
            </FormElement>
          )
        },
        {
          type: 'lookup',
          label: 'Team Name',
          value: 'Salesforce Lightning Design System',
          link: true,
          component: (
            <Combobox
              isHorizontal
              id="horizontal-combobox-id-01"
              label="Team Name"
              aria-controls="horizontal-listbox-id-01"
              isEditing
              autocomplete
              inputIconPosition="right"
              rightInputIcon={
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="clear"
                  title="Clear the text input"
                  assistiveText="Clear the text input"
                />
              }
              results={
                <Listbox
                  id="horizontal-listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
              resultsType="listbox"
              value="Salesforce Lightning Design System"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'Account Name',
          value: '',
          isRequired: true,
          component: (
            <FormElement
              isRequired
              isHorizontal
              labelContent="Account Name"
              inputId="horizontal-form-element-id-02"
              isEditing
              hasError
              errorId="horizontal-form-element-error-id-01"
              inlineMessage="Complete this field"
            >
              <Input id="horizontal-form-element-id-02" defaultValue="" />
            </FormElement>
          )
        },
        {
          type: 'date',
          label: 'SLA Expiration Date',
          value: '1/1/2018',
          component: (
            <FormElement
              isHorizontal
              isEditing
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Date"
              inputId="horizontal-form-element-id-03"
              hasRightIcon
            >
              <Input
                id="horizontal-form-element-id-03"
                defaultValue="1/1/2018"
              />
              <ButtonIcon
                className="slds-input__icon slds-input__icon_right"
                symbol="event"
                assistiveText="Select a date"
                title="Select a date"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          label: 'Description',
          value: [
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
          ],
          column: 1,
          component: (
            <FormElement
              isHorizontal
              labelContent="Description"
              inputId="horizontal-form-element-id-14"
              isEditing
              column={1}
            >
              <Textarea
                id="horizontal-form-element-id-14"
                defaultValue="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."
              />
            </FormElement>
          )
        }
      ]
    }
  ]
};

export const ObjectFieldTypesSingleColumn = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          isRequired: true,
          link: true,
          column: 1,
          component: (
            <FormElement
              inputId="form-element-id-01"
              labelContent="Assigned To"
              isRequired
              isEditing
            >
              <Input
                id="form-element-id-01"
                readOnly
                defaultValue="Jack Rogers"
                required
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'lookup',
          label: 'Team Name',
          value: 'Salesforce Lightning Design System',
          link: true,
          column: 1,
          component: (
            <Combobox
              id="combobox-id-01"
              label="Team Name"
              aria-controls="listbox-id-01"
              autocomplete
              inputIconPosition="right"
              rightInputIcon={
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="clear"
                  title="Clear the text input"
                  assistiveText="Clear the text input"
                />
              }
              results={
                <Listbox
                  id="listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
              resultsType="listbox"
              value="Salesforce Lightning Design System"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox',
          label: 'Security Assessment Required?',
          value: (
            <UtilityIcon
              symbol="steps"
              size="x-small"
              useCurrentColor
              assistiveText="False"
              title="False"
            />
          ),
          column: 1,
          component: (
            <FormElementCheckboxStandalone
              labelContent="Security Assessment Required?"
              isEditing
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'picklist',
          label: 'Status',
          column: 1,
          component: (
            <Combobox
              id="combobox-id-02"
              label="Status"
              aria-controls="listbox-id-02"
              readonly
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
              results={
                <Listbox
                  id="listbox-id-02"
                  snapshot={{}}
                  type="plain"
                  count={2}
                  visualSelection
                />
              }
              resultsType="listbox"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'Reference Image',
          value:
            'The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8',
          column: 1,
          component: (
            <FormElement
              labelContent="Reference Image"
              inputId="form-element-id-15"
              isStacked
              isEditing
            >
              <Textarea
                id="form-element-id-15"
                defaultValue="The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'richtext',
          label: 'Rich Text Output',
          column: 1,
          value: (
            <div className="slds-rich-text-editor__output">
              <p>Here's a big image</p>
              <p>
                <img
                  src="/assets/images/themes/oneSalesforce/banner-group-public-default.png"
                  alt=""
                />
              </p>
            </div>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'SLA Serial Number',
          value: '5367',
          hasTooltip: true,
          column: 1,
          component: (
            <FormElement
              labelContent="SLA Serial Number"
              inputId="form-element-id-02"
              hasTooltip
              isEditing
            >
              <Input id="form-element-id-02" defaultValue="5367" />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'date',
          label: 'SLA Expiration Date',
          value: '1/1/2018',
          column: 1,
          component: (
            <FormElement
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Date"
              inputId="form-element-id-03"
              hasRightIcon
            >
              <Input id="form-element-id-03" defaultValue="1/1/2018" />
              <ButtonIcon
                className="slds-input__icon slds-input__icon_right"
                symbol="event"
                assistiveText="Select a date"
                title="Select a date"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'location',
          label: 'Location',
          value: '10.283, 54.293',
          column: 1,
          component: (
            <CompoundFormElement labelContent="Location" isEditing isHorizontal>
              <CompoundFormRow>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Longitude"
                    inputId="location-longitude-01"
                  >
                    <Input id="location-longitude-01" defaultValue="10.283" />
                  </FormElement>
                </div>
                <div className="slds-size_1-of-2">
                  <FormElement
                    labelContent="Latitude"
                    inputId="location-latitude-01"
                  >
                    <Input id="location-latitude-01" defaultValue="54.293" />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'multiselect',
          label: 'Selected Languages',
          value: 'Arabic, Chinese, English, German',
          column: 1,
          component: <MultiSelect dataSet={DefaultSnapShot} isResponsive />
        }
      ]
    },
    {
      fields: [
        {
          type: 'address',
          label: 'Billing Address',
          value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
          link: true,
          isRequired: true,
          hasTooltip: true,
          column: 1,
          component: (
            <CompoundFormElement
              labelContent="Billing Address"
              isAddress
              isEditing
              isRequired
              hasTooltip
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Billing Street"
                    inputId="form-element-id-04"
                  >
                    <Textarea
                      id="form-element-id-04"
                      defaultValue="525 S. Lexington Ave"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing City"
                    inputId="form-element-id-05"
                  >
                    <Input
                      id="form-element-id-05"
                      defaultValue="Burlington"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing State/Province"
                    inputId="form-element-id-06"
                  >
                    <Input id="form-element-id-06" defaultValue="NC" required />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Billing Zip/Postal Code"
                    inputId="form-element-id-07"
                  >
                    <Input
                      id="form-element-id-07"
                      defaultValue="27215"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Billing Country"
                    inputId="form-element-id-08"
                  >
                    <Input
                      id="form-element-id-08"
                      defaultValue="USA"
                      required
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'address',
          label: 'Shipping Address',
          value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
          link: true,
          column: 1,
          component: (
            <CompoundFormElement
              labelContent="Shipping Address"
              isAddress
              isEditing
              isStacked
            >
              <CompoundFormRow>
                <div className="slds-size_1-of-1">
                  <FormElement
                    labelContent="Shipping Street"
                    inputId="form-element-id-09"
                  >
                    <Textarea
                      id="form-element-id-09"
                      defaultValue="312 Constitution Place"
                    />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping City"
                    inputId="form-element-id-10"
                  >
                    <Input id="form-element-id-10" defaultValue="Austin" />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping State/Province"
                    inputId="form-element-id-11"
                  >
                    <Input id="form-element-id-11" defaultValue="TX" />
                  </FormElement>
                </div>
              </CompoundFormRow>
              <CompoundFormRow>
                <div className="slds-size_4-of-6">
                  <FormElement
                    labelContent="Shipping Zip/Postal Code"
                    inputId="form-element-id-12"
                  >
                    <Input id="form-element-id-12" defaultValue="78767" />
                  </FormElement>
                </div>
                <div className="slds-size_2-of-6">
                  <FormElement
                    labelContent="Shipping Country"
                    inputId="form-element-id-13"
                  >
                    <Input id="form-element-id-13" defaultValue="USA" />
                  </FormElement>
                </div>
              </CompoundFormRow>
            </CompoundFormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          label: 'Description',
          value: [
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
          ],
          column: 1,
          component: (
            <FormElement
              labelContent="Description"
              inputId="form-element-id-14"
              isStacked
              isEditing
            >
              <Textarea
                id="form-element-id-14"
                defaultValue="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."
              />
            </FormElement>
          )
        }
      ]
    }
  ]
};

export const DeprecatedObjectFieldTypes = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          isRequired: true,
          link: true,
          component: (
            <FormElement
              inputId="form-element-id-01"
              labelContent="Assigned To"
              isRequired
              isEditing
            >
              <Input
                id="form-element-id-01"
                readOnly
                defaultValue="Jack Rogers"
                required
              />
            </FormElement>
          )
        },
        {
          type: 'lookup',
          label: 'Team Name',
          value: 'Salesforce Lightning Design System',
          link: true,
          component: (
            <Combobox
              id="combobox-id-01"
              label="Team Name"
              aria-controls="listbox-id-01"
              autocomplete
              isEditing
              inputIconPosition="right"
              rightInputIcon={
                <ButtonIcon
                  className="slds-input__icon slds-input__icon_right"
                  symbol="clear"
                  title="Clear the text input"
                  assistiveText="Clear the text input"
                />
              }
              results={
                <Listbox
                  id="listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
              resultsType="listbox"
              value="Salesforce Lightning Design System"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox',
          label: 'Security Assessment Required?',
          value: 'False',
          component: (
            <FormElementCheckboxStandalone
              labelContent="Security Assessment Required?"
              isEditing
            />
          )
        },
        {
          type: 'picklist',
          label: 'Status',
          component: (
            <Combobox
              id="combobox-id-02"
              label="Status"
              value="In Progress"
              aria-controls="listbox-id-02"
              readonly
              isEditing
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
              results={
                <Listbox
                  id="listbox-id-02"
                  snapshot={{}}
                  type="plain"
                  count={2}
                  visualSelection
                />
              }
              resultsType="listbox"
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'checkbox-group',
          label: 'Personalization Settings',
          value: 'Disable end user personalization',
          component: (
            <Fieldset label="App Personalization Settings" isEditing>
              <Checkbox
                label="Disable end user personalization"
                name="default"
                checked
              />
              <Checkbox
                label="Don't automatically create temporary tabs"
                name="default"
              />
            </Fieldset>
          )
        },
        {
          type: '',
          label: '',
          value: ''
        }
      ]
    },
    {
      fields: [
        {
          type: 'text',
          label: 'SLA Serial Number',
          value: '5367',
          hasTooltip: true,
          component: (
            <FormElement
              labelContent="SLA Serial Number"
              inputId="form-element-id-02"
              hasTooltip
              isEditing
            >
              <Input id="form-element-id-02" defaultValue="5367" />
            </FormElement>
          )
        },
        {
          type: 'date',
          label: 'SLA Expiration Date',
          value: '1/1/2018',
          component: (
            <FormElement
              formElementClassName="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              labelContent="Date"
              inputId="form-element-id-03"
              hasRightIcon
              isEditing
            >
              <Input id="form-element-id-03" defaultValue="1/1/2018" />
              <ButtonIcon
                className="slds-input__icon slds-input__icon_right"
                symbol="event"
                assistiveText="Select a date"
                title="Select a date"
              />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'location',
          label: 'Location',
          value: '10.283, 54.293',
          component: (
            <Fieldset label="Location" isEditing hasCompoundFields isDeprecated>
              <div className="slds-form-element__group">
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_1-of-2"
                    labelContent="Longitude"
                    inputId="location-longitude-01"
                  >
                    <Input id="location-longitude-01" defaultValue="10.283" />
                  </FormElement>
                  <FormElement
                    formElementClassName="slds-size_1-of-2"
                    labelContent="Latitude"
                    inputId="location-latitude-01"
                  >
                    <Input id="location-latitude-01" defaultValue="54.293" />
                  </FormElement>
                </div>
              </div>
            </Fieldset>
          )
        },
        {
          type: 'multiselect',
          label: 'Selected Languages',
          value: 'Arabic, Chinese, English, German',
          component: (
            <MultiSelect
              isEditing
              dataSet={DefaultSnapShot}
              isResponsive
              isStacked
            />
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'address',
          label: 'Billing Address',
          value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
          link: true,
          isRequired: true,
          hasTooltip: true,
          component: (
            <Fieldset
              label="Billing Address"
              isRequired
              isEditing
              isStacked
              isAddress
              hasTooltip
              hasCompoundFields
              isDeprecated
            >
              <div className="slds-form-element__group">
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_1-of-1"
                    labelContent="Billing Street"
                    inputId="form-element-id-04"
                  >
                    <Textarea
                      id="form-element-id-04"
                      defaultValue="525 S. Lexington Ave"
                      required
                    />
                  </FormElement>
                </div>
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_4-of-6"
                    labelContent="Billing City"
                    inputId="form-element-id-05"
                  >
                    <Input
                      id="form-element-id-05"
                      defaultValue="Burlington"
                      required
                    />
                  </FormElement>
                  <FormElement
                    formElementClassName="slds-size_2-of-6"
                    labelContent="Billing State/Province"
                    inputId="form-element-id-06"
                  >
                    <Input id="form-element-id-06" defaultValue="NC" required />
                  </FormElement>
                </div>
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_4-of-6"
                    labelContent="Billing Zip/Postal Code"
                    inputId="form-element-id-07"
                  >
                    <Input
                      id="form-element-id-07"
                      defaultValue="27215"
                      required
                    />
                  </FormElement>
                  <FormElement
                    formElementClassName="slds-size_2-of-6"
                    labelContent="Billing Country"
                    inputId="form-element-id-08"
                  >
                    <Input
                      id="form-element-id-08"
                      defaultValue="USA"
                      required
                    />
                  </FormElement>
                </div>
              </div>
            </Fieldset>
          )
        },
        {
          type: 'address',
          label: 'Shipping Address',
          value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
          link: true,
          component: (
            <Fieldset
              label="Shipping Address"
              isEditing
              isStacked
              isAddress
              hasCompoundFields
              isDeprecated
            >
              <div className="slds-form-element__group">
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_1-of-1"
                    labelContent="Shipping Street"
                    inputId="form-element-id-09"
                  >
                    <Textarea
                      id="form-element-id-09"
                      defaultValue="312 Constitution Place"
                    />
                  </FormElement>
                </div>
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_4-of-6"
                    labelContent="Shipping City"
                    inputId="form-element-id-10"
                  >
                    <Input id="form-element-id-10" defaultValue="Austin" />
                  </FormElement>
                  <FormElement
                    formElementClassName="slds-size_2-of-6"
                    labelContent="Shipping State/Province"
                    inputId="form-element-id-11"
                  >
                    <Input id="form-element-id-11" defaultValue="TX" />
                  </FormElement>
                </div>
                <div className="slds-form-element__row">
                  <FormElement
                    formElementClassName="slds-size_4-of-6"
                    labelContent="Shipping Zip/Postal Code"
                    inputId="form-element-id-12"
                  >
                    <Input id="form-element-id-12" defaultValue="78767" />
                  </FormElement>
                  <FormElement
                    formElementClassName="slds-size_2-of-6"
                    labelContent="Shipping Country"
                    inputId="form-element-id-13"
                  >
                    <Input id="form-element-id-13" defaultValue="USA" />
                  </FormElement>
                </div>
              </div>
            </Fieldset>
          )
        }
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          label: 'Description',
          value: [
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.'
          ],
          column: 1,
          component: (
            <FormElement
              labelContent="Description"
              inputId="form-element-id-14"
              isStacked
              isEditing
              column={1}
            >
              <Textarea
                id="form-element-id-14"
                defaultValue="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod."
              />
            </FormElement>
          )
        }
      ]
    }
  ]
};
