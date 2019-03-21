import React from 'react';
import ButtonIcon from '../';

const ButtonIconExample = () => <ButtonIcon />;

export default ButtonIconExample;

export let states = [
  {
    id: 'default-disabled',
    label: 'Default Disabled',
    element: <ButtonIcon disabled />
  },
  {
    id: 'bordered-disabled',
    label: 'Bordered Disabled',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon disabled hasBorder boundarySize="small" />
      </div>
    )
  },
  {
    id: 'filled-disabled',
    label: 'Filled Disabled',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon disabled hasBorder hasBackground boundarySize="small" />
      </div>
    )
  },
  {
    id: 'brand-disabled',
    label: 'Brand Disabled',
    element: (
      <ButtonIcon
        symbol="search"
        disabled
        variant="brand"
        boundarySize="small"
      />
    )
  }
];

export let examples = [
  {
    id: 'brand',
    label: 'Brand',
    element: <ButtonIcon symbol="search" variant="brand" boundarySize="small" />
  },
  {
    id: 'bordered',
    label: 'Bordered',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon symbol="add" hasBorder boundarySize="small" />
      </div>
    )
  },
  {
    id: 'filled',
    label: 'Filled',
    element: (
      <div style={{ background: '#fafaf9', padding: '1rem' }}>
        <ButtonIcon symbol="add" hasBorder hasBackground boundarySize="small" />
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
        <ButtonIcon symbol="settings" boundarySize="x-large" size="large" />
        <ButtonIcon symbol="settings" boundarySize="large" size="medium" />
        <ButtonIcon symbol="settings" boundarySize="medium" size="small" />
        <ButtonIcon symbol="settings" boundarySize="small" size="x-small" />
        <ButtonIcon symbol="settings" boundarySize="x-small" size="xx-small" />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-sizes-bordered',
    label: 'Boundary Sizes - Bordered',
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
  },
  {
    id: 'boundary-size-x-large',
    label: 'Boundary Size - X-Large',
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
          boundarySize="x-large"
          size="medium"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="x-small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="xx-small"
          hasBorder
        />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-size-large',
    label: 'Boundary Size - Large',
    element: (
      <React.Fragment>
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="medium"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="x-small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="xx-small"
          hasBorder
        />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-size-medium',
    label: 'Boundary Size - Medium',
    element: (
      <React.Fragment>
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="x-small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="xx-small"
          hasBorder
        />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-size-small',
    label: 'Boundary Size - Small',
    element: (
      <React.Fragment>
        <ButtonIcon
          symbol="settings"
          boundarySize="small"
          size="x-small"
          hasBorder
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="small"
          size="xx-small"
          hasBorder
        />
      </React.Fragment>
    )
  },
  {
    id: 'boundary-size-x-small',
    label: 'Boundary Size - X-Small',
    element: (
      <ButtonIcon
        symbol="settings"
        boundarySize="x-small"
        size="xx-small"
        hasBorder
      />
    )
  },
  {
    id: 'customization',
    label: 'Customization',
    element: (
      <React.Fragment>
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          variant="brand"
          customization={`
            :host {
              --c-theme-button-icon-color-background-brand: #000;
              --c-theme-button-icon-color-background-brand-active: #000;
              --c-theme-button-icon-color-border-brand: #000;
              --c-theme-button-icon-color-border-brand-active: #000;
              --c-theme-button-icon-color-on-brand-active: #767677;
              --c-theme-button-icon-border-radius: 0;
              --c-theme-button-icon-shadow-focus: none;
              --c-theme-button-icon-shadow: 2px 2px 0 1px #fff, 3px 3px 0 1px #000;
              --c-theme-button-icon-shadow-focus: var(--c-theme-button-icon-shadow);
            }
          `}
        />
      </React.Fragment>
    )
  }
];
