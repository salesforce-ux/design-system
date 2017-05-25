##### Salesforce Lightning Design System - Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

<!-- ## [Unreleased] -->
## **Release [2.3.1] - May 25, 2017**

## Big Impact

**BEM naming change**

Initially we used the double dash style for BEM notation (`--`). Due to the fact that double dashes are problematic in an XML environment (which doesn't allow double dashes within comments), we have upgraded our syntax to use the single underscore style (`_`). This change is backward compatible for 18 months. But all components going forward are built with the single underscore BEM style.

## Fixes

The following issues have now been resolved:

* Removed dotted underline for `abbr` that Chrome introduced in version 58
* Fix issue on Spinner component where Firefox and IE11 wouldn't respect its z-index token
* Fix line-height issue on `slds-form-element__static` when the output was multi-line
* Fix BEM naming convention on visibility classes - [#452](https://github.com/salesforce-ux/design-system/issues/452)

## **Release [2.3.0] - May 15, 2017**

## Features

The following are now available:

**Accordion**

* Added Accordion component —  [Accordion](/components/accordion)

**Button**

* Added class `slds-is-selected-clicked` to handle click event on stateful button - [Stateful Button](/components/buttons?modifiers=.slds-is-selected-clicked&variant=stateful)

**Combobox**

* Added Combobox component — [Combobox](/components/combobox)

**Docked Utility Bar**

* Added two line support for docked utility bar items

**Dueling Picklist**

* Re-named from Multi-select — [Dueling Picklist](/components/dueling-picklist)

**Dynamic Icons**

* Added Ellie animated icon
* Added Equalizer animated icon
* Added Score animated icon
* Added Waffle animated icon
* Added Strength animated icon
* Added Trend animated icon

**Expandable Section**

* Added Expandable section component — [Expandable Section](/components/expandable-section?modifiers=.slds-is-open&variant=base)
* Added non-collapsable example

**Input**

* Added an example for Search input with loading spinner - [Input with spinner](/components/input?example=double-icon-spinner&variant=base)
* Added `slds-has-input-focus` utility class to provide focus styles on an element

**Lookups**

* Uses new combobox HTML

**Menus**

* Added `slds-dropdown—fluid` to adjust the width of a dropdown so it can be fluid to its container
* Added updated styles for base HTML elements in the Rich Text Editor
* Added the same updated styles in the output of the Rich Text Editor using the `.slds-rich-text-editor__output` class
* Added `slds-pill_link` to modify pill for when we want the hyperlink to take up 100% of the available pill
* Added `slds-pill__action` to the actionable link element inside of `slds-pill—link`

**Path**

* Re-named from Process

**Picklist**

* Uses new combobox HTML

**Pills**

* Added listbox of pill option variant — [Listbox of Pill Options](/components/pills?variant=listbox-of-pill-options)

**Popover**

* Added `slds-popover_walkthrough-alt` to modify the background of a walkthrough popover - [Walkthrough Popover](/components/popovers?example=action-popover&variant=walkthrough)

**Progress Bar**

* Added Progress Bar component — [Progress Bar](/components/progress-bar)

**Rich text editor**

* Added bottom toolbar support - [Bottom toolbar example](/components/rich-text-editor?example=bottom-toolbar&variant=base)
* Added long-form formatting support

**Spinner**

* Xx-small Spinner variant — [Spinner](/components/spinners?modifiers=.slds-spinner_xx-small&variant=base)

**Split View List**

* Added Split View component — [Split View](/components/split-view)

**Visual Picker**

* Added Visual Picker component — [Visual Picker](/components/visual-picker)

**Vertical Navigation**

* Added Vertical Navigation component — [Vertical Navigation](/components/vertical-navigation/)
* Deprecated Navigation component for this improved version

**Visibility**

* Improved visibility classes for responsive design — [#429](https://github.com/salesforce-ux/design-system/pull/429) - Thanks [@3den](https://github.com/3den)!

## Fixes

The following issues have now been resolved:

* Fix for `::-ms-clear` to remove native clear button in IE
* Whenever `slds-truncate` is used, it is required to be used in conjunction with a [title] attribute
* The Alert component icon is now contained within `slds-icon_container`
* The Button icon component is required to have `slds-button—icon` applied to the `<button />` element. Before, `slds-button—icon-inverse`, `slds-button—icon-container`, `slds-button—icon-border`, `slds-button—icon-border-filled`, `slds-button—icon-border-inverse`, `slds-button—icon-more`, and `slds-button—icon-error` were used in conjunction with the `slds-button` classname but we now require `slds-button—icon` to be a part of this grouping of classnames
* The Stateful button component is required to have `slds-button—stateful` applied to the `<button />` element
* The Toast component icon is now contained within `slds-icon_container`
* The Page header component "entity" icon is now contained within `slds-icon_container`
* The Feeds component "Post" examples have been updated to be contained within the `slds-feed` list
* The Compound Form Layout example was updated so each `fieldset` is correctly using the `slds-form-element` class and the whole form is now contained in `slds-form—compound`
* Unless the HTML output is represented as a list — `ul`, `ol`, or `dl` — all examples were updated to use `slds-bottom—[position]` instead of `slds-has-divider—[position]`
* Whenever `slds-dropdown` is used, it is required to be contained inside an element that has the classname `slds-dropdown-trigger`
* Whenever `slds-form—stacked`, `slds-form—horizontal`, and `slds-form—compound` is used, it is required to be used in conjunction with `slds-form`
* Whenever `slds-icon-text-default`, `slds-icon-text-warning`, or `slds-icon-text-error` is used, it is required to be used in conjunction with `slds-icon`
* Fixed a bug where the task2 icon corresponding class name was incorrectly named "task-2"
* Scoped :focus style for data-tables to `slds-table`
* Fixed an issue where assistive text in an parent with `text-transform: uppercase` would get read as full-caps (e.g. "Sorted ascending" in data table headers getting read as
* Rounded corners have been removed from utility icons so that they no longer clip incorrectly
* Breadcrumbs now wrap properly
* Focus state for pills has been moved to the containing element, rather than just the text inside of the pill
* Updated z-index of Docked Utility Bar to 4 to play nicely with others
* Prevent docked composer content from collapsing in Safari
* Updated cursor style for disabled state on radio button groups

## Deprecated

The following features are being marked as deprecated in this release and will be removed in three releases:

* Navigation was removed from site navigation and replaced with improved Vertical Navigation — [Vertical Navigation](/components/vertical-navigation/)

## Design

The following updates have been made to component designs:

* Touch components have been removed from the site

**Dropdown Menus:**

* Sub-headings inside of dropdown menus should now be truncated

**Docked Composer:**

* Added focus state around entire composer panel
* Title inside of composer panel header should truncate instead of wrap to two lines

**Feeds:**

* Removed the like count in the bottom right of the Feed post
* Changed spacing between feed posts from 1.5rem to .75rem
* Add top border to feed footer on mobile

**Files:**

* Added example for no title
* Added example for loading state
* Updated location of the files action menu

**Popovers**

* Always have a close button icon

## Tokens

The following changes have been made to tokens:

* `TASK_2` was renamed into `TASK2`
* Standard icon set: Added `ENTITLEMENT`
* Standard icon set: Added `LIVE_CHAT`

**s1-base/sizing**

* Removed `MAX_HEIGHT_ACTION_OVERFLOW_MENU`
* Removed `MAX_WIDTH_ACTION_BAR`
* Removed `MAX_WIDTH_ACTION_BAR_ITEM`
* Added `UTILITY_BAR_COLOR_BACKGROUND_NOTIFICATION_FOCUS`
* Added `VERTICAL_NAVIGATION_COLOR_BACKGROUND_SHADE_ROW_HOVER`
* Added `VERTICAL_NAVIGATION_COLOR_BACKGROUND_SHADE_ROW_ACTIVE`


## Accessibility

The following changes have been made to make our product more accessible:

**Activity Timeline**

- Added `title` attribute to item icons
- Changed the checkbox markup to match the new, "Explicit Label" markup pattern

**App Launcher**

- Changed `slds-modal` to be a `<section />` element
- Changed `slds-modal__header` to be a `<header />` element
- Changed the App Tiles icons to match the new [Avatar Fallback Entity Initials](/components/avatar) pattern, adding an `<abbr />` tag
- Removed Assistive Text from Drag Handle image as it's irrelevant to screen reader users
- Implemented the new Expandable Section pattern to the expanding sections
  - Placed a button element inside the section heading elements
  - Added `aria-expanded="true|false"` to reflect state
  - Added `aria-controls="id_of_expanding_section"` to associate the button to the content it controls and gave the content wrapper the same id
- Added three new states for Accessible Drag and Drop
  - Added in the three missing states, necessary to demonstrate the Assistive Technology implementation for the full Drag and Drop lifecycle. "Grabbed", "Moved in list" and "Dropped"
  - Added a live region to be used to update the user of Assistive Technology, to the current state of the operation
  - Add an additional hidden piece of instructional text, that instructs the user how to perform the operation: "Press space bar to move this app within the list." This is present in the default state.
  - Each focusable tile element, should be `aria-describedby="id-of-span-containing-instructional-text"`
  - In the grabbed state
    - Remove the instructional text as the user has performed the action, but keep the container
    - Change the content of the live region, to be "{App Name}: current position {x} of 6. Use the up and down arrows to move this app"
  - In the "Moved in List" state, implement the same changes applied to Grabbed but:
    - Update the live region text to be: "{App Name}: new position {x} of 4."
  - In the dropped state
    - Update the live region text to be: "{App Name}: final position {x} of 4."
    - Replace the hidden instructional text to be what it was in the base state

**Avatars**

- Added missing title attributes

**Button**

- Fixed the color contrast issues on the Success Button

**Card**

- Changed `slds-card__footer` to a `<footer />` element
- Changed Tiles to be a list of `slds-tile`'s

**Checkbox Button Group**

- Removed `for` attributes on wrapping `span` elements

**Date Picker**

- Added `role="dialog"` to the `slds-datepicker`
- Added `aria-label` to the `dialog` to describe its purpose
- Made the first day cell focusable as it is a ARIA `grid` widget
- Added `aria-multiselectable="true"` to the `grid` to indicate you can selected multiple dates
- Removed `headers` attribute from each `gridcell`
- Added assistive text for when we mark today's date in the grid. We do this to provide additional meaning since the grey background color is not enough of an indicator to non-sighted users
- Changed the "Today" option to be a selectable cell, just like any other day in the grid, by removing its `<a />` tag

**Docked Composer**

- Changed the container element to be a `<section role="dialog" />`
- Added `aria-describedby="id_of_body_element"` to the element that holds the `dialog` role. Gave the Composer body the same ID
- Changed the header to be to a `<header />` element
- Removed redundant word "icon" in assistive text for icons in the Overflow Menu items
- Removed a duplicate `role="dialog"` attribute from the Popout variant as it created nested dialogs
- Added a means to tell a Docked Composer is "Minimized" by adding Assistive Text to the header
- Changed the Composer body and footer to be truly hidden when minimized

**Docked Composer - Task**

- Added assistive text to the icons used in the Lookup examples
- Upgraded the Lookups to ARIA 1.1 Specification
  - See Lookup Notes for details
- Upgraded `listbox` markup to include option group headings being accessible, to match Picklist
  - See Lookup Notes for details
- Fixed Listbox `option`'s markup to not wrap `div` elements in `span` elements

**Docked Composer - Voice**

- Added `aria-live="assertive"` to the header for alerting a user of a change in status of a call
- Changed the Mute button to be an ARIA Toggle Button with `aria-pressed="true|false"`
- Made "Recent Activity" on Incoming call example an `<h3 />`
- Updated icon assistive text for icons in the Incoming Call example
- Added assistive text to the icons used in the Lookup examples on Log a Call
- Upgraded the Lookups to ARIA 1.1 Specification
  - See Lookup Notes for details
- Upgraded `listbox` markup to include option group headings being accessible, to match Picklist
  - See Lookup Notes for details
- Fixed Listbox `option`'s markup to not wrap `div` elements in `span` elements

**Docked Form Footer**

- Fixed button text on "with errors" state from "Settings" to "Review the Following Errors"

**Docked Utility Bar**

- Removed invalid role of `footer` from the `<footer />` element
- Implemented the ARIA Toggle Button pattern using `aria-pressed="true|false"` on buttons. Provides indication of an active or open utility panel

**Docked Utility Panel**

- Changed the container element to be a `<section role="dialog" />`
- Changed the header to be to a `<header />` element
- Made sure the content of a minimized Panel is not focusable by removing it from the DOM completely

**Expandable Section**

- Added `aria-controls` to the `<button />` element that performs the action
- Added `aria-expanded="true|false"` to the `<button />` element that performs the action
- Added `aria-hidden="true|false"` to the `slds-section__content` wrapper
- Added an ID to `slds-section__content` which the `<button />` uses as its `aria-controls` value

**Feeds**

- Changed "Like" buttons to be `<button />` elements
- Changed "Like" buttons to be ARIA Toggle Buttons with `aria-pressed="true|false"`
- Changed "More Comments" button to be a `<button />` element
- Changed "Share" buttons to be `<button />` elements

**Form Layout**

- Updated Checkbox and Radio Buttons to match newer "Explicit Label" pattern

**Global Header**

- Added `aria-label` to the Notifications dialog
- Added `aria-describedby` to the Notifications dialog
- Upgrade the ARIA Combobox markup to ARIA 1.1 Specification
  - See Lookup Notes for details
- Upgraded `listbox` markup to include option group headings being accessible, to match Picklist
  - See Lookup Notes for details
- Fixed Listbox `option`'s markup to not wrap `div` elements in `span` elements
- Fixed Favorites Button to communicate pressed state by Implementing the ARIA Toggle Button pattern using `aria-pressed`

**Global Navigation**

- Changed the App Launcher link to be a `<button />` as it launches a Modal
- Fixed a malformed `title` attribute of the App Name
- Fixed the `title` attribute of the Object Switcher link to match visual text
- Fixed the `title` attribute of the Object Switcher Menu Button

**Global Navigation - Navigation Bar**

- Fixed Menu item title attributes
- Removed `aria-haspopup=true` from dropdown `li`.
- Removed `tabindex="0"` from `slds-context-bar__icon-action`.
- Removed `tabindex="-1"` from `slds-context-bar__icon-action`'s button.
- Added `aria-haspopup="true"` to `slds-context-bar__icon-action`'s button.
- Added assistive text to active item for Current page.

**Global Navigation - Tab Bar**

- Fixed `title` attribute on the Split View Toggle Button
- Removed `aria-haspopup` from Split View Toggle Button
- Implemented a simple Expanding Section ARIA pattern on the Split View Toggle button
  - Added `aria-expanded="true|false" to reflect state
  - Added `aria-controls="id_of_expanding_section"` to associate the button to the content it controls
- Added `aria-controls` to each `role="tab"`
- Created a `tabpanel` for each `tab`
  - Added a unique ID to each which matches corresponding `aria-controls` attribute
  - Added `aria-labelledby` to each which matches corresponding `tab` ID
- Updated the "New Tab" button text to match its function
- Updated the "New Tab" button title attribute
- Removed `aria-haspopup` attribute from "New Tab" button
- Added `aria-label` to the New Tab `dialog`
- Removed focusable hidden remove buttons in Pinned Tabs

**Input - Field Level Help**

- Moved `aria-describedby` from the `input` to the Tooltip Trigger `<button />`
- Removed `aria-live` from the Tooltip

**List Builder**

- Changed the `role="dialog"` element to be a `<section />`
- Changed `slds-modal__header` to be a `<header />` element
- Changed `slds-modal__footer` to be a `<footer />` element
- Replaced selected Pills to be the new Listbox of Pills component
- Updated Lookup mark-up to match new structure. See Lookup notes

**Lookup**

- Upgrade the ARIA Combobox markup to ARIA 1.1 Specification
  - Moved `role="combobox"` attribute from the `input` element to `slds-lookup` root element
  - Moved `aria-expanded="true|false"` attribute from the `input` element to `slds-lookup` root element
  - Added `aria-haspopup="listbox"` attribute to `slds-lookup` root element
  - Added `autocomplete="off"` to the `input` element
  - Added `aria-controls=""` to the `input` element which points to the ID of the `listbox`
  - Added `role="textbox"` to the `input` element
  - Removed `aria-owns` attribute from the `input` element as the `listbox` is not a child of the `combobox` role
  - Changed `type` attribute on the `input` element to be `text`
- Upgraded `listbox` markup to include option group headings being accessible, to match Picklist
  - Moved `role="listbox"` attribute from the `ul` element to the `slds-lookup__menu` root element
  - When a `listbox` has option groups (a `slds-lookup__item_label`)
    - `ul` element has `role="group"` with an `aria-label` of the same text as the `slds-lookup__item_label` text
    - `slds-lookup__item_label`, becomes a presentational list item by placing it inside an `li[role="presentation"]` and being a child of the `ul`, as the `aria-label` on the `group` replaces its function
  - When a `listbox` has no option groups (no `slds-lookup__item_label`)
    - `ul` element has `role="presentation"` and no `aria-label`
- Fixed Listbox `option`'s markup to not wrap `div` elements in `span` elements

**Menus**

- Added `aria-checked` to Menu items with `role="menuitemcheckbox"` in all cases. Shouldn't just be added when `true`, setting `false` is important to communicate

**Modals**

- Added `aria-describedby` to the `slds-modal` element. This points to ID of `slds-modal__content`
- Added `aria-label` to Header Empty example, in the absence of a header with a heading tag

**Panels - Details**

- Updated the checkbox mark-up to be the new "explicit label" version
- Added `aria-haspopup="true"` to "More Actions" button in the Panel header
- Changed "Follow up on '15 contact" to be an `<h2 />` element
- Changed the list of fields to be a list `<ul />`
- Switched the DOM order of the field and edit pencil, so the edit action comes after the field

**Panels - Filtering**

- Changed the footer actions to be `<button />` elements instead of links
- Changed "Matching all these filters" to a heading for better hierarchy
- Changed the filters to be `<button />` elements instead of links.
- Locked filters are now `disabled`, which is possible with the change in element used, to be a `<button />`
- Each filter button now includes additional assistive text to better describe the action: "Edit filter: "
- Improved repetitive button text for the remove filter buttons. Now follows the format of `"Remove Filter: ${name_of_filter}"` instead of just "Remove"
- Panel error message converted from `aria-live` to be `role="alert"`, which is implicitly "live"
- Inline error messages are now associated to the invalid filter button with `aria-describedby` being placed on the offending button

**Path**

- Fixed focus so that only one stage is focusable at a time
- Fixed focus styling on stages
- Removed `aria-live` from stages
- Added non-visual indicator of "Current Stage" by adding "Current Stage:" assistive text
- Updated semantics when no coaching available
  - Swapped `tabset` to `listbox`
  - Swapped `tab` to `option`
  - Added `aria-orientation="horizontal"`
- Update `aria-controls` on each `tab` to match a unique ID
- Updates to expandable coaching tab panels
  - Update button text on coaching expand/collapse toggle button so it's clear
  - Add aria-expanded="false" by default to the `slds-tabs_path__link` which have `role="tab"`
  - When the `tabpanel` is expanded, `aria-expanded="true"` is set on the currently selected `tab`
- Change the "edit" link to be a `<button />` in the coaching panels

**Picklist**

- Upgrade the ARIA Combobox markup to ARIA 1.1 Specification
  - Moved `role="combobox"` attribute from the `input` element to `slds-picklist` root element
  - Moved `aria-expanded="true|false"` attribute from the `input` element to `slds-picklist` root element
  - Added `aria-haspopup="listbox"` attribute to `slds-picklist` root element
  - Added `autocomplete="off"` to the `input` element
  - Added `aria-controls=""` to the `input` element which points to the ID of the `listbox`
  - Added `role="textbox"` to the `input` element
  - Removed `aria-owns` attribute from the `input` element as the `listbox` is not a child of the `combobox` role
  - Changed `type` attribute on the `input` element to be `text`
- Changed the expand trigger button `title` attribute to match button text
- Moved the ID from `slds-dropdown__list` to `slds-dropdown` with `role="listbox"`
- Implemented Listbox of Pills component on Multi Select states

**Pills**

- Add title attributes to all icons or avatars in a Pill

**Popovers**

- Popovers without headers get `aria-label` applied to the `dialog`
- "Tesla Motors" Panel heading changed to `h2`
- Add a close button to all Popovers that don't have any
- Updated implementation guidelines

**Progress Indicator**

- Only apply `aria-describedby` to markers when a tooltip is shown
- In the Modal example, DOM order is fixed to follow visual order
- Updates to `slds-progress-bar`
  - Added `role="progressbar"`
  - Added `aria-valuemin="0"`
  - Added `aria-valuemax="100"` to essentially make the progress bar a percentage
  - Added `aria-valuenow` to track current progress

**Prompt**

- Added an ID to `slds-modal__content` for `aria-describedby` to work on the `alertdialog`

**Publisher**

- Made the "To: My Followers" definition list be part of the comment box `label` as a string, to create a better label
- Made the Publisher Actions not focusable when hidden

**Select**

- Added missing `required` attribute to Required and Error states

**Tabs**

- Fixed Sub Tabs `tabpanels` ID typos

**Vertical Navigation**

- Now uses a `<nav />` element as its parent
- Added `aria-label` to the `nav` element so it's easily identifiable from other navigation regions on the same page
- Added `aria-current="page"` to the "active" link

**Utilities - List**

- Name Value Pairs changed to definition lists

## Release [2.2.2] - March 8th, 2017

**ADDED**

The following classes are now available:

- Added `slds-table_resizable-cols` as a modifier to `slds-table`. Should be used if your table supports resizable columns.

**FIXES**

The following issues have now been resolved:

- `slds-table_fixed-layout` can now be used with the basic table - [#396](https://github.com/salesforce-ux/design-system/issues/396)

## February 24, 2017

**SITE IA/ENHANCEMENTS**

- Updated [iOS implementation documentation](/platforms/ios/)

**NEW IOS RELEASE (3.0.0)**

- Substantial script rewrite to handle future token changes
- You can now use design tokens in Swift
- Updated tokens to Spring ’17
- See detailed [release notes](https://github.com/salesforce-ux/design-system-ios/blob/master/CHANGELOG.md) for design-system-ios

## February 3, 2017

**SITE IA/ENHANCEMENTS**

- New and improved [Messaging Guidelines](/guidelines/messaging-overview)

## Release [2.2.1] - January 9, 2017

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Added a toast for small columns - [Small Column Toast](/components/notifications#flavor-toast-small)

## Release [2.2.0] - January 6, 2017

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Added Global Navigation Tab bar (Workspace Tabs) - [Global Navigation Tab bar](/components/global-navigation/#flavor-navigation-tab-bar)
- Added Checkbox Add Button - [Checkbox Add Button](/components/forms/#flavor-checkbox-add-button)
- Added Button Group List - [Button Group List](/components/button-groups/#flavor-list) - the new recommended way to mark up button groups.
- Added Rich Text Editor - [Rich Text Editor](/components/rich-text-editor)
- Added Global Header Notifications - [Global Header Notifications](/components/global-header#flavor-notifications)
- Added Popover Header - [Popover Header](/components/popovers/#flavor-base-popover-header)
- Added Popover Footer - [Popover Footer](/components/popovers/#flavor-base-popover-footer)
- Added Progress Indicator - [Progress Indicator](/components/progress-indicator/)
- Added Walkthrough Popovers - [Walkthrough Popovers](/components/walkthrough/#flavor-popovers-default)
- Added Walkthrough Header - [Walkthrough Header](/components/walkthrough/#flavor-header)
- Added Success Button - [Success Button](/components/buttons/#flavor-base-success)
- Added Sub Tabs - [Sub Tabs](/components/tabs/#flavor-sub-tabs)
- Added Dynamic Lists Dropdown - [Dynamic Lists](/components/menus/#flavor-dynamic-list)

**ADDED**

The following classes are now available:

- Added `slds-float_none` utility - [Utilities › Floats › Float None](/components/utilities/floats/#flavor-float-none)
- Added `slds-button_icon-container-more` modifier - [Button Icons › Button Icon with Dropdown](/components/button-icons/#flavor-icon-with-dropdown)
- Added `slds-button_icon-more-filled` for more buttons that require a background.
- Added `slds-text-color_inverse` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse)
- Added `slds-text-color_inverse-weak` utility - [Utilities › Text › Color](/components/utilities/text/#flavor-color-text-color-inverse-weak)
- Added `slds-is-absolute` utility for overriding a components default positioning - [Utilities › Position › Absolute](/components/utilities/position/#flavor-absolute)
- Added additional spacing support for normalizing padding on a grid region
- Added `slds-border_bottom` utility [Utilities › Borders › Border Bottom](/components/utilities/borders/#flavor-border-bottom)
- Added `slds-border_left` utility [Utilities › Borders › Border Left](/components/utilities/borders/#flavor-border-left)
- Added `slds-border_right` utility [Utilities › Borders › Border Right](/components/utilities/borders/#flavor-border-right)
- Added `slds-border_top` utility [Utilities › Borders › Border Top](/components/utilities/borders/#flavor-border-top)
- Added `slds-box_xx-small` utility [Utilities › Themes › Box](/components/utilities/themes/#flavor-box-xx-small)
- Added support for dark backgrounds on `slds-dropdown` by adding modifier `slds-dropdown_inverse`
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
- Stateful icon buttons are now compatible with `slds-button_icon-container`
- Spacing adjustments made to lookup items
- Spacing adjustments made to feeds

**FIXED**

The following issues have now been resolved:

- Accessibility improvement - Picklists changed to a read-only combobox with a listbox.
- Add collapsable margin to `slds-card__body` to account for white space when the footer is empty
- Data Table › Inline edit now has full support
- Icon inside of an input field now uses the correct token
- Modal content properly wraps and hyphenates longform text
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

Tokens are now part of the Lightning Design System.

Token files previously available from the `@salesforce-ux/design-tokens` npm package are now available in `design-tokens/dist` in the `@salesforce-ux/design-system` package (the same applies for the zip download).

The following tokens have been add/removed/deprecated in this release:

- Added `force-base/fill.json`
  - Added token: `FILL_HEADER_BUTTON`
  - Added token: `FILL_HEADER_BUTTON_HOVER`
- Added `force-base/text-transform.json`
  - Added token: `TEXT_TRANSFORM`
- Added token: `FONT_FAMILY_TEXT`
- Added token: `FONT_FAMILY_HEADING`
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

## Release [2.1.4] - November 7, 2016

**FIXED**

The following issues have now been resolved:

- Title attributes were added to all button icons and truncated text for accessibility
- Added line-height fix for `.slds-button—icon-border-inverse`
- Amended `.slds-button_icon` documentation
- Removed unnecessary `.slds-not-selected` class from stateful `.slds-button_icon` markup and adjusted documentation

## Release [2.1.3] - September 21, 2016

**FIXED**

The following issues have now been resolved:

- Included the logo SVG asset used in the Global header
- Use `@support` for progressive enhancement of `mix-blend-mode` for active/hover states in Global Navigation
- Removed the demo style `.slds-text-align_center` from `.slds-card__body`

**DEPRECATED**

Customizing the CSS class names by customizing `$css-prefix` is deprecated and will be removed in version 2.2.
As an alternative, please use this PostCSS plugin to customize class name prefixes: [postcss-slds-prefix](https://github.com/salesforce-ux/postcss-slds-prefix).

## Release [2.1.2] - September 6, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Moved Archives section up on Downloads page, and added a link to the section on the homepage, for better visibility.
- New Checkbox Toggle guidelines under [Data Entry section](/guidelines/data-entry/).
- New "Touch" section under "Components", where you’ll find patterns especially optimized for touch
- Link to Styling with Design Tokens on the platform added on [Design Tokens](/design-tokens/), [Lightning Components](/platforms/lightning/), and [Downloads](/downloads/) pages.
- Button Icon component has been moved out of Buttons and into its own category [Button Icon](/components/button-icons/)
- Picklist component has been moved out of Menus and into its own category [Picklist](/components/picklist/)

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- App Launcher - [App Launcher Component](/components/app-launcher/)
- Global Navigation - Standard context bar - [Global Navigation Component](/components/global-navigation/)
- Global Header - [Global Header Component](/components/global-header/)
- Docked Utility Bar - [Docked Utility Bar Component](/components/docked-utility-bar/)
- Filtering panel - [Filtering Panel Component](/components/panels/#flavor-filtering)
- Files - [File Components](/components/files/)
- File selector - [File Selector](/components/file-selector/)
- Feed v2 - [Feeds Component](/components/feeds/)
- Indeterminate checkbox - [Indeterminate checkbox component](/components/forms/#flavor-checkbox)
- Button Icon Inverse - Bordered - [Button Icon Inverse with Border](/components/button-icons/#flavor-icon-container-button-icon-border)
- Button Icon Inverse - Hint Hover - [Button Icon with Hint Hover](/components/button-icons/#flavor-icon-with-hint-hover)
- Button Icon Error - [Button Icon Error](/components/button-icons/#flavor-base-button-icon-error)
- Image Cards - [Figure Card Component](/components/images/#flavor-figure-figure-card)
- Image Ratios - [Figure Ratio Component](/components/images/#flavor-figure-ratio)
- Vertical Navigation color variation - [Vertical Navigation](/components/navigation/#flavor-vertical-inverse)

**ADDED**

The following classes are now available:

- Text color helpers - [Utilities › Text › Color](/components/utilities/text/#flavor-color)
- Text title utility - `.slds-text-title` - [Utilities › Text › Text Title](/components/utilities/text/#flavor-title)
- Text link utility - Made text inside of `.slds-text-link_reset` appear as a link - [Utilities › Interactions › Text Link](/components/utilities/interactions/#flavor-text-link)
- Truncation containers [Utilities › Truncation](/components/utilities/truncation/#flavor-max-width)
- Absolute sizes utility classes: `.slds-size_xx-small`, `.slds-size_x-small`, `.slds-size_medium`, `.slds-size_large`, `.slds-size_x-large`, `.slds-size_xx-large` and their responsive equivalents - in [Utilities › Sizing](/components/utilities/sizing/)
- Hyphenation utility for non-truncated headings in narrow containers - [Utilities › Hyphenation](/components/utilities/hyphenation/)
- Position utilities - [Utilities › Position](/components/utilities/position/)
- Table column borders - Added vertical column borders on a table by applying `.slds-table_col-bordered`
- Name/Value pair lists - 3 variations - horizontal, inline and stacked - [Utilities › Lists › Name Value Pair](/components/utilities/lists/#flavor-name-value-pair)
- Generated grid column spans 1, 2, 3, 4, 5, 6, 7, 8, and 12 for all breakpoints
- Added archives for previous versions of the site for customers that can't upgrade yet. These site archives are currently available at the bottom of the [Downloads page](/downloads/)

**CHANGES**

The following changes have been made in this release:

- [Docked Form Footer](/components/forms/#flavor-docked-form-footer-docked-form-footer-with-popover) popover tooltip naming changed to popover.
- [CSS Scoping Tool](https://tools.lightningdesignsystem.com/css-customizer) is now only necessary when building components to be included in Visualforce
- [Using SLDS in Lightning](/platforms/lightning/) has been updated to include information about Lightning Out, Lightning Components for Visualforce, and Lightning Applications.
- Nubbins on [Popovers](/components/popovers/#flavor-nubbins) have been moved .5rem/8px closer to the respective edge of the popover to match the spec
- [Pills](/components/pills/) have been updated with a more accessible DOM. They are no longer made from an anchor, but instead contain the anchor. Documentation is updated. (Old pills will not break)
- [Checkbox Toggle](/components/forms/#flavor-checkbox-toggle) has an updated design with the ability to add custom words below the toggle
- [Checkbox](/components/forms/#flavor-checkbox) and [Radios](/components/forms/#flavor-radio) have been updated with a new, more accessible than ever DOM structure. (Your old DOM will not break.)
- Brightened yellow background on `mark` element.
- Text selected with your mouse is light blue.
- Renamed "slide-out" panel to "details" - [Detail Panel Component](/components/panels/#detail)
- Renamed "Base" data table to "Basic" data table - [Data Table Component](/components/data-tables/)
- Abstracted complex data table features into a variant named "Advanced" data table - [Data Table Component](/components/data-tables/#advanced)
- Improvements made to `.slds-text-link_reset` - [Utilities › Interactions › Text Link Reset](/components/utilities/interactions/#link-reset)
- Removed light font-weight from the text utility `.slds-text-heading_small` - [Utilities › Text › Text Heading Small](/components/utilities/text/#flavor-heading-heading-small)
- Removed `position: relative` from `.slds-grid`
- Feeds are now responsive
- Added close button to error popover so a screen reader can access popover
- Added animated waffle icon to Global Navigation [Global Navigation](/components/global-navigation/)
- Feeds:
  - Changed post's comment metric labels to lowercase
  - Added hint-hover to post's comment action overflow icon
  - Changed post's comment "link" text to use `.slds-color-link_weak`
  - Removed dotted line separator from post's attachment payload
  - Moved URL of post's attachment to the bottom of the content ordering
  - Removed truncation from preamble
  - Reduced white space between feed items
- Updated [Activity Timeline Email example](/components/activity-timeline/#flavor-email) to show the to and from with truncation

**FIXED**

The following issues have now been resolved:

- Recorded home vertical accessibility fixes
  - Added `aria-haspopup="true"` to action overflow buttons
  - Added assistive text for icon
  - Removed unnecessary aria roles from action overflow buttons
  - Improved assistive text verbiage
  - Made multiple value field entirely clickable to invoke dropdown
- Global header accessibility fixes
  - Modified tab order of global header actions
  - Added `title` attribute to global header actions
  - Changed avatar wrapper from anchor to a button
  - Allowed `.slds-assistive-text` to become visible on focus if `.slds-assistive-text_focus` is used
  - Added aria roles to global search input
  - Changed global search listbox options to be non-actionable
  - Moved "click enter to search" and "go to" options back into `<ul>` so they can be discovered by screen readers
  - Added `.slds-has-focus` to apply focus state on listbox options when keyboard interactions are used
  - Moved clear button to the right of the input to visually match tab order
- Lookup/Global Header Search accessibility fixes
  - Improved semantics of dropdown menus
  - Applied `role=separator` to dropdown menu list items that do not have an actionable element
  - Applied `role=presentation` to dropdown menu list items
  - Changed `<p>` wrapping dropdown menu items text to `<span>`
  - Dropdown menu items have a default `tabindex="-1"`, tab focused items changed to a `tabindex="0"`
- Utility bar accessibility fixes
  - Added landmark `role="footer"` to utility bar
  - Added `aria-label="Utility Bar"` description to utility bar
  - Added hidden heading to utility bar
  - Added aria `role=dialog` and `aria-labelledby` to utility bar panel
  - Changed panel header text to be wrapped in a heading with a id to reference the `aria-labelledby`
  - Placed utility bar buttons inside `<ul>`
- Files accessibility fixes
  - Fixed invalid markup by moving button group outside of anchor
  - Image overlay is now enabled by adding an extra html element before the image and adding the class `.slds-image_overlay`
- Card accessibility fixes
  - Moved `<header>` element to only contain the card header text, rather than the text and overflow menu
  - Changed `<p>` tags with truncation in related list markup to `<span>` tags
- Made primary labels of compound fields capital
- Dropdowns appear on icon focus within Global Navigation
- Labeled the dialog with the heading of the modal using `aria-labelledby="id_of_heading"` in the app launcher component
- Tables accessibility fixes: all tables now use the same truncation method when text is too long in a cell and show the full text when truncated text is hovered
- Accessibility fixes for list builder
- Fixed an issue where examples contained the same ID multiple times
- Feeds accessibility fixes
  - Comments are now list items in an unordered list structure
  - The browser shows a focus ring when avatars are focused
- Accessibility fixes to Menus and Picklist, including Menus used in composite SLDS components
  - Removed of `aria-expanded` on containers
  - `role="presentation"` added on list items to remove them from the accessibility tree
  - Corrected use of `menuitemcheckbox` for selectable menu items, with the use of `aria-checked` instead of `aria-selected`
  - Corrected sub heading menus which was split across multiple un-ordered lists
  - Included line separators and sub-heading separators into the accessibility tree with `role="separator"`
- Added `aria-describedby` on textarea element to show error message ID
- Added `aria-live` attribute to the stateful icon button
- Added `aria-describedby` on select element to show error message ID
- Added `aria-haspopup` on Activity Timeline menu buttons, and updated each list item to use an `<h3>` tag
- Added hyphenation code to popovers so that long words will break and wrap

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Feeds v1 - Design has changed to v2 - [Feeds v2 Component](/components/feeds/)
- Text heading label utility - Use Text title utilities instead - [Utilities › Text › Text Title](/components/utilities/text/#flavor-title)

**REMOVED**

The following features or demos are being removed in this release:

- Removed inverse and state themes from examples to provide clarity of usage.

## Release [2.0.3] - August 1, 2016

**FIXED**

The following issues have now been resolved:

- Card a11y fixes
  - Card semantically changed to an `article`
  - Card header semantically changed to a `header`
  - Added `aria-haspopup="true"` to action overflow button since it invokes a dropdown menu
  - Wrapped card header text in an `<h2>`
- Fixed label for / textarea id mismatch in form textarea example
- Fixed modal close button styling so the focus halo no longer overlaps with the modal body
- Labeled the dialog with the heading of the modal using `aria-labelledby="id_of_heading"` and removed `aria-hidden="false"` from modal
- Added an example usage of `slds-table_striped` in the basic data table example
- Reverted modal components for the touch devices to prototype status while a fix for using them in Salesforce1 is found
- Added a title attribute to the truncation example
- Changed status of single-line truncation to dev-ready
- Fixed an issue where `<legend>` were bold in visual force - Fixes [#216](https://github.com/salesforce-ux/design-system/pull/216)
- Added `aria-describedby` attribute on Tooltip component trigger

**CHANGES**

- The Sass file architecture was reorganized for better maintainability - [see commit de2dc7f](https://github.com/salesforce-ux/design-system/commit/de2dc7f6bd5aff31998fb43254d438ec9cec8dc3) for a full breakdown of changes

## Release [2.0.2] - June 16, 2016

**SITE IA/ENHANCEMENTS**
- Revamped "Getting Started" section.
- Renamed "Design" section to "Guidelines"
- Moved "Accessibility" and "Voice & Tone" sections to Guidelines

**CHANGES**

The following changes have been made in this release:

- Pills now reference a token that allow for consistent heights in all context

**FIXED**

The following issues have now been resolved:

- Text inputs are referencing the correct 32px tall token - fixes https://github.com/salesforce-ux/design-system/issues/150
- Resolve issue where `<th>` stayed white on striped row when `slds-table_striped` is applied - fixes https://github.com/salesforce-ux/design-system/issues/232
- Toggle checkboxes are now aligned vertically with their label (`slds-form-element__label m-bottom--` › `slds-form-element__label slds-m-bottom_none`) — [Checkbox Toggle variant](/components/forms/#flavor-checkbox-toggle)

**REMOVED**

The following features are being removed in this release:

- Removed incorrect spec for lookups with active selection(s)

## Release [2.0.1] - June 6, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Grid system moved to utilities and renamed to "Grid"
- Media object moved to utilities
- New states added for button-groups showing overflow dropdown
- Cards variant navigation has been improved
- Data table variant navigation has been improved
- Lookup variant navigation has been improved
- List variant navigation has been improved

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Checkbox Toggle - [Checkbox toggle component](/components/forms/#checkbox-toggle)
- Checkbox Alternate - [Checkbox alternate component](/components/forms/#checkbox-alternate)
- Card - Related list with tiles - [Related list card with tiles component](/components/cards#flavor-related-list-with-tiles)
- Data Table - Basic and Advanced - [Data table component](/components/data-tables)
- Detail Panel with Inline Edit Form - [Detail panel component](/components/panels/#detail)
- Docked Composer - Voice Integration - [Voice docked composer component](/components/docked-composer/#voice)
- Modal with no header and/or no footer - [Modal component](/components/modals#flavor-base)
- Lookups spec updated - Single and Polymorphic - [Lookup component](/components/lookups)
- Page headers spec updated - [Page Header component](/components/page-headers/)
- Vertical Navigation for in-page navigation - [Vertical navigation component](/components/navigation#flavor-vertical)
- Radio Group Alternate - [Radio group alternate component](/components/forms/#radio-group-alternate)
- Tree Grid - [Tree grid component](/components/trees/#grid)

**ADDED**

The following classes are now available:

- Alignment utility - Absolute Center - [Alignment - Absolute center utility](/components/utilities/alignment)
- Interaction utilities - Link reset - [Interaction Utilities](/components/utilities/interactions)
- Text Utility - Heading label normal - [Heading label normal](/components/utilities/text/#heading-label-normal)
- Theme Utility - Light version theme texture - [Theme texture](/components/utilities/themes/#color)
- Position input icons on both sides of the input container - [Input](/components/forms/#flavor-input)
- Position utilities - Relative and Static - [Position Utilities](/components/utilities/position/)

**CHANGES**

The following changes have been made in this release:

- Overall, things will appear visually tighter
- Added additional space between buttons in the modal footer
- Font sizes have been reduced
- Page Headers are visually smaller
- Page Header details are now on white and align to the left
- Modals are visually tighter
- All buttons are visually smaller
- Form Elements are visually smaller
- Activity timeline sizing & spacing is reduced
- Visual density changes in cards
- Visual density changes in popovers
- "View all" links in cards and popover panels are now aligned to the right
- `slds-modal_content` should use the additive class of `slds-p-vertical_large` and `slds-p-horizontal_x-large`, instead of `slds-p-around_medium`.
- Removed first and last cell padding from Data Tables to allow nesting. New
  class `.slds-table_cell-buffer` can be added to the table or `.slds-cell-buffer_left` and `.slds-cell-buffer_right` for individual cell application.
- Field level help icon moved to the right of the input label
- Removed over-reaching a:focus styles due to a recent FFOX visual change
- Data table sortable headings now have actionable area so they can be focusable
- Improved interactions for resize element on data tables
- Docked Composer has improved markup, focusing on semantic structure and identifying the component correctly to Assistive Technology as a labelled `dialog`.
- Datepicker has improved markup, focusing on semantic structure and identifying proper aria roles for dates.
- Resolved semantic bug by making Pill container a `<span>`. `<a>` moved inside and adjacent to the close button.
- Notification Prompt has improved accessibility in better identifying the component to screen readers using `aria-role="alertdialog"`, `aria-labelledby` and
  `aria-describedby`. The redundant `slds-modal__close` button has also been removed.

**FIXED**

The following issues have now been resolved:

- Truncation class is added to headings in the Edit Form for Touch
- Removed max-height and animation on `.slds-section__content` to prevent collision with JavaScript implementations
- Fixed IE11 page header truncation bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Lookups have been updated. Version 1.0.0 has been deprecated. Will continue to work but please update to new markup - [Lookup component](/components/lookups)
- Page headers have been updated. Version 1.0.0 has been deprecated. Will continue to work but please update to new markup - [Page Header component](/components/page-headers/)
- `.slds-toggle-visibility` is no longer needed in button-groups. The final button will no longer disappear if it is a button-icon, but instead will gray down like a normal disabled button.
- `.slds-button-space-left` is no longer supported. Please use spacing utilities instead.
- `.slds-button_icon-bare` is no longer needed. Please use `.slds-button_icon` instead.
- `.slds-card_empty` is no longer needed. Please use `.slds-text-align_center` utility class instead.
- `.slds-button` inside of `.slds-is-sortable` is no longer needed. The entire cell is hyperlinked now, no need for the button.
- `.slds-form-element__helper` is no longer supported.
- `.slds-input__icon` no longer supports a color by default. Please use `.slds-icon-text-default` on the SVG icon instead.
- `.slds-icon__container` is no longer supported. Please use `.slds-icon_container` instead.
- `.slds-icon-custom-XX` is no longer supported. Please use `.slds-icon-custom-customXX` instead.
- `.slds-dropdown_nubbin-top` is no longer supported. Please use `.slds-nubbin_top` instead.
- `.slds-has-icon_left`, `.slds-has-icon_right`, and `.slds-has-icon_left-right` within dropdowns are no longer needed. Icons can be placed within the flow of a `.slds-dropdown__item`.
- `.slds-modal-backdrop` is no longer supported. Please use `.slds-backdrop` instead.
- `.slds-notify-container` is no longer supported. Please use `.slds-notify_container` instead.
- `.slds-pill-container` and `.slds-pill__container` are no longer supported. Please use `.slds-pill_container` instead.
- `.slds-pill__container_bare` is no longer supported. Please use `.slds-pill_container_bare` instead.
- `.slds-tabs__item` is no longer supported. Please use specific element selectors instead, such as `.slds-tabs_default__item` or `.slds-tabs_scoped__item`.
- `.slds-tooltip` and `.slds-tooltip__body` are no longer supported. Please use `.slds-popover` and `.slds-popover__body` instead.
- `.slds-tree-container` is no longer supported, please use `.slds-tree_container` instead.
- `.slds-col-rule_left`, `.slds-col-rule_right`, `.slds-col-rule_top`, and `.slds-col-rule_bottom` are no longer supported. Please use `.slds-col_rule-left`, `.slds-col_rule-right`, `.slds-col_rule-top`, and `.slds-col_rule-bottom` instead.
- `.slds-nowrap_small`, `.slds-nowrap_medium`, and `.slds-nowrap_large` are no longer supported. Please use `.slds-small-nowrap`, `.slds-medium-nowrap`, and `.slds-large-nowrap` instead.
- `.slds-align-content-center` is no longer supported. Please use `.slds-align_absolute-center` instead.
- `.slds-has-dividers` is no longer supported. Please use `.slds-has-dividers_{position}` instead.
- `.slds-has-divider` is no longer supported. Please use `.slds-has-divider_{position}` instead.
- `.slds-has-cards` is no longer supported. Please use `.slds-has-divider_around` instead.
- `.slds-has-cards_space` is no longer supported. Please use `.slds-has-divider_around-space` instead.
- `.slds-section-title` is no longer supported. Please use `.slds-section__title` instead.
- `.slds-collapsed` is no longer supported. Please use `.slds-is-collapsed` instead.
- `.slds-expanded` is no longer supported. Please use `.slds-is-expanded` instead.
- The rule that hides the close button in Notification Prompt `.slds-modal_prompt .slds-modal__close` is no longer needed as the HTML should be removed. Please remove the button from the dialog header.

**REMOVED**

The following features are being removed in this release:

- Removed the `$static-icon-path` configuration variable, since it wasn’t used anywhere in the codebase
- Removed `slds-button_small`, since it’s the same as the new default button size
- Removed `slds-input_small`, since it’s the same as the new default input size
- Removed `slds-tile__title`, since it didn't apply any styles

**🗒 Notes About Scoped CSS files, the Unmanaged Package, Visualforce and Lightning Components**

The Lightning Design System CSS is now automatically included for Lightning Components running in the Lightning Experience and Salesforce S1 mobile application (via `app.css`). It is no longer necessary to add a static resource for Lightning Components running within these environments.

Starting in 2.0.x, the Lightning Design System is no longer available as an unmanaged package. Also, the scoped CSS files (`salesforce-lightning-design-system-vf.css` and `salesforce-lightning-design-system-ltng.css`) are no longer distributed as part of the Design System zip file (available in the [Downloads](/downloads/) page). As an alternative, you may now generate your own scoped Design System zip file using the new [CSS Scoping Tool](https://tools.lightningdesignsystem.com/css-customizer) and upload it as a static resource as documented on the tool’s page. However, we strongly recommend that you do not install SLDS as a static resource when building for Lightning.

Resources:

- [CSS Scoping Tool](https://tools.lightningdesignsystem.com/css-customizer)
- [Using SLDS in Lightning](/platforms/lightning/)
- [Using SLDS in Visualforce](/platforms/visualforce/)

## Release [1.0.5] - May 26, 2016

- Adding a background color to icons from the [custom set](/icons/#custom) is now done using the `slds-icon-custom-customXX` class (e.g. `slds-icon-custom-custom25`), instead of `slds-icon-custom-XX` (deprecated). This change addresses [#203](https://github.com/salesforce-ux/design-system/issues/203)
- Improved accessibility of the [breadcrumbs component](/components/breadcrumbs/)
- The Design System now allows developers to load Salesforce webfonts using their preferred method instead of the default `@font-face` rules. To disable the default font loading method, set `$slds-load-webfonts: false;` before importing the Design System Sass file.
- The project is now compatible with Node.js 6
- Search! You can now get faster to components and the deepest parts of the documentation using the search field at the top of the navigation

## Release [1.0.4] - May 18, 2016

- Added `title` attributes to icon containers, noticeably improving accessibility for users of pointing devices such as mice and trackpads
- Improved the structure of the [icon component](/components/icons) section, making it easier for you to discover how to decorate your Lightning apps with our beautiful icons
- Fixed the standard call icon, which gets its fancy yellow background back, instead of a purple one that had been assigned to it for obscure reasons (we’ve put our best designers on the case!)
- Fixed [an issue](https://github.com/salesforce-ux/design-system/issues/208) where `npm install` would fail on Windows - which is only fair to our developer friends who are on PCs

## Release [1.0.3] - April 26, 2016

- Fixed Sass build issue for npm module

## Release [1.0.2] - April 8, 2016

- Added a link to an [archive of v1.0.0](https://design-system-v-1-0-0.herokuapp.com/), so you can access the documentation and downloads for that previous version
- Generated the unmanaged package for the 1.0.2 patch release
- Fixed the application's version number in the Sass configuration

## Release [1.0.1] - April 8, 2016

Happy birthday! The Lightning Design System turns 1...

**CHANGES**

The following changes have been made in this release:

- Improved accessibility in the record home variant of the page header component (remove multiple `<dl>` elements, and use a single `<ul>` instead) - [Page Headers](/components/page-headers/#record-home)


**FIXED**

The following issues have now been resolved:

- Use relative paths to point to assets, fixes a bug where running SLDS in certain environments would fail to load assets - Fixes [design-system/issues/83](https://github.com/salesforce-ux/design-system/issues/83)
- Form element breakpoints now fire at small breakpoint rather than large breakpoint - Fixes [design-system/162](https://github.com/salesforce-ux/design-system/issues/162)
- Fixed a bug in the Tree component that occurred in the scoped version of SLDS and prevented nested branches from being properly indented  - Fixes [design-system/issues/91](https://github.com/salesforce-ux/design-system/issues/91) and [design-system/issues/164](https://github.com/salesforce-ux/design-system/issues/164)
- Fixed the file naming structure so that standard Sass implementations can watch the entire project and compile the framework correct files on the fly.
- Fixed a bug where compilation would fail when using Ruby Sass - Fixes [design-system/issues/173](https://github.com/salesforce-ux/design-system/issues/173)


## Release 1.0.0 - March 2, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Components and their variants can now be built with states and will show up in the component variant & states navigation on the right, when available
- Improved Component Overview tables for more narrow readability
- Improved status labels. Now associated with colors and contain more information
- Markup and Style guidelines with BEM information - [Markup and Style Guidelines](/guidelines/markup-and-style/)
- Resources Information - [Resource Links](/articles/)
- Updated documentation and accessibility information for tabs - [Tabs](/components/tabs/)
- Improved Grid System documentation - [Grid System](/components/utilities/grid/)
- Copy updates on components to represent Voice & Tone Guidelines

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Docked Composer - [Docked Composer component](/components/docked-composer/)
- Picklist Multi Select menu - [Picklist Multi Select component](/components/menus/#picklist-multi-select)
- Fixed text with inputs [Input component state](/components/forms/#input)
- Inline Level Help - [Inline Level Help component](/components/forms/#inline-level-help)
- Sales Path - [Sales Path component](/components/process/#sales-path-coach)
- Setup Wizard - [Wizard component](/components/process/#wizard)
- Added an elegant way to add spacing between specific grid items — auto functionality in flexbox. [Alignment Item Bump Variant](/components/utilities/grid/#alignment-item-bump)
- Popover color themes added - [Popover Theme Variant](/components/popovers/#themes)
- Tree [Tree Base Component](/components/trees/) - Tree was completely rebuilt and is now a new component

Mobile:

- Dialog Menus for small form factor [Prompts for Touch](/components/notifications/#prompt-for-touch)
- Action overflow for touch - [Action Overflow component](/components/menus#action-overflow-for-touch)
- Added Edit dialog form for touch devices - [Edit Dialog for Touch component](/components/forms#edit-dialog-for-touch)
- Page Header - [Page Header component](/components/page-headers/#base)

**ADDED**

The following classes are now available:

- Added max-width sizing utilities - [Max Width sizing](/components/utilities/sizing)
- Added zero spacing utility classes - [Spacing utilities](/components/utilities/spacing/)
- Additional Grid System classes:
  - Added `.slds-grid_align-end` for horizontal alignment on main grid axis
  - Added `.slds-grid_vertical-align-end` and `.slds-grid_vertical-align-center` for vertical alignment on grid cross axis
  - Added `.slds-grid_stretch` for multi-row vertical stretch support
  - Added `.slds-grid_reverse` and `.slds-grid_vertical-reverse` to reverse the direction of the grid
- Added `.slds-text-error` for use on icons for validation errors
- Added color to user selection to force good contrast on dark backgrounds

**CHANGES**

The following changes have been made in this release:

- Removed Spinner gifs and refactored as CSS - [Spinner component](/components/spinners/)
- Source order of both Reversed and Double Media Objects changed. They are no longer reordered using flexbox' order property. [Media Objects component](/components/utilities/media-objects/)
- Activity Timeline reflects Media Object changes. Also removed `dl` with single `dt` & `dd` pairs and replaced with `span`s.
- Field-level help popover background color token update - [Popover colors](/components/popovers/#colors)
- Switched media queries to use `em` instead of `px`
- Removed icon color from `.slds-input__icon` so an icon color class is now additionally required
- Reordered tokens so large form factor has priority
- Moved Page Header theme from Utilities to its top-level component category [Page Header component](/components/page-headers/)
- Removed `.slds-m-top_x-small` in the page header and replaced with a new class `.slds-page-header__info`
- Vertical spacing adjusted on *small* viewport for `.slds-form_stacked`, `.slds-form_horizontal` and `.slds-form_inline`
- Widths of the Grid container change to `480px` for small, `768px` for medium, `1024px` for large and `1280px` for x-large.
- The last element inside `.slds-text-longform` now retains the bottom margin.

**FIXED**

The following issues have now been resolved:

- Fixed [#106](https://github.com/salesforce-ux/design-system/issues/106) Fix for scoping issue with tabs and active state - bug. Increased active tab state specificity
- Fixed [#61](https://github.com/salesforce-ux/design-system/issues/61) Fixed [#51](https://github.com/salesforce-ux/design-system/issues/51) Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding
- Fixed accessibility bug with required form elements
- Some tokens that were unable to be overridden by not having a `!default` flag have been resolved
- Compound fields markup has been updated that was causing display issues [Compound Fields](/components/forms/#compound-form)
- Fixed inverse button-group icon bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Deprecated `.slds-card_empty`. Use `.slds-text-align_center` instead. - [Card component](/components/cards/#empty)
- Deprecated `.slds-section-title`. Use `.slds-section__title` instead - [Section Title](/components/utilities/text/#section-title) for full details
- Deprecated `.slds-button_icon-bare`. Use `.slds-button_icon` instead - [Button Icon](/components/buttons/#icon)
- Deprecated tabs descendant selectors [Tabs component](/components/tabs/):
  - `.slds-tabs_default > slds-tabs__item` use `.slds-tabs_default__item` instead.
  - `.slds-tabs_default > slds-tabs__content` use `.slds-tabs_default__content` instead.
  - `.slds-tabs_default > a` use `.slds-tabs_default__link` instead.
  - `.slds-tabs_scoped > slds-tabs__item` use `.slds-tabs_scoped__item` instead.
  - `.slds-tabs_scoped > slds-tabs__content` use `.slds-tabs_scoped__content` instead.
  - `.slds-tabs_scoped > a` use `.slds-tabs_scoped__link` instead.
- Deprecated `.slds--tooltip`. Use `.slds-popover_tooltip` instead.
- Deprecated responsive `.slds-nowrap_{size}` classes due to inconsistent naming. Use `.slds-{size}_nowrap` instead.
- Deprecated `.slds-modal-backdrop` and `.slds-modal-backdrop_open` in favor of `.slds-backdrop` and `.slds-backdrop_open` to reuse in other components.
- Deprecated `.slds-col-rule_{position}` classes due to inconsistent naming. Use `.slds-col_rule-{position}` instead.

## Release 0.12.2 - February 8, 2016

**SITE IA**
- Add Getting Started > Markup and Style guidelines with BEM information

**CHANGES**
- Copy updates on components to represent Voice & Tone Guidelines
- Some tokens that were unable to be overridden by not having a !default flag has been resolved
- Reordered tokens so large form factor has priority
- Fix for scoping issue with tabs and active state - bug [#106](https://github.com/salesforce-ux/design-system/issues/106)
- Increased active tab state specificity

## Release 0.12.1 - December 16, 2015

**SITE IA**
- Improve status labels. Now associated with colors and contain more information
- Improve Component Overview tables for more narrow readability

**CHANGES**
- Apply proper accessibility requirements (aria-labelledby) to tabs (fixes https://github.com/salesforce-ux/design-system/issues/107). Updated documentation to reflect previous refactoring.
- Fix for inverse button-group icon bug
- Make `.slds-text-body_small` inherit theme color (fixes https://github.com/salesforce-ux/design-system/issues/123)
- Mark all list utilities "dev-ready" - [/components/utilities/lists](/components/utilities/lists)
- Field-level help popover background color token update
- Fix truncation on Sales Path (fixes https://github.com/salesforce-ux/design-system/issues/135)
- Fix chevron alignment on Sales Path - [/components/tabs#sales-path](/components/tabs#sales-path)
- Updated demo on buttons > neutral icon to demonstrate "mutton" - [/components/buttons#neutral-icon](/components/buttons#neutral-icon)
- Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding.

**NEW COMPONENTS**
- Custom Select container added, normalizes the `<select>` appearance in various browsers (fixes https://github.com/salesforce-ux/design-system/issues/122)

## Release 0.12.0 - November 18, 2015

**SITE IA**
- Added Resources > Links
- Changed tabs to use new refactored tab classes (deprecated)

**BREAKING CHANGES**
- Removed default horizontal spacing from buttons in favor of new spacing utilities (deprecated, see New Components below).
- Tabs have been refactored, changing descendent selectors to BEM syntax (deprecated)
- Changed source order of Media Objects > Reversed and Media Objects > Double (No longer reordering using flexbox order property)
- Adjusted Activity Timline > Base to reflect Media Object changes. Removed `dl` with single `dt` & `dd` pairs. Replaced with `span`s.
- `slds-modal-backdrop` and `slds-modal-backdrop_open` is deprecated in favor of `slds-backdrop` and `slds-backdrop_open` since it is used in other components.
- Removed icon color from `.slds-input__icon` so that an icon color class is required in addition

**CHANGES**
- Switched sizing utility media queries to use `em` instead of `px`
- Updated demo for icons > color and added `slds-text-error` for validation errors

**NEW COMPONENTS**
- Added initial state of tabs > sales path [/components/tabs#sales-path](/components/tabs#sales-path)
- Added max-width sizing utilities [/components/utilities/sizing](/components/utilities/sizing)
- Added button spacing utilities for stacked and horizontal sets of buttons (both a single class and a wrapper class) [/components/buttons#overview](/components/buttons#overview)
- Added stretched button utilities for full-width buttons on small form factors [/components/buttons#overview](/components/buttons#overview)
- Dialog Menus for small form factor
  - Action overflow for touch [/components/menus#action-overflow-for-touch](/components/menus#action-overflow-for-touch)
- Added Edit dialog form for touch devices [/components/forms#edit-dialog-for-touch](/components/forms#edit-dialog-for-touch)

**DEPRECATED**
- Buttons no longer have default horizontal spacing and require a class or wrapper to provide space
- Name change: Responsive button changed to Horizontal button
- `slds-modal-backdrop` and `slds-modal-backdrop_open` deprecated in version 0.12.0, use `slds-backdrop` and `slds-backdrop_open` instead
- Descendant selectors on tabs were changed to BEM syntax
  - `slds-tabs_default > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs_default__item` instead
  - `slds-tabs_default > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs_default__content` instead
  - `slds-tabs_default > a` deprecated in version 0.12.0, use `slds-tabs_default__link` instead
  - `slds-tabs_scoped > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs_scoped__item` instead
  - `slds-tabs_scoped > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs_scoped__content` instead
  - `slds-tabs_scoped > a` deprecated in version 0.12.0, use `slds-tabs_scoped__link` instead
- Descendant selector on `.slds-input__icon` fill color deprecated in version 0.12.0, use `slds-icon-text-default` (or any icon color class) on the icon in addition to the original class

## Release 0.11.0 - October 29, 2015

- Changed notifications > modal to notifications > modal-toast
- Modals > Taglines no longer has a `slds-modal__header p` selector. Instead, `slds-m-top_x-small` is placed on the `p` itself.
- Stateful button has a `[disabled]` state
- If button-groups need their final down icon to hide when [disabled], the `.slds-toggle-visibility` should be added to the icon. (This affects all page headers, and cards > base.)
- Nubbins shadows now have proper light source
- Removed interactive dropdowns from page header examples
- Added Google Analytics

**SITE IA**

- Moved tooltips to popovers, deprecated tooltip section [/components/popovers#tooltips](/components/popovers#tooltips)
- Moved Dropdowns into Menus, deprecated dropdowns sectio [/components/menus](/components/menus)
- Moved Picklist Dropdown Menu into Menus [/components/menus#picklist](/components/menus#picklist)
- Moved Multi-Select Picklist into Forms [/components/forms#multi-select](/components/forms#multi-select)
- Menus component variants are now more explicit
  - Dropdown
  - Dropdown with Icons
  - Dropdown Positioning
  - Picklist
  - Action Overflow
  - Search Overflow

**BREAKING CHANGES**

- Changed `.slds-tooltip` to `.slds-popover_tooltip`, `.slds-tooltip` will become deprecated (*).
- Deprecated `.slds-has-divider` (*), now requires a top or bottom direction appened, e.g. `.slds-has-divider_top`, `.slds-has-divider_bottom`
- Deprecated "Menu with Icons" dropdown variant
  - No longer depends on class names that deal with icon positioning
  - `.slds-dropdown__item` are set to `display: flex` with `justify-content: space-between` by default now. This allows for icon + text to be left aligned and a single icon to be positioned on the same axis to the right hand side. The icon + text that is positioned to the left requires an HTML element, like a `<p>` with the class `.slds-truncate` applied.
  - `.slds-has-icon`, `.slds-has-icon_left`, `.slds-has-icon_right` and children classes `.slds-icon_left`, `.slds-icon_right` have been deprecated but will persist in code base (*)
  - If user invokes selection on a dropdown item and wants feedback such a a checkmark, that SVG now requires a class of `.slds-icon_selected`
- <em> (*) Code is still in codebase but will be deprecated, TBD but preliminary removal of release 0.20.0</em>

**NEW COMPONENTS**
- Added notifications > prompt (modal-style alert) [/components/notifications#prompt](/components/notifications#prompt)
- Added Preview Panel Popovers [/components/popovers#panels](/components/popovers#panels)
- More directional support for popover nubbins [/components/popovers#nubbins](/components/popovers#nubbins)

## Release 0.10.2 - October 29, 2015
- Updated Icons to version 3.2.0
- Dropdown menus now have bottom positioning support, with accommodating nubbin support [/components/menus#dropdown-positioning](/components/menus#dropdown-positioning)
- Added Google Analytics

## Release 0.10.1 - October 21, 2015
- Hot fix for picklist width on datepicker
- `.slds-is-required` and `.slds-has-error` on form elements are now properly scoped within the `-vf`, `-ltng` and `-scoped` compiled css files
- Font size on datepicker properly displays within scoped compiled css files

## Release 0.10.0 - October 20, 2015

- Changed `.slds-button__icon` fill colors to use currentColor value to match text color changes
- Updated `.slds-button_icon-*` demo and fixed class name typo
- Added new button variant: `.slds-button_destructive`
- Removed max-width (960px) from Modals > Large
- Added new notification state in modals Notifications > Modal
- Added `.slds-no-flex` to SVG in Notifications > Toast (needed for modal application)
- Changed picklist label and selection list to fixed width. Applied a 5 option max-height with overflow on list.
- Upgraded `@salesforce-ux/design-tokens` to 1.3.1
- `@salesforce-ux/design-system` package now includes */assets/icons* and */assets/images*

**BREAKING CHANGES**
- Changed `.slds-button_icon-border-small` to `.slds-button_icon-x-small`. This aligns with our other icon names which separate sizing from style
- Brought inverse close icons into alignment with the other icon buttons. Class on `.slds-button` has an added `.slds-button_icon-inverse`. The class `.slds-button__icon_inverse` was removed from the SVG within.

**BUG FIXES**
- `.slds-button_icon-*` can be placed on an `a` and aligns to the center
- :hover, :focus state added for `.slds-button_icon-bare`
- fixed line-height in `.slds-button_icon-border-small` and `.slds-button_icon-bare`
- Added `overflow: auto;` to the options container for a Multi Select picklist

**NEW COMPONENTS**

- [Full-width button variant](/components/buttons#responsive) for small form factors
- [Feed and Comment components](/components/feeds) have been added
- [Publisher component](/components/publishers) has been added

**SASS UPDATES**

- Abstracted form states into own mixins
- Abstracted feed vertical rule into own mixin

## Site Update - October 20, 2015

- Fixed issues when installing with npm 3
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
- Internal SVG icon helper can use `<use xlink:href="..."></use>` now
- Miscellaneous typo fixes

## Release 0.9.1 — September 24th, 2015

- Fixed issue with npm module dependencies
- Fixes issue that caused deprecated design tokens to display

## Release 0.9.0 — September 9th, 2015

- Open Sourced: github.com/salesforce-ux/design-system
  - CSS files scoped in `.slds` have been added/updated for the following:
  - Visualforce (`-vf`)
  - Lightning Platform (`-ltng`)
  - General Use (Most likely in conjunction with other frameworks) (`-scoped`)

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

Lots of bug fixes and TLC.

[Unreleased]: https://github.com/salesforce-ux/design-system-internal/compare/v2.3.1...winter-18
[2.3.1]: https://github.com/salesforce-ux/design-system/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/salesforce-ux/design-system/compare/v2.2.2...v2.3.0
[2.2.2]: https://github.com/salesforce-ux/design-system/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/salesforce-ux/design-system/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/salesforce-ux/design-system/compare/v2.1.4...v2.2.0
[2.1.4]: https://github.com/salesforce-ux/design-system/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/salesforce-ux/design-system/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/salesforce-ux/design-system/compare/v2.0.3...v2.1.2
[2.0.3]: https://github.com/salesforce-ux/design-system/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/salesforce-ux/design-system/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/salesforce-ux/design-system/compare/v1.0.5...v2.0.1
[1.0.5]: https://github.com/salesforce-ux/design-system/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/salesforce-ux/design-system/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/salesforce-ux/design-system/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/salesforce-ux/design-system/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/salesforce-ux/design-system/compare/v1.0.0...v1.0.1
