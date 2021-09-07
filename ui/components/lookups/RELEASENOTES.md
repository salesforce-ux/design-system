<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Lookups Release Notes

<!-- ## [Unreleased] -->

<!-- ## [VERSION] -->

## 2.16.0

### Changed

- Updated [combobox](/components/combobox) to ARIA 1.2 compliance.

## 2.13.1

### Fixed

- Small improvements to the UI text.

## 2.13.0

### Changed

- The assistive text for the listbox of pills has been moved out of the individual pills to remove repetition for users with screenreaders.

## 2.11.0

### Added
- Grouped Lookup wrapping `<div>` attributes:
  -  `role="combobox"`
  -  `aria-haspopup="listbox"`
  -  `aria-expanded="true"`
- Grouped Lookup `<input>` attribute `aria-controls` set to id of adjacent table

### Changed

- Grouped Lookup `<input>` `role` from `combobox` to `textbox`
