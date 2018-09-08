<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# List Builder Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added

- Added examples for list builders with disabled items and items selected by default.
- Added an example of a list builder with a headless table

### Changed

- List Builder now requires `aria-multiselectable="true"` applied to the `table` element.
- Each row now requires `aria-selected` to be set to `false` on every row that is not selected
