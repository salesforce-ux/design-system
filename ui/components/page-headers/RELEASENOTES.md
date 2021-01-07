<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Page Headers Release Notes

<!-- ## [Unreleased] -->

## 2.15.0

### Fixed

- Fixed incorrect annotations for `.slds-page-header__col-title`, `.slds-page-header__col-actions`, `.slds-page-header__col-meta`, `.slds-page-header__col-controls`, and `.slds-page-header__col-details`.

## 2.8.0

### Changed

- Update padding for `slds-page-header` to use directionally aware variable spacing tokens.
- Update Record Home margins on `slds-page-header__detail-row` to correctly use directionally aware variable spacing tokens.

## 2.7.1

### Changed

- Reduce font-size of `slds-page-header__title` to 18px

## 2.7.0

### Added

- Added `slds-page-header_record-home` class to be used within a record home page. This class utilizes variable font tokens to respond to a user's densification setting.
- Made Related Lists Page Header visible, so you can see it. Yay! 🎉
- Added the following classes:
    - For layout:
      - `slds-page-header__row`, `slds-page-header__row_gutters`, `slds-page-header__col-title`, `slds-page-header__col-actions`, `slds-page-header__col-meta`, `slds-page-header__col-controls`, `slds-page-header__col-details`
    - For the page name:
      - `slds-page-header__name`, `slds-page-header__name-title`, `slds-page-header__name-switcher`, `slds-page-header__name-meta`, `slds-page-header__meta-text`
    - For header controls
      - `slds-page-header__controls`, `slds-page-header__control`,
    - For record home
      - `slds-page-header_record-home`
    - For record home details
      - `slds-page-header__detail-row`, `slds-page-header__detail-block`
    - For vertical record home list
      - `slds-page-header__detail-list`, `slds-page-header__detail-item`

### Changed

- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Changed dimension of `slds-page-header__icon` to be 36x36
- Pretty much all of it in a sizable refactor of the markup
  - Made it easier to componentize the page headers and share code between the different variants
  - Made page headers less reliant on utility classes
  - Please see above for added class names

### Deprecated

- Deprecated page header specific spacing tokens
  - PAGE_HEADER_SPACING_MARGIN
  - PAGE_HEADER_SPACING_PADDING
  - PAGE_HEADER_SPACING_ROW
