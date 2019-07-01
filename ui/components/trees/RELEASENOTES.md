<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Trees Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Added
- Added right-to-left specific selector to `slds-tree__item` to place the `box-shadow` in the correct location in right-to-left languages.
- Added right-to-left specific selector to `slds-tree__item slds-button__icon` to allow the icon to rotate in the proper direction in right-to-left languages.

## 2.8.0

### Added
- Two new examples of trees; filterable and filtered trees, with a search input. These show how you can use an input to filter the contents of a large tree and highlight the search term in matching items

### Fixed
- Adjusted the alignment of the tree item text and chevron to be less reliant on button line height

## 2.7.0

### Changed
- Removed `aria-selected` from the examples since this is only necessary if the tree supports multi-select
- Removed `role="application"` from the top level tree

### Fixed
- Replaced the `slds-size_1-of-1` surrounding the tree label with `slds-has-flexi-truncate` to prevent the label from overflowing the tree's boundary
