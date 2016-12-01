# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.2.0 - Future, 2017

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Added Global Navigation Tab bar (Workspace Tabs) - [Global Navigation Tab bar](/components/global-navigation/#flavor-navigation-tab-bar)
- Added Checkbox Add Button - [Checkbox Add Button](/components/forms/#flavor-checkbox-add-button)
- Added Split View - Compact List - [Split View](/components/split-view/)
- Added Button Group List - [Button Group List](compoments/button-groups/#flavor-list) - the new recommended way to mark up button groups.
- Added Rich Text Editor - [Rich Text Editor](/components/rich-text-editor)
- Added Global Header Notifications - [Global Header Notifications](/components/global/#flavor-notifications)
- Added Popover Header - [Popover Header](/components/popovers/#flavor-base-popover-header)
- Added Popover Footer - [Popover Footer](/components/popovers/#flavor-base-popover-footer)
- Added Progress Indicator - [Progress Indicator](/components/progress-indicator/)
- Added Walkthrough Popovers - [Walkthrough Popovers](/components/walkthrough/#flavor-popovers-default)
- Added Walkthrough header - [Walkthrough Header](/components/walkthrough/#flavor-header)
- Added Success Button - [Success Button](/components/buttons/#flavor-base-success)
- Added Sub Tabs - [Sub Tabs](/components/tabs/#flavor-sub-tabs)
- Added Dynamic Lists Dropdown - [Dynamic Lists](/components/menus/#flavor-dynamic-list)

**ADDED**

The following classes are now available:

- Added `slds-float--none` utility - [Utilities › Floats › Float None](/components/utilities/floats/#flavor-float-none)
- Added `slds-button--icon-container-more` modifier - [Button Icons › Button Icon with Dropdown](/components/button-icons/#flavor-icon-with-dropdown)
- Added `slds-button--icon-more-filled` for more buttons that require a background.
- Added `slds-text-color--inverse` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse)
- Added `slds-text-color--inverse-weak` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse-weak)
- Added `slds-is-absolute` utility for overriding a components default positioning - [Utilities › Position › Absolute](/components/utilities/position/#flavor-absolute)
- Added addtional spacing support for normalizing padding on a grid region
- Added `slds-border--bottom` utility [Utilities › Borders › Border Bottom](/components/utilities/borders/#flavor-border-bottom)
- Added `slds-border--left` utility [Utilities › Borders › Border Left](/components/utilities/borders/#flavor-border-left)
- Added `slds-border--right` utility [Utilities › Borders › Border Right](/components/utilities/borders/#flavor-border-right)
- Added `slds-border--top` utility [Utilities › Borders › Border Top](/components/utilities/borders/#flavor-border-top)
- Added `slds-box--xx-small` utility [Utilities › Themes › Box](/components/utilities/themes/#flavor-box-xx-small)
- Added support for dark backgrounds on `slds-dropdown` by adding modifier `slds-dropdown--inverse`
- Added support for narrow region on feeds.

**CHANGES**

The following changes have been made in this release:

- Global actions icon on global header updated to have a background color
- Changed global header icon's color and size
- Changed background color of docked panels
  - Docked Utility Panel - [Docked Utility Panel](/components/docked-utility-bar/#flavor-utility-panel)
  - Docked Composer Panel - [Docked Composer Panel](/components/docked-composer)
- Cards are now responsive - [Cards](/components/cards/)
- Improvements made to `slds-type-focus` utility - [Utilities › Interactions](/components/utilities/interactions/#flavor-faux-links)
- Avatars now support initials.
- Stateful icon buttons are now compatible with `slds-button--icon-container`
- Spacing adjustments made to lookup items
- Spacing adjustments made to feeds

**FIXED**

The following issues have now been resolved:

- Add collapsable margin to `slds-card__body` to account for white space when the footer is empty
- Data Table - Inline edit now has full support
- Icon when inside placed inside of an input field now uses the correct token
- Modal content properly wraps and hyphenates longform text
- Accessibility improvement - Picklists changed to a read-only combobox with a listbox.
- Fixed flex issue on docked composer that made popout example stretch the height of the viewport

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Process › Wizard - Please use the new Progress Indicator instead [Progress Indicator](/components/progress-indicator/)

**REMOVED**

The following features are being removed in this release:

- `$css-prefix` is no longer available to change the prefix of `slds-` class names to something of your choice. As an alternative, please use this PostCSS plugin to customize class name prefixes: [postcss-slds-prefix](https://github.com/salesforce-ux/postcss-slds-prefix).
- Removed custom styled scrollbar mixin from `slds--scrollable-` helpers
- Deleted legacy font-files for older, unsupported browsers (*.eot, *.svg)

**TOKENS**

The following tokens have been add/removed/deprecated in this release:

- Added `force-base/fill.json`
  - Added token: `FILL_HEADER_BUTTON`    
  - Added token: `FILL_HEADER_BUTTON_HOVER`
- Added `force-base/text-transform.json`
  - Added token: `TEXT_TRANSFORM`
- Added token: `FONT_FAMILY_TEXT`
- Added token: `FONT_FAMILY_HEADING`
- Added token: `SPLIT_VIEW_COLOR_BACKGROUND`
- Added token: `SPLIT_VIEW_COLOR_BACKGROUND_ROW_HOVER`
- Added token: `Z_INDEX_STICKY`
- Added token: `FONT_FAMILY_TEXT`
- Added token: `FONT_FAMILY_HEADING`
- Added token: `PROGRESS_COLOR_BACKGROUND`
- Added token: `PROGRESS_COLOR_BACKGROUND_SHADE`
- Added token: `PROGRESS_COLOR_BORDER`
- Added token: `PROGRESS_COLOR_BORDER_SHADE`
- Added token: `PROGRESS_COLOR_BORDER_HOVER`
- Added token: `PROGRESS_COLOR_BORDER_ACTIVE`
- Added token: `PROGRESS_BAR_HEIGHT`
- Added token: `PROGRESS_BAR_COLOR_BACKGROUND`
- Added token: `PROGRESS_BAR_COLOR_BACKGROUND_FILL`
- Added token: `COLOR_STROKE_BRAND`
- Added token: `COLOR_STROKE_BRAND_HOVER`
- Added token: `COLOR_STROKE_BRAND_ACTIVE`
- Added token: `COLOR_STROKE_DISABLED`
- Added token: `COLOR_STROKE_HEADER_BUTTON`
- Added token: `FILL_BRAND`
- Added token: `FILL_BRAND_HOVER`
- Added token: `FILL_BRAND_ACTIVE`
- Added token: `BORDER_STROKE_WIDTH_THIN`
- Added token: `BORDER_STROKE_WIDTH_THICK`
- Added token: `COLOR_BACKGROUND_BUTTON_SUCCESS`
- Added token: `COLOR_BACKGROUND_BUTTON_SUCCESS_HOVER`
- Added token: `COLOR_BACKGROUND_BUTTON_SUCCESS_ACTIVE`
- Added token: `COLOR_TEXT_SUCCESS_INVERSE`
- Added token: `CUSTOM_101`
- Added token: `CUSTOM_102`
- Added token: `CUSTOM_103`
- Added token: `CUSTOM_104`
- Added token: `CUSTOM_105`
- Added token: `CUSTOM_106`
- Added token: `CUSTOM_107`
- Added token: `CUSTOM_108`
- Added token: `CUSTOM_109`
- Added token: `CUSTOM_110`
- Added token: `CUSTOM_111`
- Added token: `CUSTOM_112`
- Added token: `CUSTOM_113`
- Added token: `CUSTOM_NOTIFICATION`
- Added token: `DATADOTCOM`
- Added token: `RTC_PRESENCE`
- Added token: `PRODUCT_CONSUMED`
- Added token: `PRODUCT_TRANSFER`
- Added token: `PRODUCT_ITEM`
- Added token: `PRODUCT_ITEM_TRANSACTION`
- Added token: `LOCATION`
- Added token: `ADDRESS`
- Added token: `CAROUSEL`
- Added token: `ASSIGNED_RESOURCE`
- Added token: `OPERATING_HOURS`
- Added token: `PRODUCT_REQUIRED`
- Added token: `RESOURCE_ABSENCE`
- Added token: `RESOURCE_CAPACITY`
- Added token: `RESOURCE_PREFERENCE`
- Added token: `RESOURCE_SKILL`
- Added token: `SERVICE_TERRITORY_MEMBER`
- Added token: `SERVICE_APPOINTMENT`
- Added token: `SERVICE_REPORT`
- Added token: `SERVICE_RESOURCE`
- Added token: `SERVICE_TERRITORY`
- Added token: `SKILL`
- Added token: `SKILL_REQUIREMENT`
- Added token: `TIMESLOT`
- Added token: `WORK_TYPE`
- Added alias: `SANS_SERIF`
- Added alias: `MALIBU`
- Added alias: `SANS_SERIF`
- Added alias: `EBONY_CLAY`
- Added alias: `OXFORD_BLUE`
- Added alias: `RIVER_BED`
- Deprecated `FONT_FAMILY`
