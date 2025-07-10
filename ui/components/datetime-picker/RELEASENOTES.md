<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Datetime Picker Release Notes

<!-- ## [Unreleased] -->
## 2.27.0

#### Added
- Added `aria-hidden` attribute to required datetime picker label asterisk to avoid being announced by screen reader to meet accessibility WCAG label criteria

## 2.25.4

### Updated

- Date format is now hidden via `.slds-assistive-text` by default. This remains hidden when there are errors present on the input.
- Date format becomes visible when the input has focus by removing `.slds-assistive-text`.
- Date format is shown as an example date prefixed with "Format: " (e.g., Format: 12/31/2024).

## 2.25.0

### Updated

- Updated datetime-picker component blueprint with the required date input format to improve accessibility and meet Web Content Accessibility Guidelines (WCAG).

## 2.22.0

### Added

- Tooltip option provided for Date/DateTime pickers.
- Added `slds-datetimepicker_has-tooltip` class to fix the icon misalignment issue.

## 2.17.0

### Fixed

- Fixed missing attribute `required` on date input

## 2.16.0

### Added

- Added `aria-label` to provide the full `DD MM YYYY` text of the date

### Added

- Added hover style for dates

### Changed

- Removed the usage of the deprecated combobox. The Datetime Picker now uses the current combobox.

## 2.13.0

### Changed

- Datetime Picker blueprints no longer use the deprecated variant `.slds-form_compound` on its parent `.slds-form`. Instead, it now uses `.slds-form-element_compound` on its parent `.slds-form-element`.
