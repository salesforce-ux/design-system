# Design Properties

**Design Properties** are named entities that store visual design attributes. 
We commonly refer to these as _tokens_. In Sass, these are used as 
_variables_. You may hear these terms used interchangeably. In most cases, the 
values will be a CSS property’s value, though there are conversions made for 
Native iOS and Android. We have a centralized location for all of our visual 
design properties.

## What if the token does not yet exist?

* **Help keep tokens semantically named.** Do not use an existing token if its 
  name does not match what you are using it for.
* Work with us to verify that it is indeed a new token, 
  and then log a git issue.
  to make sure that the token is documented and added into the system.
* If you are a _developer_, feel free to use to use a placeholder, and we will 
  contact you as soon as we have a properly named replacement.

---

# Token Naming & Organization

To keep our Visual Design System maintainable and future-friendly, we must be 
very organized and adhere to a strict naming convention. We use a 
**[generic-to-specific](http://webdesign.tutsplus.com/articles/quick-tip-name-your-sass-variables-modularly--webdesign-13364)** 
naming schema.

Token naming chains in this order:

1. **Token Category Prefix**
   Indicates the type of token and how it's used
   _Example_: <code><strong>colorBackground</strong></code>
2. **Object**
   The object the token is used for. This can be multiple words (camelCased).
   _Example_: <code>colorBackground<strong>Button</strong></code>
3. **Object Alternate**
   An alternate on the object
   _Example_: <code>colorBackgroundButton<strong>Secondary</strong></code>
4. **States**
   Stateful or Pseudo Class
   _Example_: <code>colorBackgroundButtonSecondary<strong>Hover</strong></code>
5. **Variations** Modfier for when the object falls on a different background
   _Example_: <code>colorBackgroundButtonSecondaryHover<strong>Inverse</strong></code>

**NOTE: **We are showing a worse-case-scenario here. Most tokens do not 
require all these modfiers. But in case it's needed, this is the order it 
should be in.

## Token Category Prefixes

Tokens are prefixed with a namespace that help indicate how the tokens are 
used.

### Typography

| TOKEN PREFIX  | CSS PROPERTY  | DESCRIPTION |
|---------------|---------------|-------------|
| `fontWeight`… | `font-weight` | Font Weight |
| `fontSize`…   | `font-size`   | Type Scale  |
| `lineHeight`… | `line-height` | Leading     |
| `fontFamily`… | `font-family` | Font Family |

### Colors

| TOKEN PREFIX       | CSS PROPERTY       | DESCRIPTION |
|--------------------|--------------------|-------------|
| `colorBackground`… | `background-color` | Background  |
| `colorBorder`…     | `border-color`     | Border      |
| `colorText`…       | `color`            | Foreground  |

### Style

| TOKEN PREFIX    | CSS PROPERTY    | DESCRIPTION                   |
|-----------------|-----------------|-------------------------------|
| `borderRadius`… | `border-radius` | Rounded Corners               |
| `shadow`…       | `box-shadow`    | Box drop shadows & highlights |

### Layout Metrics

| TOKEN PREFIX   | CSS PROPERTY          | DESCRIPTION                |
|----------------|-----------------------|----------------------------|
| `width`…       | `width`               | Hard widths                |
| `minWidth`…    | `min-width`           | Minimum widths             |
| `maxWidth`…    | `max-width`           | Maximum widths             |
| `height`…      | `height`              | Hard heights               |
| `minHeight`…   | `min-height`          | Minimum heights            |
| `maxHeight`…   | `max-height`          | Maximum heights            |
| `square`…      | `width` & `height`    | Width & Height is the same |
| `borderWidth`… | `border-width`        | Border size                |
| `flex`…        | `flex`                | Flex ratio size            |
| `spacing`…     | `margin` or `padding` | Gutters & spacing          |

### Motion

| TOKEN PREFIX | CSS PROPERTY | DESCRIPTION                   |
|--------------|--------------|-------------------------------|
| `duration`…  | `duration`   | Transition time               |

## Suffixes

The following common suffixes indicate modifiers, such as variations and states.

### States

| TOKEN SUFFIX | CSS MODIFIER        | DESCRIPTION                                                                    |
|--------------|---------------------|--------------------------------------------------------------------------------|
| …`Selected`  | `.is-selected`      | Current selected/active thing. Page, tab, toggled-on, etc.                     |
| …`Hover`     | `:hover` & `:focus` | On hover & focus                                                               |
| …`Focus`     | `:focus`            | Focus usually models Hover, but when you need extra (blurs/borders), use focus |
| …`Active`    | `:active`           | On click/touch                                                                 |
| …`Disabled`  | `[disabled]`        | Disabled                                                                       |

### Variations

| TOKEN SUFFIX | DESCRIPTION                                                      |
|--------------|------------------------------------------------------------------|
| …`Inverse`   | For use on inverse (currently, dark) backgrounds                 |
| …`Alt`       | An alternative version, usually a shade darker or a tint lighter |
| …`Strong`    | A stronger color, usually a shade darker or bolder               |
| …`Weak`      | A weaker color, usually a tint lighter or dimmer                 |
