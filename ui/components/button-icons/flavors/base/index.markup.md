The base `.{{cssPrefix}}button` looks like a plain text link. It removes all the styling of the native button. It’s typically used to trigger a modal or display a “like” link. All button variations are built by adding another class to `.{{cssPrefix}}button`.

Add the `.{{cssPrefix}}button--neutral` class to create a neutral button, which has a white background and gray border.

Use a neutral icon button is for buttons with an icon on the left or right (not for stateful buttons). Add the `.{{cssPrefix}}button--neutral` class to `.{{cssPrefix}}button`.

The SVG inside receives the `.{{cssPrefix}}button__icon` class. You can position the icon on the right or the left using `.{{cssPrefix}}button__icon--right` or `.{{cssPrefix}}button__icon--left` , which apply the correct amount of space between the icon and the text.

To create the brand button, add the `.{{cssPrefix}}button--brand` class to the `.{{cssPrefix}}button` class.

To create the destructive button, add the `.{{cssPrefix}}button--destructive` class to the `.{{cssPrefix}}button` class.

Use the inverse button on dark backgrounds. Add the `.{{cssPrefix}}button--inverse` class to the `.{{cssPrefix}}button` class.
