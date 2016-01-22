A Sales Path is an interactive way to show the progress of a lead. Each stage requires an extra class on the `.{{cssPrefix}}tab--path__item` showing the progress. All stages start with `.{{cssPrefix}}is-incomplete`. The stage the lead is currently in is marked with `.{{cssPrefix}}is-current`. Finally, completed stages receive `.{{cssPrefix}}is-complete`.

Inside the `.{{cssPrefix}}tabs--path__link`, two spans are placed. One with `.{{cssPrefix}}tabs--path__stage` (containing the checkmark icon), and the other with `.{{cssPrefix}}tabs--path__title` containing the description of the stage.

This view is the entire sales path without coaching content. A user would click on the "Mark Stage as Complete" button to move the prospect to the next stage.
