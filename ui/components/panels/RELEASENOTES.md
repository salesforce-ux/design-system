<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Panels Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Changed

- Updated panel headers to have left aligned text by default. To center the header title, use the class `slds-panel__header_align-center`.
- Updated `slds-panel_body` padding to be 0.75rem around instead of 1rem.
- Updated our documentation to reflect that panels always have a close button, but may also have a back button if panel was invoked by drilling in.

### Fixed

- Forced panel buttons to keep their square shape by preventing `flex-shrink`.
