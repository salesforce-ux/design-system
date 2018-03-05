/* eslint-env jest */
import React from 'react';
import ColorPicker, { ColorPickerSwatches } from '../';
import {
  Menu,
  MenuList,
  MenuItem,
  Trigger
} from '../../menus/dropdown/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default base color picker', () =>
  matchesMarkupAndStyle(<ColorPicker />));

it('renders a base color picker with summary error', () =>
  matchesMarkupAndStyle(<ColorPicker hasSummaryError />));

it('renders a base color picker with custom tab selected', () =>
  matchesMarkupAndStyle(<ColorPicker isOpen selectedTabIndex={1} />));

it('renders a base color picker with custom tab selected in error state', () =>
  matchesMarkupAndStyle(
    <ColorPicker isOpen hasCustomError selectedTabIndex={1} />
  ));

it('renders a custom only color picker', () =>
  matchesMarkupAndStyle(<ColorPicker hasPredefined={false} />));

it('renders an opened custom only color picker', () =>
  matchesMarkupAndStyle(<ColorPicker isOpen hasPredefined={false} />));

it('renders an opened custom only color picker with error', () =>
  matchesMarkupAndStyle(
    <ColorPicker isOpen hasCustomError hasPredefined={false} />
  ));

it('renders a predefined only color picker', () =>
  matchesMarkupAndStyle(<ColorPicker hasCustom={false} />));

it('renders an opened predefined only color picker', () =>
  matchesMarkupAndStyle(<ColorPicker isOpen hasCustom={false} />));

it('renders a swatches only color picker', () =>
  matchesMarkupAndStyle(
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
  matchesMarkupAndStyle(
    <div style={{ height: '12rem' }}>
      <Trigger className="slds-is-open">
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
