<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## 2.11.0

### Changed

- Set `access:global` to the following tokens:
  - `brandPrimary`
  - `brandPrimaryActive`
  - `brandPrimaryTransparent`
  - `brandLight`
  - `brandLightActive`
  - `brandDark`
  - `brandDarkActive`
  - `brandAccessible`
  - `brandAccessibleActive`
  - `brandDisabled`
  - `brandContrast`
  - `brandContrastActive`
  - `brandBackgroundPrimary`
  - `brandBackgroundDark`
  - `brandTextLink`
  - `brandTextLinkActive`

- Primitive tokens now default to our warm gray color palette
  - `PALETTE_GRAY_1`: `#ffffff`
  - `PALETTE_GRAY_2`: `#fafaf9`
  - `PALETTE_GRAY_3`: `#f3f2f2`
  - `PALETTE_GRAY_4`: `#ecebea`
  - `PALETTE_GRAY_5`: `#dddbda`
  - `PALETTE_GRAY_6`: `#c9c7c5`
  - `PALETTE_GRAY_7`: `#b0adab`
  - `PALETTE_GRAY_8`: `#969492`
  - `PALETTE_GRAY_9`: `#706e6b`
  - `PALETTE_GRAY_10`: `#514f4d`
  - `PALETTE_GRAY_11`: `#3e3e3c`
  - `PALETTE_GRAY_12`: `#2B2826`
  - `PALETTE_GRAY_13`: `#080707`

## 2.10.0

### Changed

- Global tokens have been removed from this repository and are installed as a dependency from https://www.npmjs.com/package/@salesforce-ux/design-system-primitive-tokens

## 2.9.0

### Added

- Standard Set
  - ACTIONS_AND_BUTTONS
  - LETTERHEAD
  - INVOCABLE_ACTION
  - SHIFT_TYPE
  - SHIFT
  - CATEGORY
  - CATALOG
  - VISIT_TEMPLATES
  - INSTORE_LOCATIONS
  - STORE_GROUP
  - VISUALFORCE_PAGE
  - JAVASCRIPT_BUTTONS
  - SALES_CADENCE_TARGET

## 2.7.2

### Fixed

- Fixed issue where missing cssProperties would cause compilation issues