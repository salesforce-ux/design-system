# Salesforce Lightning Design System
# Release notes

## Release X.X.X
**BREAKING CHANGES**
- Activity timeline markup structure has changed slightly:
  `slds-text-body--small` has moved from the `ul` to the second `li`, and the
  first `li` now has `slds-text-heading--label-normal`.

**CHANGES**
- Buttons are visually smaller.
- Form Elements are visually smaller.
- Reduced data table row heights.
- Activity timeline sizing & spacing is reduced.
- `slds-button--small` is deprecated (since buttons are now the same size as
  it was).
- `slds-input--small` is deprecated (since inputs are now the same size as it was).
- Refactored cards and picklist menu markup to no longer show
  `slds-button--small`. Since these are now the same height, leaving those
  classes in will no longer have any visual difference.
