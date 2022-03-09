<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Pills Release Notes

<!-- ## [Unreleased] -->
## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added reassignment of Styling Hooks for component states.

## 2.14.0

### Changed

- Fixed incorrect styling hooks on focus state, suffix is now using `-focus` vs `-active`.

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-pill-color-text` => `--sds-c-pill-text-color`.

## 2.13.0

### Changed

- The assistive text for the listbox of pills has been moved out of the individual pills to remove repetition for users with screenreaders.
- Addressed layout inconsistencies for touch styles
- Clarified documentation around when linked pills can be used

### Added

- Enabled styling hooks for pill. See pill's styling hooks overview table for a full listing of the currently available hooks.
- Added example for Listbox of Pills in Group

### Changed

- Removed redundant `border-radius` on `.slds-pill:focus`

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices:
  - Increase tap target height of `.slds-pill` to `$height-tappable-small` (2rem) and change horizontal padding to `$spacing-small` (0.75rem)
  - Update spacing between pills to `$spacing-xx-small` (0.25rem)
  - Set padding of pill container to `$spacing-xx-small` (0.25rem)
  - Set `font-size` of `.slds-pill__label` to `$font-size-4` (0.875rem)
  - Update the padding of `.slds-pill__action`
  - Adjust the positioning of the icon inside a pill after padding updates

<!-- ## [VERSION] -->
