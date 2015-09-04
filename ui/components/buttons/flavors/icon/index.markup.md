The various button icons vary in the amount of space they use on the page. Some have background colors, and some are transparent.

* `.{{cssPrefix}}button--bare` does not take up the 36px height that a normal button does. Although you create it with a <code>&lsaquo;button&rsaquo;</code> element, it looks like a plain icon and is the height of the icon.

* `.{{cssPrefix}}button--icon-container` looks like an icon and takes the default space of a button (36px). It has no background or border.

* `.{{cssPrefix}}button--icon-border` includes a border. It is the default size (36px).

* `.{{cssPrefix}}button--icon-border-filled` adds a background color and border like the `.{{cssPrefix}}button--neutral`.

* `.{{cssPrefix}}button--icon-small` has a background and border, but is the size of `.{{cssPrefix}}button--small` (32px).

The classes added to each button are added to the base `.{{cssPrefix}}button` class. The `<svg>` inside the buttons all have the base class of <code>.{{cssPrefix}}button__icon</code>.

<h4 class="site-text-heading--label">Accessibility</h4>

Icons without identifying text must have descriptive text in a <code>.{{cssPrefix}}assistive-text</code>.
