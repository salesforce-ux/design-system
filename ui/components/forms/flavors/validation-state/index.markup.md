Error states alert the user when content in the form is invalid. The `.{{cssPrefix}}has-error` class is placed on the `<div class="{{cssPrefix}}form-element">`. Place the error message for the user in a `<span>` with the `.{{cssPrefix}}form-element__help` class. The `<input>` with the error receives an `aria-describedby` attribute that references the ID attribute of the error message in the `<span>`. This configuration allows screen readers to properly associate the error message with the field.

When an `<input>` is required, add the HTML attribute required to it. Additionally, add the `.{{cssPrefix}}is-required` class on the `.{{cssPrefix}}form-element` wrapper.

The native form elements, `<input>`, `<textarea>`, `<select>`, `<input type='checkbox'>`, and `<input type='radio'>`, receive validation styling for `disabled`, `checked`, and `checked disabled`, if applicable.
