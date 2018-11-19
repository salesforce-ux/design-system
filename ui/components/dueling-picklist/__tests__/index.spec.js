/* eslint-env jest */
import React from 'react';

import {
  MultiSelect,
  DefaultSnapShot,
  LockedSnapShot,
  DisabledSnapShot,
  SelectedSnapShot,
  MultiSelectedSnapShot,
  GrabbedSnapShot,
  MovedInSnapShot,
  DroppedSnapShot,
  MultiSelectViewMode
} from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

it('renders a default dueling picklist', () =>
  matchesMarkup(<MultiSelect dataSet={DefaultSnapShot} />));

it('renders a default dueling picklist with no reordering', () =>
  matchesMarkup(<MultiSelect dataSet={DefaultSnapShot} noReorder />));

it('renders a dueling picklist with a required option', () =>
  matchesMarkup(<MultiSelect dataSet={LockedSnapShot} />));

it('renders a disabled dueling picklist', () =>
  matchesMarkup(<MultiSelect dataSet={DisabledSnapShot} disabled />));

it('renders a dueling picklist with a selected option', () =>
  matchesMarkup(<MultiSelect dataSet={SelectedSnapShot} />));

it('renders a dueling picklist with multiple selected options', () =>
  matchesMarkup(<MultiSelect dataSet={MultiSelectedSnapShot} />));

it('renders a dueling picklist with a grabbed option', () =>
  matchesMarkup(<MultiSelect dataSet={GrabbedSnapShot} />));

it('renders a dueling picklist with an option that was moved', () =>
  matchesMarkup(<MultiSelect dataSet={MovedInSnapShot} />));

it('renders a dueling picklist with a dropped option', () =>
  matchesMarkup(<MultiSelect dataSet={DroppedSnapShot} />));

it('renders a dueling picklist with an option that was moved to another list', () =>
  matchesMarkup(<MultiSelect dataSet={MovedInSnapShot} />));

it('renders a responsive dueling picklist', () =>
  matchesMarkup(<MultiSelect dataSet={DefaultSnapShot} isResponsive />));

it('renders a responsive non-reorderable dueling picklist', () =>
  matchesMarkup(
    <MultiSelect dataSet={DefaultSnapShot} noReorder isResponsive />
  ));

it('renders a view mode of dueling picklist', () =>
  matchesMarkup(<MultiSelectViewMode />));

it('renders a required dueling picklist', () =>
  matchesMarkup(<MultiSelect dataSet={DefaultSnapShot} isRequired />));

it('renders a dueling picklist with tooltip', () =>
  matchesMarkup(<MultiSelect dataSet={DefaultSnapShot} hasTooltip />));

it('renders a required dueling picklist with tooltip', () =>
  matchesMarkup(
    <MultiSelect dataSet={DefaultSnapShot} isRequired hasTooltip />
  ));
