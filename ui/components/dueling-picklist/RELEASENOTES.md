<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Dueling Picklist Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Fixed

- Locked items now have `aria-disabled="true"` to improve accessibility and help indicate the locked item's immutable behavior within the listbox.
- Styling of locked items now inherits from `.slds-listbox__option[aria-disabled="true"]` and properly displays a disabled styling
- Removed `.slds-icon-text-default` from `.slds-icon` and replaced it with `.slds-current-color` on the icon's container `.slds-icon_container` so the icon's color matches the locked item's disabled color
- Removed `draggable` attribute from locked items as they are not draggable in the locked state

## 2.9.0

### Fixed

- Scrollbar not visible in narrow width containers
  - `slds-dueling-list__options` is no longer set to a fixed `max-width` and instead is limited to 100%

## 2.7.0

### Changed

- Wrapped `slds-dueling-list` element with `slds-form-element__control`.
- Removed `slds-text-title_caps` from label.
