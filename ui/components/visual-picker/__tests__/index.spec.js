/* eslint-env jest */
import React from 'react';
import { Fieldset, Legend } from '../../radio-group/base/example';
import { FormElementControl } from '../../form-element';
import {
  VisualPicker,
  VisualPickerContainer
} from '../coverable-content/example';
import {
  VisualPickerMediaObject,
  PackageOne,
  PackageTwo,
  PackageThree
} from '../non-coverable-content/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a vertical visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select an option</Legend>
      <FormElementControl>
        <VisualPickerContainer hasIcon={false}>
          <VisualPicker className="slds-visual-picker_vertical">
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
          <VisualPicker className="slds-visual-picker_vertical">
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
          <VisualPicker className="slds-visual-picker_vertical">
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a disabled vertical visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select an option</Legend>
      <FormElementControl>
        <VisualPickerContainer hasIcon={false}>
          <VisualPicker className="slds-visual-picker_vertical">
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
          <VisualPicker className="slds-visual-picker_vertical">
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
          <VisualPicker className="slds-visual-picker_vertical" disabled>
            <span>
              <span className="slds-text-heading_medium slds-m-bottom_x-small">
                Item Text
              </span>
              <span className="slds-text-title">
                Some optional item description to help the user better
                understand what this option is about.
              </span>
            </span>
          </VisualPicker>
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a coverable content visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select an app</Legend>
      <FormElementControl>
        <VisualPickerContainer>
          <VisualPicker
            symbol="connected_apps"
            label="Connected App"
            size="medium"
          />
          <VisualPicker symbol="custom_apps" label="Custom App" size="medium" />
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a disabled coverable content visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select an app</Legend>
      <FormElementControl>
        <VisualPickerContainer type="checkbox">
          <VisualPicker
            symbol="connected_apps"
            label="Connected App"
            size="medium"
          />
          <VisualPicker
            disabled
            symbol="custom_apps"
            label="Custom App"
            size="medium"
          />
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a coverable content visual picker with checkbox group', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Add the following object(s)</Legend>
      <FormElementControl>
        <VisualPickerContainer type="checkbox" sprite="standard">
          <VisualPicker symbol="account" label="Account" size="medium" />
          <VisualPicker symbol="lead" label="Lead" size="medium" />
          <VisualPicker symbol="orders" label="Orders" size="medium" />
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a non-coverable content visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select a plan</Legend>
      <FormElementControl>
        <VisualPickerContainer hasIcon={false}>
          <VisualPicker size="medium" label={PackageOne}>
            <span>
              <span className="slds-text-heading_large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker size="medium" label={PackageTwo}>
            <span>
              <span className="slds-text-heading_large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker size="medium" label={PackageThree}>
            <span>
              <span className="slds-text-heading_large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a disabled non-coverable content visual picker', () =>
  matchesMarkup(
    <Fieldset>
      <Legend>Select a plan</Legend>
      <FormElementControl>
        <VisualPickerContainer hasIcon={false}>
          <VisualPicker size="medium" label={PackageOne}>
            <span>
              <span className="slds-text-heading_large">$30</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker size="medium" label={PackageTwo}>
            <span>
              <span className="slds-text-heading_large">$150</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
          <VisualPicker size="medium" disabled label={PackageThree}>
            <span>
              <span className="slds-text-heading_large">$300</span>
              <span className="slds-text-title">USD/user/month *</span>
            </span>
          </VisualPicker>
        </VisualPickerContainer>
      </FormElementControl>
    </Fieldset>
  ));

it('renders a link visual picker', () =>
  matchesMarkup(
    <div className="demo-only" style={{ width: '24rem' }}>
      <VisualPickerMediaObject symbol="user">
        <h2
          className="slds-truncate slds-text-heading_small"
          title="Share the knowledge"
        >
          Share the knowledge
        </h2>
        <p className="slds-m-top_small">
          Harness your team's collective know-how with our powerful knowledge
          base
        </p>
      </VisualPickerMediaObject>
    </div>
  ));
