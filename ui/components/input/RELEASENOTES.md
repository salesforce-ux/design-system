<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Input Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added reassignment of Styling Hooks for component states.

### Changed

- `.slds-input_borders` now follows the prescribed usage guidelines and is only allowed on `readonly` Inputs.

## 2.16.2

### Removed

- Removed `width` property from `.slds-input_faux` which was added recently for ARIA 1.2 guidance.

## 2.16.0

### Added

- Created new class `slds-input_faux` to style read-only "inputs" where necessary for accessibility best practices, like combobox.

## 2.14.0

### Added

- Enabled styling hooks for Inputs. See Input's styling hooks overview table for a full listing of the currently available hooks.

## 2.13.1

### Fixed

- For inline help example:
  - Removed unnecessary `aria-labelledby` from `input`. A `label` was already associated with the `input`.
  - Moved `.slds-form-element__help` out of `.slds-form-element__control`, it is supposed to be a sibling in the markup structure.
  - Added `aria-describedby` to `input` which uses the `id` of the help message.
- Small improvements to the UI text.

## 2.12.0

### Fixed

- Resolved issue where Chrome on Android was rendering misaligned text for date-related input types.

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.2

### Fixed

- Resolved issue where Webkit-based browsers lost their platform-native styling
- Resolved issue with certain cases where an input's height would change after a value was defined

## 2.10.0

### Added

- Updated documentation to state that iconLeft and fixed text labels are incompatible.
- When an `input` has an error, `aria-invalid="true"` has been added to the `input` element

### Changed

- Removed default `box-shadow` on `inputs` for Webkit
- Added ltr declarations on `url`, `tel`, and `email` type inputs to prevent rtl adjustments from being inherited (these input types should always render ltr)
- For touch devices:
  - Increase the line-height to `$height-tappable` (2.75rem) for an improved tap target
  - For read-only inputs, increase the font size to `$font-size-5` (1rem) for consistency with the font sizes of other inputs
  - Positioning of icons inside of inputs have been tweaked

## 2.8.0

### Fixed

- Resolved issue where `slds-input__icon_left` and `.slds-input__icon` elements were positioned over labels when in horizontal form elements
