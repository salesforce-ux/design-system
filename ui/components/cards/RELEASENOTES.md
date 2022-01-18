<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Cards Release Notes

<!-- ## [Unreleased] -->

## 2.17.1

### Changed

- Fixed annotation for Einstein themed cards (`.slds-einstein-header__figure`)

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added reassignment of Styling Hooks for component states.
- Added clarification about card header icon assistive text.
- Added clarification about card heading levels for accessibility.

## 2.15.1

### Added

- Added annotations for Einstein themed cards

## 2.14.0

### Added

- Enabled styling hooks for Cards. See Card's styling hooks overview table for a full listing of the currently available hooks.

## 2.11.6

### Added

- Added documentation and examples for mobile/touch context

## 2.11.0

### Fixed

- Added `display: flex` to `.slds-card__header-title` to enable truncation on contained link that already has `slds-truncate`

## 2.10.0

### Changed

- Visually remove border and set border-radius to zero for touch devices
- For touch devices:
  - Set font size of `.slds-card__header-title` to `$var-font-size-6` (1.125rem)
  - Make `.slds-card__header-title` always bold whether it contains a link or not

## 2.8.1

### Fixed

- Fixed collapsing issue when `slds-assistive-text` would be applied to `slds-card__header`

## 2.7.0

### Changed

- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
