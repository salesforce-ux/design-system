import React from 'react';
import ButtonGroup from '../';
import ButtonIcon from '../../button-icon/';
import styled from 'styled-components';

const Inverse = styled.div`
  display: inline-flex;
  background-color: #16325c;
  padding: 0.5rem;
`;

export default (
  <ButtonGroup>
    <ButtonIcon
      boundarySize="medium"
      variant="neutral"
      symbol="chart"
      type="stateful"
    />
    <ButtonIcon
      boundarySize="medium"
      variant="neutral"
      symbol="filterList"
      type="stateful"
    />
    <ButtonIcon
      boundarySize="medium"
      variant="neutral"
      symbol="settings"
      type="stateful"
    />
  </ButtonGroup>
);

export let states = [
  {
    id: 'first-disabled',
    label: 'First Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="chart"
          disabled
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'middle-disabled',
    label: 'Middle Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
          disabled
        />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'last-disabled',
    label: 'Last Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="settings"
          disabled
        />
      </ButtonGroup>
    )
  },
  {
    id: 'all-disabled',
    label: 'All Disabled',
    element: (
      <ButtonGroup>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="chart"
          disabled
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
          disabled
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="settings"
          disabled
        />
      </ButtonGroup>
    )
  }
];

export let examples = [
  {
    id: 'single-pressed-button',
    label: '1 Button - Pressed',
    element: (
      <ButtonGroup>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="settings"
          type="stateful"
          isPressed
        />
      </ButtonGroup>
    )
  },
  {
    id: 'two-pressed-buttons',
    label: '2 Buttons - Pressed',
    element: (
      <ButtonGroup>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="settings"
          type="stateful"
          isPressed
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
          type="stateful"
          isPressed
        />
      </ButtonGroup>
    )
  },
  {
    id: 'three-pressed-buttons',
    label: '3 Buttons - Pressed',
    element: (
      <ButtonGroup>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="chart"
          type="stateful"
          isPressed
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
          type="stateful"
          isPressed
        />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="settings"
          type="stateful"
          isPressed
        />
      </ButtonGroup>
    )
  },
  {
    id: 'single-buttons',
    label: '1 Button',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'two-buttons',
    label: '2 Buttons',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
      </ButtonGroup>
    )
  },
  {
    id: 'three-buttons',
    label: '3 Buttons',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'four-buttons',
    label: '4 Buttons',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="comments" />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'five-buttons',
    label: '5 Buttons',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="edit" />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="filterList"
        />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="comments" />
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="settings" />
      </ButtonGroup>
    )
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <Inverse>
        <ButtonGroup>
          <ButtonIcon boundarySize="medium" variant="inverse" symbol="chart" />
          <ButtonIcon
            boundarySize="medium"
            variant="inverse"
            symbol="filterList"
          />
          <ButtonIcon
            boundarySize="medium"
            variant="inverse"
            symbol="settings"
          />
        </ButtonGroup>
      </Inverse>
    )
  },
  {
    id: 'inverse-doc',
    label: 'Inverse - For Doc use',
    element: (
      <ButtonGroup>
        <ButtonIcon boundarySize="medium" variant="inverse" symbol="chart" />
        <ButtonIcon
          boundarySize="medium"
          variant="inverse"
          symbol="filterList"
        />
        <ButtonIcon boundarySize="medium" variant="inverse" symbol="settings" />
      </ButtonGroup>
    )
  }
];
