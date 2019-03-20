import React from 'react';
import ButtonIcon from '../';

const ButtonIconExample = () => (
  <React.Fragment>
    <ButtonIcon symbol="settings" />
    <ButtonIcon symbol="settings" disabled />
    <ButtonIcon symbol="settings" size="x-large" />
    <ButtonIcon symbol="settings" size="large" />
    <ButtonIcon symbol="settings" size="medium" />
    <ButtonIcon symbol="settings" size="small" />
    <ButtonIcon symbol="settings" size="x-small" />
    <ButtonIcon symbol="settings" size="xx-small" />
    <ButtonIcon symbol="settings" boundarySize="x-large" />
    <ButtonIcon symbol="settings" boundarySize="large" />
    <ButtonIcon symbol="settings" boundarySize="medium" />
    <ButtonIcon symbol="settings" boundarySize="small" />
    <ButtonIcon symbol="settings" boundarySize="x-small" />

    <ButtonIcon
      symbol="settings"
      boundarySize="x-large"
      size="large"
      hasBorder
    />
    <ButtonIcon
      symbol="settings"
      boundarySize="large"
      size="medium"
      hasBorder
    />
    <ButtonIcon
      symbol="settings"
      boundarySize="medium"
      size="small"
      hasBorder
    />
    <ButtonIcon
      symbol="settings"
      boundarySize="small"
      size="x-small"
      hasBorder
    />
    <ButtonIcon
      symbol="settings"
      boundarySize="x-small"
      size="xx-small"
      hasBorder
    />
    <ButtonIcon symbol="settings" boundarySize="x-large" hasBorder />
    <ButtonIcon symbol="settings" boundarySize="large" hasBorder />
    <ButtonIcon symbol="settings" boundarySize="medium" hasBorder />
    <ButtonIcon symbol="settings" boundarySize="small" hasBorder />
  </React.Fragment>
);

export default ButtonIconExample;

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <React.Fragment>
        <ButtonIcon symbol="settings" disabled boundarySize="small" />
        <ButtonIcon symbol="settings" disabled hasBorder boundarySize="small" />
      </React.Fragment>
    )
  }
];

export let examples = [
  {
    id: 'bordered',
    label: 'Bordered',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon symbol="settings" hasBorder boundarySize="small" />
      </div>
    )
  },
  {
    id: 'filled',
    label: 'Filled',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon
          symbol="settings"
          hasBorder
          hasBackground
          boundarySize="small"
        />
      </div>
    )
  },
  {
    id: 'icon-sizes',
    label: 'Icon Sizes',
    element: (
      <React.Fragment>
        <ButtonIcon symbol="settings" size="x-large" />
        <ButtonIcon symbol="settings" size="large" />
        <ButtonIcon symbol="settings" size="medium" />
        <ButtonIcon symbol="settings" size="small" />
        <ButtonIcon symbol="settings" size="x-small" />
        <ButtonIcon symbol="settings" size="xx-small" />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-sizes',
    label: 'Boundary Sizes',
    element: (
      <React.Fragment>
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="large"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="medium"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="small"
          size="x-small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-small"
          size="xx-small"
          hasBorder
        />
      </React.Fragment>
    )
  }
];
