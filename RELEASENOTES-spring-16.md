# Salesforce Lightning Design System
# Release notes

## Release 1.2.0 - February 10, 2016


**SITE IA**
- Add Getting Started > Markup and Style guidelines with BEM information
- Updated documentation and accessibility information for tabs 
- Copy updates on components to represent Voice & Tone Guidelines
- Components can now be built with states and will show up in the component variant & states navigation if available

**CHANGES**
- Some tokens that were unable to be overridden by not having a `!default` flag has been resolved
- Reordered tokens so large form factor has priority
- Removed animation from publishers
- Fixed dropdown when using `.slds-dropdown-trigger--click`, if `.slds-is-open` exists
- Add a color to user selection to force good contrast on dark backgrounds
- Moved Sales Path to Process section - added coaching portion - (/components/process/#sales-path-coach)
- Removed Spinner gifs and refactored as CSS - [spinner component page](/components/spinners/)
- Fix for scoping issue with tabs and active state - bug. Increased active tab state specificity - Fixes [#106](https://github.com/salesforce-ux/design-system/issues/106)

**DEPRECATED**
- Deprecated `.slds-card--empty`. Center elements inside empty cards instead, using `.slds-text-align--center`. Full markup in the [card component page](/components/cards/#empty).
- Remove deprecated classes from component examples, applied correct classes

## Release 1.1.0 - December 16, 2015

**SITE IA**
- Improve status labels. Now associated with colors and contain more information
- Improve Component Overview tables for more narrow readability
- Move Page Header theme from Utilities to its top-level component category
- Better Grid documentation

**BREAKING CHANGES**
- Tree component markup and CSS has been updated to meet accessibility requirements - Fixes [#91](https://github.com/salesforce-ux/design-system/issues/91)

**CHANGES**
- Spacing in modal content (`.slds-modal__content`) have been removed by default, to allow for full-width items such as tables. To get spacing back, you now opt in via a spacing utility.
- Spacing utility (`.slds-m-top--x-small`) on supporting small heading text in the page header has been replaced with a new class, `.slds-page-header__info`
- Deprecated `page-header` mixin (styles moved directly to `.slds-page-header` class)
- Vertical spacing adjusted on *small* viewport for `.slds-form--stacked`, `.slds-form--horizontal` and `.slds-form--inline`
- Widths of the Grid container change to `480px` for small, `768px` for medium, `1024px` for large and `1280px` for x-large.
- Updated demo on buttons > neutral icon to demonstrate "mutton" - [button neutral](components/buttons#neutral-icon)
- Mark all list utilities "dev-ready" - [list utilities](/utilities/lists)
- Field-level help popover background color token update [popover colors](/components/popovers/#colors)
- Apply proper accessibility requirements (aria-labelledby) to tabs - Fixes [#107](https://github.com/salesforce-ux/design-system/issues/107). Updated documentation to reflect previous refactoring.
- Fix for inverse button-group icon bug
- Make `.slds-text-body--small` inherit theme color - Fixes [#123](https://github.com/salesforce-ux/design-system/issues/123)
- Fix truncation on Sales Path - Fixes [#35](https://github.com/salesforce-ux/design-system/issues/135)
- Fix chevron alignment on Sales Path
- Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding. Fixes [#61](https://github.com/salesforce-ux/design-system/issues/61) - Fixes [#51](https://github.com/salesforce-ux/design-system/issues/51)
- Custom Select container added, normalizes the `<select>` appearance in various browsers - Fixes [#122](https://github.com/salesforce-ux/design-system/issues/122)

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

- `.slds-page-header__info` added to Page header for better responsive spacing.
- Utility classes added to help with dropdown menu overflow length. `.slds-dropdown--length-5`, `.slds-dropdown--length-7` and `.slds-dropdown--length-10` for 5, 7 or 10 text only menu items. `.slds-dropdown--length-with-icon-5`, `.slds-dropdown--length-with-icon-7` and `.slds-dropdown--length-with-icon-10` for 5, 7 or 10 text with icon menu items.

**DEPRECATED**
- `.slds-dropdown--overflow` deprecates in version 2.0.0. Dropdown length utilities should be used instead.
- Responsive `nowrap` classes due to inconsistent naming, now uses proper naming patterns. Deprecates in version 2.0.0.
- Column rule helpers due to inconsistent naming, now uses proper naming patterns. Deprecates in version 2.0.0.

## Release 1.0.0 - November 18, 2015

**SITE IA**
- Added Resources > Links
- Changed tabs to use new refactored tab classes (deprecated)

**BREAKING CHANGES**
- Removed default horizontal spacing from buttons in favor of new spacing utilities (deprecated, see New Components below).
- Tabs have been refactored, changing descendent selectors to BEM syntax (deprecated)
- Changed source order of Media Objects > Reversed and Media Objects > Double (No longer reordering using flexbox order property)
- Adjusted Activity Timeline > Base to reflect Media Object changes. Removed `dl` with single `dt` & `dd` pairs. Replaced with `span`s.
- `slds-modal-backdrop` and `slds-modal-backdrop--open` is deprecated in favor of `slds-backdrop` and `slds-backdrop--open` since it is used in other components.
- Removed icon color from `.slds-input__icon` so that an icon color class is required in addition

**CHANGES**
- Switched sizing utility media queries to use `em` instead of `px`
- Updated demo for icons > color and added `slds-text-error` for validation errors

**NEW COMPONENTS**
- Added initial state of tabs > sales path
- Added max-width sizing utilities [max width sizing](utilities/sizing)
- Added button spacing utilities for stacked and horizontal sets of buttons (both a single class and a wrapper class) [button stacking modifiers](components/buttons/#stacked)
- Added stretched button utilities for full-width buttons on small form factors [button stretch modifier](components/buttons/#stretch)
- Dialog Menus for small form factor (prompts for touch)[components/notifications/#prompt-for-touch]
- Action overflow for touch [action overlfow component](components/menus#action-overflow-for-touch)
- Added Edit dialog form for touch devices [edit dialog for touch component](components/forms#edit-dialog-for-touch)
- Added the Docked Composer [docked composer component](/components/docked-composer/)

**DEPRECATED**
- Buttons no longer have default horizontal spacing and require a class or wrapper to provide space
- Name change: Responsive button changed to Horizontal button
- `slds-modal-backdrop` and `slds-modal-backdrop--open` deprecates in version 2.0.0, use `slds-backdrop` and `slds-backdrop--open` instead
- Descendant selectors on tabs were changed to BEM syntax
  - `slds-tabs--default > slds-tabs__item` deprecates in version 2.0.0, use `slds-tabs--default__item` instead
  - `slds-tabs--default > slds-tabs__content` deprecates in version 2.0.0, use `slds-tabs--default__content` instead
  - `slds-tabs--default > a` deprecates in version 2.0.0, use `slds-tabs--default__link` instead
  - `slds-tabs--scoped > slds-tabs__item` deprecates in version 2.0.0, use `slds-tabs--scoped__item` instead
  - `slds-tabs--scoped > slds-tabs__content` deprecates in version 2.0.0, use `slds-tabs--scoped__content` instead
  - `slds-tabs--scoped > a` deprecates in version 2.0.0, use `slds-tabs--scoped__link` instead
- Descendent selector on `.slds-input__icon` fill color deprecates in version 2.0.0, use `slds-icon-text-default` (or any icon color class) on the icon in addition to the original class


