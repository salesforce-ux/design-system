// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StandardIcon } from '../../icons/standard/example';
import { UtilityIcon } from '../../icons/base/example';
import { Spinner } from '../../spinners/base/example';
import _ from '../../../shared/helpers';

/**
 * Listbox
 */
export const ListboxWrapper = props => (
  <div
    id={props.id || 'please-provide-a-unique-id'}
    className={props.className}
    role="listbox"
    aria-orientation={props.horizontal || props.inline ? 'horizontal' : null}
  >
    {props.children}
  </div>
);

/**
 * Listbox List
 */
export const ListboxList = props => (
  <ul
    className={classNames('slds-listbox', {
      'slds-listbox_vertical': props.vertical,
      'slds-listbox_horizontal': props.horizontal,
      'slds-listbox_inline': props.inline
    })}
    role={props['aria-label'] ? 'group' : 'presentation'}
    aria-label={props['aria-label']}
  >
    {props.children}
  </ul>
);

/**
 * Listbox Item
 */
export const ListboxItem = props => (
  <li
    role="presentation"
    className={classNames('slds-listbox__item', props.className)}
  >
    {props.children}
  </li>
);

/**
 * Listbox Item Sub-Heading
 */
export const ListboxItemHeading = props => (
  <li role="presentation" className="slds-listbox__item">
    <div
      className="slds-listbox__option slds-listbox__option_plain"
      role="presentation"
      title={props.text}
    >
      <h3 className="slds-listbox__option-header" role="presentation">
        {props.text}
      </h3>
    </div>
  </li>
);

/**
 * Listbox Option
 */
export const ListboxOption = props => {
  return (
    <div
      ref={props.focusedRef}
      aria-selected={props.focused ? 'true' : null}
      aria-disabled={props.isDisabled ? 'true' : null}
      aria-checked={props.selected ? 'true' : null}
      id={props.id || 'please-provide-a-unique-id'}
      className={classNames(
        'slds-media slds-listbox__option',
        {
          'slds-listbox__option_plain': props.type === 'plain',
          'slds-listbox__option_entity': props.type === 'entity'
        },
        props.className
      )}
      role={props.label ? 'presentation' : 'option'}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </div>
  );
};

/**
 * Listbox Option Icon
 */
export const ListboxOptionIcon = props => (
  <span
    className={classNames('slds-media__figure slds-listbox__option-icon', {
      'slds-listbox__option-icon-disabled': props.isDisabled
    })}
  >
    {props.children}
  </span>
);

/**
 * Entity Option
 */
export const EntityOption = props => (
  <ListboxOption
    type={!props.label ? 'entity' : 'plain'}
    id={props.id}
    tabIndex={props.tabIndex}
    label={props.label}
    focused={props.focused}
    isDisabled={props.isDisabled}
    className={classNames(
      {
        'slds-media_center': !props.entityMeta,
        'slds-listbox__option_has-meta': props.entityMeta,
        'slds-has-focus': props.focused
      },
      props.className
    )}
  >
    {!props.label && (
      <ListboxOptionIcon isDisabled={props.isDisabled}>
        <StandardIcon
          className="slds-icon_small"
          symbol={
            (props.entityType && props.entityType.toLowerCase()) || 'account'
          }
          assistiveText={false}
          title={false}
          isDisabled={props.isDisabled}
        />
      </ListboxOptionIcon>
    )}
    {props.label ? (
      <h3 className="slds-listbox__option-header" role="presentation">
        {props.name}
      </h3>
    ) : (
      <span className="slds-media__body">
        <span className="slds-listbox__option-text slds-listbox__option-text_entity">
          {props.term ? (
            <span>
              {props.beforeTerm}
              <mark>{props.term}</mark>
              {props.afterTerm}
            </span>
          ) : (
            props.name
          )}
        </span>
        {props.entityMeta && (
          <span
            className={classNames(
              'slds-listbox__option-meta slds-listbox__option-meta_entity',
              {
                'slds-listbox__option-meta-disabled': props.isDisabled
              }
            )}
          >
            {props.entityType || 'Account'} &bull;{' '}
            {props.entityField || ' San Francisco'}
          </span>
        )}
      </span>
    )}
    {props.rightIcon && (
      <UtilityIcon
        className="slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-align-middle"
        symbol={props.rightIcon.toLowerCase()}
        title={props.rightIconAssistiveText}
        assistiveText={props.rightIconAssistiveText}
      />
    )}
  </ListboxOption>
);

