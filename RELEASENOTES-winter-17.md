# Salesforce Lightning Design System
# Release notes

<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

## Release 2.1.0 - Future, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- New Checkbox Toggle guidelines under [Data Entry section](/guidelines/data-entry/).
- New "Touch" section under "Components", where you’ll find patterns especially optimized for touch
- Link to Styling with Design Tokens on the platform added on [Design Tokens](/design-tokens/), [Lightning Components](/platforms/lightning/), and [Downloads](/downloads/) pages.
- Button Icon component has been moved out of Buttons and into its own category [Button Icon](/components/button-icon)
- Picklist component has been moved out of Menus and into its own category [Picklist](/components/picklist)

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- App Launcher - [App Launcher Component](/components/app-launcher/)
- Global Navigation - Standard context bar - [Global Navigation Component](/components/global-navigation)
- Global Header - [Global Header Component](/components/global-header)
- Docked Utility Bar - [Docked Utility Bar Component](/components/docked-utility-bar/#utility-bar)
- Filtering panel - [Filtering Panel Component](/components/panels/#filtering)
- Files - [File Components](/components/files/)
- File selector - [File Selector](/components/file-selector)
- Feed v2 - [Feeds Component](/components/feeds/)
- Indeterminate checkbox - [Indeterminate checkbox component](/components/forms/#flavor-checkbox)
- Button Icon Inverse - Bordered - [Button Icon Inverse with Border](/components/buttons/#icon-container)
- Button Icon Inverse - Hint Hover - [Button Icon with Hint Hover](/components/buttons/#icon-with-hint-hover)
- Button Icon Error - [Button Icon Error](/components/buttons/#flavor-icon)
- Image Cards - [Figure Card Component](/components/images/#flavor-figure)
- Image Ratios - [Figure Ratio Component](/components/images/#flavor-figure)
- Vertical Navigation color variation - [Vertical Navigation](/components/navigation/#flavor-vertical)

**ADDED**

The following classes are now available:

- Text color helpers - [Text color utilities](/components/utilities/text#color)
- Truncation containers [Truncation Container Utility](/components/utilities/truncation/#max-width)
- Absolute sizes utility classes: `.slds-size--xx-small`, `.slds-size--x-small`, `.slds-size--medium`, `.slds-size--large`, `.slds-size--x-large`, `.slds-size--xx-large` and their responsive equivalents - in [Utilities › Sizing](/components/utilities/sizing/)
- Text title utility - `.slds-text-title` - [Text Title](/components/utilities/text/#flavor-title)
- Hyphenation utility for non-truncated headings in narrow containers - [Utilities › Hyphenation](/components/utilities/hyphenation/)
- Position utilities - [Utilities › Postion](/components/utilities/position/)
- Text link utility - Made text inside of `.slds-text-link--reset` appear as a link - [Text Link](/components/utilities/interactions/#flavor-text-link)
- Horizontal and vertical padding can now be applied to `.slds-grid--padded` as `.slds-grid--padded-around-{size}`
- Table column borders - Added vertical column borders on a table by applying `.slds-table--col-bordered`
- Name/Value pair lists - 3 variations - horizontal, inline and stacked - [Name Value Pair lists](/components/utilities/lists/#flavor-name-value-pair)
- Generated grid column spans 1, 2, 3, 4, 5, 6, 7, 8, and 12 for all breakpoints
- Added archives for previous versions of the site for customers that can't upgrade yet. These site archives are currently available at the bottom of the [Downloads page](/downloads/)

**CHANGES**

The following changes have been made in this release:

- [CSS Scoping Tool](https://tools.lightningdesignsystem.com/css-customizer) is now only necessary when building components to be included in Visualforce
- [Using SLDS in Lightning](/platforms/lightning/) has been updated to include information about Lightning Out, Lightning Components for Visualforce, and Lightning Applications.
- Nubbins on [Popovers](/components/popovers/#flavor-nubbins) have been moved .5rem/8px closer to the respective edge of the popover to match the spec
- [Pills](/components/pills/) have been updated with a more accessible DOM. They are no longer made from an anchor, but instead contain the anchor. Documentation is updated. (Old pills will not break)
- [Checkbox Toggle](/components/forms/#flavor-checkbox-toggle) has an updated design with the ability to add custom words below the toggle
- [Checkbox](/components/forms/#flavor-checkbox) and [Radios](/components/forms/#flavor-radio) have been updated with a new, more accessible than ever DOM structure. (Your old DOM will not break.)
- Brightened yellow background on `mark` element.
- Text selected with your mouse is light blue.
- Renamed "slide-out" panel to "details" - [Detail Panel Component](/components/panels/#detail)
- Renamed "Base" data table to "Basic" data table - [Data Table Component](/components/data-tables/)
- Renamed Product Selector to List Builder - [List Builder Component](/components/list-builder/)
- Abstracted complex data table features into a variant named "Advanced" data table - [Data Table Component](/components/data-tables/#advanced)
- Improvements made to `.slds-text-link--reset` - [Text Link Reset](/components/utilities/interactions/#link-reset)
- Removed light font-weight from the text utility `.slds-text-heading--small` - [Text Heading Small Utility](/components/utilities/text/#heading-small)
- Removed `position: relative` from `.slds-grid`
- Feeds are now responsive
- Added close button to error popover so a screen reader can access popover
- Added animated waffle icon to Global Navigation [Global Navigation](/components/global-navigation/)
- Feeds:
  - Changed post's comment metric labels to lowercase
  - Added hint-hover to post's comment action overflow icon
  - Changed post's comment "link" text to use `.slds-color-link--weak`
  - Removed dotted line separator from post's attachment payload
  - Moved URL of post's attachment to the bottom of the content ordering
  - Removed truncation from preamble
  - Reduced white space between feed items
- Updated [Activity Timeline Email example](/components/activity-timeline/#flavor-email) to show the to and from with truncation

**FIXED**

The following issues have now been resolved:

- Recorded home vertical accessibility fixes
  - Added `aria-haspopup="true"` to action overflow buttons
  - Added assistive text for icon
  - Removed unnecessary aria roles from action overflow buttons
  - Improved assistive text verbiage
  - Made multiple value field entirely clickable to invoke dropdown
- Global header accessibility fixes
  - Modified tab order of global header actions
  - Added `title` attribute to global header actions
  - Changed avatar wrapper from anchor to a button
  - Allowed `.slds-assistive-text` to become visible on focus if `.slds-assistive-text--focus` is used
  - Added aria roles to global search input
  - Changed global search listbox options to be non-actionable
  - Moved "click enter to search" and "go to" options back into `<ul>` so they can be discovered by screen readers
  - Added `.slds-has-focus` to apply focus state on listbox options when keyboard interactions are used
  - Moved clear button to the right of the input to visually match tab order
- Lookup/Global Header Search accessibility fixes
  - Improved semantics of dropdown menus
  - Applied `role=separator` to dropdown menu list items that do not have an actionable element
  - Applied `role=presentation` to dropdown menu list items
  - Changed `<p>` wrapping dropdown menu items text to `<span>`
  - Dropdown menu items have a default `tabindex="-1"`, tab focused items changed to a `tabindex="0"`
- Utility bar accessibility fixes
  - Added landmark `role="footer"` to utility bar
  - Added `aria-label="Utility Bar"` description to utility bar
  - Added hidden heading to utility bar
  - Added aria `role=dialog` and `aria-labelledby` to utility bar panel
  - Changed panel header text to be wrapped in a heading with a id to reference the `aria-labelledby`
  - Placed utility bar buttons inside `<ul>`
- Files accessibility fixes
  - Fixed invalid markup by moving button group outside of anchor
  - Image overlay is now enabled by adding an extra html element before the image and adding the class `.slds-image--overlay`
- Card accessibility fixes
  - Moved `<header>` element to only contain the card header text, rather than the text and overflow menu
  - Changed `<p>` tags with truncation in related list markup to `<span>` tags
- Made primary labels of compound fields capital
- Dropdowns appear on icon focus within Global Navigation
- Labeled the dialog with the heading of the modal using `aria-labelledby="id_of_heading"` in the app launcher component
- Tables accessibility fixes: all tables now use the same truncation method when text is too long in a cell and show the full text when truncated text is hovered
- Accessibility fixes for list builder
- Fixed an issue where examples contained the same ID multiple times
- Feeds accessibility fixes
  - Comments are now list items in an unordered list structure
  - The browser shows a focus ring when avatars are focused
- Accessibility fixes to Menus and Picklist, including Menus used in composite SLDS components
  - Removed of `aria-expanded` on containers
  - `role="presentation"` added on list items to remove them from the accessibility tree
  - Corrected use of `menuitemcheckbox` for selectable menu items, with the use of `aria-checked` instead of `aria-selected`
  - Corrected sub heading menus which was split across multiple un-ordered lists
  - Included line separators and sub-heading separators into the accessibility tree with `role="separator"`
- Added `aria-describedby` on textarea element to show error message ID
- Added `aria-live` attribute to the stateful icon button
- Added `aria-describedby` on select element to show error message ID
- Added `aria-haspopup` on Activity Timeline menu buttons, and updated each list item to use an `<h3>` tag
- Added hyphenation code to popovers so that long words will break and wrap

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- Feeds v1 - Design has changed to v2 - [Feeds v2 Component](/components/feeds/)
- Text heading label utility - Use Text title utilities instead - [Text Title](/components/utilities/text/#flavor-title)

**REMOVED**

The following features or demos are being removed in this release:

- Context Bar has been removed and replaced with Global Navigation Component - [Global Navigation Component](/components/global-navigation)
- Removed inverse and state themes from examples to provide clarity of usage.
