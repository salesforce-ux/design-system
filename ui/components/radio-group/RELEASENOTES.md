<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Radio Group Release Notes

<!-- ## [Unreleased] -->

## 2.18.0

### Added

- Added styling changes to support radio group with help text icon.
- Added examples: Required with help text icon and Right to left required with help text icon to documentation
- Added required with help text icon and tooltip example

### Fixed

- Right to left legend to be right aligned and match the alignment of content.

## 2.17.5

### Fixed
- Reverted label layout changes introduced in 2.17.0

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states

### Changed

- Labels will no longer wrap below the radio button. When the label text wraps, it will now go directly under the previous line.

## 2.14.0

### Added

- Enabled Styling Hooks for Radio Group. See Radio Group's Styling Hooks overview table for a full listing of the currently available hooks.

## 2.12.3

### Fixed

- Resolved issue where radio buttons would not retain their shape and appeared squished.

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices:
  - Increase tap size of `.slds-radio__label` to `$height-tappable`(2.75rem)
  - Increase the size of the faux radio element to `$square-tappable-x-small` (1.5rem)
  - Let the label text inherit its `font-size` from the body

## 2.7.0

### Added

- Added an example of a checked-and-disabled radio button.
