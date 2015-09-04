The `.{{cssPrefix}}button--icon-more` class creates a button that contains an icon and a down arrow indicating a drop-down menu. The default version of this button has no background color. Use `.{{cssPrefix}}button--neutral` to give it a white background.

Use the `.{{cssPrefix}}button__icon` class on the `<svg>` within. To create the smaller down symbol, use the `.{{cssPrefix}}button__icon--x-small` class.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, use a span to describe what the button does. Use <code>.{{cssPrefix}}assistive-text</code> to visually hide it.

The `.{{cssPrefix}}button--icon-more` is used when a down arrow is seen next to an icon.

`.{{cssPrefix}}button` `.{{cssPrefix}}button--small` and `.{{cssPrefix}}button--icon-more` are all placed on this
icon button to control the sizing (which is different than regular buttons).

As is done with the rest of the icon buttons, the `.{{cssPrefix}}button__icon` class is used
on the `<svg>` within. The smaller down symbol gets an additional class of
`.{{cssPrefix}}button__icon--small`.
