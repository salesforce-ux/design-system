The stateful inverse button works just like the stateful button. It requires the `.{{cssPrefix}}button--inverse` class in addition to the `.{{cssPrefix}}button` class.

It uses the class `.{{cssPrefix}}not-selected` in its initial state. When the user activates the button, use JavaScript to toggle the class to `.{{cssPrefix}}is-selected`. The button contains three spans with classes that hide or show the content of the spans based on the class. Each span contains text and a corresponding icon. The svg has the `.{{cssPrefix}}button__icon--stateful` class as well as the `.{{cssPrefix}}button__icon--left` class to set the icon on the left.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, include the attribute `aria-live="assertive"` on the button.
