<h4 class="site-text-heading--label">Accessibility</h4>
The Advanced Data Table and Inline Edit Data Table are based on the semantics, roles and interaction model of the [ARIA Grid](http://w3c.github.io/aria/practices/aria-practices.html#grid). In SLDS we overlay the ARIA Grid on top of native HTML table semantics.

The role of Grid comes with 2 distinct modes, Navigation mode and Actionable mode. Both come with very specific keyboard interaction modals. Navigation mode is the default mode of the Grid.

**Navigation Mode**
- Tabbing into the grid focuses the first data cell in the table.
- The second tab key press takes the user focus out of the grid onto the next focusable element on the page.
- Once the user has tabbed out of the grid, tabbing back into the grid will return focus to the last cell the user was focused on.
- Navigation in the grid is accomplished via the arrow keys.
- No actionable items in cell contents are focusable.
- Pressing the Enter key on a chosen grid cell, places the entire Grid into Actionable mode.

**Actionable Mode**
- Once in Actionable mode, all focusable items in the entire grid can be tabbed to.
- Arrow navigation still takes the user cell to cell in any direction, but focuses on the first actionable item in the cell, if there is one.
- Pressing the Escape key exits Actionable mode, placing the user back into Navigation mode, keeping the users cursor on the same cell they were focused in.
- When interacting with a component in a cell, such as a Menu, that also uses the Escape key as an exit action, pressing Escape will take the user back to the triggering element in the current cell. A subsquent press of Escape will return the user to Navigation mode.

For the purposes of these docs, the Default state of Inline Edit is representative of Navigation mode, all other states are assumed to be in Actionable Mode.
