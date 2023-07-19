<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->
<!-- On release, add general notes here. In time the legacy release notes will be add to this -->

## 2.21.5 - July 19, 2023


## 2.21.4 - July 17, 2023

- Updated icons to `v10.6.1`
  - Utility Set:
    - Added `edit_gpt`
    - Updated `einstein`
    - Added `sparkles`

## 2.21.3 - June 29, 2023

## Fixed
- Correction in icons package version.
- Updated placeholder text color for Rich Text Editor
- Updated docked utility component's unread notification state icon color
- Updated border colors for Feeds component

## 2.21.2 - June 15, 2023

## Fixed
- Fixed text-selection color issues which was introduced by WCAG 2.1 updates.
- Fixed border colors for components.

## 2.21.1 - May 18, 2023

## Fixed

- Fixed grid column size classes where the `slds-col-` class now applies 'flex: 1 1 auto,' which breaks grid layouts when combined with `slds-small|medium|large-size_*` classes. This results in incomplete rows and layout issues.

## 2.21.0 - April 20, 2023

## Fixed

- Update transparency values (rgba and design tokens) with transparent SLDS global styling hooks
- Changed anchor link ouline border black color to blue-50
- Updated background colors for Standard and Actions icons
- Updated icons to `v10.6.0`
  - Standard Set:
    - Added `bill_of_materials`
    - Added `buyer_group_qualifier`
    - Added `datashare_target`
    - Added `datashares`
    - Added `disclosure_and_compliance`
    - Added `document_preview`
    - Added `facility_bed`
    - Added `market`
    - Added `price_sheet`
    - Added `mulesoft`

  - Utility Set:
    - Added `add_source`
    - Added `app_web_messaging`
    - Added `bookmark_stroke`
    - Added `buyer_group_qualifier`
    - Added `document_preview`
    - Added `expired`
    - Added `favorite_alt`
    - Added `heart`
    - Added `hourglass`
    - Added `integration`
    - Added `market`
    - Added `more`
    - Added `notification_off`
    - Added `notification_snoozed`
    - Added `profile_alt`
    - Added `promotion_tiers`
    - Added `sender_email`
    - Added `service_appointment`
    - Added `service_report`
    - Added `toggle_off`
    - Added `toggle_on`
    - Added `mulesoft`

## 2.20.1 - December 16, 2022

- Updated colors for various components:
  - Button Icons
  - Carousel
  - Checkbox Button
  - Checkbox Toggle
  - Checkbox
  - Combobox
  - Data Tables
  - Dynamic Icons
  - File Selector
  - Pills
  - Popovers
  - Progress Indicator
  - Radio Group
  - Select
  - Spinners
  - Split View
  - Tabs
  - Visual Picker

## 2.20.0 - December 15, 2022

- Updated constant colors codes with global slds hooks
- Added two new dependencies for SLDS global styling hooks generation,
  - `@salesforce-ux/sds-styling-aliases` with version `0.2.4`
  - `@salesforce-ux/sds-styling-hooks` with version `1.1.0-alpha.2`
- Updated `gulp` file to include SLDS global hooks generation as part of build and dist jobs
- Updated design tokens in every component and utility with SLDS global styling hooks (except Brand-related tokens)
- Updated CI workflows migrating from CircleCI to GitHub Actions
- Updated icons to `v10.5.5`
  - Standard Set:
    - Added `asset_hierarchy`
    - Added `budget_category_value`
    - Added `budget_period`
    - Updated `crypto_category_wallet_group`
    - Added `crypto_transaction_envelope_change_snapshot`
    - Added `data_transforms`
    - Added `funding_award_adjustment`
    - Added `funding_requirement`
    - Added `promotion_tiers`
    - Added `slack_conversations`
    - Added `your_account`

  - Utility Set:
    - Added `asset_object`
    - Added `budget_category_value`
    - Added `budget_period`
    - Added `contact`
    - Added `funding_award_adjustment`
    - Added `funding_requirement`
    - Added `http`
    - Added `knowledge_smart_link`
    - Added `lead`
    - Added `maintenance_plan`
    - Added `no_return`
    - Added `opportunity`
    - Added `orders`
    - Added `product`
    - Added `proposition`
    - Added `queue`
    - Added `send_log`
    - Added `service_contract`
    - Added `slack_conversations`
    - Added `your_account`

  - DocType Set:
    - Updated `rtf`
    - Updated `folder`
    - Updated `library_folder`

