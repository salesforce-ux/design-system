<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# App Launcher Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

  ### Fixed

  - App Launcher did not use brand tokens for `:hover` and `:active` states
  - `.slds-app-launcher__tile` now uses `$brand-accessible` for its `:hover` state and `$brand-accessible-active` for its `:active` state

## 2.7.0

### Changed

- Updated the tile markup for improved accessibility and added features
  - Changed the outer element from an `<a/>` to a `<div/>` and removed `aria-describedby`
  - Replaced the grab handle icon with a stateful icon button, which will now be the keyboard accessilbe drag and drop control. Please [read the new section](https://www.lightningdesignsystem.com/components/app-launcher/#Reordering-tiles-via-drag-and-drop) in the documentation about specific implementation detials
  - Moved the tile link to the card title since the whole tile is no longer a link
  - Made the "more" overflow a tooltip trigger
