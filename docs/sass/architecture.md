# Salesforce Sass Architecture

* ## UI
  The Salesforce CSS Framework

  * ### Dependencies
    These files do not compile CSS output on their own. This section includes
    at a global level:

    * #### Variables

      * **forceBase** — Tokens (variables) globally for all of Salesforce.
      * **s1Base** — Tokens (variables) specifically for Salesforce1/SFX.
      * Sass variables

    * #### Functions
      Sass functions that help make life easier. ;)

    * #### Mixins
      Globally used Sass mixins.

  * ### Components
    Core classes added for base styling text, layout and core object styling, as well as reusable components.
    (Currently in Elements directory till reorg/name change)

    * [Normalize](http://necolas.github.io/normalize.css/)
    * Root: Global selector, `html`, `body`, and text selection.
    * Type Elements
    * Table Elements
    * Form Elements: initial form element styling. Form components below.
    * Embedded Media
    * Text
    * Lists
    * Form helpers
    * Images
    * Grid
    * Media Object
    * Anchors
    * Buttons
    * Cards
    * Dialogs
    * Forms complex
    * Menus
    * Modals
    * Icons
    * Pills
    * Tiles
    * &hellip;

  * ### Helpers/Utilities
    Non-semantic helper classes for presentational purposes.

    * Spacing
    * Sizing
    * Truncation
    * Visibility
    * Scrolling
    * Accessibility

  * ### Layouts
    Specific page types.

  * ### Responsive
    Media queries for things like print and such.

* ## Site
  Lightning Design System site-specific CSS
