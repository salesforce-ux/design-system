import React from 'react';
import ButtonIcon from '../';
import styled from 'styled-components';

const Inverse = styled.div`
  display: inline-flex;
  background-color: #16325c;
  padding: 0.5rem;
`;

export default <ButtonIcon boundarySize="medium" />;

export let states = [
  {
    id: 'default-disabled',
    label: 'Default Disabled',
    element: <ButtonIcon disabled boundarySize="medium" />
  },
  {
    id: 'neutral-disabled',
    label: 'Neutral Disabled',
    element: (
      <ButtonIcon
        disabled
        variant="neutral"
        hasBackground
        boundarySize="medium"
      />
    )
  },
  {
    id: 'neutral-outline-disabled',
    label: 'Neutral Outline Disabled',
    element: (
      <ButtonIcon disabled variant="neutral-outline" boundarySize="medium" />
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
        boundarySize="medium"
      />
    )
  },
  {
    id: 'inverse-disabled',
    label: 'Inverse Disabled',
    element: (
      <Inverse>
        <ButtonIcon
          symbol="add"
          variant="inverse"
          boundarySize="medium"
          disabled
        />
      </Inverse>
    )
  },
  {
    id: 'inverse-disabled-doc',
    label: 'Inverse Disabled - For Doc Use',
    element: (
      <ButtonIcon
        symbol="add"
        variant="inverse"
        boundarySize="medium"
        disabled
      />
    )
  },
  {
    id: 'stateful',
    label: 'Stateful',
    element: (
      <ButtonIcon
        symbol="add"
        variant="neutral"
        type="stateful"
        boundarySize="medium"
        title="Add"
      />
    )
  },
  {
    id: 'stateful-not-pressed',
    label: 'Stateful - Not Pressed',
    element: (
      <ButtonIcon
        symbol="add"
        isPressed={false}
        variant="neutral"
        type="stateful"
        boundarySize="medium"
        title="Add"
      />
    )
  },
  {
    id: 'stateful-pressed',
    label: 'Stateful - Pressed',
    element: (
      <ButtonIcon
        symbol="add"
        isPressed
        variant="neutral"
        type="stateful"
        boundarySize="medium"
        title="Add"
      />
    )
  },
  {
    id: 'overflow-menu',
    label: 'Overflow Menu',
    element: (
      <ButtonIcon
        symbol="settings"
        variant="menu"
        boundarySize="medium"
        title="More Options"
      />
    )
  },
  {
    id: 'overflow-menu-disabled',
    label: 'Overflow Menu Disabled',
    element: (
      <ButtonIcon
        symbol="settings"
        variant="menu"
        boundarySize="medium"
        title="More Options"
        disabled
      />
    )
  },
  {
    id: 'inverse-disabled',
    label: 'Inverse Disabled',
    element: (
      <ButtonIcon
        symbol="add"
        disabled
        variant="inverse"
        boundarySize="small"
      />
    )
  }
];

export let examples = [
  {
    id: 'brand',
    label: 'Brand',
    element: (
      <ButtonIcon symbol="search" variant="brand" boundarySize="medium" />
    )
  },
  {
    id: 'neutral',
    label: 'Neutral',
    element: <ButtonIcon symbol="add" variant="neutral" boundarySize="medium" />
  },
  {
    id: 'neutral-outline',
    label: 'Neutral Outline',
    element: (
      <ButtonIcon
        symbol="add"
        variant="neutral-outline"
        boundarySize="medium"
      />
    )
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <Inverse>
        <ButtonIcon symbol="add" variant="inverse" boundarySize="medium" />
      </Inverse>
    )
  },
  {
    id: 'inverse-doc',
    label: 'Inverse - For Doc Use',
    element: <ButtonIcon symbol="add" variant="inverse" boundarySize="medium" />
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
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="medium"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="small"
          size="x-small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-small"
          size="xx-small"
          variant="neutral"
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
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="medium"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="x-small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="x-large"
          size="xx-small"
          variant="neutral"
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
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="x-small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="large"
          size="xx-small"
          variant="neutral"
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
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="x-small"
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="medium"
          size="xx-small"
          variant="neutral"
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
          variant="neutral"
        />
        <ButtonIcon
          symbol="settings"
          boundarySize="small"
          size="xx-small"
          variant="neutral"
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
        variant="neutral"
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
        variant="neutral"
        customization={`
          :host {
            --lwc-c-button-icon-shadow: 0 1px 0 #e2e2e2;
            --lwc-c-button-icon-neutral-color-background-active: #e2e2e2;
            --lwc-c-button-icon-neutral-color-active: #585858;
            --lwc-c-button-icon-shadow-active: var(--lwc-c-button-icon-shadow);
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
            --lwc-c-button-icon-brand-color-background: #000;
            --lwc-c-button-icon-brand-color-background-active: #000;
            --lwc-c-button-icon-brand-color-border: #000;
            --lwc-c-button-icon-brand-color-border-active: #000;
            --lwc-c-button-icon-brand-color-active: #767677;
            --lwc-c-button-icon-radius: 0;
            --lwc-c-button-icon-shadow: 2px 2px 0 1px #fff, 3px 3px 0 1px #000;
            --lwc-c-button-icon-shadow-active: var(--lwc-c-button-icon-shadow);
          }
        `}
      />
    )
  }
];
