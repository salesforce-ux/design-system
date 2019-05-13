import React from 'react';
import ButtonIcon from '../';

const ButtonIconExample = () => <ButtonIcon boundarySize="small" />;

export default ButtonIconExample;

export let states = [
  {
    id: 'default-disabled',
    label: 'Default Disabled',
    element: <ButtonIcon disabled boundarySize="small" />
  },
  {
    id: 'bordered-disabled',
    label: 'Bordered Disabled',
    element: <ButtonIcon disabled hasBorder boundarySize="small" />
  },
  {
    id: 'filled-disabled',
    label: 'Filled Disabled',
    element: (
      <ButtonIcon disabled hasBorder hasBackground boundarySize="small" />
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
    id: 'all',
    label: 'All Variants',
    element: (
      <React.Fragment>
        <ButtonIcon boundarySize="small" />
        <ButtonIcon symbol="search" variant="brand" boundarySize="small" />
        <ButtonIcon symbol="add" hasBorder boundarySize="small" />
        <ButtonIcon symbol="add" hasBorder hasBackground boundarySize="small" />
      </React.Fragment>
    )
  },
  {
    id: 'brand',
    label: 'Brand',
    element: <ButtonIcon symbol="search" variant="brand" boundarySize="small" />
  },
  {
    id: 'bordered',
    label: 'Bordered',
    element: <ButtonIcon symbol="add" hasBorder boundarySize="small" />
  },
  {
    id: 'filled',
    label: 'Filled',
    element: (
      <ButtonIcon symbol="add" hasBorder hasBackground boundarySize="small" />
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
    id: 'customization-trailhead',
    label: 'Customization - Trailhead',
    element: (
      <ButtonIcon
        symbol="add"
        boundarySize="medium"
        hasBorder
        hasBackground
        customization={`
          :host {
            --c-button-icon-shadow: 0 1px 0 #e2e2e2;
            --c-button-icon-color-background-default-active: #e2e2e2;
            --c-button-icon-color-default-active: #585858;
            --c-button-icon-shadow-active: var(--c-theme-button-icon-shadow);
          }
        `}
      />
    )
  },
  {
    id: 'customization-addidas',
    label: 'Customization - Addidas',
    element: (
      <ButtonIcon
        symbol="settings"
        boundarySize="medium"
        variant="brand"
        customization={`
          :host {
            --c-button-icon-color-background-brand: #000;
            --c-button-icon-color-background-brand-active: #000;
            --c-button-icon-color-border-brand: #000;
            --c-button-icon-color-border-brand-active: #000;
            --c-button-icon-color-brand-active: #767677;
            --c-button-icon-border-radius: 0;
            --c-button-icon-shadow: 2px 2px 0 1px #fff, 3px 3px 0 1px #000;
            --c-button-icon-shadow-active: var(--c-button-icon-shadow);
          }
        `}
      />
    )
  }
];
