# Salesforce Lightning Design System
# Release notes

## Release 2.0.0 - Future, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Added additional space between buttons in the modal footer

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Context Bar - [Context bar component page](/components/navigation/#context-bar/)
- Checkbox Toggle - [Checkbox toggle component](/components/forms/#checkbox-toggle)
- Radio Group Alternate - [Radio group alternate component](/components/forms/#radio-group-alternate)
- Checkbox Alternate - [Checkbox alternate component](/components/forms/#checkbox-alternate)
- Tree Grid - [Tree grid component](/components/trees/#grid)
- Product Selector - [Product selector component](/components/product-selector/)
- Card with Simple Filtering - [Card component with filtering component](/components/cards/#with-filtering)
- Slide out Panel with Inline Edit Form - [Slide out panel component](/components/panels/#slide-out)
- Voice Integration - [Voice docked composer](/components/docked-composer/#voice)

**ADDED**

The following classes are now available:

- Utility - Light version theme texture - [Theme texture](/components/utilities/themes/#color)

**CHANGES**

The following changes have been made in this release:

- Page Header markup structure is refactored for new design.
- Font sizes have been reduced
- Page Headers are visually smaller
- Page Header details are now on white and align to the left
- Modals are visually tigher
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
- Reduced vertical padding on page header
- Removed over-reaching a:focus styles due to a recent FFOX visual change

**FIXED**

The following issues have now been resolved:

- Truncation class is added to headings in the Edit Form for Touch
- Removed max-height and animation on `.slds-section__content` to prevent collison with JavaScript implementations
- Fixed IE11 page header truncation bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

-

**REMOVED**

The following features are being removed in this release:

- `slds-button--small` has been removed (since buttons are now the same size as
  it was)
- `slds-input--small` has been removed (since inputs are now the same size as it
  was)
