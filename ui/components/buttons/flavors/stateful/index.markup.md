The stateful button requires the `.{{cssPrefix}}button--neutral` class in addition to the `.{{cssPrefix}}button` class.

It uses the class `.{{cssPrefix}}not-selected` in its initial state. When the user activates the button, use JavaScript to toggle the class to `.{{cssPrefix}}is-selected`. The button contains three spans with classes that hide or show the content of the spans based on the class on the button. Each span contains text and a corresponding icon. The svg will have the `.{{cssPrefix}}button__icon--stateful` class as well as the `.{{cssPrefix}}button__icon--left` class setting the icon on the left.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, include the attribute `aria-live="assertive"` on the button. The <code>aria-live="assertive"</code> attribute means the value of the <code>&lt;span&gt;</code> inside the button will be spoken whenever it changes.

