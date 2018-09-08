<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Tree Grid Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added

- Checkboxes in the left most column were added to multi select tree grids
- Multi select tree grids now require `aria-multiselectable="true"` applied to the `table` element.
- Multi select tree grids now require `aria-selected` to be set to `false` on every row that is not selected
- Single select tree grids were added as examples
- Headless tree grids were added
- Borderless tree grids were added

### Changed

- Tree grid now aligns better with the lightning component, which is an extension of [Advanced Data Table](https://www.lightningdesignsystem.com/components/data-tables/?modifiers=.slds-table_bordered&variant=advanced).
