<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Datepickers Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Fixed

- Fixed missing attribute `required` on date input

## 2.16.0

### Added

- Added examples for Required, Required with Error states
- Added hover style for dates
- Added `aria-label` to provide the full `DD MM YYYY` text of the date

### Fixed

- Fixed missing attribute `aria-current="date"` when today's date falls inside of a selected range

## 2.14.1

### Fixed

- Fixed typo in CSS Class Overview table for .slds-datepicker__filter_month

## 2.11.7

### Fixed

- Resolved incorrect spacing when nested in a data table by increasing specificity of certain `slds-datepicker` specific CSS selectors

<!-- ## [VERSION] -->

## 2.11.7

### Changed

- Replaced `slds-disabled-text` with specific selector `slds-day_adjacent-month` for dates outside of current month, so that they will be selectable but with a different text color that meets accessibility requirements.
