/* eslint-env jest */
import React from 'react';
import * as BaseExamples from '../base/example';
import * as DeprecatedInlineListboxExamples from '../deprecated-inline-listbox/example';
import * as DeprecatedMultiEntityExamples from '../deprecated-multi-entity/example';
import * as DeprecatedReadOnlyExamples from '../deprecated-readonly/example';
import { DeprecatedComboboxInputElement } from '../deprecated/';
import Combobox, { ComboboxGroup, ComboboxFormContext } from '../';
import ObjectSwitcher from '../object-switcher/';
import Listbox, { ListboxGroup, ListboxWrapper } from '../listbox/';
import ListboxOfSelections from '../listbox-of-pills/';
import ButtonIcon from '../../button-icons/';
import { UtilityIcon } from '../../icons/base/example';
import { StandardIcon } from '../../icons/standard/example';
import * as Snapshot from '../snapshots.data';
import createHelpers from '../../../../jest.helpers';
import { Popover } from '../../popovers/base/example';
import { Button } from '../../buttons/base/example';
import _, { getDisplayElementById } from '../../../shared/helpers';

const { matchesMarkup } = createHelpers(__dirname);

const comboboxId = 'combobox-id-01';
const listboxId = 'listbox-id-01';
const objectSwitcherListboxId = 'objectswitcher-listbox-id-01';
const primaryComboboxId = 'primary-combobox-id-01';
const popoverId = 'popover-id-01';

/**
 * Deprecated Combobox
 */
describe('render deprecated combobox', () => {
  it('renders a base combobox', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'deprecated-closed')
    ));

  it('renders a base combobox with focus', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'deprecated-focused')
    ));

  it('renders a base combobox with open item focused', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'deprecated-open-item-focused')
    ));

  it('renders a base combobox with closed options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.states,
        'deprecated-closed-options-selected'
      )
    ));

  it('renders an inline listbox combobox', () =>
    matchesMarkup(DeprecatedInlineListboxExamples.default[0].element));

  it('renders an inline combobox with focus', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedInlineListboxExamples.states,
        'deprecated-focused'
      )
    ));

  it('renders an inline combobox open item focused', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedInlineListboxExamples.states,
        'deprecated-open-item-focused'
      )
    ));

  it('renders an inline listbox combobox with closed option selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedInlineListboxExamples.states,
        'deprecated-closed-option-selected'
      )
    ));

  it('renders an inline listbox combobox with options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedInlineListboxExamples.states,
        'deprecated-options-selected'
      )
    ));

  it('renders an inline listbox combobox with focused options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedInlineListboxExamples.states,
        'deprecated-focused-options-selected'
      )
    ));

  it('renders a multi-entity combobox', () =>
    matchesMarkup(DeprecatedMultiEntityExamples.default[0].element));

  it('renders a multi-entity combobox with focus', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedMultiEntityExamples.states,
        'deprecated-focused'
      )
    ));

  it('renders a multi-entity combobox with open item focused', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedMultiEntityExamples.states,
        'deprecated-open-item-focused'
      )
    ));

  it('renders a multi-entity combobox with options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedMultiEntityExamples.states,
        'deprecated-options-selected'
      )
    ));

  it('renders a multi-entity combobox with focused options selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedMultiEntityExamples.states,
        'deprecated-focused-options-selected'
      )
    ));

  it('renders a readonly combobox', () =>
    matchesMarkup(DeprecatedReadOnlyExamples.default[0].element));

  it('renders a readonly combobox with focus', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-focused'
      )
    ));

  it('renders a readonly combobox with open item focused', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-open-item-focused'
      )
    ));

  it('renders a readonly combobox with open option selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-open-option-selected'
      )
    ));

  it('renders a readonly combobox with open option(s) selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-open-options-selected'
      )
    ));

  it('renders a readonly combobox with closed option selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-closed-option-selected'
      )
    ));

  it('renders a readonly combobox with closed option(s) selected', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-closed-options-selected'
      )
    ));

  it('renders a readonly combobox with open option and sub-heading', () =>
    matchesMarkup(
      getDisplayElementById(
        DeprecatedReadOnlyExamples.states,
        'deprecated-open-option-heading'
      )
    ));
});

/**
 * Deprecated Combobox Input
 */
describe('render deprecated combobox input', () => {
  it('render input in base combobox', () =>
    matchesMarkup(
      <ComboboxFormContext.Provider value={{ isOpen: true }}>
        <DeprecatedComboboxInputElement
          id={comboboxId}
          aria-controls={listboxId}
          resultsType="listbox"
          value="Accounts"
          readonly
          hasFocus
          isOpen
        />
      </ComboboxFormContext.Provider>
    ));

  it('render input in combobox displaying options based on user input', () =>
    matchesMarkup(
      <ComboboxFormContext.Provider value={{ isOpen: true }}>
        <DeprecatedComboboxInputElement
          autocomplete
          id={comboboxId}
          aria-controls={listboxId}
          resultsType="listbox"
          value="opp"
          hasFocus
          aria-activedescendant="option1"
          isOpen
        />
      </ComboboxFormContext.Provider>
    ));

  it('render input in object switcher of grouped combobox with selections made in expanded state', () =>
    matchesMarkup(
      <ComboboxFormContext.Provider value={{ isOpen: false }}>
        <DeprecatedComboboxInputElement
          id={`${comboboxId}-object-switcher`}
          aria-controls={objectSwitcherListboxId}
          resultsType="listbox"
          value="Accounts"
          placeholder=" "
        />
      </ComboboxFormContext.Provider>
    ));

  it('render input in grouped combobox with selections made in expanded state', () =>
    matchesMarkup(
      <ComboboxFormContext.Provider value={{ isOpen: false }}>
        <DeprecatedComboboxInputElement
          autocomplete
          id={comboboxId}
          aria-controls={listboxId}
          resultsType="listbox"
          hasFocus
        />
      </ComboboxFormContext.Provider>
    ));
});

