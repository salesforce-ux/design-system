<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Popovers Release Notes

## 2.19

### Fixed

- Fixed hardcoded walk through header and alt image paths

<!-- ## [Unreleased] -->

## 2.18.0

### Changed

- Removed `@noflip` annotation from nubbins to make RTL behavior consistent

## 2.15.0

### Changed

- Base popovers
    - Footer background is now explicitly set to `$color-background` design token
    - Moved `slds-popover__header` into `slds-popover__body` and added a [Media Object](/utilities/media-objects/) wrapper to match prompt popover variant
    - Added variant with icon
    - Removed `slds-popover__header` bottom border
    - Added variant with badge above header
- Warning feedback state
    - Footer background color is now explicitly set to transparent
    - Body is now indented to align with header
- Error feedback state
    - Footer background color is now explicitly set to transparent
    - Body is now indented to align with header
- Prompt variant
    - Footer top border changed to match default popover border color and width
- Walkthrough variant
    - Removed header background image
    - Footer background color is now explicitly set to transparent

### Added

- Added light and dark Brand variants, including new selectors `.slds-popover_brand, .slds-popover_brand-dark, .slds-popover_brand-top, .slds-popover_brand-left, .slds-popover_brand-bottom, .slds-popover_brand-right`
- Added new Prompt branded variants
- Enabled styling hooks for popovers. See popovers' styling hooks overview table for a full listing of the currently available hooks.

## 2.13.1

### Changed

- Removed Mobile examples as they did not conform to the specification.

## 2.12.0

### Fixed

- Fixed the text color in form inputs for the Walkthrough variation.

## 2.11.7

### Added

- Added documentation and examples for mobile/touch context

## 2.10.0

### Added
- Added a new 'prompt' variant of popover useful for showing non-blocking messages needing interaction.
- Added `@noflip` annotation to left and right nubbin selectors.

## 2.8.0

### Fixed

- Improved the contrast for focus and hover states on the close button.

### Added

- Added `slds-popover_panel__label` to increase panel label font size to 14px and apply bold font weight.
- Added `slds-popover__footer_form` to center align content and add a background for footers of form popovers.

### Removed

- Removed `slds-text-title_caps` from panel labels.

## 2.7.0

### Added
- Added `slds-nubbin_*-corner` modifier classes to place nubbin elements at the corner of a Popover.

### Fixed

- Fixed a bug where long strings of text would overflow the popover boundary. Popover body, header, and footer now include `word-wrap: break-word`.
- Increased the contrast for focused links and buttons in our inversed popovers, Walkthrough and Feature.
- Fixed a bug that allowed `slds-popover_small` to grow larger than its expected width.
- Buttons with the new BEM syntax used within an inverse themed component no longer have their text color overridden.
