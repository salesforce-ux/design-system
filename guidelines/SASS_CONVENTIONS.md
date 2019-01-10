# Sass Styleguide

We want to make our Sass files easy to read and collaborate with. Therefore, we use the newer SCSS syntax of Sass instead of the original whitespace-sensitive syntax.

> For more information on the Sass syntax, check out the documentation (http://sass-lang.com/guide).

Note that most of these rules are enforced during development and at build time via linting tools such as SCSS-Lint.

* Use 2 spaces for file indention (not tabs).
* All rules should be return/indented (meaning no single line selectors for scannability/nesting reasons).
* There should be a line between each rule. This includes nested rules which shouldn’t be placed directly beneath their parent.
* All properties should be placed directly beneath their class name followed by any nesting that should happen.
* Properties should be grouped in this order:
    * mixins
    * appearance
    * box-sizing (if override needed)
    * layout
        * positioning
        * floating
        * flexing
        * css tables
        * other displays
    * sizing
        * width
        * max-width
        * min-width
        * height
        * max-height
        * min-height
    * spacing
        * margin
        * border
        * padding
    * masking
        * overflow
        * clip
    * typography
        * font-style
        * font-weight
        * font-size
        * line-height
        * font-family
        * list-style
        * etc
    * theming
        * background-color
        * box-shadow
        * color
        * text-shadow
    * interaction
        * cursor
        * resize
    * animations & transitions

**For example:**
```Sass
.button {
  // Mixins
  @include mixin($props);
  // Appearance
  -webkit-appearance: none;
  // Layout
  position: relative;
  display: inline-block;
  // Spacing
  margin: 0;
  border: $border-width-thin solid $color-border-button-default;
  padding: 0 $spacing-medium;
  // Masking
  background-clip: padding-box;
  // Typography
  font-weight: 400;
  font-size: $font-size-medium;
  line-height: $line-height-button;
  text-align: center;
  text-decoration: none;
  white-space: normal;
  // Theming
  background: $color-background-button-default;
  border-radius: $border-radius-medium;
  color: $color-text-button-default;
  // Interactions
  user-select: none;
  cursor: pointer;
  // Animations
  transition: all .5 ease;
}
```
### Naming

BEM naming conventions should be used. Remember Lightning Design System is an application framework, not a site — and as such code needs to be both understandable, predictable and maintainable.

* `.block { }` — higher level of an abstraction or component - the special, understandable class you create.
* `.block__element { }` — a descendant of .block that helps form it - an element of that component (double underscore).
* `.block_modifier { }` — a different state or extension of .block (underscore)
* `.container-block { }`  — a parent container of a .block 

Naming conventions should broadcast intent and not be too generic.

### Selectors

To avoid conflict with other technologies, we prefix all our classnames with `slds-`.

**Best Practices**

* Selectors should be written to be additive. Try to avoid having to reset and undo styles repeatedly.
* Using classes for each item to decouple from markup (`.calendar`, `.calendar-week`, `.calendar-day` vs `.calendar tr`, `.calendar td`)
* Avoiding a single-purpose-class situation unless its a utility helper.
* If you need to overwrite styles from an existing SLDS classname, please add your own scoped class to the component and style that class.

```HTML
// HTML
<article class="slds-card myCard">
    ...
</article>
```
```Sass
// CSS
.myCard {
    background: white;
}
```
**Anti-patterns:**

* Do not use IDs for styling (as it increases specificity). IDs should be used for JavaScript and Aria.
* Avoid qualifying selectors (`ul.foo`). This makes styles much harder to reuse and also increases specificity.

Avoid styling type selectors beyond an initial normalize and reset. Styles should not be created using a class and a type selector as below:

```Sass
.slds-page-area button { /* this is overreaching */ }
```

Instead the button in the above example should be given a specific class (or two).

### Commenting

See Documentation Styleguide + Parser.

### Variables

Use variables for reusable styles like colors and sizing, generated from design tokens. 

### Helper/Utility Classes

Try to limit the use of margin and padding utility classes within components as this limits our ability to override for media queries. Instead, place a class on the element that needs the margin or padding and use a token in the selector.

### Nesting

Nest selectors to avoid repetition.
The parent selector (`&`) helps with tacking on chained classes and pseudo-classes. It should not be used for the unique parts of elements or modifiers.

Do this:

```Sass
a {
  ...
  &:hover { ... }
}
```
Do not do this:

```Sass
.foo {
  ...
  &_image { ... }
}
```

**IMPORTANT:** Do not over-nest. Only nest when it’s needed. (We should define "needed".) Selectors should be kept as flat as possible avoiding descendant selectors. A 3-level deep maximum is the general suggestion. Over nesting causes too much specificity.

Avoid reactive `!important` declarations.

* `!important` should only be used proactively - on helper or utility classes.
* It should not be used to reactively get someone out of a specificity war (it is circumventing the real problem of poorly written CSS — it fixes the symptom, not the problem).

### Mixins

Mixins duplicate a set of rules. Use these when you need to alter variables within a set of shared rules. 

### Sass calculations

Since we rely heavily on tooling, we require all math calculations to be wrapped in `(...)` and to achieve negative sum, we require a multiplication of `-1`.

We want all sums to be either percentage or rem. We have a function that will convert px values to rem that can be used within a calculation.

```Sass
// Basic calculation
.foo {
    width: (1rem + 0.5rem);
}
// Basic calculation with variables
.foo {
    width: ($spacing-medium + $spacing-small);
}
// Negative sum
.foo {
    width: ($spacing-medium * -1);
}
// Sum using calc
.foo {
    width: calc(100% - rem(20px));
}
// Sum using interpolation and calc
.foo {
    width: calc(#{$spacing-medium} - rem(2px));
}
// Complex calculation
.foo {
    height: calc((((#{$line-height-text} * #{$font-size-medium}) + (#{$line-height-text} * #{$font-size-small}) - #{$spacing-xx-small}) + (#{$spacing-xx-small} * 2)) * 5);
}
```
### Deprecation
Coming soon
