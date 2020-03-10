import React from 'react';
import uniqueId from 'lodash.uniqueid';
import Label from '../';

export default <Label id={uniqueId('label-')} labelText="Label Text" />;

export const states = [
  {
    id: 'required',
    label: 'Required',
    element: <Label id={uniqueId('label-')} labelText="Label Text" isRequired />
  }
];

export const examples = [
  {
    id: 'static',
    label: 'Static',
    element: <Label id={uniqueId('label-')} labelText="Label Text" isStatic />
  }
];
