A vertical list stacks like a normal `<ul>`. To indent nested items, add the `.{{cssPrefix}}is-nested` class to the `<ul>` nested inside.

The vertical list accepts other helpful utilities that can alter the look of the list items. If you have anchor links in your list items, adding the class `.{{cssPrefix}}has-block-links` or `.{{cssPrefix}}has-inline-block-links` to the `<ul>` will set a display block or inline-block to the anchor links. If you have anchor links within your vertical list and want spacing on the links, using `.{{cssPrefix}}has-block-links-space` will reset the spacing on the list item and re-apply that padding to the anchor link.

If a list is not inside a `.{{cssPrefix}}text-longform` element, but needs list item markers, use `.{{cssPrefix}}list--dotted` for an unordered list and `.{{cssPrefix}}list--ordered` for an ordered list.
