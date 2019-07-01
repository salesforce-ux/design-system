<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Progress Indicator Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Changed

- Updated how the vertical variant handles the layout of its indicators so pixel nudging becomes deprecated (e.x. `margin-left: 1px` on `.slds-progress__item.slds-is-completed .slds-progress__marker_icon`)
- For touch devices:
  - Increased tap target size of contained `.slds-button` to a height equal to `$height-tappable` using `:before` pseudo element
  - Increased icon and marker size to `$square-tappable-xx-small`
  - For vertical variant, increased font size to `$font-size-4`

## 2.8.1

### Fixed

- IE11: Layout issues when in a modal
