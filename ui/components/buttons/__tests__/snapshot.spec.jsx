/* eslint-env jest */
import React from 'react';
import { Button } from '../base/example';
import { StatefulButton } from '../stateful/example';
import {
  DualStatefulButton,
  DefaultText,
  PressedText
} from '../dual-stateful/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Button ', () => {
  it('renders a base button', () => matchesMarkup(<Button>Button</Button>));

  it('renders a disabled base button', () =>
    matchesMarkup(<Button disabled>Button</Button>));

  it('renders a neutral button', () =>
    matchesMarkup(<Button isNeutral>Button</Button>));

  it('renders a brand button', () =>
    matchesMarkup(<Button isBrand>Button</Button>));

  it('renders an outline brand button', () =>
    matchesMarkup(<Button isOutlineBrand>Button</Button>));

  it('renders an inverse button', () =>
    matchesMarkup(<Button isInverse>Button</Button>));

  it('renders a desctructive button', () =>
    matchesMarkup(<Button isDestructive>Button</Button>));

  it('renders a text destructive button', () =>
    matchesMarkup(<Button isTextDestructive>Button</Button>));

  it('renders a success button', () =>
    matchesMarkup(<Button isSuccess>Button</Button>));

  it('renders a full width, reset button', () =>
    matchesMarkup(<Button isFullWidth>Button</Button>));

  it('renders a stretched button', () =>
    matchesMarkup(
      <Button isSuccess isStretch>
        Button
      </Button>
    ));

  it('renders a link that looks like a button', () =>
    matchesMarkup(
      <Button use="a" isSuccess>
        Link as a Button
      </Button>
    ));
});

describe('Stateful Button ', () => {
  it('renders a not-selected stateful button', () =>
    matchesMarkup(<StatefulButton isNotSelected>Button</StatefulButton>));

  it('renders a selected and focused stateful button', () =>
    matchesMarkup(<StatefulButton isSelectedClicked>Button</StatefulButton>));

  it('renders a selected stateful button', () =>
    matchesMarkup(<StatefulButton isSelected>Button</StatefulButton>));
});

describe('Dual Stateful Button', () => {
  it('renders a not-pressed dual stateful button', () =>
    matchesMarkup(
      <DualStatefulButton>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    ));

  it('renders a pressed dual stateful button', () =>
    matchesMarkup(
      <DualStatefulButton isPressed>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    ));

  it('renders a disabled dual stateful button', () =>
    matchesMarkup(
      <DualStatefulButton isDisabled>
        <DefaultText>Follow</DefaultText>
        <PressedText>Following</PressedText>
      </DualStatefulButton>
    ));
});
