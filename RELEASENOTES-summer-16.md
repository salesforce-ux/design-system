# Salesforce Lightning Design System
# Release notes

## Release X.X.X
**BREAKING CHANGES**
- Activity timeline markup structure has changed. Detail areas for the items
  now use tiles and description lists for consistency.
- Page Header markup structure is refactored for new design.
- Removed first and last cell padding from Data Tables to allow nesting. New
  class `.slds-table--cell-buffer` can be added to the table or `.slds-cell-buffer--left` and `.slds-cell-buffer--right` for individual cell application.

**CHANGES**
- `.slds-timeline__item` is deprecated.
- Page Headers are visually smaller.
- Page Header details are now on white and align to the left.
- Modals are visually tigher.
- All buttons are visually smaller.
- Form Elements are visually smaller.
- Reduced data table row heights.
- Activity timeline sizing & spacing is reduced.
- `slds-button--small` is deprecated (since buttons are now the same size as
  it was).
- `slds-input--small` is deprecated (since inputs are now the same size as it
  was).
- Refactored cards and picklist menu markup to no longer show
  `slds-button--small`. Since these are now the same height, leaving those
  classes in will no longer have any visual difference.
- `slds-modal--content` should use the additive class of `slds-p-vertical--large` and `slds-p-horizontal--x-large`, instead of `slds-p-around--medium`.

**NEW COMPONENTS**
- [Context bar](/components/context-bar/)
- [Checkbox Toggle](/components/forms/#checkbox-toggle)
- [Tree Grid](/components/trees/#grid)
