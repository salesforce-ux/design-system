A compound form consists of form groups that are labeled by the `<legend>` of a `<fieldset>`. The `<fieldset>` requires the `.slds-form--compound` class. By default, the form groups within the fieldset are vertically stacked. To horizontally align the label (for example, `<legend class="slds-form-element__label">`), use the `.slds-form--compound--horizontal` class.

A form group needs a containing `<div>` with the `.slds-form-element__group` class applied to it. Within `.slds-form-element__group` you can have multiple rows of compound fields by wrapping a row in a `<div>` with the `.slds-form-element__row` class.

Pay close attention to the markup of a form control within a compound field, because it differs slightly from other form elements. A form control can receive a sizing helper class, for example: `.slds-size--1-of-3`, to modify the width of the input field. See [Sizing](/components/utilities/sizing) utilities for more sizing options.
