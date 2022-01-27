<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Buttons Release Notes

<!-- ## [Unreleased] -->

## 2.18.0

### Changed

- Removed `vertical-align` from button non-base variants to create vertical alignment consistency among all the buttons.

## 2.17.2

### Added

- Added `--slds-c-icon-color-foreground` Styling Hook to Button with Icon variant to accurately apply icon color updates
  - Due to how the Lightning Base Component is configured, this is required to allow CSS Custom Property reassignment to function within Button Icons

## 2.17.0

### Added
- Added Styling Hooks for Stateful Button and Dual Stateful Button.
- Added missing `slds`-namespaced Styling Hooks (originally added in 2.16.0)

## 2.16.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks
- Added CSS Custom Property reassignments for variants and states (e.g., focus, active, hover)

## 2.15.5

### Added

- Added `aria-pressed` attribute to stateful Button variants

## 2.15.0

### Added

- Added Kinetic styles and demo functionality for Button Base, Brand, Neutral, Inverse, Outline Brand, Destructive and Success

### Changed

- Changed `line-height` assignment in touch styles to use Styling Hook assignment of `--sds-c-button-line-height`.

## 2.14.0

### Added

- Added Styling Hook for box-shadow
- Added Styling Hook for block level padding

### Removed

- Removed component-level styling hooks for disabled states. These will be handled at the global level.
- Removed `--sds-c-button-inverse-color-border-focus`.

## 2.13.3

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
