<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Buttons Release Notes

<!-- ## [Unreleased] -->

## 2.8.0

### Added

- New Dual Stateful variation, which acts similar to a [Toggle Button](/accessibility/patterns/togglebutton/#site-main-content), by using the `slds-button_dual-stateful` class.
  - This variation toggles between the styling of a neutral button and a brand button.
- Added `slds-button_stretch` modifier for adjusting any style button to take 100% width of its container
- Added examples of links that look like buttons (to be used sparingly)

### Changed

- Updated the disabled styling for the success, destructive, and outline brand buttons to be consistent across variants

### Fixed

- Prevented hover styling on success buttons when disabled

## 2.7.0

### Added

- `slds-button_text-destructive` modifier option, which is styled as an inverted `slds-button_descructive` button.
- Added selector for `:disabled` pseudo-class.

### Deprecated

- Deprecated the class `slds-button__icon_stateful`, which was located on the svg inside of the button. Use the Button Icon component with a small size modifier instead, `slds-button__icon slds-button__icon_small`.
