<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Input Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Added

- Updated documentation to state that iconLeft and fixed text labels are incompatible.
- When an `input` has an error, `aria-invalid="true"` has been added to the `input` element

### Changed

- Removed default `box-shadow` on `inputs` for Webkit
- Positioning of icons inside of inputs have been tweaked when on a touch device
- Added ltr declarations on `url`, `tel`, and `email` type inputs to prevent rtl adjustments from being inherited (these input types should always render ltr)

## 2.8.0

### Fixed

- Resolved issue where `slds-input__icon_left` and `.slds-input__icon` elements were positioned over labels when in horizontal form elements
