# Salesforce Lightning Design System
# Release notes

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
