/* eslint-env jest */
import React from 'react';
import { getDisplayElementById } from '../../../shared/helpers';
import * as Input from '../base/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Input', () => {
  it('renders a default input', () => matchesMarkup(Input.default));

  it('renders an input that is required', () =>
    matchesMarkup(getDisplayElementById(Input.states, 'input-required')));

  it('renders an input that is disabled', () =>
    matchesMarkup(getDisplayElementById(Input.states, 'input-disabled')));

  it('renders an input that has an error', () =>
    matchesMarkup(getDisplayElementById(Input.states, 'input-error')));

  it('renders an input that has an error with icon', () =>
    matchesMarkup(getDisplayElementById(Input.states, 'input-error-icon')));

  it('renders an input that is read only', () =>
    matchesMarkup(getDisplayElementById(Input.states, 'read-only')));

  it('renders an input with left icon', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'left-icon')));

  it('renders an input with right icon', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'right-icon')));

  it('renders an input with left icon and clear button', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'double-icon')));

  it('renders an input with clear button and spinner', () =>
    matchesMarkup(
      getDisplayElementById(Input.examples, 'double-icon-spinner')
    ));

  it('renders an input that is the email type', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'email-input')));

  it('renders an input that is the date type', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'date-input')));

  it('renders an input that is the search type', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'search-input')));

  it('renders an input that is the url type', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'url-input')));

  it('renders an input that is the tel type', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'tel-input')));

  it('renders an input with fixed text', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'fixed-text')));

  it('renders an input with inline help', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'inline-help')));

  it('renders an input with field level help', () =>
    matchesMarkup(getDisplayElementById(Input.examples, 'field-level-help')));
});
