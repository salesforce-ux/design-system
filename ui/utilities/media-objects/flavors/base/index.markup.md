The `.{{cssPrefix}}media` object can be used as a container on any element. Inside are the two required elements. The figure (typically an image or an icon) should be placed inside an element with the `.{{cssPrefix}}media__figure` class. Next to it is typically some text that should be placed in an element with the `.{{cssPrefix}}media__body` class.

By default, the text starts at the top of the figure. Center the body and the figure by applying the `.{{cssPrefix}}media--center` class to `.{{cssPrefix}}media`.

To position the figure on the other side of the body, apply the `.{{cssPrefix}}media__figure--reverse` to the figure.

You may also position figures on both sides of the body at the same time using `.{{cssPrefix}}media__figure` and `.{{cssPrefix}}media__figure--reverse`.
