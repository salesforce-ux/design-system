<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Data Tables Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Added

- Added `slds-cell_action-mode` to blueprints of actionable data tables

## 2.15.2

### Added

- Added `aria-label`, and alternatively, `aria-labelledby` to allow adding additional table context for screen readers

## 2.15.1

### Changed

- Changed the `aria-live` value from `assertive` to `polite`

## 2.14.0

### Added

- Added `slds-cell_action-mode` class for styling cells in Action mode

## 2.12.1

### Changed

- Updated styles for resize handle if final column is resizable.

## 2.12.0

### Changed

- Changed `white-space` property to `pre-line` in `slds-cell-wrap` for cell content that has pre-formatted line breaks.
- Adjusted positioning for resize handle for better usability on touch devices, and made the handle visible in all cases

### Added

- Added documentation and examples for wrapping, line clamping and truncating table cell content.

## 2.11.8

### Changed

- Adjusted positioning for `slds-th__action-button` for better vertical alignment and made additional
  changes to support appearance in the touch implementation

## 2.11.7

### Changed

- Updated height and width dimensions on touch version of `slds-th__action-button`

## 2.10.0

### Changed

- Changed `slds-th__action-button` alignment to use `margin-top` instead of `transform: translateY`

## 2.8.0

### Changed

- Added bold font weight to `th` elements within table headers.

### Removed

- Removed `slds-text-title_caps` from table headers.

## 2.7.0

### Added

- Added a hidden header variation of the data table
  - This involves adding the `slds-table_header-hidden` class to the `<table>` and using the `slds-assistive-text` class on the `<thead>` to ensure the table remains accessible
- Multi select data tables now require `aria-multiselectable="true"` applied to the `table` element for both Advanced and Inline Edit variants.
- Multi select data tables now require `aria-selected` to be set to `false` on every row that is not selected

### Changed

- Data tables underwent some minor markup changes to help align all the different variants to use common markup patterns. No visual styling or functionality has changed, but you will notice more examples.

### Fixed

- Improved the color contrast of links inside of selected rows
