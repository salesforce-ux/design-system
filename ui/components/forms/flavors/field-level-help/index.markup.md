The popover tooltip should be positioned with JavaScript. You can include inline help tooltips for form elements.

<h4 class="site-text-heading--label">Accessibility</h4>
If your tooltips are available on hover, make sure they’re also available on keyboard focus. The help icon needs to be associated to the tooltip so that when the user focuses on the icon, assistive technology reads out the content of the tooltip. If the tooltip has an `id="help"`, then the `<button>` containing the icon should have `aria-describedby="help"`.