/**
 * Typeahead term option
 */
export const TypeaheadTermOption = props => (
  <ListboxOption
    type="entity"
    id="option0"
    focused={props.focused}
    tabIndex={props.tabIndex}
    isDisabled={props.isDisabled}
    className={classNames(
      'slds-listbox__option_term',
      props.focused && 'slds-has-focus'
    )}
  >
    <span className="slds-media__figure slds-listbox__option-icon">
      <UtilityIcon
        className="slds-icon_x-small slds-icon-text-default"
        symbol="search"
        assistiveText="Search for term: "
        title="Search for term: "
      />
    </span>
    <span className="slds-media__body">
      <span className="slds-listbox__option-text slds-listbox__option-text_entity">
        {props.term}
      </span>
    </span>
  </ListboxOption>
);

/**
 * Plain Option
 */
export const Option = props => (
  <ListboxOption
    focusedRef={props.focusedRef}
    type="plain"
    id={props.id}
    label={props.label}
    focused={props.focused}
    isDisabled={props.isDisabled}
    selected={props.selected}
    className={classNames(
      'slds-media_small',
      {
        'slds-is-selected': props.selected,
        'slds-has-focus': props.focused,
        'slds-listbox__option_has-meta': props.meta
      },
      props.className
    )}
  >
    {!props.label && !props.hideIcons && (
      <span className="slds-media__figure slds-listbox__option-icon">
        {(props.selected || props.icon) && (
          <UtilityIcon
            assistiveText={false}
            className="slds-icon_x-small"
            containerClassName="slds-current-color"
            symbol={props.icon || 'check'}
            title={false}
          />
        )}
      </span>
    )}
    {props.label ? (
      <h3 className="slds-listbox__option-header" role="presentation">
        {props.name}
      </h3>
    ) : (
      <span className="slds-media__body">
        <span
          className={classNames('slds-truncate', {
            'slds-m-bottom_xxx-small': props.plainMeta
          })}
          title={
            props.term
              ? `${props.beforeTerm}${props.term}${props.afterTerm}`
              : props.name
          }
        >
          {props.term ? (
            <span>
              {props.beforeTerm}
              <mark>{props.term}</mark>
              {props.afterTerm}
            </span>
          ) : (
            props.name
          )}
        </span>
        {props.meta && (
          <span
            className={classNames('slds-listbox__option-meta', {
              'slds-listbox__option-meta-disabled': props.isDisabled
            })}
          >
            {props.meta}
          </span>
        )}
      </span>
    )}
  </ListboxOption>
);

export class Listbox extends Component {
  constructor() {
    super();
    this.renderEntityOptions = this.renderEntityOptions.bind(this);
    this.renderPlainOptions = this.renderPlainOptions.bind(this);
  }

  renderEntityOptions(key) {
    const uniqueId = this.props.hasUniqueId
      ? _.uniqueId('listbox-option-id-')
      : null;
    const option = this.props.snapshot[key];
    return (
      <ListboxItem key={key}>
        <EntityOption
          id={uniqueId || key}
          tabIndex={option.tabIndex}
          selected={option.selected}
          focused={option.focused}
          // False boolean translate to string "false", so we have to pass in null to prevent ref from erroring
          focusedRef={option.focused ? this.props.focusedRef : null}
          name={option.name}
          label={option.label}
          entityMeta={option.entityMeta}
          entityType={option.entityType}
          entityField={option.entityField}
          term={option.term}
          beforeTerm={option.beforeTerm}
          afterTerm={option.afterTerm}
          rightIcon={option.rightIcon}
          rightIconAssistiveText={option.rightIconAssistiveText}
          isDisabled={option.isDisabled}
        />
      </ListboxItem>
    );
  }

