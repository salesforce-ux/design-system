The stateful button requires the `.slds-button--icon-border` class in addition to the `.slds-button` class.

The stateful inverse button works just like the stateful button. It requires the `.slds-button--icon-borderinverse` class in addition to the `.slds-button` class.

Stateful icons can be toggled on and off and retain their state. JavaScript is used to add the `.slds-is-selected` class to the button when activated.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, implement the [ARIA Toggle Button](http://w3c.github.io/aria-practices/#button) concept.
- Similar to a mute button, the button represents a pressed or unpressed state.
- Button text doesn't change per state
- `aria-pressed` is set to `true` or `false`, depending its state
