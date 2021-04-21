/* eslint-env jest */
import React from 'react';
import ColorPicker, { ColorPickerSwatches } from '../';
import { Trigger } from '../../menus/dropdown/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default base color picker', () => matchesMarkup(<ColorPicker />));

it('renders a base color picker with summary error', () =>
  matchesMarkup(<ColorPicker hasSummaryError />));

it('renders a base color picker with custom tab selected', () =>
  matchesMarkup(<ColorPicker isOpen selectedTabIndex={1} />));

it('renders a base color picker with custom tab selected in error state', () =>
  matchesMarkup(<ColorPicker isOpen hasCustomError selectedTabIndex={1} />));

it('renders a custom only color picker', () =>
  matchesMarkup(<ColorPicker hasPredefined={false} />));

it('renders an opened custom only color picker', () =>
  matchesMarkup(<ColorPicker isOpen hasPredefined={false} />));

it('renders an opened custom only color picker with error', () =>
  matchesMarkup(<ColorPicker isOpen hasCustomError hasPredefined={false} />));

it('renders a predefined only color picker', () =>
  matchesMarkup(<ColorPicker hasCustom={false} />));

it('renders an opened predefined only color picker', () =>
  matchesMarkup(<ColorPicker isOpen hasCustom={false} />));

it('renders a swatches only color picker', () =>
  matchesMarkup(
    <Trigger>
      <div className="slds-dropdown slds-dropdown--left">
        <div className="slds-color-picker slds-color-picker_swatches-only">
          <div className="slds-color-picker__selector">
            <ColorPickerSwatches isMenuRole />
          </div>
        </div>
      </div>
    </Trigger>
  ));

it('renders an opened swatches only color picker', () =>
  matchesMarkup(
    <div style={{ height: '12rem' }}>
      <Trigger isOpen>
        <div className="slds-dropdown slds-dropdown--left">
          <div className="slds-color-picker slds-color-picker_swatches-only">
            <div className="slds-color-picker__selector">
              <ColorPickerSwatches isMenuRole />
            </div>
          </div>
        </div>
      </Trigger>
    </div>
  ));
