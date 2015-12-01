# Salesforce Lightning Design System
# Release notes


## Release 1.X.X - [date]

**CHANGES**
- Spacing in modal content (`.slds-modal__content`) have been removed by default, to allow for full-width items such as tables. To get spacing back, you now opt in via a spacing utility.

## Release 1.1.0 (internal only) - November 30, 2015

**SITE IA**
- Move Page Header theme from Utilities to its top-level component category

**CHANGES**
- Spacing utility (`.slds-m-top--x-small`) on supporting small heading text in the page header has been replaced with a new class, `.slds-page-header__info`
- Deprecated `page-header` mixin (styles moved directly to `.slds-page-header` class)
- Vertical spacing adjusted on *small* viewport for `.slds-form--stacked`, `.slds-form--horizontal` and `.slds-form--inline`
- a11y fix - Close button now first in source order on modal

**NEW COMPONENTS**
- Process > Wizard component added
- Menu > Picklist Multi-Select component added
- Page Header > Base component added
- `.slds-page-header__info` added to Page header for better responsive spacing.
- Utility classes added to help with dropdown menu overflow length. `.slds-dropdown--length-5`, `.slds-dropdown--length-7` and `.slds-dropdown--length-10` for 5, 7 or 10 text only menu items. `.slds-dropdown--length-with-icon-5`, `.slds-dropdown--length-with-icon-7` and `.slds-dropdown--length-with-icon-10` for 5, 7 or 10 text with icon menu items.

**DEPRECATED**
- `.slds-dropdown--overflow` has been deprecated. Dropdown length utilities should be used instead.

## Release 1.0.0 (internal only) - November 18, 2015

**NEW COMPONENTS**
- Added the Docked Composer

## Release 0.12.0 - November 18, 2015

**SITE IA**
- Added Resources > Links
- Changed tabs to use new refactored tab classes (deprecated)

**BREAKING CHANGES**
- Removed default horizontal spacing from buttons in favor of new spacing utilities (deprecated, see New Components below).
- Tabs have been refactored, changing descendent selectors to BEM syntax (deprecated)
- Changed source order of Media Objects > Reversed and Media Objects > Double (No longer reordering using flexbox order property)
- Adjusted Activity Timline > Base to reflect Media Object changes. Removed `dl` with single `dt` & `dd` pairs. Replaced with `span`s.
- `slds-modal-backdrop` and `slds-modal-backdrop--open` is deprecated in favor of `slds-backdrop` and `slds-backdrop--open` since it is used in other components.
- Removed icon color from `.slds-input__icon` so that an icon color class is required in addition

**CHANGES**
- Switched sizing utility media queries to use `em` instead of `px`
- Updated demo for icons > color and added `slds-text-error` for validation errors

**NEW COMPONENTS**
- Added initial state of tabs > sales path www.lightningdesignsystem.com/components/tabs#sales-path
- Added max-width sizing utilities www.lightningdesignsystem.com/utilities/sizing
- Added button spacing utilities for stacked and horizontal sets of buttons (both a single class and a wrapper class) www.lightningdesignsystem.com/components/buttons#overview
- Added stretched button utilities for full-width buttons on small form factors www.lightningdesignsystem.com/components/buttons#overview
- Dialog Menus for small form factor
  - Action overflow for touch www.lightningdesignsystem.com/components/menus#action-overflow-for-touch
- Added Edit dialog form for touch devices www.lightningdesignsystem.com/components/forms#edit-dialog-for-touch

**DEPRECATED**
- Buttons no longer have default horizontal spacing and require a class or wrapper to provide space
- Name change: Responsive button changed to Horizontal button
- `slds-modal-backdrop` and `slds-modal-backdrop--open` deprecated in version 0.12.0, use `slds-backdrop` and `slds-backdrop--open` instead
- Descendant selectors on tabs were changed to BEM syntax
  - `slds-tabs--default > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs--default__item` instead
  - `slds-tabs--default > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs--default__content` instead
  - `slds-tabs--default > a` deprecated in version 0.12.0, use `slds-tabs--default__link` instead
  - `slds-tabs--scoped > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs--scoped__item` instead
  - `slds-tabs--scoped > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs--scoped__content` instead
  - `slds-tabs--scoped > a` deprecated in version 0.12.0, use `slds-tabs--scoped__link` instead
