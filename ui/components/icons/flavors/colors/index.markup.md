Icons (`.{{cssPrefix}}icon`) are white by default, and their container (`.{{cssPrefix}}icon_container`) has a transparent background.

### Changing the color of an icon

Icon color is changed using the `fill` CSS property.
You may also use these helper classes:

- `.{{cssPrefix}}icon-text-default`: same as default text
- `.{{cssPrefix}}icon-text-warning`: yellow
- `.{{cssPrefix}}icon-text-error`: red

### Changing the background of an icon

Change a background color using composed class names:

```
.{{cssPrefix}}icon-[sprite name]-[icon name]
```

Place the class on the `.{{cssPrefix}}icon_container`.

```html
<!-- "account" icon in the "standard" icon set -->
<div class="{{cssPrefix}}icon_container {{cssPrefix}}icon-standard-account">
  ...
</div>
```

Some icon names have more than one word, separated by `_` underscores. Replace underscores with dashes when composing the class name. So `log_a_call` in the standard icon set becomes `.{{cssPrefix}}icon-action-log-a-call`.

### Note on “doctype” icons

Note that [doctype icons](/resources/icons/#doctype) have specific colors that cannot be changed with the `fill` CSS property.
