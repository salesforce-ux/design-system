The process wizard communicates to the user which step of a process they may be on. The length of the progress bar can be changed by modifying the inline width style on `.slds-wizard__progress-bar` with JavaScript. The `.slds-wizard__progress-bar` accepts a range from 0% to 100%.

When a step becomes active, the `.slds-wizard__item` should get the class `.slds-is-active`. This class should be applied through JavaScript. When the step is completed, the `.slds-is-active` class should persist on `.slds-wizard__item`. This will keep the step indicator blue to show the step has been completed.
