# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.2.0 - Future, 2017

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:


**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Add Global Navigation Tab bar (Workspace Tabs) - [Global Navigation Tab bar](/components/global-navigation/#flavor-navigation-tab-bar)
- Added Checkbox Add Button - [Checkbox Add Button](/components/forms/#flavor-checkbox-add-button)

**ADDED**

The following classes are now available:

- Add `slds-float--none` utility - [Utilities › Floats › Float None](/components/utilities/floats/#flavor-float-none)
- Add design token: `FONT_FAMILY_TEXT`
- Add design token: `FONT_FAMILY_HEADING`
- Add design token alias: `SANS_SERIF`

**CHANGES**

The following changes have been made in this release:

- Global actions icon on global header updated to have a background color
- Change global header icon's color and size
- Change background color of docked panels
  - Docked Utility Panel - [Docked Utility Panel](/components/docked-utility-bar/#flavor-utility-panel)
  - Docked Composer Panel - [Docked Composer Panel](/components/docked-composer)
- Cards are now responsive - [Cards](/components/cards/)

**FIXED**

The following issues have now been resolved:

- Removed custom styled scrollbar mixin from `slds--scrollable-` helpers

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Design token: `FONT_FAMILY`

**REMOVED**

The following features are being removed in this release:

- `$css-prefix` is no longer available to change the prefix of `slds-` class names to something of your choice. As an alternative, please use this PostCSS plugin to customize class name prefixes: [postcss-slds-prefix](https://github.com/salesforce-ux/postcss-slds-prefix).
