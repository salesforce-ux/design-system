import React from 'react';
import ButtonGroup from '../';
import Button from '../../button/';
import ButtonIcon from '../../button-icon/';
import styled from 'styled-components';

const Inverse = styled.div`
  display: inline-flex;
  background-color: #16325c;
  padding: 0.5rem;
`;

export default (
  <ButtonGroup>
    <Button variant="neutral">First</Button>
    <Button variant="neutral">Middle</Button>
    <Button variant="neutral">Last</Button>
  </ButtonGroup>
);

export let states = [
  {
    id: 'first-disabled',
    label: 'First Disabled',
    element: (
      <ButtonGroup>
        <Button variant="neutral" disabled>
          First
        </Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'middle-disabled',
    label: 'Middle Disabled',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral" disabled>
          Middle
        </Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'last-disabled',
    label: 'Last Disabled',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral" disabled>
          Last
        </Button>
      </ButtonGroup>
    )
  },
  {
    id: 'all-disabled',
    label: 'All Disabled',
    element: (
      <ButtonGroup>
        <Button variant="neutral" disabled>
          First
        </Button>
        <Button variant="neutral" disabled>
          Middle
        </Button>
        <Button variant="neutral" disabled>
          Last
        </Button>
      </ButtonGroup>
    )
  },
  {
    id: 'inverse-first-disabled',
    label: 'First Disabled',
    element: (
      <ButtonGroup>
        <Button variant="inverse" disabled>
          First
        </Button>
        <Button variant="inverse">Middle</Button>
        <Button variant="inverse">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'inverse-middle-disabled',
    label: 'Middle Disabled',
    element: (
      <ButtonGroup>
        <Button variant="inverse">First</Button>
        <Button variant="inverse" disabled>
          Middle
        </Button>
        <Button variant="inverse">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'inverse-last-disabled',
    label: 'Last Disabled',
    element: (
      <ButtonGroup>
        <Button variant="inverse">First</Button>
        <Button variant="inverse">Middle</Button>
        <Button variant="inverse" disabled>
          Last
        </Button>
      </ButtonGroup>
    )
  },
  {
    id: 'inverse-all-disabled',
    label: 'All Disabled',
    element: (
      <ButtonGroup>
        <Button variant="inverse" disabled>
          First
        </Button>
        <Button variant="inverse" disabled>
          Middle
        </Button>
        <Button variant="inverse" disabled>
          Last
        </Button>
      </ButtonGroup>
    )
  },
  {
    id: 'overflow-menu',
    label: 'with button-icon overflow menu',
    element: (
      <ButtonGroup>
        <Button variant="neutral">Refresh</Button>
        <Button variant="neutral">Edit</Button>
        <Button variant="neutral">Save</Button>
        <ButtonIcon boundarySize="medium" variant="neutral" symbol="down" />
      </ButtonGroup>
    )
  },
  {
    id: 'overflow-menu-disabled',
    label: 'with disabled button-icon overflow menu',
    element: (
      <ButtonGroup>
        <Button variant="neutral">Refresh</Button>
        <Button variant="neutral">Edit</Button>
        <Button variant="neutral">Save</Button>
        <ButtonIcon
          boundarySize="medium"
          variant="neutral"
          symbol="down"
          disabled
        />
      </ButtonGroup>
    )
  }
];

export let examples = [
  {
    id: 'single-button',
    label: '1 Button',
    element: (
      <ButtonGroup>
        <Button variant="neutral">Only</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'two-buttons',
    label: '2 Buttons',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'three-buttons',
    label: '3 Buttons',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'four-buttons',
    label: '4 Buttons',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'five-buttons',
    label: '5 Buttons',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Middle</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'brand-overflow-menu',
    label: 'Brand with button-icon overflow menu',
    element: (
      <ButtonGroup>
        <Button variant="brand">Save</Button>
        <ButtonIcon boundarySize="medium" variant="brand" symbol="down" />
      </ButtonGroup>
    )
  },
  {
    id: 'two-brand-button-addon',
    label: '2 - Brand with button-icon addon',
    element: (
      <ButtonGroup>
        <Button variant="brand">Save</Button>
        <Button variant="brand">Edit</Button>
        <ButtonIcon boundarySize="medium" variant="brand" symbol="down" />
      </ButtonGroup>
    )
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <Inverse>
        <ButtonGroup>
          <Button variant="inverse">First</Button>
          <Button variant="inverse">Middle</Button>
          <Button variant="inverse">Last</Button>
        </ButtonGroup>
      </Inverse>
    )
  },
  {
    id: 'inverse-doc',
    label: 'Inverse - For Doc use',
    element: (
      <ButtonGroup>
        <Button variant="inverse">First</Button>
        <Button variant="inverse">Middle</Button>
        <Button variant="inverse">Last</Button>
      </ButtonGroup>
    )
  }
];
