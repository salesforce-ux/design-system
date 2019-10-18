import React from 'react';
import ButtonMenu from '../';
import Menuitem from '../../menu/menuitem';
import MenuSeparator from '../../menu/menu-separator';
import MenuSubheader from '../../menu/menu-subheader';

const defaultButtonMenu = (
  <ButtonMenu title="Show more" isOpen>
    <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
    <Menuitem label="Beta" url="/url/to/beta" />
    <Menuitem label="Gamma" url="/url/to/gamma" />
  </ButtonMenu>
);

export default defaultButtonMenu;

export const states = [];

export const examples = [
  {
    id: 'default',
    label: 'Default',
    demoStyles: `
    height: 11rem;
    `,
    element: defaultButtonMenu
  },

  {
    id: 'closed',
    label: 'Closed',
    element: (
      <ButtonMenu title="Show more">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" disabled />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" disabled />
      </ButtonMenu>
    )
  },

  {
    id: 'with-disabled',
    label: 'Some items disabled',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" disabled />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" disabled />
      </ButtonMenu>
    )
  },

  {
    id: 'with-subheaders',
    label: 'With subheaders',
    demoStyles: `
    height: 22rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <MenuSubheader label="US States" />
        <Menuitem label="California" url="/url/to/california" tabIndex={0} />
        <Menuitem label="New York" url="/url/to/new-york" />
        <Menuitem label="Washington" url="/url/to/washington" />
        <MenuSubheader label="Canadian Provinces" />
        <Menuitem label="British Columbia" url="/url/to/british-columbia" />
        <Menuitem label="Ontario" url="/url/to/ontario" />
        <Menuitem label="Quebec" url="/url/to/quebec" />
      </ButtonMenu>
    )
  },

  {
    id: 'with-separators',
    label: 'With separators',
    demoStyles: `
    height: 17.5rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <MenuSeparator />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <MenuSeparator />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start',
    label: 'Items with start icons only',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="user"
          tabIndex={0}
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconSprite="utility"
          startIconSymbol="user"
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="user"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start-some-missing',
    label: 'Items with start icons only (some left blank)',
    notes:
      'NOT RECOMMENDED! Adds a start icon placeholder to the menuitems without a start icon to maintain text alignment and spacing',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="animal_and_nature"
          tabIndex={0}
        />
        <Menuitem label="Beta" url="/url/to/beta" startIconPlaceholder />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="company"
        />
        <Menuitem
          label="Delta"
          url="/url/to/delta"
          startIconSprite="utility"
          startIconSymbol="education"
        />
        <Menuitem label="Epsilon" url="/url/to/epsilon" startIconPlaceholder />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-end',
    label: 'Items with end icons only',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          endIconSprite="utility"
          endIconSymbol="database"
          tabIndex={0}
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          endIconSprite="utility"
          endIconSymbol="help_center"
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          endIconSprite="utility"
          endIconSymbol="setup_assistant_guide"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-end-some-missing',
    label: 'Items with end icons only (some left blank)',
    notes:
      'Adds an end icon placeholder to the menuitems without an end icon to maintain text alignment and spacing',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          endIconSprite="utility"
          endIconSymbol="database"
          tabIndex={0}
        />
        <Menuitem label="Beta" url="/url/to/beta" endIconPlaceholder />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          endIconSprite="utility"
          endIconSymbol="setup_assistant_guide"
        />
        <Menuitem
          label="Delta"
          url="/url/to/delta"
          endIconSprite="utility"
          endIconSymbol="symbols"
        />
        <Menuitem label="Epsilon" url="/url/to/epsilon" endIconPlaceholder />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start-and-end',
    label: 'Items with start and end icons',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="animal_and_nature"
          endIconSprite="utility"
          endIconSymbol="database"
          tabIndex={0}
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconSprite="utility"
          startIconSymbol="travel_and_places"
          endIconSprite="utility"
          endIconSymbol="help_center"
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="company"
          endIconSprite="utility"
          endIconSymbol="setup_assistant_guide"
        />
        <Menuitem
          label="Delta"
          url="/url/to/delta"
          startIconSprite="utility"
          startIconSymbol="education"
          endIconSprite="utility"
          endIconSymbol="symbols"
        />
        <Menuitem
          label="Epsilon"
          url="/url/to/epsilon"
          startIconSprite="utility"
          startIconSymbol="setup"
          endIconSprite="utility"
          endIconSymbol="send"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-selectable-items-multiple',
    label: 'Multiple items can be selected',
    notes: 'Sets the menuitem role to "menuitemcheckbox"',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen selectionType="multiple">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" checked />
        <Menuitem label="Gamma" url="/url/to/gamma" checked />
      </ButtonMenu>
    )
  },

  {
    id: 'with-selectable-items-single',
    label: 'Single item can be selected',
    notes: 'Sets the menuitem role to "menuitemradio"',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen selectionType="single">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" checked />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start-selectable-multiple',
    label: 'Selectable items with start icons only',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen selectionType="multiple">
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="store"
          tabIndex={0}
          checked
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconSprite="utility"
          startIconSymbol="travel_and_places"
          checked
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="world"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start-and-end-selectable-multiple',
    label: 'Selectable items with start and end icons',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen selectionType="multiple">
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="store"
          endIconSprite="utility"
          endIconSymbol="database"
          tabIndex={0}
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconSprite="utility"
          startIconSymbol="travel_and_places"
          endIconSprite="utility"
          endIconSymbol="help_center"
          checked
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="world"
          endIconSprite="utility"
          endIconSymbol="setup_assistant_guide"
          checked
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-icons-start-some-missing-selectable',
    label: 'Selectable items with start icons only (some left blank)',
    notes:
      'NOT RECOMMENDED! Adds a start icon placeholder to the menuitems without a start icon to maintain text alignment and spacing',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen selectionType="multiple">
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="animal_and_nature"
          tabIndex={0}
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconPlaceholder
          checked
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="company"
        />
        <Menuitem
          label="Delta"
          url="/url/to/delta"
          startIconSprite="utility"
          startIconSymbol="education"
          checked
        />
        <Menuitem label="Epsilon" url="/url/to/epsilon" startIconPlaceholder />
      </ButtonMenu>
    )
  },

  {
    id: 'with-status-notifications',
    label: 'Status notification items',
    demoStyles: `
    height: 17rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Alpha"
          url="/url/to/alpha"
          startIconSprite="utility"
          startIconSymbol="store"
          tabIndex={0}
        />
        <Menuitem
          label="Success!"
          startIconSprite="utility"
          startIconSymbol="success"
          status="success"
        />
        <Menuitem
          label="Beta"
          url="/url/to/beta"
          startIconSprite="utility"
          startIconSymbol="travel_and_places"
        />
        <Menuitem
          label="Warning!"
          startIconSprite="utility"
          startIconSymbol="warning"
          status="warning"
        />
        <Menuitem
          label="Gamma"
          url="/url/to/gamma"
          startIconSprite="utility"
          startIconSymbol="world"
        />
        <Menuitem
          label="Error!"
          startIconSprite="utility"
          startIconSymbol="error"
          status="error"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-truncation',
    label: 'Various items with long textual content that will get truncated',
    demoStyles: `
    height: 11rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen>
        <Menuitem
          label="Very very long label value to demonstrate truncation and all that jazz. How long does this need to be?"
          url="/url/to/long-long-long"
          startIconPlaceholder
          endIconPlaceholder
        />
        <Menuitem
          label="Very very long label value to demonstrate truncation and all that jazz. How long does this need to be?"
          url="/url/to/long-long-long"
          startIconSprite="utility"
          startIconSymbol="education"
          endIconPlaceholder
        />
        <Menuitem
          label="Very very long label value to demonstrate truncation and all that jazz. How long does this need to be?"
          url="/url/to/long-long-long"
          startIconPlaceholder
          endIconSprite="utility"
          endIconSymbol="send"
        />
        <Menuitem
          label="Very very long label value to demonstrate truncation and all that jazz. How long does this need to be?"
          url="/url/to/long-long-long"
          startIconSprite="utility"
          startIconSymbol="user"
          endIconSprite="utility"
          endIconSymbol="send"
        />
      </ButtonMenu>
    )
  },

  {
    id: 'with-height-limited',
    label: 'Menu height is limited and will scroll',
    notes:
      'Limits the height of the dropdown-container using the class .lwc-dropdown_height-limited and the value of --lwc-c-menu-length (number of lines)',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen length={5}>
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
        <Menuitem label="Zeta" url="/url/to/zeta" />
        <Menuitem label="Eta" url="/url/to/eta" />
        <Menuitem label="Theta" url="/url/to/theta" />
        <Menuitem label="Iota" url="/url/to/iota" />
        <Menuitem label="Kappa" url="/url/to/kappa" />
      </ButtonMenu>
    )
  },

  {
    id: 'width-xx-small',
    label: 'Menu minimum width is set to xx-small(6rem)',
    notes: '',
    demoStyles: `
      height: 9rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen width="xx-small">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'width-x-small',
    label: 'Menu minimum width is set to x-small(12rem)',
    notes: '',
    demoStyles: `
      height: 9rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen width="x-small">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'width-small',
    label: 'Menu minimum width is set to small(15rem)',
    notes: '',
    demoStyles: `
      height: 9rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen width="small">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'width-medium',
    label: 'Menu minimum width is set to medium(20rem)',
    notes: '',
    demoStyles: `
      height: 9rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen width="medium">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'width-large',
    label: 'Menu minimum width is set to large(25rem)',
    notes: '',
    demoStyles: `
      height: 9rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen width="large">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
      </ButtonMenu>
    )
  },

  {
    id: 'with-actions',
    label: 'With items as actions',
    demoStyles: `
    height: 15rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen hasActions>
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'positioned-below-end',
    label: 'Positioned - below and aligned to the end',
    notes:
      'Menu dropdown is positioned below and aligned to the ending side of the trigger',
    demoStyles: `
    height: 15rem;
    padding-left: 5rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen position="below-end">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'positioned-below-center',
    label: 'Positioned - below and aligned to the center',
    notes:
      'Menu dropdown is positioned below and aligned to the center of the trigger',
    demoStyles: `
    height: 15rem;
    padding-left: 3rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen position="below-center">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'positioned-above-end',
    label: 'Positioned - above and aligned to the end',
    notes:
      'Menu dropdown is positioned above and aligned to the ending side of the trigger',
    demoStyles: `
    height: 15rem;
    padding-left: 5rem;
    padding-top: 12rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen position="above-end">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'positioned-above-center',
    label: 'Positioned - above and aligned to the center',
    notes:
      'Menu dropdown is positioned above and aligned to the center of the trigger',
    demoStyles: `
    height: 15rem;
    padding-left: 3rem;
    padding-top: 12rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen position="above-center">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  },

  {
    id: 'positioned-above-start',
    label: 'Positioned - above and aligned to the start',
    notes:
      'Menu dropdown is positioned above and aligned to the starting side of the trigger',
    demoStyles: `
    height: 15rem;
    padding-top: 12rem;
    `,
    element: (
      <ButtonMenu title="Show more" isOpen position="above-start">
        <Menuitem label="Alpha" url="/url/to/alpha" tabIndex={0} />
        <Menuitem label="Beta" url="/url/to/beta" />
        <Menuitem label="Gamma" url="/url/to/gamma" />
        <Menuitem label="Delta" url="/url/to/delta" />
        <Menuitem label="Epsilon" url="/url/to/epsilon" />
      </ButtonMenu>
    )
  }
];
