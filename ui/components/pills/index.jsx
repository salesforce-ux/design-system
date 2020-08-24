import React from 'react';
import ButtonIcon from '../button-icons/';
import classNames from 'classnames';
import SvgIcon from '../../shared/svg-icon';

export let Pill = props => (
  <span className={classNames('slds-pill slds-pill_link', props.className)}>
    {props.children}
    <a
      href="#"
      className="slds-pill__action"
      title={props.label || 'Full pill label verbiage mirrored here'}
      onClick={e => e.preventDefault()}
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

export let PillContainer = props => {
  return (
    <div
      className={classNames({
        'slds-pill_container': props.variant !== 'listbox-group',
        'slds-listbox_selection-group': props.variant === 'listbox-group',
        'slds-pill_container_bare': props.variant === 'container-bare'
      })}
    >
      {props.type === 'listbox' && (
        <div className="slds-assistive-text" id={props.id}>
          Press delete or backspace to remove
        </div>
      )}
      {props.children}
    </div>
  );
};

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
    aria-describedby={props.id}
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
