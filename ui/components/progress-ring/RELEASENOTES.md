<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Progress Ring Release Notes


## 2.17.0

### Added

- Added a shape to the progress ring to better visually indicate value by more than color alone.

## 2.15.1

### Changed

- Completed progress rings now use `color-background-success-dark` design token.

## 2.13.0

### Changed

- Added sizing instructions to ensure a correct ratio.

## 2.12.0

### Fixed

- Resolved an IE11 issue with positioning of the `.slds-progress-ring__progress` element by setting more explicit position settings.

### Changed

- Set the blueprint recommendation to use a `<circle>` element instead of a `<path>` element when the completion of the progress circle is 100%. This change resolves an IE11 rendering issue with completed rings.

## 2.7.0

### Added

- Added an example of a progress ring that fills rather than drains, meaning the colored portion of the ring increases clockwise.
