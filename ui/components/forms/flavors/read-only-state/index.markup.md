The read-only state is for form elements that can’t be modified. It is used for small, non-editable form fields that sit next to inputs and allows the size and height to align. It is not meant for large paragraphs of text.

Because the read-only field state has no `<input>`, don’t use a `<label>` to provide better accessibility for screen readers and keyboard navigators. Instead, use a `<span>` with the `.{{cssPrefix}}form-element__label` class. Instead of an `<input>`, use the `.{{cssPrefix}}form-element__static` class inside the `.{{cssPrefix}}form-element__control` wrapper.
