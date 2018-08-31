<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Form Element Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added
- Left aligned label support for components with help text icon and required asterisk
- Left aligned label support for `fieldset` and `legend` form elements
- Added `slds-form-element__readonly` to apply appropiate styling when a form element is in view mode

### Changed
- Reduced overall height of all view mode form elements
- Changed HTML so a compound form's `slds-form-element__group` is wrapped inside of `slds-form-element__control`
- Changed HTML that moved the required asterisk inside of `legend` element
- Changed HTML that moved the help text icon to be adjacent to the `legend` element
- Changed HTML so `slds-form-element__legend` is now required on all `legend` elements
- Changed HTML so `slds-form-element__control` is now required to wrap all form controls
