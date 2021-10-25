<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Icons Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Removed

- Removed outdated documentation about changing background color, as this contradicts current Design System guidelines.
### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states

## 2.15.0

### Changed

- Changed `product_quantity_rules` icon's color from light blue to salem green (#04844B)

## 2.14.0

### Removed

- Removed hooks for modifying the status states of icons at the component level.

## 2.13.1

### Added

- `slds-current-color` to restricted classes.

## 2.13.0

- Enabled styling hooks for icon. See icon's styling hooks overview table for a full listing of the currently available hooks.

## 2.9.0

### Added

- Icon modifier class `slds-icon_flip` to horizontally flip icons.

## 2.7.0

### Added

- Icons can now be filled with the success text color by adding `slds-icon-text-success`.

### Fixed

- Fixed [issue #228](https://github.com/salesforce-ux/design-system/issues/228), which was causing x-small and xx-small circular icons to appear as ovals. Contribution made by [@geebru](https://github.com/geebru).
