<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Modals Release Notes

<!-- ## [Unreleased] -->

## 2.19.0
### Changed
- Added tabindex to Footless example for programmatic focus use case.

## 2.18.0
### Changed

- Added `slds-modal__content_footless` class to example for clarity.
- Added clarifying notes around modal focus and header for accessibility, and modified Footless example to show tabindex.

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states.
- Added clarifying notes around modal focus for accessibility.
- Added `.slds-modal__content_headless` and `slds-modal__content_footless` classes for styling modal content.

### Changed

- Changed `header` and `footer` to generic `div` tags for better accessibility semantics.
- Changed assistive text for close buttons in modals, and added notes to accessibility documentation.
- Changed default header level from `h2` to `h1` for semantics and added more description around using headers in the Accessibility section.
- Removed redundant `title` attribute from modal close button.
- Updated use of `aria-describedby` attribute for modal content, and clarified in accessibility documentation section.
- Added the `role="presentation"` attribute to the modal backdrop.
- Moved `slds-modal__close` out of the modal header container and adjusted styles and annotations accordingly.
- Headless modal variant no longer requires `slds-modal__header` in the markup.

### Deprecated

- Deprecated older styles for previous markup of the `slds-modal__close` button.

## 2.14.0

### Added

- Added styling hooks for text color that let you set the `color` for the whole modal or a specific section.
- Added styling hooks for background color that let you set the `background-color` for the whole modal or a specific section.

### Fixed

- Fixed incorrect styling hooks on heading

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
