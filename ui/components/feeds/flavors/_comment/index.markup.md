
To initialize the comment, apply the `.{{cssPrefix}}comment` class to a containing `<div>`. A comment that is associated to a user, should be wrapped within a `.{{cssPrefix}}media` object. This layout helper will properly align the avatar and body of the comment.

A minimal comment is a variation of comment base. The markup structure and classes are identical, it just removes tertiary content from the comment.

If a comment thread exceeds 3 replies, those comments should be hidden on page load and replaced with a call to action that explains the amount of comments that are hidden. If the user interacts with the overflow button, the button should be removed and replaced with the hidden comment `<li>`.

If the overflow state is active, it is best practice to show the latest comment and the comment publisher.

If a comment has replies, below the primary comment `.{{cssPrefix}}comment` should get a `<ul>` with the class `.{{cssPrefix}}comment__replies`. The `<li>` within the `<ul>` will then get the comment minimal variant.