  renderPlainOptions(key) {
    const uniqueId = this.props.hasUniqueId
      ? _.uniqueId('listbox-option-id-')
      : null;
    const option = this.props.snapshot[key];
    return (
      <ListboxItem key={key}>
        <Option
          id={uniqueId || key}
          name={option.name}
          selected={option.selected}
          focused={option.focused}
          // False boolean translate to string "false", so we have to pass in null to prevent ref from erroring
          focusedRef={option.focused ? this.props.focusedRef : null}
          tabIndex={option.tabIndex}
          visualSelection={this.props.visualSelection}
          term={option.term}
          label={option.label}
          beforeTerm={option.beforeTerm}
          afterTerm={option.afterTerm}
          icon={option.icon}
          meta={option.meta}
          isDisabled={option.isDisabled}
          hideIcons={this.props.hideIcons}
        />
      </ListboxItem>
    );
  }

  render() {
    const {
      id,
      term,
      type,
      snapshot,
      loading,
      count = 1,
      className = 'slds-dropdown_fluid',
      staticListbox
    } = this.props;
    return (
      <ListboxWrapper
        id={id}
        className={classNames(
          { 'slds-dropdown': !staticListbox },
          type === 'entity'
            ? 'slds-dropdown_length-with-icon-7'
            : 'slds-dropdown_length-5',
          className
        )}
      >
        <ListboxList vertical aria-label={this.props['aria-label']}>
          {term && type === 'entity' ? (
            <ListboxItem>
              <TypeaheadTermOption term={term} focused />
            </ListboxItem>
          ) : null}
          {type === 'entity'
            ? Object.keys(snapshot)
                .slice(0, count)
                .map(this.renderEntityOptions)
            : Object.keys(snapshot)
                .slice(0, count)
                .map(this.renderPlainOptions)}
          {loading && (
            <ListboxItem>
              <div className="slds-align_absolute-center slds-p-top_medium">
                <Spinner className="slds-spinner_x-small slds-spinner_inline" />
              </div>
            </ListboxItem>
          )}
        </ListboxList>
      </ListboxWrapper>
    );
  }
}

Listbox.propTypes = {
  id: PropTypes.string,
  term: PropTypes.string,
  type: PropTypes.oneOf(['entity', 'plain']).isRequired,
  snapshot: PropTypes.object.isRequired,
  count: PropTypes.number,
  meta: PropTypes.string,
  icon: PropTypes.string,
  staticListbox: PropTypes.bool
};

export default Listbox;

export class ListboxGroup extends Component {
  constructor() {
    super();
    this.renderEntityOptions = this.renderEntityOptions.bind(this);
    this.renderPlainOptions = this.renderPlainOptions.bind(this);
  }

  renderEntityOptions(key) {
    const option = this.props.snapshot[key];
    return (
      <ListboxItem key={key}>
        <EntityOption
          id={key}
          tabIndex={option.tabIndex}
          selected={option.selected}
          focused={option.focused}
          name={option.name}
          entityMeta={option.entityMeta}
          entityType={option.entityType}
          entityLocation={option.entityLocation}
          term={option.term}
          label={option.label}
          rightIcon={option.rightIcon}
        />
      </ListboxItem>
    );
  }

  renderPlainOptions(key) {
    const option = this.props.snapshot[key];
    return (
      <ListboxItem key={key}>
        <Option id={key} name={option.name} label={option.label} />
      </ListboxItem>
    );
  }

  render() {
    const { snapshot, count = 1, type } = this.props;
    return (
      <ListboxList vertical aria-label={this.props['aria-label']}>
        {type === 'entity'
          ? Object.keys(snapshot)
              .slice(0, count)
              .map(this.renderEntityOptions)
          : Object.keys(snapshot)
              .slice(0, count)
              .map(this.renderPlainOptions)}
      </ListboxList>
    );
  }
}

ListboxGroup.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  snapshot: PropTypes.object.isRequired,
  count: PropTypes.number
};
