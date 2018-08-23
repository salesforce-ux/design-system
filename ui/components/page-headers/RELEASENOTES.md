<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Page Headers Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Changed

- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Removed hard coded bottom margin utility class from `slds-page-header__detail-block`
- Changed dimension of `slds-page-header__icon` to be 36x36

### Fixed

- Updated negative margin declaration for `slds-page-header__detail-row` to allow for proper transform.

### Deprecated

- Deprecated page header specific spacing tokens
  - PAGE_HEADER_SPACING_MARGIN
  - PAGE_HEADER_SPACING_PADDING
  - PAGE_HEADER_SPACING_ROW
