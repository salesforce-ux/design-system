<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->
<!-- On release, add general notes here. In time the legacy release notes will be add to this -->

## 2.15.7 - May 14, 2021

## 2.15.6 - May 7, 2021

## 2.15.5 - April 29, 2021

## 2.15.4 - April 27, 2021

## 2.15.3 - April 15, 2021

## 2.15.2 - April 13, 2021

## 2.15.1 - April 12, 2021

## 2.15.0 - March 25, 2021

- Removed Salesforce Sans as the default typeface and replaced it with OS-specific defaults.
- Updated many of our design tokens and other colors to utilize the new Salesforce Color System. For more information, [read our article on Medium about this system](https://medium.com/salesforce-ux/the-salesforce-color-system-c7c6b5b9c577).

## 2.14.3 - March 18, 2021

## 2.14.2 - February 5, 2021

## 2.14.1 - January 8, 2021

## 2.14.0 - December 16, 2020

- Corrected the syntax for various stylesheet annotations so that they will properly appear in the Overview of CSS Classes section for their respective blueprint.
- Updated to Icons v9.39.0 and added new icon design token colors

## 2.13.7 - October 21, 2020

## 2.13.6 - October 14, 2020

## 2.13.5 - September 30, 2020

## 2.13.4 - September 29, 2020

## 2.13.3 - September 24, 2020

## 2.13.2 - September 23, 2020

- Added icons synonym metadata to SLDS dist

## 2.13.1 - September 18, 2020

- In Summer ’21, all BEM notation with double dashes will no longer be available in SLDS 2.13.0 and later versions. For your styles to continue working with SLDS 2.13.0 and later versions, replace `--` with `_` in your CSS. For more information see the [Salesforce Winter `21 release notes](https://releasenotes.docs.salesforce.com/en-us/winter21/release-notes/rn_slds_bem_deprecate.htm).

- Updated @salesforce-ux/icons to 9.38.0
- Added proper font-size change to mobile demos on the site

## 2.13.0 - August 20, 2020

- Added opacity override for placeholder text in inputs for Firefox browser

## 2.12.3 - June 19, 2020

- Corrected various documentation typos and formatting in:
  - components/app-launcher
  - components/button-icons
  - components/global-header
  - components/global-navigation
  - components/lookups
  - components/menus
  - components/panels
  - components/picklist
  - components/popovers
  - components/progress-indicator
  - components/prompt
  - components/publishers
  - components/setup-assistant
  - components/spinners
  - components/tabs
  - components/tiles
  - components/toast
  - components/trees
  - components/vertical-tabs
- Fixed broken links in earlier release notes

- Updated Icons to 9.37.1

## 2.12.2 - June 11, 2020

## 2.12.1 - May 7, 2020

- Updated Icons to 9.36.1

## 2.12.0 - April 28, 2020

- Updated Icons to 9.35.0

## 2.11.9 - April 27, 2020

## 2.11.8 - April 15, 2020

## 2.11.7 - April 2, 2020

- Moved font-size declaration on touch devices to the touch CSS file

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