- Decendent selector on `.slds-input__icon` fill color deprecated in version 0.12.0, use `slds-icon-text-default` (or any icon color class) on the icon in addition to the original class

## Release 0.11.0 - October 29, 2015

- Changed notifications > modal to notifications > modal-toast
- Modals > Taglines no longer has a `slds-modal__header p` selector. Instead, `slds-m-top--x-small` is placed on the `p` itself.
- Stateful button has a `[disabled]` state
- If button-groups need their final down icon to hide when [disabled], the `.slds-toggle-visibility` should be added to the icon. (This affects all page headers, and cards > base.)
- Nubbins shadows now have proper light source
- Removed interactive dropdowns from page header examples
- Added Google Analytics

**SITE IA**

- Moved tooltips to popovers, deprecated tooltip section www.lightningdesignsystem.com/components/popovers#tooltips
- Moved Dropdowns into Menus, deprecated dropdowns sectio www.lightningdesignsystem.com/components/menus
- Moved Picklist Dropdown Menu into Menus www.lightningdesignsystem.com/components/menus#picklist
- Moved Multi-Select Picklist into Forms www.lightningdesignsystem.com/components/forms#multi-select
- Menus component variants are now more explicit
  - Dropdown
  - Dropdown with Icons
  - Dropdown Positioning
  - Picklist
  - Action Overflow
  - Search Overflow

**BREAKING CHANGES**

- Changed `.slds-tooltip` to `.slds-popover--tooltip`, `.slds-tooltip` will become deprecated (*).
- Deprecated `.slds-has-divider` (*), now requires a top or bottom direction appened, e.g. `.slds-has-divider--top`, `.slds-has-divider--bottom`
- Deprecated "Menu with Icons" dropdown variant
  - No longer depends on class names that deal with icon positioning
  - `.slds-dropdown__item` are set to `display: flex` with `justify-content: space-between` by default now. This allows for icon + text to be left aligned and a single icon to be positioned on the same axis to the right hand side. The icon + text that is positioned to the left requires an HTML element, like a `<p>` with the class `.slds-truncate` applied.
  - `.slds-has-icon`, `.slds-has-icon--left`, `.slds-has-icon--right` and children classes `.slds-icon--left`, `.slds-icon--right` have been deprecated but will persist in code base (*)
  - If user invokes selection on a dropdown item and wants feedback such a a checkmark, that svg now requires a class of `.slds-icon--selected`
- <em> (*) Code is still in codebase but will be deprecated, TBD but preliminary removal of release 0.20.0</em>

