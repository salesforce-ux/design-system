# Salesforce Lightning Design System
# Release notes

## Site Update - October 5th, 2015

- Clicking anchor links will position the anchor on the page a bit lower than the top of the window now
- Added typography documentation to design section
- Added examples for a checkbox fieldset and radio fieldset within the horizontal form modifier (salesforce-ux/design-system#11)

## Release 0.9.2 - October 5th, 2015

- Updated package.json to point to README for licensing information
- Upgrade icons to v3.1.0
- Updated small input styles
- Applied styles to fix the height of a select element when used [size] attribute is applied
- Forced stacking of checkbox and radio elements when inside a horizontal form modifier
- Updated picklist, font weight on item select, fixed time select dropdown

## Site Update - September 25th, 2015

- Doc changes
- Internal SVG icon helper can now use <use xlinkHref> now
- Miscellaneous typo fixes

## Release 0.9.1 — September 24th, 2015

- Fixed issue with npm module dependencies
- Fixes issue that caused deprecated design tokens to display

## Release 0.9.0 — September 9th, 2015

- Open Sourced: [https://github.com/salesforce-ux/design-system](https://github.com/salesforce-ux/design-system)
- CSS files scoped in `.slds` have been added/updated for the following:
  - Visualforce (`-vf`)
  - Lightning Platform (`-ltng`)
  - General Use (Most likely in conjuction with other frameworks) (`-scoped`)

### Site

- Content
  - Getting Started
    - Heroku Added
  - Design
    - Overview Added
    - Colour Added
    - Data Entry Added
    - Displaying Data Added
    - Messaging Added
  - Voice & Tone Added
  - Native -> iOS - Use our iOS integration to style your native iOS applications

### Components
**Many accessibility updates**

- Changed components to dev-ready: Button Groups, Cards, Tiles, Icons

- Lookups:
  - Accessibility Requirements added
  - Multi-Select Design and Markup updated
  - Multi-Scope Design and Markup updated
  - `.slds-lookup__control` has been deprecated, now uses `.slds-form-element__control`
- Pill Container Added `.slds-pill-container`
  - Can contain one or many pills, used on `.slds-lookup`
- Data-Tables
  - Row Selection (`.slds-is-selected`) and row selection hovers have been fixed
- Tabs
  - Updated tabs to have `aria-controls` with the same ID in the tab content container
- Tiles > Author and with-icon have empty alt added
- Datepickers > multi-select and Forms > compound-form have `small` element changed to `span`
- Card > All variants have DOM changed (header, section, footer changed to div)
- Data-tables > All variants have accessibility upgrades for `th role="row"`
- Forms > validation state now has additional errors surfaced for radio and checkbox
- Datepickers > All variants
  - Removed `role="button" aria-labelledby="bn_prev-label"`
  - Changed `div#month` to `H2` and removed `role="heading"`
  - Removed all tabindex
  - Removed `span#bn_prev-label` and `span#bn_next-label`
- Dropdowns > All variants have `aria-haspopup="true"` moved to the `button` (actionable element)
- Page headers > All variants have `role="banner"` added
- Picklists > Quickfind temporarily removed until DOM is updated

### Utilities
- Text > Faux Links has added cursor:pointer

Lots of bug fixes and TLC.

