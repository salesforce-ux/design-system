/* eslint-env jest */
import React from 'react';
import { ComboboxContainer, ListboxDropdown } from '../base/example';

import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import { StandardIcon } from '../../icons/standard/example';

import createHelpers from '../../../../jest.setup';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const listboxOptionId01 = 'listbox-option-unique-id-01';

it('renders a base combobox', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        autocomplete
        inputIcon="right"
        inputIconRightSymbol="search"
        listbox={<ListboxDropdown />}
      />
    </div>
  ));

it('renders a base combobox with focus', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        autocomplete
        inputIcon="right"
        inputIconRightSymbol="search"
        listbox={<ListboxDropdown />}
      />
    </div>
  ));

it('renders a base combobox with open item focused', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        autocomplete
        inputIcon="right"
        inputIconRightSymbol="search"
        listbox={<ListboxDropdown focused />}
        aria-activedescendant={listboxOptionId01}
      />
    </div>
  ));

it('renders a base combobox with closed options selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        autocomplete
        listbox={<ListboxDropdown />}
      >
        <ListboxPills className="slds-p-top_xxx-small">
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    </div>
  ));

it('renders an inline listbox combobox', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
        listbox={<ListboxDropdown />}
      />
    </div>
  ));

it('renders an inline combobox with focus', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown />}
      />
    </div>
  ));

it('renders an inline combobox open item focused', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown focused />}
        aria-activedescendant={listboxOptionId01}
      />
    </div>
  ));

it('renders an inline listbox combobox with closed option selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        selectedOptionsInline
        autocomplete
        readonly
        inputIcon="both"
        inputIconLeftSprite="standard"
        inputIconLeftSymbol="account"
        inputButtonIcon
        inputIconRightSymbol="close"
        value="Salesforce.com, Inc."
        listbox={<ListboxDropdown />}
      />
    </div>
  ));

it('renders an inline listbox combobox with options selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
        listbox={<ListboxDropdown />}
      >
        <ListboxPills>
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    </div>
  ));

it('renders an inline listbox combobox with focused options selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
        listbox={<ListboxDropdown />}
      >
        <ListboxPills>
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    </div>
  ));

it('renders a multi-entity combobox', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        listbox={<ListboxDropdown />}
        objectSwitcher
      />
    </div>
  ));

it('renders a multi-entity combobox with focus', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown />}
        objectSwitcher
      />
    </div>
  ));

it('renders a multi-entity combobox with open item focused', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        isOpen
        listbox={<ListboxDropdown focused />}
        objectSwitcher
        aria-activedescendant={listboxOptionId01}
      />
    </div>
  ));

it('renders a multi-entity combobox with options selected', () =>
  matchesMarkupAndStyle(
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="search"
      objectSwitcherInline
      autocomplete
      objectSwitcher
    >
      <ListboxPills className="slds-p-top_xxx-small">
        <ListboxPillsItem>
          <ListboxPill label="Acme" tabIndex="0">
            <StandardIcon
              containerClassName="slds-pill__icon_container"
              title="Account"
              assistiveText="Account"
            />
          </ListboxPill>
        </ListboxPillsItem>
        <ListboxPillsItem>
          <ListboxPill label="Salesforce.com, Inc.">
            <StandardIcon
              containerClassName="slds-pill__icon_container"
              symbol="opportunity"
              title="Opportunity"
              assistiveText="Opportunity"
            />
          </ListboxPill>
        </ListboxPillsItem>
      </ListboxPills>
    </ComboboxContainer>
  ));

it('renders a multi-entity combobox with focused options selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        containerClassName="slds-has-input-focus"
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        listbox={<ListboxDropdown />}
        objectSwitcher
      >
        <ListboxPills className="slds-p-top_xxx-small">
          <ListboxPillsItem>
            <ListboxPill label="Acme" tabIndex="0">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                title="Account"
                assistiveText="Account"
              />
            </ListboxPill>
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <StandardIcon
                containerClassName="slds-pill__icon_container"
                symbol="opportunity"
                title="Opportunity"
                assistiveText="Opportunity"
              />
            </ListboxPill>
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    </div>
  ));

it('renders a readonly combobox', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="down"
        listbox={<ListboxDropdown />}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with focus', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        inputIcon="right"
        inputIconRightSymbol="down"
        listbox={<ListboxDropdown />}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with open item focused', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        inputIcon="right"
        inputIconRightSymbol="down"
        listbox={<ListboxDropdown focused />}
        aria-activedescendant={listboxOptionId01}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with open option selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Option A"
        listbox={<ListboxDropdown optionOneSelected />}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with open option(s) selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        isOpen
        inputIcon="right"
        inputIconRightSymbol="down"
        value="2 Options Selected"
        listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with closed option selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="down"
        value="Option A"
        listbox={<ListboxDropdown focused optionOneSelected />}
        readonly
      />
    </div>
  ));

it('renders a readonly combobox with closed option(s) selected', () =>
  matchesMarkupAndStyle(
    <div className="demo-only" style={{ height: '10rem' }}>
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="down"
        value="2 Options Selected"
        listbox={<ListboxDropdown optionOneSelected optionTwoSelected />}
        readonly
      >
        <ListboxPills className="slds-p-top_xxx-small">
          <ListboxPillsItem>
            <ListboxPill label="Option A" tabIndex="0" />
          </ListboxPillsItem>
          <ListboxPillsItem>
            <ListboxPill label="Option B" />
          </ListboxPillsItem>
        </ListboxPills>
      </ComboboxContainer>
    </div>
  ));
