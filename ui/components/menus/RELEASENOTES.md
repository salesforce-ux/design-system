<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Menus Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Changed

- For touch devices:
  - Set tap target size of menu row item to `$height-tappable` (2.75rem)
  - Remove padding from `.slds-dropdown` after increased tap target size of menu row items
  - Set `font-size` of menu to `$font-size-5` (1rem)
- Remove `font-size` declaration from `slds-dropdown__header` to inherit `font-size` from `body` element
- Update `.slds-dropdown_fluid` to have a `min-width` set to `$size-x-small` (12rem) to prevent menus from being unreadable when associated with inputs that have a small width

### Added
- Added explicit `right: auto` to `slds-dropdown_left`

## 2.8.0

### Added

- 3 levels of status for menu items to alert the user - error, success, and warning

### Changed

- Increased font size to 14px applied bold font weight in `slds-dropdown__header`.

### Removed

- Removed `slds-text-title_caps` from menu sub headers.
