<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Combobox Release Notes

<!-- ## [Unreleased] -->

## 2.17.3

## Fixed

- Fixed spacing/alignment issue in `.slds-input_faux > span` for select-only combobox without a placeholder.

## 2.16.2

## Removed

- Removed `display: flex` property from `.slds-combobox__form-element` which was added recently for ARIA 1.2 guidance.

## 2.16.0

### Changed

- Changed `slds-combobox__input` element from `input` to `button` per ARIA 1.2 guidance for select-only comboboxes.

- Updated to ARIA 1.2 compliance where these attributes are moved to the input, or button in the case of select-only: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`.

- Changed `@restrict` annotation of `.slds-combobox__input` from `.slds-combobox input` to `.slds-combobox__form-element input, .slds-combobox__form-element button`

- Changed `@restrict` annotation of `.slds-combobox__input-value` from `.slds-combobox input` to `.slds-combobox__input`


## 2.13.1

### Fixed

- Fixed erroneous camelcasing of `autocomplete` attribute.
- Small improvements to the UI text.

## 2.13.0

### Changed

- The assistive text for the listbox of pills has been moved out of the individual pills to remove repetition for users with screen readers.

## 2.12.2

### Changed

- Removed `<span class="slds-assistive-text">Current Selection:</span>` from Listbox options
- Updated guidance documentation regarding the usage of `aria-selected` and `aria-checked`

### Added

- Added `aria-checked="true"` to Listbox options when selected

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices:
  - Increase font-size and height of combobox height
  - Increase height of a listbox option
- Changed the size of icon in a plain listbox to inherit the size of the `body`
- Modified the spacing between pills when inside the context of a selection group

### Fixed

- Resolve issue with deprecated inline listbox not displaying correctly when multiple pills forces the container to grow
- Resolve issue where deprecated inline listbox was not the same height as other inputs

## 2.9.0

### Added

- Added styling for disabled listbox options

## 2.8.0

### Added

- Added `slds-listbox__option-header` to increase font size to 14px, and apply bold font weight, on listbox option headers.
- Added a new variant for combobox that uses a dialog for the dropdown for situations like multi-selection

### Removed

- Removed `slds-text-title_caps` from listbox option headers

## 2.7.0

### Added

- Added `slds-listbox__option-icon` to be used as a container that maintains the dimensions of an icon when it is removed from the HTML

### Fixed

- Increased z-index of entity icon when a selection is made to ensure icon is always on top of input field
- Fixed alignment of dropdown icon in object switcher
- Click events are no longer prevented on the grouped combobox in Firefox
