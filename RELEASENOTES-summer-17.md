# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.3.0 - Future, 2017

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Added additional Popover accessibility/interaction guidelines - [Popover](/components/popovers/#overview)
- Removed touch examples

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Added Combobox - [Combobox](/components/combobox)
- Added Progress Bar - [Progress Bar](/components/progress-bar)
- Added Split View List - [Split view](/components/split-view)
- Added Xx-small Spinner - [Spinner](/components/spinners/#flavor-sizes-xx-small)
- Added Hero Buttons - [Hero Buttons](/components/hero-buttons)
- Added improved version of Vertical Navigation - [Vertical Navigation](/components/vertical-navigation/)

**ADDED**

The following classes are now available:

- Added `slds-has-input-focus` utility class to provide focus styles on an element
- Added `slds-dropdown--fluid` to adjust the width of a dropdown so it can be fluid to its container

**CHANGES**

The following changes have been made in this release:

- Global Navigation Accessibility Fixes:
  - The app switcher (`slds-icon-waffle_container`) uses a button instead of
    an anchor element.
  - Removed `aria-haspopup=true` from dropdown `li`.
  - Removed `tabindex="0"` from `slds-context-bar__icon-action`.
  - Removed `tabindex="-1"` from `slds-context-bar__icon-action`'s button.
  - Add `aria-haspopup="true"` to `slds-context-bar__icon-action`'s button.
  - Add assistive text to active item for Current page.
- Rounded corners have been removed from utility icons so that they no longer
  clip incorrectly.
- Update focus state for pills
  - Added `slds-pill--link` to modify pill for when we want the hyperlink to take up 100% of the available pill
  - Added `slds-pill__action` to the actionable link element inside of `slds-pill--link`
- Files Component:
  - Updated the actions menu location
  - Added state for no title
  - Added loading state
- Changed spacing between feed items from 1.5rem to .75rem
- The [Button Icon](/components/button-icons/) component is required to have `slds-button--icon` applied to the `<button />` element. Before, `slds-button--icon-inverse`, `slds-button--icon-container`, `slds-button--icon-border`, `slds-button--icon-border-filled`, `slds-button--icon-border-inverse`, `slds-button--icon-more`, and `slds-button--icon-error` were used in conjunction with just the `slds-button` classname but we now require `slds-button--icon` to be apart of this grouping of classnames.
- The [Stateful Button](/components/buttons#flavor-stateful) component is required to have `slds-button--stateful` applied to the `<button />` element
- The [Alert](/components/avatar/) component icon is now contained within `slds-icon_container`
- The [Toast](/components/toast/) component icon is now contained within `slds-icon_container`
- The [Page Header](/components/page-headers) component "entity" icon is now contained within `slds-icon_container`
- The [Feeds](/components/feeds/) component "Post" examples have been updated to be contained within the `slds-feed` list
- The [Compound Form Layout](/components/form-layout/#flavor-compound) example was updated so each `fieldset` is correctly using the `slds-form-element` class and the whole form is now contained in `slds-form--compound`
- Unless the HTML output is represented as a list — so a `ul`, `ol`, or `dl` — all examples were updated to use `slds-bottom--[position]` instead of `slds-has-divider--[position]`

**FIXED**

The following issues have now been resolved:

- Remove `aria-haspopup="true"` from `slds-context-bar__icon-action`'s button
  global nav tab bar.
- Change assistive text on above mentioned button to `New Tab`.
- Added truncation to menu dropdown sub heading - [Dropdown Menu](components/menus/#flavor-dropdown-dropdown-menu-header)
- Fixed a bug where the task2 icon corresponding class name was incorrectly named "task-2"
- Fix for `::-ms-clear` to remove native clear button in IE
- Whenever `slds-truncate` is used, it is required to be used in conjunction with a [title] attribute
- Whenever `slds-dropdown` is used, it is required to be contained inside an element that has the classname `slds-dropdown-trigger`
- Whenever `slds-form--stacked`, `slds-form--horizontal`, and `slds-form--compound` is used, it is required to be used in conjunction with `slds-form`
- Whenever `slds-icon-text-default`, `slds-icon-text-warning`, or `slds-icon-text-error` is used, it is required to be used in conjunction with `slds-icon`
- Scoped :focus style for data-tables to `slds-table`
- Fixed an issue where assistive text in an parent with `text-transform: uppercase` would get read as full-caps (e.g. "Sorted ascending" in data table headers getting read as

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Navigation was removed from site navigation and replaced with improved Vertical Navigation - [Vertical Navigation](/components/vertical-navigation/)

**REMOVED**

The following features are being removed in this release:

- Removed the like count in the bottom right of the Feed card.

**TOKENS**

The following tokens have been add/removed/deprecated in this release:

- `TASK_2` was renamed into `TASK2`
- Standard icon set: Added `ENTITLEMENT`
- Standard icon set: Added `LIVE_CHAT`
- s1-base/sizing
  - Removed `MAX_HEIGHT_ACTION_OVERFLOW_MENU`
  - Removed `MAX_WIDTH_ACTION_BAR`
  - Removed `MAX_WIDTH_ACTION_BAR_ITEM`
- Added `UTILITY_BAR_COLOR_BACKGROUND_NOTIFICATION_FOCUS`
- Added `VERTICAL_NAVIGATION_COLOR_BACKGROUND_SHADE_ROW_HOVER`
- Added `VERTICAL_NAVIGATION_COLOR_BACKGROUND_SHADE_ROW_ACTIVE`
