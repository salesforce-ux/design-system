<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Carousel Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Fixed

- Swapped values for `aria-hidden` on Carousel panels.
  - In previous versions, the `true` and `false` values for `aria-hidden` were inadvertently reversed—`aria-hidden: true` was placed on open panels, and vice versa. This has now been updated to use the proper values for open and closed panels.
- Fixed bug that caused Carousel panels to be improperly sized in IE11.
