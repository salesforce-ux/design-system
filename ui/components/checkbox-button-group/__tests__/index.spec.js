/* eslint-env jest */
import React from 'react';
import { Checkbox, CheckboxGroup, Fieldset } from '../base/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

xit('renders a default checkbox button group', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday">Mon</Checkbox>
        <Checkbox id="tuesday">Tue</Checkbox>
        <Checkbox id="wednesday">Wed</Checkbox>
        <Checkbox id="thursday">Thu</Checkbox>
        <Checkbox id="friday">Fri</Checkbox>
      </CheckboxGroup>
    </Fieldset>
  ));

xit('renders a default checkbox button group with error', () =>
  matchesMarkupAndStyle(
    <Fieldset className="slds-has-error">
      <CheckboxGroup>
        <Checkbox errorId="error_01" id="monday">
          Mon
        </Checkbox>
        <Checkbox errorId="error_01" id="tuesday">
          Tue
        </Checkbox>
        <Checkbox errorId="error_01" id="wednesday">
          Wed
        </Checkbox>
        <Checkbox errorId="error_01" id="thursday">
          Thu
        </Checkbox>
        <Checkbox errorId="error_01" id="friday">
          Fri
        </Checkbox>
      </CheckboxGroup>
      <div id="error_01" className="slds-form-element__help">
        This field is required
      </div>
    </Fieldset>
  ));

xit('renders a disabled checkbox button group', () =>
  matchesMarkupAndStyle(
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday" disabled="true">
          Mon
        </Checkbox>
        <Checkbox id="tuesday" disabled="true">
          Tue
        </Checkbox>
        <Checkbox id="wednesday" disabled="true">
          Wed
        </Checkbox>
        <Checkbox id="thursday" disabled="true">
          Thu
        </Checkbox>
        <Checkbox id="friday" disabled="true">
          Fri
        </Checkbox>
      </CheckboxGroup>
    </Fieldset>
  ));
