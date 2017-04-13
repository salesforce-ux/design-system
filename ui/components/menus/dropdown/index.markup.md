Icons can be included on either the right, left, or both sides of an option.

When using icons (e.g. checkmarks) to indicate selected state:
- all selectable items should contain an icon
- icons of non-selected are hidden by default
- a selected item reveals its icon when `aria-checked="true"` is applied to its `menuitemcheckbox` or `menuitemradio` child (e.g. `<a role="menuitemcheckbox" aria-checked="true" ...>`).
