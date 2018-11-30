<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Rich Text Editor Release Notes

<!-- ## [Unreleased] -->
## 2.7.5

### Fixed

- Resolved issue where table elements within a rich text editor output would improperly wrap

## 2.7.0

### Fixed

- Fixed incorrect `border-radius` in text area.
- Fixed a bug where child input elements were unintentionally affected when the Rich Text Editor was in an error state.

### Changed

- [New markup](https://www.lightningdesignsystem.com/components/rich-text-editor/?state=error&variant=base) that moves the error message outside of Rich Text Editor, and adds a `slds-form-element__control` element to enable left align labels.
