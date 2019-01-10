## Annotations

Annotations are the metadata that describe the entire system.

The most intriguing part is the `@selector/@restrict` pair. Each CSS selector should have a corresponding selector describing where it can be applied. Both are normal CSS selectors that will behave like a DOM query.

For example:

```SCSS
/**
 * @selector .slds-button
 * @restrict button, a, span
 */
.slds-button {
  ...
}

/**
 * @selector .slds-button_brand
 * @restrict .slds-button
 */
.slds-button_brand {
  ...
}
```

In this example we can see that `.slds-button_brand` must be applied to a `.slds-button`, which, in turn, must be applied to a `button, a, span`.

It's important to know that `slds-button_brand` will only be associated to the button component via this `@restrict` chain. Each rule uses its `@restrict` to declare its place in the hierarchy - **it is not the the file that tells us to which component a selector belongs**

For a more complex example, see: https://github.com/salesforce-ux/design-system/blob/master/ui/components/combobox/base/_index.scss

While there are a handful of annotations used throughout the codebase, you'll only need to know a few to get started:

* `@base`: creates a new component
* `@variant`: a component implementation with corresponding markup
* `@modifier`: a class that alters appearance when applied to existing markup


The markup for a `@variant` will be required from the `/ui/:component/:variant/example.jsx`.

For example:

```SCSS
/**
 * @name advanced
 * @selector .slds-table_fixed-layout
 * @restrict .slds-table
 * @variant
 */

```

**Folder Structure:**

```
ui/
└── components/
    └── data-tables/
        ├── _doc.scss
        ├── _doc.mdx
        └── advanced/
            └── example.jsx
            └── _index.scss

```

All other selectors which are not `@base/@variant/@modifier` are considered child elements of a component.

For more information see the [full annotation docs](ANNOTATIONS_FULL.md).
