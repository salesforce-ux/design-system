The various button icons vary in the amount of space they use on the page. Some have background colors, and some are transparent.

- `.{{cssPrefix}}button--icon` does not take up the 32px height that a normal button does. Although you create it with a <code>&lsaquo;button&rsaquo;</code> element, it looks like a plain icon and is the height of the icon.
- `.{{cssPrefix}}button--icon-container` is the size of an icon and takes the default space of a button (32px). It has no background or border.
- `.{{cssPrefix}}button--icon-border` includes a border. It is the default size (32px).
- `.{{cssPrefix}}button--icon-border-filled` adds a background color and border like the `.{{cssPrefix}}button--neutral`.
- `.{{cssPrefix}}button--icon-x-small` changes the default size of 32px to the size of 20px.
- Use `.{{cssPrefix}}button__icon--x-small` in an`.{{cssPrefix}}icon--more icon` button to indicate that more information is available..
- Use `.{{cssPrefix}}button__icon--small` within `.{{cssPrefix}}button__icon--hint` on rows in which hovering over the parent element or table row causes the button to brighten up.
- The normal sized `.{{cssPrefix}}button__icon` is used in many places, including small close icons on alerts.
- Use `.{{cssPrefix}}button__icon--large` to create a large close button for modals and toasts. It’s usually used with `.{{cssPrefix}}button--inverse`.

The classes added to each button are added to the base `.{{cssPrefix}}button` class. The `<svg>` inside the buttons all have the base class of `.{{cssPrefix}}button__icon`.

A hint button is grayed out until its parent is hovered over. Then the hover and focus states are just like a regular icon button.

The parent element must have the class `.{{cssPrefix}}hint-parent`, and the icon inside the button has the class `.{{cssPrefix}}button__icon--hint`.

Use the small button with the down icon in rows and action menus. Add the class `.{{cssPrefix}}button--icon-x-small` on the button. Use `.{{cssPrefix}}button__icon--small` for the inside icon.


<h4 class="site-text-heading--label">Accessibility</h4>

Icons without identifying text must have descriptive text in a <code>.{{cssPrefix}}assistive-text</code>.