/**
 * New Combobox
 */
describe('render combobox', () => {
  it('render base combobox', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        selectOnly
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.ObjectOptions}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('render single selection in an open combobox', () =>
    matchesMarkup(
      getDisplayElementById(BaseExamples.states, 'selecting-a-single-option')
    ));

  it('render multiple selections in a closed combobox', () =>
    matchesMarkup(
      getDisplayElementById(
        BaseExamples.states,
        'selected-multiple-options-closed'
      )
    ));

  it('renders groups in a listbox', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        selectOnly
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
        results={
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
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('renders different styles of options in the listbox', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        selectOnly
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainStylingOptions}
            type="entity"
            count={4}
            visualSelection
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('renders disabled plain options in the listbox', () =>
    matchesMarkup(
      <Listbox
        id={_.uniqueId('listbox-id-')}
        snapshot={Snapshot.PlainDisabledOptions}
        type="plain"
        count={3}
      />
    ));
  it('renders disabled entity options in the listbox', () =>
    matchesMarkup(
      <Listbox
        id={_.uniqueId('listbox-id-')}
        snapshot={Snapshot.EntityDisabledOptions}
        type="entity"
        count={3}
      />
    ));
  it('renders different styles of options in the listbox with drill in', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={listboxId}
        selectOnly
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityStylingOptions}
            type="entity"
            count={3}
            visualSelection
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('renders autocomplete combobox', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="plain"
            count={3}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('render combobox with displaying options based on user input', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptionsTypeahead}
            term="opp"
            type="plain"
            count={4}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    ));

  it('render autocomplete combobox with single selection', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        resultsType="listbox"
        value="GenePoint"
      />
    ));
  it('render autocomplete combobox with multiple selections', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.PlainOptions}
            type="entity"
            count={3}
          />
        }
        resultsType="listbox"
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
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    ));
  it('render autocomplete entity combobox displaying options based on user input', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        isOpen
        hasFocus
      />
    ));
  it('render autocomplete entity combobox with single selection', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        hasSelection
        value="Salesforce.com, Inc."
        selectOnly
        tabIndex="-1"
      />
    ));
  it('render autocomplete entity combobox with mutliple selections', () =>
    matchesMarkup(
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
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={2}
          />
        }
        resultsType="listbox"
        hasSelection
        listboxOfSelections={
          <ListboxOfSelections snapshot={Snapshot.EntitySelections} count={2} />
        }
      />
    ));
  it('render grouped combobox', () =>
    matchesMarkup(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={`${comboboxId}-object-switcher`}
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
    matchesMarkup(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptionsTypeahead}
            term="salesforce"
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        value="salesforce"
        isOpen
        hasFocus
        addon={
          <ObjectSwitcher
            id={`${comboboxId}-object-switcher`}
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
    matchesMarkup(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        addon={
          <ObjectSwitcher
            id={`${comboboxId}-object-switcher`}
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
    matchesMarkup(
      <ComboboxGroup
        id={comboboxId}
        aria-controls={listboxId}
        comboboxID={primaryComboboxId}
        autocomplete
        results={
          <Listbox
            id={listboxId}
            snapshot={Snapshot.EntityOptions}
            type="entity"
            count={4}
          />
        }
        resultsType="listbox"
        hasFocus
        addon={
          <ObjectSwitcher
            id={`${comboboxId}-object-switcher`}
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

/**
 * Dialog Variant of Combobox
 */
describe('Combobox with a Dialog dropdown', () => {
  it('renders a closed, readonly dialog combobox', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={popoverId}
        label="Languages"
        selectOnly
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
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId}
            title="Language Options"
            isFullWidth
            isHidden
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button />
                <Button />
              </React.Fragment>
            }
          >
            <div>Any content can go here in this Dialog</div>
          </Popover>
        }
      />
    ));
  it('renders an open, readonly dialog combobox', () =>
    matchesMarkup(
      <Combobox
        id={comboboxId}
        aria-controls={popoverId}
        label="Languages"
        selectOnly
        isOpen
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
        resultsType="dialog"
        results={
          <Popover
            popoverId={popoverId}
            title="Language Options"
            isFullWidth
            hasFormFooter
            size="small"
            footer={
              <React.Fragment>
                <Button />
                <Button />
              </React.Fragment>
            }
          >
            <div>Any content can go here in this Dialog</div>
          </Popover>
        }
      />
    ));
});
