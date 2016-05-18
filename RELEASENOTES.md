# Salesforce Lightning Design System
# Release notes

## Release [1.0.4] - May 18, 2016

- Added `title` attributes to icon containers, noticeably improving accessibility for users of pointing devices such as mice and trackpads
- Improved the structure of the [icon component](/components/icons) section, making it easier for you to discover how and decorate your Lightning apps with our beautiful icons
- Fixed the standard call icon, which gets its fancy yellow background back, instead of a purple one that had been assigned to it for obscure reasons (we’ve put our best designers on the case!)
- Fixed [an issue](https://github.com/salesforce-ux/design-system/issues/208) where `npm install` would fail on Windows - which is only fair to our developer friends who are on PCs

## Release [1.0.3] - April 26, 2016

- Fixed Sass build issue for npm module

## Release [1.0.2] - April 8, 2016

- Added a link to an [archive of v1.0.0](https://design-system-v-1-0-0.herokuapp.com/), so you can access the documentation and downloads for that previous version
- Generated the unmanaged package for the 1.0.2 patch release
- Fixed the application's version number in the Sass configuration

## Release [1.0.1] - April 8, 2016

Happy birthday! The Lightning Design System turns 1...

**CHANGES**

The following changes have been made in this release:

- Improved accessibility in the record home variant of the page header component (remove multiple `<dl>` elements, and use a single `<ul>` instead) - [Page Headers](/components/page-headers/#record-home)


**FIXED**

The following issues have now been resolved:

- Use relative paths to point to assets, fixes a bug where running SLDS in certain environments would fail to load assets - Fixes [design-system/issues/83](https://github.com/salesforce-ux/design-system/issues/83)
- Form element breakpoints now fire at small breakpoint rather than large breakpoint - Fixes [design-system/162](https://github.com/salesforce-ux/design-system/issues/162)
- Fixed a bug in the Tree component that occurred in the scoped version of SLDS and prevented nested branches from being properly indented  - Fixes [design-system/issues/91](https://github.com/salesforce-ux/design-system/issues/91) and [design-system/issues/164](https://github.com/salesforce-ux/design-system/issues/164)
- Fixed the file naming structure so that standard Sass implementations can watch the entire project and compile the framework correct files on the fly.
- Fixed a bug where compilation would fail when using Ruby Sass - Fixes [design-system/issues/173](https://github.com/salesforce-ux/design-system/issues/173)


## Release 1.0.0 - March 2, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- Components and their variants can now be built with states and will show up in the component variant & states navigation on the right, when available
- Improved Component Overview tables for more narrow readability
- Improved status labels. Now associated with colors and contain more information
- Markup and Style guidelines with BEM information - [Markup and Style Guidelines](/getting-started/markup-and-style/)
- Resources Information - [Resource Links](/resources/links/)
- Updated documentation and accessibility information for tabs - [Tabs](/components/tabs/)
- Improved Grid System documentation - [Grid System](/components/utilities/grid/)
- Copy updates on components to represent Voice & Tone Guidelines

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Docked Composer - [Docked Composer component](/components/docked-composer/)
- Picklist Multi Select menu - [Picklist Multi Select component](/components/menus/#picklist-multi-select)
- Fixed text with inputs [Input component state](/components/forms/#input)
- Inline Level Help - [Inline Level Help component](/components/forms/#inline-level-help)
- Sales Path - [Sales Path component](/components/process/#sales-path-coach)
- Setup Wizard - [Wizard component](/components/process/#wizard)
- Added an elegant way to add spacing between specific grid items — auto functionality in flexbox. [Alignment Item Bump Variant](/components/utilities/grid/#alignment-item-bump)
- Popover color themes added - [Popover Theme Variant](/components/popovers/#themes)
- Tree [Tree Base Component](/components/trees/) - Tree was completely rebuilt and is now a new component

Mobile:

- Dialog Menus for small form factor [Prompts for Touch](/components/notifications/#prompt-for-touch)
- Action overflow for touch - [Action Overflow component](/components/menus#action-overflow-for-touch)
- Added Edit dialog form for touch devices - [Edit Dialog for Touch component](/components/forms#edit-dialog-for-touch)
- Page Header - [Page Header component](/components/page-headers/#base)

**ADDED**

The following classes are now available:

- Added max-width sizing utilities - [Max Width sizing](/components/utilities/sizing)
- Added zero spacing utility classes - [Spacing utilities](/components/utilities/spacing/)
- Additional Grid System classes:
  - Added `.slds-grid--align-end` for horizontal alignment on main grid axis
  - Added `.slds-grid--vertical-align-end` and `.slds-grid--vertical-align-center` for vertical alignment on grid cross axis
  - Added `.slds-grid--stretch` for multi-row vertical stretch support
  - Added `.slds-grid--reverse` and `.slds-grid--vertical-reverse` to reverse the direction of the grid
- Added `.slds-text-error` for use on icons for validation errors
- Added color to user selection to force good contrast on dark backgrounds

**CHANGES**

The following changes have been made in this release:

- Removed Spinner gifs and refactored as CSS - [Spinner component](/components/spinners/)
- Source order of both Reversed and Double Media Objects changed. They are no longer reordered using flexbox' order property. [Media Objects component](/components/utilities/media-objects/)
- Activity Timeline reflects Media Object changes. Also removed `dl` with single `dt` & `dd` pairs and replaced with `span`s.
- Field-level help popover background color token update - [Popover colors](/components/popovers/#colors)
- Switched media queries to use `em` instead of `px`
- Removed icon color from `.slds-input__icon` so an icon color class is now additionally required
- Reordered tokens so large form factor has priority
- Moved Page Header theme from Utilities to its top-level component category [Page Header component](/components/page-headers/)
- Removed `.slds-m-top--x-small` in the page header and replaced with a new class `.slds-page-header__info`
- Vertical spacing adjusted on *small* viewport for `.slds-form--stacked`, `.slds-form--horizontal` and `.slds-form--inline`
- Widths of the Grid container change to `480px` for small, `768px` for medium, `1024px` for large and `1280px` for x-large.
- The last element inside `.slds-text-longform` now retains the bottom margin.

**FIXED**

The following issues have now been resolved:

- Fixed [#106](https://github.com/salesforce-ux/design-system/issues/106) Fix for scoping issue with tabs and active state - bug. Increased active tab state specificity
- Fixed [#61](https://github.com/salesforce-ux/design-system/issues/61) Fixed [#51](https://github.com/salesforce-ux/design-system/issues/51) Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding
- Fixed accessibility bug with required form elements
- Some tokens that were unable to be overridden by not having a `!default` flag have been resolved
- Compound fields markup has been updated that was causing display issues [Compound Fields](/components/forms/#compound-form)
- Fixed inverse button-group icon bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Deprecated `.slds-card--empty`. Use `.slds-text-align--center` instead. - [Card component](/components/cards/#empty)
- Deprecated `.slds-section-title`. Use `.slds-section__title` instead - [Section Title](/components/utilities/text/#section-title) for full details
- Deprecated `.slds-button--icon-bare`. Use `.slds-button--icon` instead - [Button Icon](/components/buttons/#icon)
- Deprecated tabs descendant selectors [Tabs component](/components/tabs/):
  - `.slds-tabs--default > slds-tabs__item` use `.slds-tabs--default__item` instead.
  - `.slds-tabs--default > slds-tabs__content` use `.slds-tabs--default__content` instead.
  - `.slds-tabs--default > a` use `.slds-tabs--default__link` instead.
  - `.slds-tabs--scoped > slds-tabs__item` use `.slds-tabs--scoped__item` instead.
  - `.slds-tabs--scoped > slds-tabs__content` use `.slds-tabs--scoped__content` instead.
  - `.slds-tabs--scoped > a` use `.slds-tabs--scoped__link` instead.
- Deprecated `.slds--tooltip`. Use `.slds-popover--tooltip` instead.
- Deprecated responsive `.slds-nowrap--{size}` classes due to inconsistent naming. Use `.slds-{size}--nowrap` instead.
- Deprecated `.slds-modal-backdrop` and `.slds-modal-backdrop--open` in favor of `.slds-backdrop` and `.slds-backdrop--open` to reuse in other components.
- Deprecated `.slds-col-rule--{position}` classes due to inconsistent naming. Use `.slds-col--rule-{position}` instead.

## Release 0.12.2 - February 8, 2016

**SITE IA**
- Add Getting Started > Markup and Style guidelines with BEM information

**CHANGES**
- Copy updates on components to represent Voice & Tone Guidelines
- Some tokens that were unable to be overridden by not having a !default flag has been resolved
- Reordered tokens so large form factor has priority
- Fix for scoping issue with tabs and active state - bug [#106](https://github.com/salesforce-ux/design-system/issues/106)
- Increased active tab state specificity

## Release 0.12.1 - December 16, 2015

**SITE IA**
- Improve status labels. Now associated with colors and contain more information
- Improve Component Overview tables for more narrow readability

**CHANGES**
- Apply proper accessibility requirements (aria-labelledby) to tabs (fixes https://github.com/salesforce-ux/design-system/issues/107). Updated documentation to reflect previous refactoring.
- Fix for inverse button-group icon bug
- Make `.slds-text-body--small` inherit theme color (fixes https://github.com/salesforce-ux/design-system/issues/123)
- Mark all list utilities "dev-ready" - [www.lightningdesignsystem.com/utilities/lists]
- Field-level help popover background color token update
- Fix truncation on Sales Path (fixes https://github.com/salesforce-ux/design-system/issues/135)
- Fix chevron alignment on Sales Path - [www.lightningdesignsystem.com/components/tabs#sales-path]
- Updated demo on buttons > neutral icon to demonstrate "mutton" - [www.lightningdesignsystem.com/components/buttons#neutral-icon]
- Updated lists > description horizontal to use flexbox. No class change required. `dt` and `dd` can now accept sizing utilities. Change margin to padding.

**NEW COMPONENTS**
- Custom Select container added, normalizes the `<select>` appearance in various browsers (fixes https://github.com/salesforce-ux/design-system/issues/122)

## Release 0.12.0 - November 18, 2015

**SITE IA**
- Added Resources > Links
- Changed tabs to use new refactored tab classes (deprecated)

**BREAKING CHANGES**
- Removed default horizontal spacing from buttons in favor of new spacing utilities (deprecated, see New Components below).
- Tabs have been refactored, changing descendent selectors to BEM syntax (deprecated)
- Changed source order of Media Objects > Reversed and Media Objects > Double (No longer reordering using flexbox order property)
- Adjusted Activity Timline > Base to reflect Media Object changes. Removed `dl` with single `dt` & `dd` pairs. Replaced with `span`s.
- `slds-modal-backdrop` and `slds-modal-backdrop--open` is deprecated in favor of `slds-backdrop` and `slds-backdrop--open` since it is used in other components.
- Removed icon color from `.slds-input__icon` so that an icon color class is required in addition

**CHANGES**
- Switched sizing utility media queries to use `em` instead of `px`
- Updated demo for icons > color and added `slds-text-error` for validation errors

**NEW COMPONENTS**
- Added initial state of tabs > sales path www.lightningdesignsystem.com/components/tabs#sales-path
- Added max-width sizing utilities www.lightningdesignsystem.com/utilities/sizing
- Added button spacing utilities for stacked and horizontal sets of buttons (both a single class and a wrapper class) www.lightningdesignsystem.com/components/buttons#overview
- Added stretched button utilities for full-width buttons on small form factors www.lightningdesignsystem.com/components/buttons#overview
- Dialog Menus for small form factor
  - Action overflow for touch www.lightningdesignsystem.com/components/menus#action-overflow-for-touch
- Added Edit dialog form for touch devices www.lightningdesignsystem.com/components/forms#edit-dialog-for-touch

**DEPRECATED**
- Buttons no longer have default horizontal spacing and require a class or wrapper to provide space
- Name change: Responsive button changed to Horizontal button
- `slds-modal-backdrop` and `slds-modal-backdrop--open` deprecated in version 0.12.0, use `slds-backdrop` and `slds-backdrop--open` instead
- Descendant selectors on tabs were changed to BEM syntax
  - `slds-tabs--default > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs--default__item` instead
  - `slds-tabs--default > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs--default__content` instead
  - `slds-tabs--default > a` deprecated in version 0.12.0, use `slds-tabs--default__link` instead
  - `slds-tabs--scoped > slds-tabs__item` deprecated in version 0.12.0, use `slds-tabs--scoped__item` instead
  - `slds-tabs--scoped > slds-tabs__content` deprecated in version 0.12.0, use `slds-tabs--scoped__content` instead
  - `slds-tabs--scoped > a` deprecated in version 0.12.0, use `slds-tabs--scoped__link` instead
- Decendent selector on `.slds-input__icon` fill color deprecated in version 0.12.0, use `slds-icon-text-default` (or any icon color class) on the icon in addition to the original class

## Release 0.11.0 - October 29, 2015

- Changed notifications > modal to notifications > modal-toast
- Modals > Taglines no longer has a `slds-modal__header p` selector. Instead, `slds-m-top--x-small` is placed on the `p` itself.
- Stateful button has a `[disabled]` state
- If button-groups need their final down icon to hide when [disabled], the `.slds-toggle-visibility` should be added to the icon. (This affects all page headers, and cards > base.)
- Nubbins shadows now have proper light source
- Removed interactive dropdowns from page header examples
- Added Google Analytics

**SITE IA**

- Moved tooltips to popovers, deprecated tooltip section www.lightningdesignsystem.com/components/popovers#tooltips
- Moved Dropdowns into Menus, deprecated dropdowns sectio www.lightningdesignsystem.com/components/menus
- Moved Picklist Dropdown Menu into Menus www.lightningdesignsystem.com/components/menus#picklist
- Moved Multi-Select Picklist into Forms www.lightningdesignsystem.com/components/forms#multi-select
- Menus component variants are now more explicit
  - Dropdown
  - Dropdown with Icons
  - Dropdown Positioning
  - Picklist
  - Action Overflow
  - Search Overflow

**BREAKING CHANGES**

- Changed `.slds-tooltip` to `.slds-popover--tooltip`, `.slds-tooltip` will become deprecated (*).
- Deprecated `.slds-has-divider` (*), now requires a top or bottom direction appened, e.g. `.slds-has-divider--top`, `.slds-has-divider--bottom`
- Deprecated "Menu with Icons" dropdown variant
  - No longer depends on class names that deal with icon positioning
  - `.slds-dropdown__item` are set to `display: flex` with `justify-content: space-between` by default now. This allows for icon + text to be left aligned and a single icon to be positioned on the same axis to the right hand side. The icon + text that is positioned to the left requires an HTML element, like a `<p>` with the class `.slds-truncate` applied.
  - `.slds-has-icon`, `.slds-has-icon--left`, `.slds-has-icon--right` and children classes `.slds-icon--left`, `.slds-icon--right` have been deprecated but will persist in code base (*)
  - If user invokes selection on a dropdown item and wants feedback such a a checkmark, that SVG now requires a class of `.slds-icon--selected`
- <em> (*) Code is still in codebase but will be deprecated, TBD but preliminary removal of release 0.20.0</em>

**NEW COMPONENTS**
- Added notifications > prompt (modal-style alert) [www.lightningdesignsystem.com/components/notifications#prompt](www.lightningdesignsystem.com/components/notifications#prompt)
- Added Preview Panel Popovers [www.lightningdesignsystem.com/components/popovers#panels](www.lightningdesignsystem.com/components/popovers#panels)
- More directional support for popover nubbins [www.lightningdesignsystem.com/components/popovers#nubbins](www.lightningdesignsystem.com/components/popovers#nubbins)

## Release 0.10.2 - October 29, 2015
- Updated Icons to version 3.2.0
- Dropdown menus now have bottom positioning support, with accommodating nubbin support [www.lightningdesignsystem.com/components/menus#dropdown-positioning](www.lightningdesignsystem.com/components/menus#dropdown-positioning)
- Added Google Analytics

## Release 0.10.1 - October 21, 2015
- Hot fix for picklist width on datepicker
- `.slds-is-required` and `.slds-has-error` on form elements are now properly scoped within the `-vf`, `-ltng` and `-scoped` compiled css files
- Font size on datepicker properly displays within scoped compiled css files

## Release 0.10.0 - October 20, 2015

- Changed `.slds-button__icon` fill colors to use currentColor value to match text color changes
- Updated `.slds-button--icon-*` demo and fixed class name typo
- Added new button variant: `.slds-button--destructive`
- Removed max-width (960px) from Modals > Large
- Added new notification state in modals Notifications > Modal
- Added `.slds-no-flex` to SVG in Notifications > Toast (needed for modal application)
- Changed picklist label and selection list to fixed width. Applied a 5 option max-height with overflow on list.
- Upgraded `@salesforce-ux/design-tokens` to 1.3.1
- `@salesforce-ux/design-system` package now includes */assets/icons* and */assets/images*

**BREAKING CHANGES**
- Changed `.slds-button--icon-border-small` to `.slds-button--icon-x-small`. This aligns with our other icon names which separate sizing from style
- Brought inverse close icons into alignment with the other icon buttons. Class on `.slds-button` has an added `.slds-button--icon-inverse`. The class `.slds-button__icon--inverse` was removed from the SVG within.

**BUG FIXES**
- `.slds-button--icon-*` can be placed on an `a` and aligns to the center
- :hover, :focus state added for `.slds-button--icon-bare`
- fixed line-height in `.slds-button--icon-border-small` and `.slds-button--icon-bare`
- Added `overflow: auto;` to the options container for a Multi Select picklist

**NEW COMPONENTS**

- Full-width button variant for small form factors www.lightningdesignsystem.com/components/buttons#responsive
- Feed and Comment components have been added www.lightningdesignsystem.com/components/feeds
- Publisher component has been added www.lightningdesignsystem.com/components/publishers

**SASS UPDATES**

- Abstracted form states into own mixins
- Abstracted feed vertical rule into own mixin

## Site Update - October 20, 2015

- Fixed issues when installing with NPM 3
- Updated Voice and Tone guidelines

## Site Update - October 5th, 2015

- Clicking anchor links will position the anchor on the page a bit lower than the top of the window now
- Added typography documentation to design section
- Added examples for a checkbox fieldset and radio fieldset within the horizontal form modifier

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

- Open Sourced: github.com/salesforce-ux/design-system
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

[1.0.4]: https://github.com/salesforce-ux/design-system/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/salesforce-ux/design-system/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/salesforce-ux/design-system/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/salesforce-ux/design-system/compare/v1.0.0...v1.0.1
