/* eslint-env jest */
import React from 'react';
import { Button } from '../base/example';
import { StatefulButton } from '../stateful/example';
import createHelpers from '../../../../jest.helpers';
import { render, mount } from 'enzyme';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Button ', () => {
  it('renders a base button', () =>
    matchesMarkupAndStyle(<Button>Button</Button>));

  it('renders a disabled base button', () =>
    matchesMarkupAndStyle(<Button disabled>Button</Button>));

  it('renders a neutral button', () =>
    matchesMarkupAndStyle(<Button isNeutral>Button</Button>));

  it('renders a brand button', () =>
    matchesMarkupAndStyle(<Button isBrand>Button</Button>));

  it('renders an outline brand button', () =>
    matchesMarkupAndStyle(<Button isOutlineBrand>Button</Button>));

  it('renders an inverse button', () =>
    matchesMarkupAndStyle(<Button isInverse>Button</Button>));

  it('renders a desctructive button', () =>
    matchesMarkupAndStyle(<Button isDestructive>Button</Button>));

  it('renders a success button', () =>
    matchesMarkupAndStyle(<Button isSuccess>Button</Button>));
});

describe('Stateful Button ', () => {
  it('renders a not-selected stateful button', () =>
    matchesMarkupAndStyle(
      <StatefulButton isNotSelected>Button</StatefulButton>
    ));

  it('renders a selected and focused stateful button', () =>
    matchesMarkupAndStyle(
      <StatefulButton isSelectedClicked>Button</StatefulButton>
    ));

  it('renders a selected stateful button', () =>
    matchesMarkupAndStyle(<StatefulButton isSelected>Button</StatefulButton>));
});
