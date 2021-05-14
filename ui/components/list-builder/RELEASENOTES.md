<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# List Builder Release Notes

<!-- ## [Unreleased] -->

## 2.16.0

### Changed

- Removed the usage of the deprecated combobox. The List Builder now uses the current combobox.
- Updated [combobox](/components/combobox) to ARIA 1.2 compliance.

## 2.13.0

### Changed

- The assistive text for the listbox of pills has been moved out of the individual pills to remove repetition for users with screenreaders.

## 2.11.0

### Changed

- List Builder now uses the new `.slds-checkbox-button` instead of the deprecated `.slds-checkbox_add-button`

## 2.7.0

### Added

- Added examples for list builders with disabled items and items selected by default.
- Added an example of a list builder with a headless table

### Changed

- List Builder now requires `aria-multiselectable="true"` applied to the `table` element.
- Each row now requires `aria-selected` to be set to `false` on every row that is not selected
