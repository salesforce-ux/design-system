/* eslint-env jest */
import React from 'react';
import {
  Fieldset,
  Legend,
  FormElementControl
} from '../../radio-group/base/example';
import { VisualPicker } from '../coverable-content/example';
import {
  VisualPickerMediaObject,
  PackageOne,
  PackageTwo,
  PackageThree
} from '../non-coverable-content/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

xit('renders a vertical visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select an option</Legend>
      <FormElementControl>
        <VisualPicker className="slds-visual-picker_vertical" type="radio">
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
        <VisualPicker className="slds-visual-picker_vertical" type="radio">
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
        <VisualPicker className="slds-visual-picker_vertical" type="radio">
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a disabled vertical visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select an option</Legend>
      <FormElementControl>
        <VisualPicker className="slds-visual-picker_vertical" type="radio">
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
        <VisualPicker className="slds-visual-picker_vertical" type="radio">
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
        <VisualPicker
          className="slds-visual-picker_vertical"
          type="radio"
          disabled
        >
          <span>
            <span className="slds-text-heading_medium slds-m-bottom_x-small">
              Item Text
            </span>
            <span className="slds-text-title">
              Some optional item description to help the user better understand
              what this option is about.
            </span>
          </span>
        </VisualPicker>
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a coverable content visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select an app</Legend>
      <FormElementControl>
        <VisualPicker
          type="radio"
          icon
          sprite="utility"
          symbol="connected_apps"
          label="Connected App"
          size="medium"
        />
        <VisualPicker
          type="radio"
          icon
          sprite="utility"
          symbol="custom_apps"
          label="Custom App"
          size="medium"
        />
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a disabled coverable content visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select an app</Legend>
      <FormElementControl>
        <VisualPicker
          type="checkbox"
          icon
          sprite="utility"
          symbol="connected_apps"
          label="Connected App"
          size="medium"
        />
        <VisualPicker
          type="checkbox"
          disabled
          icon
          sprite="utility"
          symbol="custom_apps"
          label="Custom App"
          size="medium"
        />
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a coverable content visual picker with checkbox group', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Add the following object(s)</Legend>
      <FormElementControl>
        <VisualPicker
          type="checkbox"
          icon
          sprite="standard"
          symbol="account"
          label="Account"
          size="medium"
        />
        <VisualPicker
          type="checkbox"
          icon
          sprite="standard"
          symbol="lead"
          label="Lead"
          size="medium"
        />
        <VisualPicker
          type="checkbox"
          icon
          sprite="standard"
          symbol="orders"
          label="Orders"
          size="medium"
        />
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a non-coverable content visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select a plan</Legend>
      <FormElementControl>
        <VisualPicker type="radio" size="medium" label={PackageOne}>
          <span>
            <span className="slds-text-heading_large">$30</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
        <VisualPicker type="radio" size="medium" label={PackageTwo}>
          <span>
            <span className="slds-text-heading_large">$150</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
        <VisualPicker type="radio" size="medium" label={PackageThree}>
          <span>
            <span className="slds-text-heading_large">$300</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a disabled non-coverable content visual picker', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <Legend>Select a plan</Legend>
      <FormElementControl>
        <VisualPicker type="radio" size="medium" label={PackageOne}>
          <span>
            <span className="slds-text-heading_large">$30</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
        <VisualPicker type="radio" size="medium" label={PackageTwo}>
          <span>
            <span className="slds-text-heading_large">$150</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
        <VisualPicker type="radio" size="medium" disabled label={PackageThree}>
          <span>
            <span className="slds-text-heading_large">$300</span>
            <span className="slds-text-title">USD/user/month *</span>
          </span>
        </VisualPicker>
      </FormElementControl>
    </Fieldset>
  ));

xit('renders a link visual picker', () =>
  matchesMarkupAndStyle(
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
