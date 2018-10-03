// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { FormElement, Fieldset } from '../';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { CheckboxStandalone } from '../../checkbox/';
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
            <FormElement
              labelContent="Security Assessment Required?"
              inputId="checkbox-id-01"
              isEditing
            >
              <CheckboxStandalone id="checkbox-id-01" />
            </FormElement>
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
            <Fieldset label="Location" isEditing hasCompoundFields>
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
          component: (
            <Fieldset
              label="Billing Address"
              isRequired
              isEditing
              isStacked
              hasTooltip
              hasCompoundFields
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
              hasCompoundFields
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
            <FormElement
              labelContent="Security Assessment Required?"
              inputId="checkbox-id-01"
              isEditing
            >
              <CheckboxStandalone id="checkbox-id-01" />
            </FormElement>
          )
        }
      ]
    },
    {
      fields: [
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
          type: 'text',
          label: 'Reference Image',
          value:
            'The URL for the image is https://www.google.com/imgres?imgurl=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple128%2Fv4%2F50%2F98%2Fb6%2F5098b62e-b26d-6d0e-bda4-26a85c42fe1f%2FAppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-3.png%2F246x0w.jpg&imgrefurl=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fflower%2Fid1279174518%3Fmt%3D8&docid=2fZCCC_Ugr43lM&tbnid=9soMHOA780_ooM%3A&vet=10ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA..i&w=246&h=246&bih=1320&biw=1280&q=flower&ved=0ahUKEwiJzc206-PcAhVYIjQIHcJsB3YQMwjxASgAMAA&iact=mrc&uact=8'
        }
      ]
    },
    {
      fields: [
        {
          type: 'richtext',
          label: 'Rich Text Output',
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
          component: (
            <Fieldset label="Location" isEditing hasCompoundFields>
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
        }
      ]
    },
    {
      fields: [
        {
          type: 'multiselect',
          label: 'Selected Languages',
          value: 'Arabic, Chinese, English, German',
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
          component: (
            <Fieldset
              label="Billing Address"
              isRequired
              isEditing
              isStacked
              hasTooltip
              hasCompoundFields
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
          component: (
            <Fieldset
              label="Shipping Address"
              isEditing
              isStacked
              hasCompoundFields
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
