<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Textarea Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Fixed

- Removed `box-shadow` added by Firefox for all required fields.
  - By default, Firefox was adding a `box-shadow` to all fields marked `required`. This has now been normalized to match the styling in all other browsers.
