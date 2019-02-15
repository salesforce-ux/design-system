<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Welcome Mat Release Notes

<!-- ## [Unreleased] -->
## 2.8.1

### Fixed
- Fixed vertical alignment of `slds-welcome-mat__info-content` in IE11.

## 2.8.0

### Added

- Splash variant for one-time interstitial purposes
- Info-only variant for informational purposes
- `slds-modal-small` to size Welcome Mat modal
- `slds-welcome-mat_info-only` can now set the `slds-welcome-mat__tiles` section to "info only" mode.
- Markup structure so that `slds-welcome-mat` and `slds-welcome-mat__content` are now within `slds-modal__content`

### Changed
- Removed `slds-welcome-mat` from `slds-modal`
- Removed `slds-welcome-mat__content` from `slds-modal__content`
- Moved `slds-grid` from `slds-modal__content` to `slds-welcome-mat__content`

### Deprecated
- Deprecated `.slds-welcome-mat .slds-modal-container` selector for `.slds-modal-small` to be applied to `slds-modal`. To upgrade existing welcome mat, in `slds-modal`, replace `slds-welcome-mat` with `slds-modal_small`, and also remove `slds-welcome-mat__content` from `slds-modal-container`. Markup structure changes need to be made existing code. First, wrap the existing content of `<div class='slds-modal-container'>` with `<div class='slds-welcome-mat__content slds-grid'>`. Then, wrap `<div class='slds-welcome-mat__content slds-grid'>` with `<div class='slds-welcome-mat'>`.

### Fixed
- Fixed vertical alignment of `slds-welcome-mat__info-content` in IE11.

## 2.7.0

### Changed

- Updated the semantics of steps in a welcome mat to be list items within an unordered list. Check out the component documentation for the [updated DOM structure](https://lightningdesignsystem.com/components/welcome-mat/)
