Icons (`.slds-icon`) are white by default, and their container (`.slds-icon_container`) has a transparent background.

### Changing the background of an icon

Change a background color using composed class names:

```css
.slds-icon-[sprite name]-[icon name] {}
```

Place the class on the `.slds-icon_container`.

```html
<!-- "account" icon in the "standard" icon set -->
<div class="slds-icon_container slds-icon-standard-account">
  ...
</div>
```

Some icon names have more than one word, separated by `_` underscores. Replace underscores with dashes when composing the class name. So `log_a_call` in the standard icon set becomes `.slds-icon-action-log-a-call`.
