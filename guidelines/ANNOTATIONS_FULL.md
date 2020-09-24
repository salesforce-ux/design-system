# Documentation/Annotation Guidelines

Our documentation can auto-generate an API by following a set commenting rules, similar to JSdocs or PHPDoc.

Documentation should be placed before the code being documented and should start with `/**`. Sass files will still support standard documentation syntax, `//` for inline documentation and `/*` for longform documentation.

We have two layers of information that is required to be documented — the component pattern and the classnames.

The component pattern requires annotations that describe its taxonomy and usage. This documentation can be found inside of a file named `_doc.scss` within your component folder. 

Here is an example of how that may look.

```SCSS
/** 
 * Create a button with a `button` or `a` element to retain the  
 * native click function.  
 * Use a disabled attribute when a button can’t be clicked. 
 * 
 * @summary Buttons are used to invoke an event 
 *  
 * @base
 * @name button 
 * @selector .slds-button 
 * @category base 
 * @type action 
 * @role button 
 * @support dev-ready 
 * @layout responsive 
 * @release 3.1.0
 */
```

[See component annotations](#component-annotations)

Within our documentation, we introduce a concept of restriction rules. Restriction rules allow us to create important relationships between a class selectors and the component. We establish these rules through a declarative annotation that describes a DOM we expect a classname to be found on. 

Here is an example of how that may look.

```SCSS
/** 
 * Creates the brand blue Salesforce style 
 * 
 * @selector .slds-button_brand 
 * @restrict .slds-button 
 * @modifier 
 */
.slds-button_brand {
    @include button;
    @include button-brand;

    &[disabled] {
        background-color: $color-background-button-brand-disabled;
        border-color: $color-border-button-brand-disabled;
        color: $color-text-button-brand-disabled;
    }
}
```

[See selector annotations](#selector-annotations)

# Component Annotations

The component annotation is used to describe the component pattern to your design system via metadata. This documentation can be found inside of a file named `_doc.scss` within your component folder. 

## Description

A full description of the component. Can be used to describe usage, outcomes and accessibility. The description can be multi-line and verbose. Long form description supports “markdown” syntax.

### Example

```SCSS
/** 
 * The base `.slds-button` looks like a plain text link. It removes all the
 * styling of the native button. It’s typically used to trigger a modal or
 * display a “like” link. All button variations are built by adding another
 * class to `.slds-button`.
 * 
 * It can be multiple lines and uses `markdown` syntax. 
 */
```

## Summary

A short description of the component. Used to quickly summarize the usage of the component. Does not support long form text.

### Annotations

* `@summary` — `{string}` — required

### Example

```SCSS
/** 
 * @summary Buttons are used to invoke an event
 */
```

## Name

The `@name` annotation is the way to also describe to the parser which HTML file you would like to use, this requires the `@name` annotation to match the name of the folder your HTML lives in. We describe the folder structure via `@name`.

### Annotation

* `@name` — `{string}` — required

### Example

```SCSS
/** 
 * @name button 
 */
```

## Base

The `@base` annotation is required to handle the restriction scope of a classname. In combination with `@name` and @selector, you're establishing a restriction scope by mapping a classname (`@selector`) to HTML (`@name`) to the base component(`@base`). Only one `@base` annotation is required for all components. 

### Annotation

* `@base` — `{boolean}` - required

### Example

```SCSS
/** 
 * @base
 * @name button
 * @selector .slds-button
 */
```

## Selector

In the component annotation block, we need the `@selector` annotation to map the root or block classname to the HTML (`@name`) and the component scope(`@base`). The classname should point to the top level root classname within your component. For example, `.slds-button` is our root or block level classname inside of our button component, this would be the class I want to map to all HTML examples within my button component.

### Annotation

* `@selector` — `{string}` — required

### Example

```SCSS
/** 
 * @base
 * @name button
 * @selector .slds-button
 */
```

## Support

Support level determine the development status of a component. Support level can either be “prototype” or “dev-ready”.

### Annotations

* `@support` — `{string}`

### Example

```SCSS
/** 
 * @support dev-ready 
 */
```

## Category

The `@category` annotation is used to describe of the pattern's implementation method — think building blocks.

At Salesforce UX, we break down our building block terminology to the follow list:

* **Base** — Smallest re-usable components
* **Structure** — Layouts or containers of a page or component
* **Experience** — Feature rich components, usually built up by many Base components

### Annotation

* `@category` — `{string}`

### Example

```SCSS
/**
 * @category base
 */
```

## Type

The `@type` annotation is meant to describe the usage of the component from a UX perspective. Components can accept more than one type, which can be annotated with comma separators.

At Salesforce UX, we have established a list of common usage types:

* **Actions** — An action invokes an event
* **Navigation** — Navigational patterns help users move between pages and situate themselves in the application.
* **Layout** — A layout is a structural template that supports consistency across applications by defining visual grids, spacing, and sections
* **Loading** — Loading indicators help to reassure the user that the system is actively retrieving data.
* **Data-entry** — Variety of text entry and selection options to allow user's to add, change, and delete information
* **Data-display** — Various ways of displaying data, optimized to help users locate, browse, and work together on records
* **Typography** — Establishes a clear visual hierarchy and maximizes legibility.
* **Messaging** — When the user or system takes action, various messaging patterns are used to show the result or impact.
* **User-input** — Method of user input, like search fields, that doesn't actually enter data
* **Process** — Method of stepping a user through a process
* **Setup** —
* **Intelligence** —

### Annotations

* `@type` — `{string}` 

### Example

```SCSS
/** 
 * @type navigation, data-display 
 */
```

## Layout

The `@layout` annotation describes the support for methodologies such as responsive design and adaptive design.

 The `@layout` annotation can either be `responsive` or `adaptive`, `null` defines a component as “desktop only”. This annotation is inclusive to one layout methodology.

### Annotations

* `@layout` — `{string}` 

### Examples

```SCSS
/** 
 * @layout responsive 
 */
```

## Role

Roles are used to associate commonly used software development UI names to a component. These names are derived from accessibility patterns and best practices.

### Annotations

* `@role` — `{string}`

### Example

```SCSS
/** 
 * @role combobox 
 */
```

## Synonyms

The `@synonyms` annotation is a comma separator list of terms you may reference your component as. For example, an HTML Table element can be referred to as “table” or “data-table” or “grid”.

### Annotations

* `@synonyms` — `{string}`

### Example

```SCSS
/** 
 * @synonyms data-tables, data-grid, grid, data-list, list-view 
 */
```

## Release

Indicate the target release when this component will be generally available (GA). These components will have an “upcoming” label on both the Component Overview page and on the component's documentation page itself. You do not need to remove the annotation; it is automatically deprecated.

### Annotations

* `@release` — `{string}`

### Example

```SCSS
/** 
 * @release 3.2.0
 */
```


# Variant Annotations

The variant annotations are used to describe an HTML difference from your base component HTML. We want to annotate a classname to be associated to that variant's HTML and do so using the `@name` and `@variant` annotation. An example of this would be:

HTML for Button component:

```HTML
<button class="slds-button">
    Button component
</button>
```

HTML for variant of button component:

```HTML
<button class="slds-button slds-button--stateful" aria-live="assertive">
    <span class="slds-text-not-selected">
        <svg class="slds-button__icon--stateful slds-button__icon--left" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
        </svg>
        Follow
    </span>
    <span class="slds-text-selected">
        <svg class="slds-button__icon--stateful slds-button__icon--left" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check" />
        </svg>
        Following
    </span>
    <span class="slds-text-selected-focus">
        <svg class="slds-button__icon--stateful slds-button__icon--left" aria-hidden="true">
            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
        </svg>
        Unfollow
    </span>
</button>
```

CSS Annotation for a Variant:

```SCSS
/**
 * It uses the class `.slds-not-selected` in its initial state. When the user 
 * activates the button, use JavaScript to toggle the class to 
 * `.slds-is-selected`. The button contains three spans with classes that 
 * hide or show the content of the spans based on the class on the button.
 *
 * @summary Initiates a stateful button
 *
 * @name stateful
 * @selector .slds-button--stateful
 * @restrict .slds-button
 * @variant
 */
.slds-button--stateful {
    ...
}
```

In the above example I'm annotating that I have a different set of HTML that is restricted to the base component of “Button”. I'm providing a long form description of the variant, as well as a summary that describes the usage of the classname, in this case, `.slds-button—stateful`. Using `@name` to describe where to find my HTML file, in this case, in a folder named “stateful” and annotating it as a `@varian`t. I'm restricting this classname to my existing component classname of `.slds-button`. 

For utility annotations, we only need a way to map HTML to the classnames, this is accomplished by the following annotation style:

```SCSS
/**
 * @utility
 * @name utility-folder-name
 * @selector [class*='.slds-utility-class']
 */
```

We annotate a utility by using an `@utility` identifier and a universal selector, which acts as a catch all for utilities starting with the name of that utility, for example spacing utilities have a naming pattern that starts with .`slds-m-` where we can append a direction name and a size name. The universal selector would restrict the prefix of `.slds-m-` to all margin related spacing classes.

## Selector Annotations

The selector annotations are used to document the classname and establish its restriction rules with the `@restrict` annotation. The annotations should be added to the `_index.scss` where you have written your css declarations. The annotation block should come before each selector declaration. For example:

```SCSS
/**
 * The base `.slds-button` looks like a plain text link. It removes all the
 * styling of the native button. It’s typically used to trigger a modal or
 * display a “like” link. All button variations are built by adding another
 * class to `.slds-button`.
 *
 * @summary This neutralizes all the base styles making it look like a text link
 *
 * @name button
 * @selector .slds-button
 * @restrict button, a
 * @variant
 */
.slds-button {
    ...
}

/**
 * @summary Creates the brand blue Salesforce style
 *
 * @selector .slds-button_brand
 * @restrict .slds-button
 * @modifier
 */
.slds-button_brand {
    ...
}
```

## Summary

A short description of the classname. Used to quickly summarize the usage of the classname. Does not support long form text.

### Annotations

* `@summary` - `{string}`

### Example

```SCSS
/**
 * @summary Resets attributes of .slds-button back to the browser default
 */
```

## Name

The `@name` annotation is the way to also describe to the parser which HTML file you would like to use, this requires the `@name` annotation to match the name of the folder your HTML lives in. We describe the folder structure via `@name`. Only required for `@variant`.

### Annotations

* `@name` — `{string}`

### Example

```SCSS
/** 
 * @name stateful 
 * @selector .slds-button_stateful 
 */
```

## Selector

The classname being documented. 

### Annotations

1. `@selector` — `{string}` — The CSS selector being documented

```SCSS
/** 
 * @summary The icon inside of a button
 *  
 * @selector .slds-button__icon 
 * @restrict .slds-button svg
 */
.slds-button__icon {
    display: block;
 }
```

## Restrict

Within our documentation, we introduce a concept of restriction rules. Restriction rules allow us to create important relationships between a class selectors and the component. We establish these rules through a declarative annotation that describes a DOM we expect a classname to be found on. 

A CSS selector that describes where the `@selector` can be used. Any valid CSS3 selector is accepted as a restrict rule. Rules can be comma separated so something like `.foo`, `.bar` indicates that `@selector` can be used on either `.foo` or `.bar`. It is required to have a `@selector` with a `@restrict`.

If your `@restrict` annotation is a single class, it is expected that the `@selector` annotation is appended to the element that the restrict classname is found on. If a classname should be restricted to a sibling element of the root classname, you may annotate the restrict rule to a sibling by providing a descendant HTML element an existing restriction scope.
For example:

### Input:

```SCSS
/**
 * Example 1
 *
 * @selector .bar
 * @restrict .foo
 */
 
/**
 * Example 2
 *
 * @selector .bar
 * @restrict .foo span
 */
```

### Output:

```SCSS
// Example 1 restriction
.foo.bar

// Example 2 restriction
.foo span.bar 
```

### Annotations

* `@restrict` — `{string}`

### Example

```SCSS
/**
 * @selector .slds-button__icon
 * @restrict .slds-button svg
 */
```

## Modifiers

The `@modifier` annotation is an identifier that lets us know if the classname can be used to modify the visual output of a component or element within the component. 

### Annotations

* `@modifier` — `{string}`

### Example

```SCSS
/** 
 * @summary Notifies a stateful button that it has been pressed
 *  
 * @selector .slds-is-selected 
 * @restrict .slds-button--stateful 
 * @modifier
 */
.slds-button--stateful.slds-is-selected {
    display: block;
 }
```

## Group

The `@group` annotation should be used on an `@modifier` that needs to be exclusively used on an element. Without identifying an `@modifier` as not a part of a group, then you are this can be used in conjunction with any other component modifier. With identifying an `@modifier` as part of a group, then you are saying the documented classname should be added while all other classname(s) should be removed from the component.

The name passed to the `@group` annotation should describe the modifier group. For example, if I have a set of modifiers that change the color of my element, I would annotate `@group` with the name of “theme”.

### Annotations

* `@group` — `{string}`

### Example

```SCSS
/**
 * @selector .slds-button--nuetral
 * @restrict .slds-button
 * @modifier
 * @group theme
 */
.slds-button--nuetral {
    ...
}

/**
 * @selector .slds-button--brand
 * @restrict .slds-button
 * @modifier
 * @group theme
 */
.slds-button--brand {
    ...
}
```

## Deprecated

The `@deprecated` annotation is an identifier that a classname has become deprecated. This annotation should be used in conjunction with the `@mixin deprecate` to automatically remove code when the semver version has passed.

### Annotations

* `@deprecated` — `{boolean}`

### Example

```SCSS
/** 
 * @selector .slds-open 
 * @deprecated 
 */
@include deprecate('4.0.0', 'Use slds-is-open instead') {
    .slds-open {
        display: block;
    }
}
```


**Note: The @required annotation is deprecated and no longer _required_**
