<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Accordion Release Notes

<!-- ## [Unreleased] -->

## 2.18.0

### Fixed

- Fix for sass undefined operation compile error.
- Fix wrong computed css margin rules.

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks

## 2.16.0

### Added

- Added link to accessibility keyboard interaction guidelines.

## 2.14.0

### Added

- Added Styling Hook for the background color of Accordion headings.
- Added Styling Hooks for default text color, as well as hover/focus states, of Accordion headings.

### Changed

- The Accordion heading button will now take up all available space, allowing for a larger hit target to toggle the Accordion functionality.

## 2.13.0

### Added

- Enabled styling hooks for accordion. See accordion's styling hooks overview table for a full listing of the currently available hooks.

### Changed

- Updated heading elements from h3 to h2.

## 2.11.7

### Changed

- Adapted line height on accordion buttons to function better with multi-line instances.

## 2.11.5

### Changed

- Replaced `slds-truncate` with specific selector `slds-accordion__summary-content` in Accordion title so content will only truncate for larger screens.

## 2.10.0

### Added

- Added right-to-left specific selector to `slds-accordion__summary-action-icon` to allow the icon to rotate in the proper direction in right-to-left languages.

## 2.9.0

- Replaced `aria-hidden` with the HTML5 `hidden` attribute on closed `slds-accordion__section`s to hide content from both screen readers and browsers.

## 2.8.0

### Changed

- Updated Accordion title to respond to user's densification settings.

## 2.7.0

### Removed

- Removed hard coded text sizing utility class, `slds-text-heading_small`, from the `slds-accordion__summary-heading` element.
