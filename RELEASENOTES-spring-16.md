# Salesforce Lightning Design System
# Release notes

## Release 1.0.0 - March 2, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Components and their variants can now be built with states and will show up in the component variant & states navigation on the right, when available
- Improved Component Overview tables for more narrow readability
- Improved status labels. Now associated with colors and contain more information
- Markup and Style guidelines with BEM information - [Markup and Style Guidelines](/getting-started/markup-and-style/)
- Resources Information - [Resource Links](/resources/links/)
- Updated documentation and accessibility information for tabs - [Tabs](/components/tabs/)
- Improved Grid System documentation - [Grid System](/components/grid-system/)
- Copy updates on components to represent Voice & Tone Guidelines

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Docked Composer - [Docked Composer component](/components/docked-composer/)
- Picklist Multi Select menu - [Picklist Multi Select component](/components/menus/#picklist-multi-select)
- Fixed text with inputs [Input component state](/components/forms/#input)
- Inline Level Help - [Inline Level Help component](/components/forms/#inline-level-help)
- Sales Path - [Sales Path component](/components/process/#sales-path-coach)
- Setup Wizard - [Wizard component](/components/process/#wizard)
- Added an elegant way to add spacing between specific grid items — auto functionality in flexbox. [Alignment Item Bump Variant](/components/grid-system/#alignment-item-bump)
- Popover color themes added - [Popover Theme Variant](/components/popovers/#themes)

Mobile:

- Dialog Menus for small form factor [Prompts for Touch](/components/notifications/#prompt-for-touch)
- Action overflow for touch - [Action Overflow component](/components/menus#action-overflow-for-touch)
- Added Edit dialog form for touch devices - [Edit Dialog for Touch component](/components/forms#edit-dialog-for-touch)
- Page Header - [Page Header component](/components/page-headers/#base)

**ADDED**

The following classes are now available:

- Added max-width sizing utilities - [Max Width sizing](/utilities/sizing)
- Added zero spacing utility classes - [Spacing utilities](/components/utilities/spacing/)
- Additional Grid System classes:
  - Added `.slds-grid--align-end` for horizontal alignment on main grid axis
  - Added `.slds-grid--vertical-align-end` and `.slds-grid--vertical-align-center` for vertical alignment on grid cross axis
  - Added `.slds-grid--stretch` for multi-row vertical stretch support
  - Added `.slds-grid--reverse` and `.slds-grid--vertical-reverse` to reverse the direction of the grid
- Added `.slds-text-error` for use on icons for validation errors
- Added color to user selection to force good contrast on dark backgrounds

**CHANGES**

The following changes have been made in this release:

- Removed Spinner gifs and refactored as CSS - [Spinner component](/components/spinners/)
- Source order of both Reversed and Double Media Objects changed. They are no longer reordered using flexbox' order property. [Media Objects component](/components/media-objects/)
- Activity Timeline reflects Media Object changes. Also removed `dl` with single `dt` & `dd` pairs and replaced with `span`s.
- Field-level help popover background color token update - [Popover colors](/components/popovers/#colors)
- Switched media queries to use `em` instead of `px`
- Removed icon color from `.slds-input__icon` so an icon color class is now additionally required
- Reordered tokens so large form factor has priority
- Moved Page Header theme from Utilities to its top-level component category [Page Header component](/components/page-headers/)
- Removed `.slds-m-top--x-small` in the page header and replaced with a new class `.slds-page-header__info`
- Vertical spacing adjusted on *small* viewport for `.slds-form--stacked`, `.slds-form--horizontal` and `.slds-form--inline`
- Widths of the Grid container change to `480px` for small, `768px` for medium, `1024px` for large and `1280px` for x-large.

**FIXED**

The following issues have now been resolved:

- Fixed [#106](https://github.com/salesforce-ux/design-system/issues/106) Fix for scoping issue with tabs and active state - bug. Increased active tab state specificity
- Fixed [#91](https://github.com/salesforce-ux/design-system/issues/91) Tree component markup and CSS has been updated to meet accessibility requirements
- Fixed [#107](https://github.com/salesforce-ux/design-system/issues/107) Apply proper accessibility requirements (aria-labelledby) to tabs
- Fixed [#123](https://github.com/salesforce-ux/design-system/issues/123) Make `.slds-text-body--small` inherit theme color
- Fixed [#35](https://github.com/salesforce-ux/design-system/issues/135) Fix truncation on Sales Path
- Fixed [#61](https://github.com/salesforce-ux/design-system/issues/61) Fixed [#51](https://github.com/salesforce-ux/design-system/issues/51) Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding
- Fixed [#122](https://github.com/salesforce-ux/design-system/issues/122) Custom Select container added, normalizes the `<select>` appearance in various browsers
- Fixed accessibility bug with required form elements
- Some tokens that were unable to be overridden by not having a `!default` flag have been resolved
- Fixed [#106](https://github.com/salesforce-ux/design-system/issues/106) Scoping issue with tabs and active state. Increased active tab state specificity.
- Compound fields markup has been updated that was causing display issues [Compound Fields](/components/forms/#compound-form)
- Fixed inverse button-group icon bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Deprecated `.slds-dropdown--overflow`. Dropdown length utilities should be used instead. - [Dropdown component](/components/menus/#dropdown-height)
- Deprecated `.slds-card--empty`. Use `.slds-text-align--center` instead. - [Card component](/components/cards/#empty)
- Deprecated `.slds-section-title`. Use `.slds-section__title` instead - [Section Title](/components/utilities/text/#section-title) for full details
- Deprecated `.slds-button--icon-bare`. Use `.slds-button--icon` instead - [Button Icon](/components/buttons/#icon)
- Deprecated tabs descendant selectors [Tabs component](/components/tabs/):
  - `.slds-tabs--default > slds-tabs__item` use `.slds-tabs--default__item` instead.
  - `.slds-tabs--default > slds-tabs__content` use `.slds-tabs--default__content` instead.
  - `.slds-tabs--default > a` use `.slds-tabs--default__link` instead.
  - `.slds-tabs--scoped > slds-tabs__item` use `.slds-tabs--scoped__item` instead.
  - `.slds-tabs--scoped > slds-tabs__content` use `.slds-tabs--scoped__content` instead.
  - `.slds-tabs--scoped > a` use `.slds-tabs--scoped__link` instead.
- Deprecated `.slds--tooltip`. Use `.slds-popover--tooltip` instead.
- Deprecated responsive `.slds-nowrap--{size}` classes due to inconsistent naming. Use `.slds-{size}--nowrap` instead.
- Deprecated `.slds-modal-backdrop` and `.slds-modal-backdrop--open` in favor of `.slds-backdrop` and `.slds-backdrop--open` to reuse in other components.
- Deprecated `.slds-col-rule--{position}` classes due to inconsistent naming. Use `.slds-col--rule-{position}` instead.
