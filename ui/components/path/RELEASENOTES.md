<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Path Release Notes

<!-- ## [Unreleased] -->

## 2.13.0

### Changed

- Removed `role="application"` from `slds-path__scroller`.

## 2.11.5

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Changed

- For touch devices, increased the height and tap target size of the path component to `$height-tappable` (2.75rem)

### Fixed

- Fixed text disappearing when peaking between stage in Safari

## 2.9.0

### Added

- Added `slds-path__trigger-coaching-content` to create a full width coaching toggle in small regions.

### Changed

- Padding has been removed from `slds-path__track` to fix display issues when the Path is nested inside of a Card; of which is it's default state.
- Modified to be mobile first and responsive.
- Changed border radius to make circle and pill shaped buttons to square and rectangular shape.
- Removed horizontal rule under coaching title areas

## Fixed

- Flipped chevrons for RTL languages

## 2.8.0

### Changed

- Increased font size to 14px, applied bold font weight, and removed uppercase styling in `slds-path__coach-title`.

## 2.7.0

### Added

- Added `slds-path_has-coaching` hook on the `slds-path` container element, to add support for spacing differences between coaching and non-coaching.

### Changed

- Modified the appearance of the Path container.
- Revised the colors used on the active and curent Path steps, introducing support for borders.
- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting.
- Changed the direction of the coaching arrow to point to the right / down, instead of up / down. To take advantage of this change, remove the `slds-flip_vertical` class on the open state for `slds-path__trigger`, and instead use our new class `slds-path__trigger_open` to set the direction of the open state on the button arrow.

### Fixed

- Fixed text centering issue with first and last Path steps
- Fixed rotation transition on Path coaching toggle button
