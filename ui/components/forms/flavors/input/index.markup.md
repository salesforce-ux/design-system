You can style the HTML `<input>` element to align with the Salesforce brand by using the `.{{cssPrefix}}input` class on the `<input>` element.

The `<input>` element includes support for all HTML5 types: `text`, `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search`, `tel`, and `color`.

<h4 class="site-text-heading--label">Accessibility</h4>

Inputs with errors should have `aria-describedby` to insure that the associated field level error message is read by assistive technology. If the error message has an `id="my-error-message"`, then the input should have `aria-describedby="my-error-message"`.
