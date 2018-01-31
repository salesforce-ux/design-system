import React from 'react';
import {
  ComboboxContainer,
  EntityOption,
  Listbox,
  ListboxItem
} from '../../combobox/base/example';
import ButtonIcon from '../../button-icons/';
import { Popover } from '../../popovers/base/example';
import SvgIcon from '../../../shared/svg-icon';
import _ from '../../../shared/helpers';

/* -----------------------------------------------------------------------------
    Data
----------------------------------------------------------------------------- */
const accounts = [
  'Acme',
  'Edge SLA',
  'Express Logistics SLA',
  'GenePoint Lab Generators',
  'GenePoint SLA',
  'Pyramid Emergency Generators',
  'United Oil Installations',
  'United Oil Plant Standby Generators',
  'University of AZ Installations',
  'University of AZ Portable Generators'
];

export const ListboxList = props => (
  <Listbox
    className="slds-dropdown_length-10"
    vertical
    aria-label="My Favorites"
  >
    <ListboxItem>
      <div
        className="slds-media slds-listbox__option slds-listbox__option_plain"
        role="presentation"
      >
        <h3 className="slds-text-title_caps" role="presentation">
          My Favorites
        </h3>
      </div>
    </ListboxItem>
    {accounts.slice(0, props.length).map((value, i) => (
      <ListboxItem key={value}>
        <EntityOption
          id={_.uniqueId('listbox-option-id-')}
          entityTitle={value}
          entityMeta
          tabIndex={i === 0 && !props.isCombobox ? '0' : null}
        />
      </ListboxItem>
    ))}
  </Listbox>
);

export const Footer = props => (
  <ul>
    <li>
      <button className="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="add"
        />
        Favorite this page
      </button>
    </li>
    <li>
      <button className="slds-button slds-button_reset slds-p-vertical_xx-small slds-size_1-of-1">
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="edit"
        />
        Edit Favorites
      </button>
    </li>
  </ul>
);

export const DynamicMenu = props => (
  <Popover
    className="slds-nubbin_top-left slds-dynamic-menu"
    bodyClassName="slds-p-horizontal_none"
    title="My Favourites"
    footer={<Footer />}
    style={{ position: 'absolute', left: '0', top: '55px' }}
  >
    {props.children}
  </Popover>
);

// Default
export default (
  <div className="demo-only" style={{ height: '12rem' }}>
    <ButtonIcon
      className="slds-button_icon-border-filled"
      symbol="favorite"
      assistiveText="Show Favorites"
      title="Show Favorites"
    />
    <DynamicMenu>
      <div className="slds-p-vertical_x-small slds-p-horizontal_small">
        <h3
          className="slds-text-title_caps slds-m-bottom_x-small"
          role="presentation"
        >
          My Favorites
        </h3>
        <p>You can favorite any page!</p>
      </div>
    </DynamicMenu>
  </div>
);

// Examples
export let states = [
  {
    id: 'dynamic-menu-0-items',
    label: 'Dynamic Menu — 0 Items',
    element: (
      <div className="demo-only" style={{ height: '12rem' }}>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <div className="slds-p-vertical_x-small slds-p-horizontal_small">
            <h3
              className="slds-text-title_caps slds-m-bottom_x-small"
              role="presentation"
            >
              My Favorites
            </h3>
            <p>You can favorite any page!</p>
          </div>
        </DynamicMenu>
      </div>
    )
  },
  {
    id: 'dynamic-menu-1-item',
    label: 'Dynamic Menu — 1 Item',
    element: (
      <div className="demo-only" style={{ height: '13rem' }}>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ListboxList length="1" />
        </DynamicMenu>
      </div>
    )
  },
  {
    id: 'dynamic-menu-sub-10-item',
    label: 'Dynamic Menu — <10 Items',
    element: (
      <div className="demo-only" style={{ height: '27rem' }}>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ListboxList length="6" />
        </DynamicMenu>
      </div>
    )
  },
  {
    id: 'dynamic-menu-over-10-item',
    label: 'Dynamic Menu — >10 Items',
    element: (
      <div className="demo-only" style={{ height: '34rem' }}>
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ComboboxContainer
            autocomplete
            isOpen
            placeholder="Search Favorites"
            hideLabel
            inputIcon="right"
            inputIconRightSymbol="search"
            inputContainerClassName="slds-m-around_small"
            listbox={<ListboxList length="12" isCombobox />}
            staticListbox
          />
        </DynamicMenu>
      </div>
    )
  }
];
