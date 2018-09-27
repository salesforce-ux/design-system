<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Combobox Release Notes

<!-- ## [Unreleased] -->

## 2.8.0

### Added

- Added `slds-listbox__option-header` to increase font size to 14px, and apply bold font weight, on listbox option headers.
- Added a new variant for combobox that uses a dialog for the dropdown for situations like multi-selection

### Removed

- Removed `slds-text-title_caps` from listbox option headers.

## 2.7.0

### Added
- Added `slds-listbox__option-icon` to be used as a container that maintains the dimensions of an icon when it is removed from the HTML

### Fixed
- Increased z-index of entity icon when a selection is made to ensure icon is always on top of input field
- Fixed alignment of dropdown icon in object switcher
- Click events are no longer prevented on the grouped combobox in Firefox
