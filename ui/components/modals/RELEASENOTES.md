<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Modals Release Notes

<!-- ## [Unreleased] -->

## 2.13.3

### Fixed

- Fixed incorrect styling hooks on footer.

## 2.13.1

### Fixed

- Fixed issue where mobile text size wasn't accurately sized.
- Small improvements to the UI text.

## 2.13.0

### Added

- Enabled styling hooks for modal. See modal's styling hooks overview table for a full listing of the currently available hooks.

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- Changed `slds-modal_small` width to percentage-based to address the disparity of size relationship between `slds-modal_small` and other sized modals `slds-modal_medium` and `slds-modal_large`)
- Deprecated use of `slds-text-heading_medium` utility class on Modal title, added class `slds-modal__title` to declare styles for the Modal title.
- For touch devices:
  - Set font weight of Modal title to `$font-weight-bold`
  - Set tap target size of the Modal close button to `$height-tappable` (2.75rem)

<!-- ## [VERSION] -->
