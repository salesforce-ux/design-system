<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Form Element Release Notes

<!-- ## [Unreleased] -->

## 2.18.0

### Fixed
- Fixed form element label to support RTL layout by removing left aligned spacing and placing it back on the opposite side. 

## 2.16.0

### Fixed

- Correctly position help text under the corresponding input when in horizontal layout.
## 2.14.0

### Fixed

- Adjusted space between the form label and the information button icon for Mobile.

## 2.13.7

### Changed

- Revert compound form to its existing behavior of not wrapping to prevent unwanted side-effects in existing layouts.

## 2.13.1

### Changed

- Removed Mobile example under Stacked Alignment and Horizontal Alignment examples, as they did not conform to the specification.

### Fixed

- Small improvements to the UI text.

## 2.13.0

### Changed

- The compound form now wraps when the width of its parent container is smaller than the combined width of the form elements. This prevents the issue of input values becoming cutoff and unreadable due to shrinking compound form elements in a container with a small width.
- When `.slds-form-element` is a child of `.slds-form-element_compound`, it now uses margins instead of padding for its horizontal spacing. This fixes the issue of dropdowns being incorrectly offset because the dropdown uses the extra space created by padding as its positioning reference.

## 2.12.2

### Fixed
- For touch devices, fixed an issue with button icons being the incorrect height if using custom elements.

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices:
  - Set the amount of space created for the edit icon to `$square-tappable` (2.75rem) which aligns with touch specific sizing
  - Increase the tap target size of `.slds-form-element__label` to `$height-tappable-small` (2rem), center with flex, and increase `font-size` to `$font-size-4` (0.875rem)
  - Set the tap target height of button-icons to `$height-tappable-small` (2rem) when inline with label text
  - Increase the font size of `.slds-form-element__static` to `$font-size-5` (1rem)
  - Within `.slds-form-element_readonly`, increase the size of `.slds-icon` to `$square-tappable-x-small` (1.5rem) and increase the height of `.slds-form-element__control` to `$height-tappable` (2.75rem) which aligns `.slds-form-element_readonly`'s touch height to other form elements
  - Remove the `min-height` from `.slds-form-element_readonly .slds-form-element__control` for denser read-only forms

## 2.8.1

### Fixed

- Resolved issue where left-aligned checkbox labels would become squished

## 2.8.0

### Added

- Added form classes for rows and columns, `slds-form__row` and `slds-form__item`
- Added `slds-form-element_stacked` to manage stacked form elements
- Added `slds-form-element_horizontal` to manage horizontal form elements
- Added `slds-is-edited` class to indicate if a form element has been edited but not saved
- Added `slds-form-element_undo` to wrap the undo button icon when a form element has been edited but not saved
- Added support for single column horizontal form elements with `slds-form-element_1-col`, used to re-distribute the ratio of label to control
- Added `slds-form-element_compound` to manage compound form elements
- Added `slds-form-element_address` for address specific compound form elements
- Added image based checkbox to record form

### Changed

- Added spacing around `slds-form-element` depending on densification settings
- Form labels will now hyphenate when a word with no spaces exceeds the available space of the label container

### Deprecated

- Deprecated `slds-form_stacked` for `slds-form-element_stacked`
- Deprecated `slds-form_horizontal` for `slds-form-element_horizontal`
- Deprecated `slds-form_compound` for `slds-form-element_compound`

## 2.7.5

### Changed

- Form labels will now hyphenate when a word with no spaces exceeds the available space of the label container

## 2.7.4

### Added

- Added `slds-form-element_address` for address specific compound form elements

### Fixed

- Resolved issue where empty form elements would collapse in view mode

## 2.7.3

### Fixed

- Resolved issue where Rich Text content would overflow the container of a form element in IE11

## 2.7.0

### Added

- Left aligned label support for components with help text icon and required asterisk
- Left aligned label support for `fieldset` and `legend` form elements
- Added `slds-form-element__readonly` to apply appropiate styling when a form element is in view mode

### Changed

- Reduced overall height of all view mode form elements
- Changed labels to be left-aligned when using `slds-form_horizontal`
- Changed HTML so a compound form's `slds-form-element__group` is wrapped inside of `slds-form-element__control`
- Changed HTML that moved the required asterisk inside of `legend` element
- Changed HTML that moved the help text icon to be adjacent to the `legend` element
- Changed HTML so `slds-form-element__legend` is now required on all `legend` elements
- Changed HTML so `slds-form-element__control` is now required to wrap all form controls
