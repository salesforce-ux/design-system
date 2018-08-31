<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Scoped Tabs Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added
- Added `slds-tabs_medium` and `slds-tabs_large` to modify the `font-size` and spacing of the tab items
- Added `slds-tabs_scoped__overflow-button` to tabs with overflow so the Button Menu component can be slotted inside the tab item

### Changed
- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Changed the color of a tab item when a tab is active
- Changed HTML on [Tabs with Overflow](/components/scoped-tabs/?example=overflowing-items&variant=base) example so a Button Menu component is the trigger for the overflow menu
