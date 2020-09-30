<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Buttons Release Notes

<!-- ## [Unreleased] -->

## 2.13.3

### Added

- Added Styling Hook for box-shadow
- Added Styling Hook for block level padding

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-button-color-text` => `--sds-c-button-text-color`.

## 2.13.1

### Fixed

- Added `background` shorthand and set to `initial` to recreate existing behavior that relied on the shorthand to apply initial values to unspecified values.
- Fixed issue where mobile text size wasn't accurately sized.

## 2.13.0

### Added

- Enabled styling hooks for button. See button's styling hooks overview table for a full listing of the currently available hooks.

## 2.12.0

### Changed

- Set the inverse button text color to 50% opacity when the button is disabled.

## 2.11.0

### Changed

- For touch devices, update the line-height token of `.slds-button` to use the touch-specific token `$height-tappable` (2.75rem) which is a system-wide touch token instead of using a component-specific token.

## 2.10.0

### Fixed

- Fixed poor color contrast of inverse buttons on hover and focus

### Changed

- Modify display of `slds-button` to `inline-flex`
- Center contents of contained Buttons with change of `display: inline-flex` to `slds-button`
- `justify-content: center` is now applied to the stretch variant `.slds-button_stretch` to ensure centered text after `inline-flex` was added to `slds-button`
- For touch devices:
  - Increase the line-height (which affects the overall visual height) to `$button-line-height-touch` (2.65rem)
  - Set the size of `.slds-button__icon` to `$square-icon-medium-content` (1rem)
  - Boldened Button labels

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
