<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Data Tables Release Notes

<!-- ## [Unreleased] -->

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
