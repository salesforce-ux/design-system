# Salesforce Lightning Design System
# Release notes

## Release X.X.X
**CHANGES**
- All buttons are visually smaller.
- Buttons now use `inline-flex` instead of `inline-block` for better centering
  of icons and text.
- Stateful buttons now use `inline-flex` instead of `block` to change content
  so items remain centered.
- `slds-button--small` is deprecated (since buttons are now the same size as
  it was).
- Refactored cards and picklist menu markup to no longer show
  `slds-button--small`. Since these are now the same height, leaving those
  classes in will no longer have any visual difference.