**NEW COMPONENTS**
- Added notifications > prompt (modal-style alert) [www.lightningdesignsystem.com/components/notifications#prompt](www.lightningdesignsystem.com/components/notifications#prompt)
- Added Preview Panel Popovers [www.lightningdesignsystem.com/components/popovers#panels](www.lightningdesignsystem.com/components/popovers#panels)
- More directional support for popover nubbins [www.lightningdesignsystem.com/components/popovers#nubbins](www.lightningdesignsystem.com/components/popovers#nubbins)

## Release 0.10.2 - October 29, 2015
- Updated Icons to version 3.2.0
- Dropdown menus now have bottom positioning support, with accommodating nubbin support [www.lightningdesignsystem.com/components/menus#dropdown-positioning](www.lightningdesignsystem.com/components/menus#dropdown-positioning)
- Added Google Analytics

## Release 0.10.1 - October 21, 2015
- Hot fix for picklist width on datepicker
- `.slds-is-required` and `.slds-has-error` on form elements are now properly scoped within the `-vf`, `-ltng` and `-scoped` compiled css files
- Font size on datepicker properly displays within scoped compiled css files

## Release 0.10.0 - October 20, 2015

- Changed `.slds-button__icon` fill colors to use currentColor value to match text color changes
- Updated `.slds-button--icon-*` demo and fixed class name typo
- Added new button variant: `.slds-button--destructive`
- Removed max-width (960px) from Modals > Large
- Added new notification state in modals Notifications > Modal
- Added `.slds-no-flex` to SVG in Notifications > Toast (needed for modal application)
- Changed picklist label and selection list to fixed width. Applied a 5 option max-height with overflow on list.
- Upgraded `@salesforce-ux/design-tokens` to 1.3.1
- `@salesforce-ux/design-system` package now includes */assets/icons* and */assets/images*

**BREAKING CHANGES**
- Changed `.slds-button--icon-border-small` to `.slds-button--icon-x-small`. This aligns with our other icon names which separate sizing from style
- Brought inverse close icons into alignment with the other icon buttons. Class on `.slds-button` has an added `.slds-button--icon-inverse`. The class `.slds-button__icon--inverse` was removed from the SVG within.

**BUG FIXES**
- `.slds-button--icon-*` can be placed on an `a` and aligns to the center
- :hover, :focus state added for `.slds-button--icon-bare`
- fixed line-height in `.slds-button--icon-border-small` and `.slds-button--icon-bare`
- Added `overflow: auto;` to the options container for a Multi Select picklist

**NEW COMPONENTS**

- Full-width button variant for small form factors www.lightningdesignsystem.com/components/buttons#responsive
- Feed and Comment components have been added www.lightningdesignsystem.com/components/feeds
- Publisher component has been added www.lightningdesignsystem.com/components/publishers

**SASS UPDATES**

- Abstracted form states into own mixins
- Abstracted feed vertical rule into own mixin

## Site Update - October 20, 2015

- Fixed issues when installing with NPM 3
- Updated Voice and Tone guidelines

## Site Update - October 5th, 2015

- Clicking anchor links will position the anchor on the page a bit lower than the top of the window now
- Added typography documentation to design section
- Added examples for a checkbox fieldset and radio fieldset within the horizontal form modifier

## Release 0.9.2 - October 5th, 2015

- Updated package.json to point to README for licensing information
- Upgrade icons to v3.1.0
- Updated small input styles
- Applied styles to fix the height of a select element when used [size] attribute is applied
- Forced stacking of checkbox and radio elements when inside a horizontal form modifier
- Updated picklist, font weight on item select, fixed time select dropdown

## Site Update - September 25th, 2015

- Doc changes
- Internal SVG icon helper can now use <use xlinkHref> now
- Miscellaneous typo fixes

## Release 0.9.1 — September 24th, 2015

- Fixed issue with npm module dependencies
- Fixes issue that caused deprecated design tokens to display

## Release 0.9.0 — September 9th, 2015

- Open Sourced: github.com/salesforce-ux/design-system
  - CSS files scoped in `.slds` have been added/updated for the following:
  - Visualforce (`-vf`)
  - Lightning Platform (`-ltng`)
  - General Use (Most likely in conjuction with other frameworks) (`-scoped`)

### Site

- Content
  - Getting Started
    - Heroku Added
  - Design
    - Overview Added
    - Colour Added
    - Data Entry Added
    - Displaying Data Added
    - Messaging Added
  - Voice & Tone Added
  - Native -> iOS - Use our iOS integration to style your native iOS applications

### Components
**Many accessibility updates**

- Changed components to dev-ready: Button Groups, Cards, Tiles, Icons

- Lookups:
  - Accessibility Requirements added
  - Multi-Select Design and Markup updated
  - Multi-Scope Design and Markup updated
  - `.slds-lookup__control` has been deprecated, now uses `.slds-form-element__control`
- Pill Container Added `.slds-pill-container`
  - Can contain one or many pills, used on `.slds-lookup`
- Data-Tables
  - Row Selection (`.slds-is-selected`) and row selection hovers have been fixed
- Tabs
  - Updated tabs to have `aria-controls` with the same ID in the tab content container
- Tiles > Author and with-icon have empty alt added
- Datepickers > multi-select and Forms > compound-form have `small` element changed to `span`
- Card > All variants have DOM changed (header, section, footer changed to div)
- Data-tables > All variants have accessibility upgrades for `th role="row"`
- Forms > validation state now has additional errors surfaced for radio and checkbox
- Datepickers > All variants
  - Removed `role="button" aria-labelledby="bn_prev-label"`
  - Changed `div#month` to `H2` and removed `role="heading"`
  - Removed all tabindex
  - Removed `span#bn_prev-label` and `span#bn_next-label`
- Dropdowns > All variants have `aria-haspopup="true"` moved to the `button` (actionable element)
- Page headers > All variants have `role="banner"` added
- Picklists > Quickfind temporarily removed until DOM is updated

### Utilities
- Text > Faux Links has added cursor:pointer

Lots of bug fixes and TLC.>>>>>>> 
