<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Datepickers Release Notes

<!-- ## [Unreleased] -->
## 2.25.1

### Added

- Add outline for selected date
- Add outline for selected range of dates

## 2.25.0

### Added

- Add inline date format `div` with content `mm/dd/yyyy` for all datepickers that are not in error state.
- Add inline date format `div` with content `mm/dd/yyyy` for the date portion of all datetime-pickers that are not in error state.
- Add in focus accessibility guideline when closing calendar.

### Updated

- Updated datepicker component blueprint with the required date input format to improve accessibility and meet Web Content Accessibility Guidelines (WCAG).

## 2.24.5

### Added

- Added shadow for today's date to maintain accessibility

## 2.24.0

### Fixed

- Removed `aria-labelledby` from `<table />` element on the blueprint
- Update `aria-live` from "assertive" to "polite" and `aria-atomic` from "true" to "false" for the month title `<h2>` in `DatepickerHeader` on the blueprint

## 2.22.0

### Added

- Added datepicker example with field level tooltip

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
