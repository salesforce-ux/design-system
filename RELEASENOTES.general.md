<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->
<!-- On release, add general notes here. In time the legacy release notes will be add to this -->
## 2.11.6 - March 11, 2020

## 2.11.5 - March 5, 2020

## 2.11.4 - February 12, 2020

## 2.11.3 - February 3, 2020

## Fixed
- Corrected class name in Progress Bar Circular example
- Corrected various documentation typos and formatting in:
  - components/activity-timeline
  - components/alert
  - components/app-launcher
  - components/avatar-group
  - components/breadcrumbs
  - components/builder-header
  - components/button-groups
  - components/button-icons
  - components/buttons
  - components/cards
  - components/carousel
  - components/chat
  - components/color-picker
  - components/combobox
  - components/data-tables
  - components/datepickers
  - components/datetime-picker
  - components/drop-zone
  - components/dueling-picklist
  - components/dynamic-menu
  - components/expandable-section
  - components/expression
  - components/file-selector
  - components/form-element
  - components/global-header
  - components/global-navigation
  - components/icons
  - components/illustration
  - components/input
  - components/menus
  - components/page-headers
  - components/panels
  - components/path
  - components/picklist
  - components/pills
  - components/progress-indicator
  - components/progress-ring
  - components/prompt
  - components/publishers
  - components/scoped-notifications
  - components/setup-assistant
  - components/tabs
  - components/trees
  - utilities/borders
  - utilities/description-list
  - utilities/line-clamp/docs.mdx

## 2.11.2 - January 23, 2020

## Updated

- Removed `slds-is-mobile` scoping class. Touch related styles will now be applied automatically via a feature detection media query.
- Blueprints now use specific `_touch.scss` files for touch context styling.

## 2.11.1 - January 21, 2020

## Updated

- Updated node dependencies to remove vulnerabilities.
- Updated project readme to recommend use of the Storybook development environment.

## 2.11.0 - January 9, 2020

## Added

- Added `-moz` and `-webkit` prefixes to `appearance : none` rules
- Generate a sanitized version of SLDS in `.dist` that does not contain `--` BEM notation for modifiers, removes deprecated code, and only imports support Lightning Web Components.

## 2.10.2 - October 10, 2019

## 2.10.1 - October 2, 2019

## Changed

- All mobile/touch enhancements are now scoped `slds-is-mobile`. The scoping class should be applied to the `html/body` element.

## 2.10.0 - August 22, 2019

- Update color swatch to latest token values
- Removed support for ASE color swatch format

## 2.9.5 - August 2, 2019

## 2.9.4 - July 3, 2019

## 2.9.3 - May 24, 2019

## Fix

- Fix `font-size` of `body` to adjust when on a touch-enabled device

## 2.9.2 - May 7, 2019

## General

- Moved all components to mdx documentation

## 2.9.1 - April 18, 2019

## Fix

- Fix import statement for VisualForce specific styles

## 2.9.0 - April 17, 2019

## 2.8.4 - February 21, 2019

## 2.8.3 - February 4, 2019

## 2.8.2 - February 1, 2019

## 2.8.1 - January 23, 2019

## 2.8.0 - January 4, 2019

## 2.7.5 - November 19, 2018

## 2.7.4 - October 11, 2018

## 2.7.3 - October 4, 2018

## 2.7.2 - September 21, 2018

## 2.7.1 - September 9, 2018

## 2.7.0 - September 7, 2018

## General

- Redesigned our [Design Tokens page](https://lightningdesignsystem.com/design-tokens/) to include GA vs Internal designations and "New" badges
- Added Release Notes to individual component pages
- Improved the accessibility of links on our site
- Added new design guidelines for [Builders](https://lightningdesignsystem.com/guidelines/builder/) and [Empty States](https://lightningdesignsystem.com/guidelines/empty-state/)
- Moved [Tree Grid](https://lightningdesignsystem.com/components/tree-grid/) to its own item, instead of being included in Trees
- Added [variable spacing tokens](https://lightningdesignsystem.com/design-tokens/#category-spacing) to support new Densification settings
