<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Vertical Navigation Release Notes

<!-- ## [Unreleased] -->
## 2.15.8

### Changed

- Replaced checked radio group navigation item background token with `BRAND_BACKGROUND_PRIMARY` branding token.

## 2.10.0

### Added
- Added right-to-left specific selector to `slds-nav-vertical__action_overflow slds-button__icon` to allow the icon to rotate in the proper direction in right-to-left languages.
- Added right-to-left specific selector to `slds-nav-vertical__action` to place the `box-shadow` in the correct location in right-to-left languages.

## 2.9.0

### Changed

- Replaced active navigation item background token with `BRAND_PRIMARY_TRANSPARENT_10` branding token.

## 2.8.0

### Changed

- Increased font size to 16px and applied bold font weight to `slds-nav-vertical__title`.
- Increased left padding in `slds-nav-vertical__action`.
- Changed background color of the selected `slds-nav-vertical__item` element in the shaded background example to be white.
- Moved the `aria-describedby` attribute from the individual navigation `<a />` links to the list `<ul>`.

### Removed

- Removed `slds-text-title_caps` from vertical navigation titles.
