The process wizard communicates to the user which step of a process they may be on. The length of the progress bar can be changed by modifying the inline width style on `.{{cssPrefix}}wizard__progress-bar` with Javascript. The `.{{cssPrefix}}wizard__progress-bar` accepts a range from 0% to 100%.

When a step becomes active, the `.{{cssPrefix}}wizard__item` should get the class `.{{cssPrefix}}is-active`. This class should be applied through Javascript. When the step is completed, the `.{{cssPrefix}}is-active` class should persist on `.{{cssPrefix}}wizard__item`. This will keep the step indicator blue to show the step has been completed.


