The discussion feed publisher is found at the top of a feed stream. It contains basic and advanced publishing capibilities.

The discussion feed is in a collapsed state by default. There are 3 states of the discussion feed that provide different feedback to the user. First, the collapsed state, this indicates the user has not interacted with the discussion feed publisher. When the user initiates an interaction with the publisher, by either focusing of the textara or clicking the "Share" button, through javascript the class of `{{cssPrefix}}is-active` should be applied to the `{{cssPrefix}}publisher` div. This class will expand the publisher box and display additional publisher actions.

During the active state, before the user has begun typing or attaching additional content, the "Share" button should be disabled by applying the `disabled` attribute to the `<textarea>`. When the user begins typing, the `disabled` attribute should be toggled off.
