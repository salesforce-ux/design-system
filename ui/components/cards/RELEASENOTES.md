<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Cards Release Notes

<!-- ## [Unreleased] -->
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
