<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Input Release Notes

<!-- ## [Unreleased] -->

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
