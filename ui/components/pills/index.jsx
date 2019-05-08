import React from 'react';
import ButtonIcon from '../button-icons/';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';

export let Pill = props => (
  <span className={classNames('slds-pill slds-pill_link', props.className)}>
    {props.children}
    <a
      href="javascript:void(0);"
      className="slds-pill__action"
      title={props.label || 'Full pill label verbiage mirrored here'}
    >
      <span className="slds-pill__label">{props.label || 'Pill Label'}</span>
    </a>
    <ButtonIcon
      className="slds-button_icon slds-pill__remove"
      symbol="close"
      assistiveText="Remove"
      title="Remove"
    />
  </span>
);

export let PillContainer = props => (
  <div className={classNames('slds-pill_container', props.className)}>
    {props.children}
  </div>
);

export let ListboxPill = props => (
  <span
    className={classNames('slds-pill', props.className)}
    role="option"
    tabIndex={props.tabIndex}
    aria-selected="true"
  >
    {props.children}
    <span
      className="slds-pill__label"
      title={props.label || 'Full pill label verbiage mirrored here'}
    >
      {props.label || 'Pill Label'}
    </span>
    <span className="slds-icon_container slds-pill__remove" title="Remove">
      <SvgIcon
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        sprite="utility"
        symbol="close"
      />
      <span className="slds-assistive-text">
        Press delete or backspace to remove
      </span>
    </span>
  </span>
);

export let ListboxPills = props => (
  <ul
    className={classNames(
      'slds-listbox slds-listbox_horizontal',
      props.className
    )}
    role="listbox"
    aria-label="Selected Options:"
    aria-orientation="horizontal"
  >
    {props.children}
  </ul>
);

export let ListboxPillsItem = props => (
  <li
    className={classNames('slds-listbox-item', props.className)}
    role="presentation"
    aria-hidden={props['aria-hidden']}
  >
    {props.children}
  </li>
);
