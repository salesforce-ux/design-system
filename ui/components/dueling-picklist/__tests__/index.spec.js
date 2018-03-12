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
  MoveToSnapShot,
  MultiSelectViewMode
} from '../';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

it('renders a default dueling picklist', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DefaultSnapShot} />));

it('renders a default dueling picklist with no reordering', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DefaultSnapShot} noReorder />));

it('renders a dueling picklist with a required option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={LockedSnapShot} />));

it('renders a disabled dueling picklist', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DisabledSnapShot} disabled />));

it('renders a dueling picklist with a selected option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={SelectedSnapShot} />));

it('renders a dueling picklist with multiple selected options', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MultiSelectedSnapShot} />));

it('renders a dueling picklist with a grabbed option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={GrabbedSnapShot} />));

it('renders a dueling picklist with an option that was moved', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MovedInSnapShot} />));

it('renders a dueling picklist with a dropped option', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={DroppedSnapShot} />));

it('renders a dueling picklist with an option that was moved to another list', () =>
  matchesMarkupAndStyle(<MultiSelect dataSet={MovedInSnapShot} />));

it('renders a responsive dueling picklist', () =>
  matchesMarkupAndStyle(
    <MultiSelect dataSet={DefaultSnapShot} isResponsive />
  ));

it('renders a responsive non-reorderable dueling picklist', () =>
  matchesMarkupAndStyle(
    <MultiSelect dataSet={DefaultSnapShot} noReorder isResponsive />
  ));

it('renders a view mode of dueling picklist', () =>
  matchesMarkupAndStyle(<MultiSelectViewMode />));
