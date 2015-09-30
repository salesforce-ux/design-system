# Salesforce Sass Code Style

[[TOC]]

## Sass Syntax Guidelines
We want to make our Sass files easy to read and collaborate with. Therfore, we
use the newer SCSS syntax of Sass instead of the original whitespace-sensitive
syntax.

For more information on the Sass syntax, check out
[the documentation](http://sass-lang.com/guide).

* Use 2 spaces for file indention (not tabs).
* All rules should be return/indented (meaning no single line selectors for
  scannability/nesting reasons).
* There should be a line between each rule. This includes nested rules which
  shouldn’t be placed directly beneath their parent.
* All properties should be placed directly beneath their class name followed
  by any nesting that should happen.
* Properties should be grouped in this order:
  * `appearance`
  * `box-sizing` (if override needed)
  * layout
    * positioning
    * floating
    * flexing
    * css tables
    * other displays
  * spacing
    * `margin`
    * `border`
    * `padding`
  * sizing
    * `width`
    * `max-width`
    * `min-width`
    * `height`
    * `max-height`
    * `min-height`
  * masking
    * `overflow`
    * `clip`
  * typography
    * `font-style`
    * `font-weight`
    * `font-size`
    * `line-height`
    * `font-family`
    * `list-style`
    * etc
  * theming
    * `background-color`
    * `box-shadow`
    * `color`
    * `text-shadow`
  * interaction
    * `cursor`
    * `resize`
  * animations & transitions

For example:
```sass
.button {
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  margin: 0;
  border: $border-width-thin solid $color-border-button-default {
    radius: $border-radius-medium;
  };
  padding: 0 $spacing-medium;
  font: {
    weight: 400;
    size: $font-size-medium;
  }
  line-height: $line-height-button;
  text: {
    align: center;
    decoration: none;
  }
  white-space: normal;
  background: $color-background-button-default {
    clip: padding-box; // prevents bg color from leaking outside the border
  };
  color: $color-text-button-default;
  user-select: none;
  cursor: pointer;
}
```

## Naming
BEM naming conventions should be used. Remember Lightning Design System is an
application framework, not a site — and as such code needs to be both
understandable, predictable and maintainable.

* `.block { }` — higher level of an abstraction or component - the special,
  understandable class you create.
* `.block__element { }` — a descendant of `.block` that helps form it - an
  element __of__ that component (double underscore).
* `.block--modifier { }` — a different state or extension of `.block` (double
  dash)

Naming conventions should broadcast intent and not be too generic.

(We should discuss name spacing our more generic classes/mixins like .card,
.tile, etc since they could easily exist in another code base trying to
include our framework styles.

## Selectors

Avoid styling type selectors beyond an initial normalize and reset. Styles
should not be created using a class and a type selector as below:

```sass
.page-area button { /* this is overreaching */ }
```

Instead the `button` in the above example should be given a specific class (or
two).

Do not use IDs for styling (as it increases specificity). IDs should be used
for JS and Aria headings.

Avoid qualifying selectors (ul.foo). This makes styles much harder to reuse
and also increases specificity.

Selectors should be written to be additive. Try to avoid having to reset and
undo styles repeatedly.

## Commenting

Use single-line commenting for comments that shouldn’t output in the compiled
CSS.

```sass
// This is a single line comment
```

## Variables

Use variables for reusable styles like colors and sizing, generated from
s1variables. (Should we be more specific about WHERE you find these and about
the naming differences?)

## Nesting

Nest selectors to avoid repetition.

The parent selector (`&``) helps with tacking on classes, pseudo-classes, and
the unique parts of hyphenated classes.

```sass
a {
  …
  &:hover { … }
}

.flag {
  &--image { … }
}
```

**IMPORTANT**: Do not over-nest. Only nest when it’s needed. (We should define
"needed".) Selectors should be kept as flat as possible avoiding descendant
selectors.  A 3-levels deep maximum is the general suggestion. Over nesting
causes too much specificity.

Avoid reactive `!important` declarations.

* `!important` should only be used proactively - on helper or utility classes.
* It should not be used to reactively get someone out of a specificity war (it
  is circumventing the real problem of poorly written CSS — it fixes the
  symptom, not the problem).

## Mixins
Mixins duplicate a set of rules. Use these when you need to alter variables
within a set of shared rules.

### Extends
Extends comma-delineates selectors. Use these sparingly when you need to reuse
code without extra output. Make sure compiled selectors do not chain more than
three. The best use of extends is for the "base state" of a component. For
example, `.button` can be created for the base state, and then it can be
extended for each button style.

(Perhaps we should mention the silent selector here?)

---


## Notes

Using classes for each item to decouple from markup (calendar, calendar-week,
calendar-day or something like that) vs calendar tr, calendar td — but still
avoiding a single-purpose-class situation. :)

