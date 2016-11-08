The stateful button requires the `.slds-button--icon-border` class in addition to the `.slds-button` class.

The stateful inverse button works just like the stateful button. It requires the `.slds-button--icon-borderinverse` class in addition to the `.slds-button` class.

Stateful icons can be toggled on and off and retain their state. JavaScript is used to add the `.slds-is-selected` class to the button when activated.

<h4 class="site-text-heading--label">Accessibility</h4>

For accessibility, include the attribute `aria-live="assertive"` on the button. The `aria-live="assertive"` attribute means the value of the `<span>` inside the button will be spoken whenever it changes.
