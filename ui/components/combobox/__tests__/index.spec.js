/* eslint-env jest */
import React from 'react';
import { ComboboxContainer, ListboxDropdown } from '../base/example';
import {
  ListboxPills,
  ListboxPillsItem,
  ListboxPill
} from '../../pills/listbox-of-pill-options/example';
import Combobox, { ComboboxGroup } from '../';
import ObjectSwitcher from '../object-switcher/';
import Listbox, { ListboxGroup, ListboxWrapper, Option } from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import * as Snapshot from '../snapshots.data';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const listboxOptionId01 = 'listbox-option-unique-id-01';
const comboboxId = 'combobox-id-01';
const listboxId = 'listbox-id-01';
const scopedComboboxId = 'scoped-combobox-id-01';
const primaryComboboxId = 'primary-combobox-id-01';

/**
 * Deprecated Combobox
 */
describe('render deprecated combobox', () => {
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
});

/**
 * New Combobox
 */
describe('render combobox', () => {
  it('render base combobox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.ObjectOptions}
            type="plain"
            count={8}
            visualSelection
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('render single selection in an open combobox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.ObjectOptionsSingleSelection}
            type="plain"
            count={8}
            visualSelection
          />
        }
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    ));
  it('render multiple selections in a closed combobox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.ObjectOptionsMultiSelection}
            type="plain"
            count={8}
            visualSelection
          />
        }
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.ObjectOptionsSelected}
            count={2}
          />
        }
      />
    ));
  it('renders groups in a listbox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <ListboxWrapper
            id={listboxId}
            className="slds-dropdown slds-dropdown_fluid"
          >
            <ListboxGroup
              aria-label="Group One"
              snapshot={Snapshot.PlainOptionsGroupOne}
              count={3}
            />
            <ListboxGroup
              aria-label="Group Two"
              snapshot={Snapshot.PlainOptionsGroupTwo}
              count={3}
            />
          </ListboxWrapper>
        }
        isOpen
        hasFocus
      />
    ));
  it('renders different styles of options in the listbox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainStylingOptions}
            type="entity"
            count={4}
            visualSelection
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('renders different styles of options in the listbox with drill in', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        readonly
        value="Accounts"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityStylingOptions}
            type="entity"
            count={3}
            visualSelection
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('renders autocomplete combobox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title="Search"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="plain"
            count={3}
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('render combobox with displaying options based on user input', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title="Search"
          />
        }
        value="opp"
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptionsTypeahead}
            term="opp"
            type="plain"
            count={4}
          />
        }
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    ));
  it('render autocomplete combobox with single selection', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title="Search"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        value="GenePoint"
      />
    ));
  it('render autocomplete combobox with mutliple selections', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title="Search"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.PlainOptionsSelected}
            count={2}
          />
        }
      />
    ));
  it('render autocomplete entity combobox', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('render autocomplete entity combobox displaying options based on user input', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        value="salesforce"
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    ));
  it('render autocomplete entity combobox with single selection', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        inputIconPosition="left-right"
        leftInputIcon={
          <StandardIcon
            symbol="account"
            className="slds-icon_small"
            containerClassName="slds-combobox__input-entity-icon"
          />
        }
        rightInputIcon={
          <ButtonIcon
            className="slds-input__icon slds-input__icon_right"
            symbol="close"
            title="Remove selected option"
            assistiveText="Remove selected option"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        hasSelection
        value="Salesforce.com, Inc."
        readonly
        tabIndex="-1"
      />
    ));
  it('render autocomplete entity combobox with mutliple selections', () =>
    matchesMarkupAndStyle(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        autocomplete
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    ));
  it('render grouped combobox', () =>
    matchesMarkupAndStyle(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        addon={
          <ObjectSwitcher
            value="Accounts"
            addonPosition="start"
            hasInteractions
            comboboxAriaControls={primaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        isOpen
        hasFocus
      />
    ));
  it('render grouped combobox displaying options based on user input', () =>
    matchesMarkupAndStyle(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        value="salesforce"
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={primaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
      />
    ));
  it('render grouped combobox with selections made in collapsed state', () =>
    matchesMarkupAndStyle(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        addon={
          <ObjectSwitcher
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={primaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={8} />
        }
      />
    ));
  it('render grouped combobox with selections made in expanded state', () =>
    matchesMarkupAndStyle(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        listbox={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        hasFocus
        addon={
          <ObjectSwitcher
            value="Accounts"
            addonPosition="start"
            comboboxAriaControls={primaryComboboxId}
          />
        }
        addonPosition="start"
        comboboxPosition="end"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="search"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
          />
        }
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={Snapshot.EntitySelections}
            count={8}
            isExpanded
          />
        }
      />
    ));
});
