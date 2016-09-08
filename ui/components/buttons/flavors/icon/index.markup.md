The various button icons vary in the amount of space they use on the page. Some have background colors, and some are transparent.

The classes added to each button are added to the base `.{{cssPrefix}}button` class. The `<svg>` inside the buttons all have the base class of `.{{cssPrefix}}button__icon`.

A hint button is grayed out until its parent is hovered over. Then the hover and focus states are just like a regular icon button.

The parent element must have the class `.{{cssPrefix}}hint-parent`, and the icon inside the button has the class `.{{cssPrefix}}button__icon--hint`.

Use the small button with the down icon in rows and action menus. Add the class `.{{cssPrefix}}button--icon-x-small` on the button. Use `.{{cssPrefix}}button__icon--small` for the inside icon.


<h4 class="site-text-heading--label">Accessibility</h4>

Icons without identifying text must have descriptive text in a <code>.{{cssPrefix}}assistive-text</code>.
