This example shows the various sizes an icon can be in different button components. These classes are placed on the `<svg>` within the button, not the button element.

* Use `.{{cssPrefix}}button__icon--x-small` in an`.{{cssPrefix}}icon--more icon` button to indicate that more information is available..

* Use `.{{cssPrefix}}button__icon--small` within `.{{cssPrefix}}button__icon--hint` on rows in which hovering over the parent element or table row causes the button to brighten up.

* The normal sized `.{{cssPrefix}}button__icon` is used in many places, including small close icons on alerts.

* Use `.{{cssPrefix}}button__icon--large` to create a large close button for modals and toasts. It’s usually used with `.{{cssPrefix}}button--inverse`.

<h4 class="site-text-heading--label">Accessibility</h4>

Icons without identifying text must have descriptive text in a <code>.{{cssPrefix}}assistive-text</code>.
