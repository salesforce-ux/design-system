Icons (`.{{cssPrefix}}icon`) are white by default, and their container (`.{{cssPrefix}}icon_container`) has a transparent background.

### Changing the background of an icon

Change a background color using composed class names:

```css
.{{cssPrefix}}icon-[sprite name]-[icon name] {}
```

Place the class on the `.{{cssPrefix}}icon_container`.

```html
<!-- "account" icon in the "standard" icon set -->
<div class="{{cssPrefix}}icon_container {{cssPrefix}}icon-standard-account">
  ...
</div>
```

Some icon names have more than one word, separated by `_` underscores. Replace underscores with dashes when composing the class name. So `log_a_call` in the standard icon set becomes `.{{cssPrefix}}icon-action-log-a-call`.
