<h4 class="site-text-heading--label">Accessibility</h4>

The list component of the Split View consists of an ARIA Listbox, and as such must obied by the following rules:

- Each option can only be a single actionable element. No child actions are allowed
- **Must** implement the keyboard interaction as described by the [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#Listbox)
- For each open workspace tab, the corresponding option _should_ be set to `aria-selected="true"`
