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

- Added Progress Bar - [Progress Bar](/components/progress-bar)
- Added Split View List - [Split view](/components/split-view)
- Added Xx-small Spinner - [Spinner](/components/spinners/#flavor-sizes-xx-small)
- Added Hero Buttons - [Hero Buttons](/components/hero-buttons)
- Added improved version of Vertical Navigation - [Vertical Navigation](/components/vertical-navigation/)

**ADDED**

The following classes are now available:

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

**FIXED**

The following issues have now been resolved:

- Remove `aria-haspopup="true"` from `slds-context-bar__icon-action`'s button
  global nav tab bar.
- Change assistive text on above mentioned button to `New Tab`.
- Added truncation to menu dropdown sub heading - [Dropdown Menu](components/menus/#flavor-dropdown-dropdown-menu-header)
- Fixed a bug where the task2 icon corresponding class name was incorrectly named "task-2"

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