- Updated BG color to below Standard Icons
  - `connect_wallet`
  - `crypto_product_category_wallet_role`
  - `crypto_product`
  - `crypto_transaction_envelope_change_log`
  - `crypto_transaction_envelope`
  - `crypto_transaction`
  - `crypto_wallet_group_item`
  - `crypto_wallet_group`
  - `crypto_wallet`
  - `nft_settings`
  - `nft_studio`
## 2.19.0 - August 11, 2022

- Updated icons to `v10.4.0`
  - Standard Set:
    - Added `ai_accelerator_card`
    - Added `connect_wallet`
    - Added `contract_line_outcome`
    - Added `contract_line_outcome_data`
    - Added `crypto_category_wallet_group`
    - Added `crypto_product`
    - Added `crypto_product_category_wallet_role`
    - Added `crypto_transaction`
    - Added `crypto_transaction_envelope`
    - Added `crypto_transaction_envelope_item`
    - Added `crypto_wallet`
    - Added `crypto_wallet_group`
    - Added `crypto_wallet_group_item`
    - Added `customer`
    - Added `customer_workspace`
    - Added `learner_program`
    - Added `nft_settings`
    - Added `nft_studio`
    - Added `prompt`
    - Added `setup_modal`
    - Added `snippet_alt`
    - Added `tax_policy`
    - Added `tax_rate`
    - Added `tax_treatment`
    - Added `water`

  - Action Set:
    - Added `action_scan_enabled`
    - Added `action_scan_disabled`

  - Utility Set:
    - Added `captions`
    - Added `contract_line_outcome`
    - Added `contract_line_outcome_data`
    - Added `customer`
    - Added `customer_workspace`
    - Added `detach`
    - Added `hazmat_equipment`
    - Added `label`
    - Added `labels`
    - Added `record_alt`
    - Added `segments`
    - Added `tax_policy`
    - Added `tax_rate`
    - Added `tax_treatment`
    - Added `tollways`
    - Added `transport_bicycle`
    - Added `transport_heavy_truck`
    - Added `transport_light_truck`
    - Added `transport_walking`
    - Added `utility`
    - Added `water`

- BRAND updates to below colors of the palette
  - `PALETTE_GREEN_20`: `#1C3326`
  - `PALETTE_GREEN_40`: `#396547`
  - `PALETTE_HOT_ORANGE_20`: `#4A2413`
  - `PALETTE_INDIGO_20`: `#321D71`
  - `PALETTE_PURPLE_80`: `#D7BFF2`
  - `PALETTE_VIOLET_20`: `#481A54`

## 2.18.1 - June 22, 2022

- Corrected typos in blueprints:
  - components/checkbox
  - components/vertical-navigation

## 2.18.0 - May 6, 2022

- Removed `&_` shorthand from numerous selectors in SCSS files
- Updated icons to v10.3.0
  - Standard Set:
    - Added `slack`
    - Added `tableau`
    - Added `dashboard_component`

  - Utility Set:
    - Updated `serialized_product_transaction`
    - Updated `serialized_product`
    - Added `data_model`
    - Added `slack`
    - Added `tableau`
    - Added `video_off`

## 2.17.5 - February 10, 2022

- Updated design token `COLOR_BACKGROUND_DESTRUCTIVE_HOVER` so that it is a different color from `COLOR_BACKGROUND_DESTRUCTIVE`

## 2.17.4 - February 3, 2022

## 2.17.3 - January 27, 2022

## 2.17.2 - January 20, 2022

## 2.17.1 - January 6, 2022

## 2.17.0 - December 16, 2021

- Removed `&_` shorthand from numerous selectors in SCSS files
- Added new standard color palette for neutral colors (black/white/grays)
- Updated Styling Hooks table on component pages to display `slds`-namespaced Hooks
- Updated icons to v10.2.2

## 2.16.2 - September 22, 2021

## 2.16.1 - August 25, 2021

## 2.16.0 - August 12, 2021

- In accordance with ARIA 1.2 guidance, the `input` was replaced with `button` within these components that contain select-only comboboxes:
  - Datetime Picker
  - Docked Composer
  - Dynamic Menu
  - Expression
  - Global Header
  - List builder
  - Lookups
  - Picklist
  - Rich Text Editor
  - Timepicker

- Added SLDS scope customizer tool: `npm run slds:customizer`
- Added new standard color palette for neutral colors (black/white/grays)
- Updated @salesforce-ux/icons to 10.1.1

## 2.15.8 - May 27, 2021

- Updated selected text highlight color token `COLOR_BACKGROUND_SELECTION` for better color contrast

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
