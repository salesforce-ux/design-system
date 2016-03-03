The stateful button requires the `.{{cssPrefix}}button--neutral` class in addition to the `.{{cssPrefix}}button` class.

The stateful inverse button works just like the stateful button. It requires the `.{{cssPrefix}}button--inverse` class in addition to the `.{{cssPrefix}}button` class.

It uses the class `.{{cssPrefix}}not-selected` in its initial state. When the user activates the button, use JavaScript to toggle the class to `.{{cssPrefix}}is-selected`. The button contains three spans with classes that hide or show the content of the spans based on the class on the button. Each span contains text and a corresponding icon. The SVG will have the `.{{cssPrefix}}button__icon--stateful` class as well as the `.{{cssPrefix}}button__icon--left` class setting the icon on the left.

Stateful icons can be toggled on and off and retain their state. Like stateful buttons, the initial state is `.{{cssPrefix}}not-selected`, and JavaScript is used to toggle it to `.{{cssPrefix}}is-selected` when activated.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, include the attribute `aria-live="assertive"` on the button. The `aria-live="assertive"` attribute means the value of the `&lt;span&gt;` inside the button will be spoken whenever it changes.
