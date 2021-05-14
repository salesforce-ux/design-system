// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from '../../../shared/helpers';
import classNames from 'classnames';
import { FormElement } from '../../form-element';
import Input from '../../input';
import SvgIcon from '../../../shared/svg-icon';
import { StandardIcon } from '../../icons/standard/example';
import ButtonIcon from '../../button-icons';
import MobileLookupsListbox from '../listbox';

export const PrimitiveCombobox = ({
  // Slots
  children,
  slotAddon,
  slotInputIcon,
  slotMultipleSelection,
  // Form Element
  labelContent,
  hasHiddenLabel,
  // Combobox
  ariaExpanded,
  ariaHasPopup,
  // Input
  labelId,
  placeholder,
  isReadOnly,
  isDisabled,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  ariaActivedescendant,
  ariaAutocomplete,
  ariaControls
}) => {
  const uniqueInputId = _.uniqueId('example-input-unique-id-');
  const uniqueComboboxId = _.uniqueId('example-combobox-unique-id-');
  const headerClassNames = classNames(
    'slds-mobile-combobox__header',
    slotInputIcon && 'slds-mobile-combobox__header-has-icon'
  );

  return (
    <FormElement
      labelContent={labelContent}
      hasHiddenLabel={hasHiddenLabel}
      inputId={uniqueInputId}
      labelId={labelId}
      hasRightIcon={!!slotInputIcon}
    >
      <div className="slds-mobile-combobox" id={uniqueComboboxId}>
        <div className={headerClassNames}>
          {slotAddon && (
            <div className="slds-mobile-combobox__addon">{slotAddon}</div>
          )}
          <div className="slds-mobile-combobox__input" role="none">
            <Input
              id={uniqueInputId}
              placeholder={placeholder}
              autoComplete="off"
              role="combobox"
              readOnly={isReadOnly}
              disabled={isDisabled}
              defaultValue={defaultValue}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              aria-activedescendant={ariaActivedescendant}
              aria-autocomplete={ariaAutocomplete}
              aria-controls={ariaControls}
              aria-expanded={ariaExpanded}
              aria-haspopup={ariaHasPopup}
            />
            {slotInputIcon}
          </div>
        </div>
        {children}
      </div>
      {/* Not used but in place as a reminder for future development that
          combobox accepts a listbox inside the combobobox itself ('children'
          above) and a multiple selection listbox adjacent to the listbox
          (this prop)
       */}
      {slotMultipleSelection}
    </FormElement>
  );
};

PrimitiveCombobox.propTypes = {
  // Slots
  slotAddon: PropTypes.node,
  slotInputIcon: PropTypes.node,
  slotMultipleSelection: PropTypes.node,
  // Form Element
  labelContent: PropTypes.string,
  hasHiddenLabel: PropTypes.bool,
  // Combobox
  ariaExpanded: PropTypes.bool,
  ariaHasPopup: PropTypes.string,
  // Input
  labelId: PropTypes.string,
  placeholder: PropTypes.string,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  hasFocus: PropTypes.bool,
  ariaActivedescendant: PropTypes.string,
  ariaAutocomplete: PropTypes.string,
  ariaControls: PropTypes.string
};

export class MobileCombobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      value: this.props.defaultValue || ''
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFocus(e) {
    if (!this.state.hasFocus) {
      this.setState({
        hasFocus: true
      });
    }
  }

  handleBlur(e) {
    if (this.state.hasFocus) {
      this.setState({
        hasFocus: false
      });
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value: value });
  }

  render() {
    const {
      labelContent,
      placeholder,
      iconName,
      defaultValue,
      isDisabled,
      // Listbox
      listboxHeadingText,
      listboxListItemState,
      listboxIsLoading
    } = this.props;
    const uniqueListboxId = _.uniqueId('example-listbox-unique-id-');
    const uniqueLabelId = _.uniqueId('example-label-unique-id-');

    const searchIcon = (
      <SvgIcon
        className="slds-icon slds-input__icon slds-input__icon_right"
        sprite="utility"
        symbol="search"
      />
    );

    const closeIcon = (
      <ButtonIcon
        symbol="clear"
        className="slds-input__icon slds-input__icon_right"
        iconClassName="slds-icon-text-light"
        assistiveText="Clear"
        title="Clear"
      />
    );

    return (
      <PrimitiveCombobox
        labelContent={labelContent}
        defaultValue={defaultValue}
        hasHiddenLabel
        isDisabled={isDisabled}
        slotAddon={iconName && <StandardIcon symbol={iconName} />}
        slotInputIcon={
          this.state.hasFocus || this.state.value.length
            ? closeIcon
            : searchIcon
        }
        ariaAutocomplete="list"
        ariaControls={uniqueListboxId}
        ariaExpanded={this.state.hasFocus}
        labelId={uniqueLabelId}
        placeholder={placeholder}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      >
        <MobileLookupsListbox
          listboxlabelledBy={uniqueLabelId}
          listboxId={uniqueListboxId}
          listItemState={listboxListItemState}
          headingText={listboxHeadingText}
          isLoading={listboxIsLoading}
        />
      </PrimitiveCombobox>
    );
  }
}

MobileCombobox.propTypes = {
  labelContent: PropTypes.string,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  defaultValue: PropTypes.string,
  isDisabled: PropTypes.bool
};

MobileCombobox.defaultProps = {
  placeholder: 'Search...'
};
