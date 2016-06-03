# Salesforce Lightning Design System
# Release notes

## Release 2.0.0 - Future, 2016

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
- `slds-modal--content` should use the additive class of `slds-p-vertical--large` and `slds-p-horizontal--x-large`, instead of `slds-p-around--medium`.
- Removed first and last cell padding from Data Tables to allow nesting. New
  class `.slds-table--cell-buffer` can be added to the table or `.slds-cell-buffer--left` and `.slds-cell-buffer--right` for individual cell application.
- Field level help icon moved to the right of the input label
- Removed over-reaching a:focus styles due to a recent FFOX visual change
- Data table sortable headings now have actionable area so they can be focusable
- Improved interactions for resize element on data tables
- Docked Composer has improved markup, focusing on semantic structure and identifying the component correctly to Assistive Technology as a labelled `dialog`.
- Datepicker has improved markup, focusing on semantic structure and identifying proper aria roles for dates.
- Resolved semantic bug by making Pill container a `<span>`. `<a>` moved inside and adjacent to the close button.

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
- `.slds-button--icon-bare` is no longer needed. Please use `.slds-button--icon` instead.
- `.slds-card--empty` is no longer needed. Please use `.slds-text-align--center` utility class instead.
- `.slds-button` inside of `.slds-is-sortable` is no longer needed. The entire cell is hyperlinked now, no need for the button.
- `.slds-form-element__helper` is no longer supported.
- `.slds-input__icon` no longer supports a color by default. Please use `.slds-icon-text-default` on the SVG icon instead.
- `.slds-icon__container` is no longer supported. Please use `.slds-icon_container` instead.
- `.slds-icon-custom-XX` is no longer supported. Please use `.slds-icon-custom-customXX` instead.
- `.slds-dropdown--nubbin-top` is no longer supported. Please use `.slds-nubbin--top` instead.
- `.slds-has-icon--left`, `.slds-has-icon--right`, and `.slds-has-icon--left-right` within dropdowns are no longer needed. Icons can be placed within the flow of a `.slds-dropdown__item`.
- `.slds-modal-backdrop` is no longer supported. Please use `.slds-backdrop` instead.
- `.slds-notify-container` is no longer supported. Please use `.slds-notify_container` instead.
- `.slds-pill-container` and `.slds-pill__container` are no longer supported. Please use `.slds-pill_container` instead.
- `.slds-pill__container--bare` is no longer supported. Please use `.slds-pill_container--bare` instead.
- `.slds-tabs__item` is no longer supported. Please use specific element selectors instead, such as `.slds-tabs--default__item` or `.slds-tabs--scoped__item`.
- `.slds-tooltip` and `.slds-tooltip__body` are no longer supported. Please use `.slds-popover` and `.slds-popover__body` instead.
- `.slds-tree-container` is no longer supported, please use `.slds-tree_container` instead.
- `.slds-col-rule--left`, `.slds-col-rule--right`, `.slds-col-rule--top`, and `.slds-col-rule--bottom` are no longer supported. Please use `.slds-col--rule-left`, `.slds-col--rule-right`, `.slds-col--rule-top`, and `.slds-col--rule-bottom` instead.
- `.slds-nowrap--small`, `.slds-nowrap--medium`, and `.slds-nowrap--large` are no longer supported. Please use `.slds-small-nowrap`, `.slds-medium-nowrap`, and `.slds-large-nowrap` instead.
- `.slds-align-content-center` is no longer supported. Please use `.slds-align--absolute-center` instead.
- `.slds-has-dividers` is no longer supported. Please use `.slds-has-dividers--{position}` instead.
- `.slds-has-divider` is no longer supported. Please use `.slds-has-divider--{position}` instead.
- `.slds-has-cards` is no longer supported. Please use `.slds-has-divider--around` instead.
- `.slds-has-cards--space` is no longer supported. Please use `.slds-has-divider--around-space` instead.
- `.slds-section-title` is no longer supported. Please use `.slds-section__title` instead.
- `.slds-collapsed` is no longer supported. Please use `.slds-is-collapsed` instead.
- `.slds-expanded` is no longer supported. Please use `.slds-is-expanded` instead.

**REMOVED**

The following features are being removed in this release:

- Removed the `$static-icon-path` configuration variable, since it wasn’t used anywhere in the codebase
- Removed `slds-button--small`, since it’s the same as the new default button size
- Removed `slds-input--small`, since it’s the same as the new default input size
- Removed `slds-tile__title`, since it didn't apply any styles
