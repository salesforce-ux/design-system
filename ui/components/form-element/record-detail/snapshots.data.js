// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { FormElement } from '../';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { CompoundForm } from '../../form-layout/compound/example';
import Combobox from '../../combobox/';
import Listbox from '../../combobox/listbox/';
import { UtilityIcon } from '../../icons/base/example';
import _ from '../../../shared/helpers';

export const ObjectFieldTypes = {
  rows: [
    {
      fields: [
        {
          type: 'text',
          label: 'Assigned To',
          value: 'Jack Rogers',
          avatar: '/assets/images/avatar1.jpg',
          link: true,
          component: (
            <FormElement
              inputId="form-element-id-01"
              labelContent="Assigned To"
            >
              <Input
                id="form-element-id-01"
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
              listbox={
                <Listbox
                  id="listbox-id-01"
                  snapshot={{}}
                  type="entity"
                  count={2}
                />
              }
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
            <Checkbox
              className="slds-checkbox_stacked"
              label="Security Assessment Required?"
            />
          )
        },
        {
          type: 'picklist',
          label: 'Status',
          value: 'In Progress',
          component: (
            <Combobox
              id="combobox-id-02"
              label="Status"
              value="In Progress"
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
              listbox={
                <Listbox
                  id="listbox-id-02"
                  snapshot={{}}
                  type="plain"
                  count={2}
                  visualSelection
                />
              }
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
            <fieldset className="slds-form-element">
              <legend className="slds-form-element__legend slds-form-element__label">
                App Personalization Settings
              </legend>
              <div className="slds-form-element__control">
                <Checkbox
                  label="Disable end user personalization"
                  name="default"
                  checked
                />
                <Checkbox
                  label="Don't automatically create temporary tabs"
                  name="default"
                />
              </div>
            </fieldset>
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
          component: (
            <FormElement
              labelContent="SLA Serial Number"
              inputId="form-element-id-02"
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
          type: 'address',
          label: 'Billing Address',
          value: ['525 S. Lexington Ave', 'Burlington, NC 27215', 'USA'],
          link: true,
          component: (
            <fieldset className="slds-form-element slds-form_compound">
              <legend className="slds-form-element__legend slds-form-element__label">
                Billing Address
              </legend>
              <div className="slds-form-element__control">
                <div className="slds-form-element__group">
                  <div className="slds-form-element__row">
                    <FormElement
                      formElementClassName="slds-size_1-of-1"
                      labelContent="Street"
                      inputId="form-element-id-04"
                    >
                      <Textarea
                        id="form-element-id-04"
                        defaultValue="525 S. Lexington Ave"
                      />
                    </FormElement>
                  </div>
                  <div className="slds-form-element__row">
                    <FormElement
                      formElementClassName="slds-size_4-of-6"
                      labelContent="City"
                      inputId="form-element-id-05"
                    >
                      <Input
                        id="form-element-id-05"
                        defaultValue="Burlington"
                      />
                    </FormElement>
                    <FormElement
                      formElementClassName="slds-size_2-of-6"
                      labelContent="State/Province"
                      inputId="form-element-id-06"
                    >
                      <Input id="form-element-id-06" defaultValue="NC" />
                    </FormElement>
                  </div>
                  <div className="slds-form-element__row">
                    <FormElement
                      formElementClassName="slds-size_4-of-6"
                      labelContent="Zip/Postal Code"
                      inputId="form-element-id-07"
                    >
                      <Input id="form-element-id-07" defaultValue="27215" />
                    </FormElement>
                    <FormElement
                      formElementClassName="slds-size_2-of-6"
                      labelContent="Country"
                      inputId="form-element-id-08"
                    >
                      <Input id="form-element-id-08" defaultValue="USA" />
                    </FormElement>
                  </div>
                </div>
              </div>
            </fieldset>
          )
        },
        {
          type: 'address',
          label: 'Shipping Address',
          value: ['312 Constitution Place', 'Austin, TX 78767', 'USA'],
          link: true,
          component: (
            <fieldset className="slds-form-element slds-form_compound">
              <legend className="slds-form-element__legend slds-form-element__label">
                Shipping Address
              </legend>
              <div className="slds-form-element__control">
                <div className="slds-form-element__group">
                  <div className="slds-form-element__row">
                    <FormElement
                      formElementClassName="slds-size_1-of-1"
                      labelContent="Street"
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
                      labelContent="City"
                      inputId="form-element-id-10"
                    >
                      <Input id="form-element-id-10" defaultValue="Austin" />
                    </FormElement>
                    <FormElement
                      formElementClassName="slds-size_2-of-6"
                      labelContent="State/Province"
                      inputId="form-element-id-11"
                    >
                      <Input id="form-element-id-11" defaultValue="TX" />
                    </FormElement>
                  </div>
                  <div className="slds-form-element__row">
                    <FormElement
                      formElementClassName="slds-size_4-of-6"
                      labelContent="Zip/Postal Code"
                      inputId="form-element-id-12"
                    >
                      <Input id="form-element-id-12" defaultValue="78767" />
                    </FormElement>
                    <FormElement
                      formElementClassName="slds-size_2-of-6"
                      labelContent="Country"
                      inputId="form-element-id-13"
                    >
                      <Input id="form-element-id-13" defaultValue="USA" />
                    </FormElement>
                  </div>
                </div>
              </div>
            </fieldset>
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
          component: (
            <FormElement
              formElementClassName="slds-form-element_stacked"
              labelContent="Description"
              inputId="form-element-id-14"
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
