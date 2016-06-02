# Salesforce Lightning Design System
# Release notes

## Release 2.0.0 - Future, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- New states added for button-groups showing overflow dropdown
- Cards variant navigation has been improved
- Data table variant navigation has been improved
- Lookup variant navigation has been improved
- Grid system moved to utilities and renamed to "Grid"
- Media object moved to utilities

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
- Page Header markup structure is refactored for new design.
- Font sizes have been reduced
- Page Headers are visually smaller
- Page Header details are now on white and align to the left
- Modals are visually tighter
- All buttons are visually smaller
- Form Elements are visually smaller
- Reduced data table row heights
- Activity timeline sizing & spacing is reduced
- Visual density changes in cards
- Visual density changes in popovers
- "View all" links in cards and popover panels are now aligned to the right
- `slds-modal--content` should use the additive class of `slds-p-vertical--large` and `slds-p-horizontal--x-large`, instead of `slds-p-around--medium`.
- Removed first and last cell padding from Data Tables to allow nesting. New
  class `.slds-table--cell-buffer` can be added to the table or `.slds-cell-buffer--left` and `.slds-cell-buffer--right` for individual cell application.
- Field level help icon moved to the right of the input label
- Reduced vertical padding on page header
- Removed over-reaching a:focus styles due to a recent FFOX visual change
- Data table sortable headings now have actionable area so they can be focusable
- Improved interactions for resize element on data tables
- Docked Composer has improved markup, focusing on semantic structure and identifying the component correctly to Assistive Technology as a labelled `dialog`.
- Notification Prompt has improved accessibility in better identifying the component to screen readers using `aria-role="alertdialog"`, `aria-labelledby` and
  `aria-describedby`. The redundant `slds-modal__close` button has also been removed.

**FIXED**

The following issues have now been resolved:

- Truncation class is added to headings in the Edit Form for Touch
- Removed max-height and animation on `.slds-section__content` to prevent collision with JavaScript implementations
- Fixed IE11 page header truncation bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- `.slds-toggle-visibility` is no longer needed in button-groups. The final button will no longer disappear if it is a button-icon, but instead will gray down like a normal disabled button.
- The rule that hides the close button in Notification Prompt `.slds-modal--prompt .slds-modal__close` is no longer needed as the HTML should be removed. Please remove the button from the dialog header.

**REMOVED**

The following features are being removed in this release:

- Removed `slds-button--small`, since it’s the same as the new default button size
- Removed `slds-input--small`, since it’s the same as the new default input size
- Removed the `$static-icon-path` configuration variable, since it wasn’t used anywhere in the codebase
