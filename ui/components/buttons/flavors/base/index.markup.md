The base `.slds-button` looks like a plain text link. It removes all the styling of the native button. It’s typically used to trigger a modal or display a “like” link. All button variations are built by adding another class to `.slds-button`.

Add the `.slds-button--neutral` class to create a neutral button, which has a white background and gray border.

Use a neutral icon button is for buttons with an icon on the left or right (not for stateful buttons). Add the `.slds-button--neutral` class to `.slds-button`.

The SVG inside receives the `.slds-button__icon` class. You can position the icon on the right or the left using `.slds-button__icon--right` or `.slds-button__icon--left` , which apply the correct amount of space between the icon and the text.

To create the brand button, add the `.slds-button--brand` class to the `.slds-button` class.

To create the destructive button, add the `.slds-button--destructive` class to the `.slds-button` class.

Use the inverse button on dark backgrounds. Add the `.slds-button--inverse` class to the `.slds-button` class.
