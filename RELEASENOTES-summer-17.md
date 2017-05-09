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
- Added Visual Picker - [Visual Picker](/components/visual-picker)
- Added improved version of Vertical Navigation - [Vertical Navigation](/components/vertical-navigation/)
- Added a variant for Search input with loading spinner - [Input with Spinner](/components/input#flavor-with-spinner)

**ADDED**

The following classes are now available:

- Added `slds-has-input-focus` utility class to provide focus styles on an element
- Added `slds-dropdown--fluid` to adjust the width of a dropdown so it can be fluid to its container
- Added updated styles for base HTML elements in the Rich Text Editor.
- Added the same updated styles in the output of the Rich Text Editor using the `.slds-rich-text-editor__output` class.

**CHANGES**

The following changes have been made in this release:

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
- The [Button Icon](/components/button-icons/) component is required to have `slds-button--icon` applied to the `<button />` element. Before, `slds-button--icon-inverse`, `slds-button--icon-container`, `slds-button--icon-border`, `slds-button--icon-border-filled`, `slds-button--icon-border-inverse`, `slds-button--icon-more`, and `slds-button--icon-error` were used in conjunction with the `slds-button` classname but we now require `slds-button--icon` to be a part of this grouping of classnames.
- The [Stateful Button](/components/buttons#flavor-stateful) component is required to have `slds-button--stateful` applied to the `<button />` element
- The [Alert](/components/avatar/) component icon is now contained within `slds-icon_container`
- The [Toast](/components/toast/) component icon is now contained within `slds-icon_container`
- The [Page Header](/components/page-headers) component "entity" icon is now contained within `slds-icon_container`
- The [Feeds](/components/feeds/) component "Post" examples have been updated to be contained within the `slds-feed` list
- The [Compound Form Layout](/components/form-layout/#flavor-compound) example was updated so each `fieldset` is correctly using the `slds-form-element` class and the whole form is now contained in `slds-form--compound`
- Unless the HTML output is represented as a list — `ul`, `ol`, or `dl` — all examples were updated to use `slds-bottom--[position]` instead of `slds-has-divider--[position]`

**FIXED**

The following issues have now been resolved:

- Added truncation to menu dropdown sub heading - [Dropdown Menu](components/menus/#flavor-dropdown-dropdown-menu-header)
- Fixed a bug where the task2 icon corresponding class name was incorrectly named "task-2"
- Fix for `::-ms-clear` to remove native clear button in IE
- Whenever `slds-truncate` is used, it is required to be used in conjunction with a [title] attribute
- Whenever `slds-dropdown` is used, it is required to be contained inside an element that has the classname `slds-dropdown-trigger`
- Whenever `slds-form--stacked`, `slds-form--horizontal`, and `slds-form--compound` is used, it is required to be used in conjunction with `slds-form`
- Whenever `slds-icon-text-default`, `slds-icon-text-warning`, or `slds-icon-text-error` is used, it is required to be used in conjunction with `slds-icon`
- Scoped :focus style for data-tables to `slds-table`
- Fixed an issue where assistive text in an parent with `text-transform: uppercase` would get read as full-caps (e.g. "Sorted ascending" in data table headers getting read as

**ACCESSIBILITY**

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
  - When a `listbox` has option groups (a `slds-lookup__item--label`)
    - `ul` element has `role="group"` with an `aria-label` of the same text as the `slds-lookup__item--label` text
    - `slds-lookup__item--label`, becomes a presentational list item by placing it inside an `li[role="presentation"]` and being a child of the `ul`, as the `aria-label` on the `group` replaces its function
  - When a `listbox` has no option groups (no `slds-lookup__item--label`)
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
  - Add aria-expanded="false" by default to the `slds-tabs--path__link` which have `role="tab"`
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
