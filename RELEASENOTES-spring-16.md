# Salesforce Lightning Design System
# Release notes

## Release 1.x.x - February xx, 2016

**CHANGES**

- Deprecated `.slds-card--empty`. Center elements inside empty cards instead, using `.slds-text-align--center`. Full markup in the [card component page](/components/cards/#empty).

## Release 1.1.0 - December 16, 2015

**SITE IA**
- Improve status labels. Now associated with colors and contain more information
- Improve Component Overview tables for more narrow readability
- Move Page Header theme from Utilities to its top-level component category
- Better Grid documentation

**BREAKING CHANGES**
- Tree component markup and CSS has been updated to meet accessbility requirements

**CHANGES**
- Spacing in modal content (`.slds-modal__content`) have been removed by default, to allow for full-width items such as tables. To get spacing back, you now opt in via a spacing utility.
- Spacing utility (`.slds-m-top--x-small`) on supporting small heading text in the page header has been replaced with a new class, `.slds-page-header__info`
- Deprecated `page-header` mixin (styles moved directly to `.slds-page-header` class)
- Vertical spacing adjusted on *small* viewport for `.slds-form--stacked`, `.slds-form--horizontal` and `.slds-form--inline`
- Widths of the Grid container change to `480px` for small, `768px` for medium, `1024px` for large and `1280px` for x-large.
- Apply proper accessibility requirements (aria-labelledby) to tabs (fixes https://github.com/salesforce-ux/design-system/issues/107). Updated documentation to reflect previous refactoring.
- Fix for inverse button-group icon bug
- Make `.slds-text-body--small` inherit theme color (fixes https://github.com/salesforce-ux/design-system/issues/123)
- Mark all list utilities "dev-ready" - www.lightningdesignsystem.com/utilities/lists
- Field-level help popover background color token update
- Fix truncation on Sales Path (fixes https://github.com/salesforce-ux/design-system/issues/135)
- Fix chevron alignment on Sales Path - www.lightningdesignsystem.com/components/tabs#sales-path
- Updated demo on buttons > neutral icon to demonstrate "mutton" - www.lightningdesignsystem.com/components/buttons#neutral-icon
- Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding.

**NEW COMPONENTS**
- Form > Inline Level Help added
- Popover > Colors added, popovers now accept themes
- Process > Wizard component added
- Menu > Picklist Multi-Select component added
- Page Header > Base component added
- `.slds-grid--align-end` was added for horizontal alignment on main axis
- Grid item bump, elegant way to deal with margin: auto functionality in flexbox. `.slds-col--bump-left`, `.slds-col--bump-right`, `.slds-col--bump-top` and `.slds-col--bump-bottom`.
-  `.slds-grid--vertical-align-end`, `.slds-grid--vertical-align-center` was added for vertical alignment on cross axis
- `.slds-grid--stretch` was added for multi-row vertical stretch support
- `.slds-grid--reverse` and `.slds-grid--vertical-reverse` was added to reverse direction of the grid
- Custom Select container added, normalizes the `<select>` appearance in various browsers (fixes https://github.com/salesforce-ux/design-system/issues/122)
- `.slds-page-header__info` added to Page header for better responsive spacing.
- Utility classes added to help with dropdown menu overflow length. `.slds-dropdown--length-5`, `.slds-dropdown--length-7` and `.slds-dropdown--length-10` for 5, 7 or 10 text only menu items. `.slds-dropdown--length-with-icon-5`, `.slds-dropdown--length-with-icon-7` and `.slds-dropdown--length-with-icon-10` for 5, 7 or 10 text with icon menu items.
- Custom Select container added, normalizes the `<select>` appearance in various browsers (fixes https://github.com/salesforce-ux/design-system/issues/122)

**Deprecated**
- `.slds-dropdown--overflow` deprecated in version 2.0.0. Dropdown length utilities should be used instead.
- Responsive `nowrap` classes due to inconsistent naming, now uses proper naming patterns. Deprecated in version 2.0.0.
- Column rule helpers due to inconsistent naming, now uses proper naming patterns. Deprecated in version 2.0.0.

## Release 1.0.0 - November 18, 2015

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
- Added the Docked Composer

**DEPRECATED**
- Buttons no longer have default horizontal spacing and require a class or wrapper to provide space
- Name change: Responsive button changed to Horizontal button
- `slds-modal-backdrop` and `slds-modal-backdrop--open` deprecated in version 2.0.0, use `slds-backdrop` and `slds-backdrop--open` instead
- Descendant selectors on tabs were changed to BEM syntax
  - `slds-tabs--default > slds-tabs__item` deprecated in version 2.0.0, use `slds-tabs--default__item` instead
  - `slds-tabs--default > slds-tabs__content` deprecated in version 2.0.0, use `slds-tabs--default__content` instead
  - `slds-tabs--default > a` deprecated in version 2.0.0, use `slds-tabs--default__link` instead
  - `slds-tabs--scoped > slds-tabs__item` deprecated in version 2.0.0, use `slds-tabs--scoped__item` instead
  - `slds-tabs--scoped > slds-tabs__content` deprecated in version 2.0.0, use `slds-tabs--scoped__content` instead
  - `slds-tabs--scoped > a` deprecated in version 2.0.0, use `slds-tabs--scoped__link` instead
- Decendent selector on `.slds-input__icon` fill color deprecated in version 2.0.0, use `slds-icon-text-default` (or any icon color class) on the icon in addition to the original class
