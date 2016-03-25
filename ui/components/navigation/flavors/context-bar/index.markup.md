## Building the context bar

The context bar is composed of a wrapper and 3 zones:

```html
<div class="slds-context-bar">
  <div class="slds-context-bar__primary">
    <!-- Context switcher, Application title -->
  </div>
  <div class="slds-context-bar__secondary">
    <!-- Navigation or tabs -->
  </div>
  <div class="slds-context-bar__tertiary">
    <!-- Actions -->
  </div>
</div>
```

Utility classes and additional elements complement this base structure.

### Navigation

The navigation piece is inserted in the secondary zone (`slds-context-bar__secondary`).

#### Base structure and accessibility

```html
<nav role="navigation">
  <ul>
    <li>
      <!-- This item is selected -->
      <a>Menu Item <span class="slds-assistive-text">selected</span></a>
    </li>
    <li>
      <!-- Link: hoverable, focusable, and clickable -->
      <a>Menu Item</a>

      <!-- Button: only actionable via a keyboard interaction only -->
      <button aria-haspopup="true" id="context-bar-action-trigger-0">
        <span class="slds-assistive-text">Assistive text for sub menu</span>
      </button>

      <div aria-labelledby="context-bar-action-trigger-0">
        <ul role="menu">
          <li><a role="menuitem">Sub Menu Item</a></li>
        </ul>
      </div>
    </li>
  </ul>
</nav>
```


### Navigation keyboard & mouse interactions

Todo: describe interactions.
