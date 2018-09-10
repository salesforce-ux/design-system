<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Trees Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Changed
- Removed `aria-selected` from the examples since this is only necessary if the tree supports multi-select
- Removed `role="application"` from the top level tree

### Fixed
- Replaced the `slds-size_1-of-1` surrounding the tree label with `slds-has-flexi-truncate` to prevent the label from overflowing the tree's boundary
