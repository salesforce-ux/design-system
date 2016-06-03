A prompt uses the base modal component and then adds the class `.{{cssPrefix}}modal--prompt` to the overall `.{{cssPrefix}}modal`. The utilities > themes > colors class is placed on the `.{{cssPrefix}}modal__head` to create the color of the header. In the example, we illustrate using `.{{cssPrefix}}theme--error`. The class `.{{cssPrefix}}theme--alert-texture` should be applied to create the striped gradient. The `.{{cssPrefix}}modal__footer` receives the class `.{{cssPrefix}}theme--default`.

<h4 class="site-text-heading--label">Accessibility</h4>

Prompt notifications are similar to modals, in that they are a focus trap, but they should take a slightly different `role` of `alertdialog` to indicate their severity. Like modals they should be labelled by their headings, but additonally they should be desscribed by the message details of the prompt.

The element containing the prompt message should be the target focus of the browser when it is displayed, which is why we add `tab-index="0"` to `slds-modal__container`.

There is no requirement for a close button, as the confirmation button should be used to dismiss the prompt, along with the usual Esc key dismissal.

Expected markup (same as Modals, but with the following differences):
- Modal has `role="alertdialog"`
- Modal has an `aria-describedby` attribute that matches the id of the modal message container.
- Modal message container container should have `tab-index="0"`

Expected keyboard interaction (sme as Modal, with the addition of):
- Modal message container should take initial focus
