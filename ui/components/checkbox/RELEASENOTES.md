<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Checkbox Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Changed

- For touch devices, increase size of faux checkbox to `$square-tappable-x-small`
- For touch devices, increase tap target size of `.slds-checkbox__label` to `$height-tappable` and center with flex properties
- For touch devices, increase `font-size` of inline label to `$font-size-5`
- For touch devices, increase size of `.slds-checkbox_standalone` to `$height-tappable` for consistency with tap target size increases
- For touch devices and within `.slds-checkbox_standalone`, increase the tap target size of the checkbox input
- Ensure the checkbox input is hidden with `opacity: 0`

## 2.9.0

### Fixed

- Added @noflip annotation for correct alignment in RTL languages

## 2.8.0

### Added

- Added unchecked image based checkbox example [view mode checkbox - unchecked](components/checkbox/?state=view-mode-unchecked&variant=form-element)
- Added checked image based checkbox example [view mode checkbox - checked](components/checkbox/?state=view-mode-checked&variant=form-element)

## 2.7.0

### Added

- Added variant for a checkbox inside of a standard [form element component](/components/checkbox/?variant=form-element)

### Fixed

- Fixed [issue #556](https://github.com/salesforce-ux/design-system/issues/556) by increasing the font size on checkbox labels to match radio button labels
