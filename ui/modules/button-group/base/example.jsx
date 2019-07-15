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
    id: 'group-first-disabled',
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
    id: 'group-middle-disabled',
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
    id: 'group-last-disabled',
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
    id: 'group-all-disabled',
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
    id: 'group-inverse-first-disabled',
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
    id: 'group-inverse-middle-disabled',
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
    id: 'group-inverse-last-disabled',
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
    id: 'group-inverse-all-disabled',
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
    id: 'group-overflow-menu',
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
    id: 'group-overflow-menu-disabled',
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
    id: 'group-two-buttons',
    label: '2 Buttons',
    element: (
      <ButtonGroup>
        <Button variant="neutral">First</Button>
        <Button variant="neutral">Last</Button>
      </ButtonGroup>
    )
  },
  {
    id: 'group-three-buttons',
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
    id: 'group-four-buttons',
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
    id: 'group-five-buttons',
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
    id: 'group-brand-overflow-menu',
    label: 'Brand with button-icon overflow menu',
    element: (
      <ButtonGroup>
        <Button variant="brand">Save</Button>
        <ButtonIcon boundarySize="medium" variant="brand" symbol="down" />
      </ButtonGroup>
    )
  },
  {
    id: 'group-two-brand-button-addon',
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
    id: 'group-inverse',
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
    id: 'group-inverse-doc',
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
