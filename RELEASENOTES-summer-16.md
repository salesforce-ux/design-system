# Salesforce Lightning Design System
# Release notes

## Release X.X.X
**BREAKING CHANGES**
- Page Header markup structure is refactored for new design.

**CHANGES**
- Page Headers are visually smaller.
- Page Header details are now on white and align to the left.
- Modals are visually tigher.
- All buttons are visually smaller.
- Form Elements are visually smaller.
- `slds-button--small` is deprecated (since buttons are now the same size as
  it was).
- `slds-input--small` is deprecated (since inputs are now the same size as it was).
- Refactored cards and picklist menu markup to no longer show
  `slds-button--small`. Since these are now the same height, leaving those
  classes in will no longer have any visual difference.
- `slds-modal--content` should use the additive class of `slds-p-vertical--large` and `slds-p-horizontal--x-large`, instead of `slds-p-around--medium`.
