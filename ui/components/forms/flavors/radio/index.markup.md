Radio buttons are shown in a group of two or more. The user can only select one radio button at a time. You should use the same `name` attribute on all radio buttons in the group. This ensures that if there is more than one group in the form, each one stays associated with its own group.

The ability to style radio buttons with CSS varies across browsers. To ensure that radio buttons look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work.

<h4 class="site-text-heading--label">Accessibility</h4>

Groups of radio buttons should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of radio buttons. The fieldset is placed around the whole group and the legend contains the question.

Custom radio buttons are created by applying the `.slds-radio` class to a `<label>` element. To remain accessible to all user agents, place an `<input>` with `type="radio"` inside the `<label>` element. The `<input>` is then visually hidden, and the styling is placed on a span with the `.slds-radio--faux` class. The styling of the span changes based on whether the radio button is selected or focused by using a pseudo-element. A second span with `.slds-form-element__label` contains the label text.

When a radio group is required, the `<fieldset>` should receive the class `.slds-is-required`. The `<legend>` should then get `<abbr class="required" title="required">*</abbr>` added to the DOM for visual indication that the radio group is required.
