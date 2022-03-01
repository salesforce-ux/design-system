<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Checkbox Release Notes

<!-- ## [Unreleased] -->

## 2.18.0

### Fixed
- Right to left legend to be right aligned and match the alignment of content.
- Checkbox margin to properly support RTL.

## 2.17.5

### Fixed
- Reverted layout changes originally introduced in 2.17.0

## 2.17.4

### Fixed
- Checkbox inputs will no longer collapse horizontally when a label with a large amount of text is used.
- All elements of an individual required checkbox (asterisk, input, and label) are now properly horizontally aligned.

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states

### Changed

- Labels will no longer wrap below the checkbox. When the label text wraps, it will now go directly under the previous line.

## 2.14.0

### Added

- Enabled styling hooks for checkbox. See checkbox's styling hooks overview table for a full listing of the currently available hooks.

## 2.11.5

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices:
  - Increase size of faux checkbox to `$square-tappable-x-small` (1.5rem)
  - Increase tap target size of `.slds-checkbox__label` to `$height-tappable` (2.75rem) and center with flex properties
  - Increase `font-size` of inline label to `$font-size-5` (1rem)
  - Increase size of `.slds-checkbox_standalone` to `$height-tappable` (2.75rem) for consistency with tap target size increases
  - Within `.slds-checkbox_standalone`, increase the tap target size of the checkbox input
- Ensure the checkbox input is hidden with `opacity: 0`

## 2.9.0

### Fixed

- Added @noflip annotation for correct alignment in RTL languages

## 2.8.0

### Added

- Added unchecked image based checkbox example [view mode checkbox - unchecked](/components/checkbox/?state=view-mode-unchecked&variant=form-element)
- Added checked image based checkbox example [view mode checkbox - checked](/components/checkbox/?state=view-mode-checked&variant=form-element)

## 2.7.0

### Added

- Added variant for a checkbox inside of a standard [form element component](/components/checkbox/?variant=form-element)

### Fixed

- Fixed [issue #556](https://github.com/salesforce-ux/design-system/issues/556) by increasing the font size on checkbox labels to match radio button labels
