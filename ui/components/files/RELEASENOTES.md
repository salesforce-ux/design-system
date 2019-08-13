<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Files Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Fixed

- Scoped the eyeball hover effect to the figure link only.
- Added `display` and `overflow` css rules to allow for text truncation on `.slds-file__text`.

## 2.8.2

### Fixed

- Adjusted `z-index` for hover and focus state to not overlap modal overlays and the global header.

## 2.8.0

### Fixed

- Aligned `hover` and `focus` states to have matching styles
  - Added "Preview:" as accessible text via the `slds-assistive-text` utility.

## 2.7.0

### Added

- New class `sld-file_loading` for loading state.
  - In effort to prevent the hover styles from applying to the loading state, `slds-file_loading` is now added to `slds-file`.
- Class `slds-has-title` for when Files have a title applied.
  - `slds-has-title` is now added to `slds-file` to ensure the Preview icon (displayed in hover state) is properly centered.
  - This class should not be added when `slds-file_overlay` is used.
- `z-index` to titles and actions for non-loading states.
  - This is an effort to keep the new hover overlay styles from not covering the title and actions to keep them clickable.

### Changed

- New design treatment for hover state.
  - `box-shadow` and `transition` have been replaced with an overlay and absolutely-centered Preview icon.
  - This hover state does not appear on devices that do not support `hover` (e.g., mobile). Note that this does effect devices that supports both hover (e.g., touch) and no-hover (e.g., mouse) input devices, such as the Microsoft Surface.
- New option for loading state.
  - Added a loading spinner option for Files with and without a title.

### Fixed

- Improved the color contrast of the text placed on top of a file overlay
