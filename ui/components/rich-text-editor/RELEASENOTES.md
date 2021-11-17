<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Rich Text Editor Release Notes

## 2.17.0

### Added
- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.

## 2.16.0

### Changed

- Removed the usage of the deprecated combobox. The Rich Text Editor now uses the current combobox.
- Updated [combobox](/components/combobox) to ARIA 1.2 compliance.

## 2.15.0

### Added
- Enabled styling hooks for Rich Text Editor. See Rich Text Editor's styling hooks overview table for a full listing of the currently available hooks.

## 2.14.0

### Added

- Increased nesting styles for Rich Text Editor output from 3 levels to 5 levels deep.

## 2.10.0

### Added

- Created Toolbar Only variant for use without attached textarea for touch devices

### Changed

- Removed size utility classes on combobox/selects in toolbar for component-specific classes (`slds-rich-text-editor__select_x-small` and `slds-rich-text-editor__select_xx-small`)

## 2.9.5

### Fixed

- Added text treatments for `<ins>` and `<del>`

## 2.7.5

### Fixed

- Resolved issue where table elements within a rich text editor output would improperly wrap

## 2.7.0

### Fixed

- Fixed incorrect `border-radius` in text area.
- Fixed a bug where child input elements were unintentionally affected when the Rich Text Editor was in an error state.

### Changed

- [New markup](https://www.lightningdesignsystem.com/components/rich-text-editor/?state=error&variant=base) that moves the error message outside of Rich Text Editor, and adds a `slds-form-element__control` element to enable left align labels.
