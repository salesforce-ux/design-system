import React from 'react';
import PropTypes from 'prop-types';
import Combobox from '../../combobox';
import Listbox from '../../combobox/listbox/';
import { UtilityIcon } from '../../icons/base/example';
import ButtonIcon from '../../button-icons/';
import { Popover } from '../../popovers/base/example';
import SvgIcon from '../../../shared/svg-icon';
import _ from '../../../shared/helpers';
import { EntityOptionsLabel } from '../../combobox/snapshots.data';

/* -----------------------------------------------------------------------------
    Data
----------------------------------------------------------------------------- */

export const ListboxList = ({
  ariaLabel,
  id,
  length,
  listboxData = EntityOptionsLabel
}) => {
  const listboxId = _.uniqueId('example-unique-id-');

  return (
    <Listbox
      id={id || listboxId}
      snapshot={listboxData}
      type="entity"
      count={length}
      hideIcons
      staticListbox
      aria-label={ariaLabel}
    />
  );
};

ListboxList.propTypes = {
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
  length: PropTypes.number,
  listboxData: PropTypes.object
};

ListboxList.defaultProps = {
  ariaLabel: 'My Favorites',
  length: 8
};

const ExampleCombobox = ({ listboxData }) => {
  const comboboxId = _.uniqueId('example-unique-id-');
  const listboxId = _.uniqueId('example-unique-id-');

  return (
    <Combobox
      inputContainerClassName="slds-m-around_small"
      id={comboboxId}
      aria-controls={listboxId}
      autocomplete
      label="Search"
      hideLabel
      placeholder="Search Favorites"
      inputIconPosition="right"
      rightInputIcon={
        <UtilityIcon
          symbol="search"
          className="slds-icon slds-icon_x-small slds-icon-text-default"
          containerClassName="slds-input__icon slds-input__icon_right"
          assistiveText={false}
          title={false}
        />
      }
      results={<ListboxList id={listboxId} listboxData={listboxData} />}
      resultsType="listbox"
      hasInteractions
      staticListbox
      isOpen
    />
  );
};

ExampleCombobox.propTypes = {
  listboxData: PropTypes.object
};

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
    style={{ position: 'absolute', left: '-0.5rem', top: '48px' }}
  >
    {props.children}
  </Popover>
);

// Default

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <div
        className="demo-only"
        style={{ height: '13rem', position: 'relative', marginLeft: '1rem' }}
      >
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <div className="slds-p-vertical_x-small slds-p-horizontal_small">
            <h3
              className="slds-dynamic-menu__header slds-m-bottom_x-small"
              role="presentation"
            >
              My Favorites
            </h3>
            <p>You can favorite any page!</p>
          </div>
        </DynamicMenu>
      </div>
    )
  }
];

// Examples
export let states = [
  {
    id: 'dynamic-menu-0-items',
    label: 'Dynamic Menu — 0 Items',
    element: (
      <div
        className="demo-only"
        style={{ height: '13rem', position: 'relative', marginLeft: '1rem' }}
      >
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <div className="slds-p-vertical_x-small slds-p-horizontal_small">
            <h3
              className="slds-dynamic-menu__header slds-m-bottom_x-small"
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
      <div
        className="demo-only"
        style={{ height: '14rem', position: 'relative', marginLeft: '1rem' }}
      >
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ListboxList length={2} listboxData={EntityOptionsLabel} />
        </DynamicMenu>
      </div>
    )
  },
  {
    id: 'dynamic-menu-sub-10-item',
    label: 'Dynamic Menu — Less Than 10 Items',
    element: (
      <div
        className="demo-only"
        style={{ height: '28rem', position: 'relative', marginLeft: '1rem' }}
      >
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ListboxList length={6} listboxData={EntityOptionsLabel} />
        </DynamicMenu>
      </div>
    )
  },
  {
    id: 'dynamic-menu-over-10-item',
    label: 'Dynamic Menu — Greater Than 10 Items',
    element: (
      <div
        className="demo-only"
        style={{ height: '38rem', position: 'relative', marginLeft: '1rem' }}
      >
        <ButtonIcon
          className="slds-button_icon-border-filled"
          symbol="favorite"
          assistiveText="Show Favorites"
          title="Show Favorites"
        />
        <DynamicMenu>
          <ExampleCombobox listboxData={EntityOptionsLabel} />
        </DynamicMenu>
      </div>
    )
  }
];
