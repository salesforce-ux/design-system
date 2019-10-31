## Shadow DOM

When developing web component blueprints the shadow DOM and its specific limitations must be taken into account. This affects how the CSS is authored and the markup is documented.

### Code examples

By default source code examples that use the `CodeView` and `CodeBlock` components will show the markup within all custom element nodes.

To prevent this for certain components in the DOM tree of an example add a `hideSourceOf={[]}` prop to either of the `CodeView` or `CodeBlock` tag. The `hideSourceOf` prop takes in a list of names for each custom element you wish to hide. The name of the element should match the name prop passed into that component's `Shadow` instance.

#### Example

Hide all instances of `lightning-icon`.

```jsx
<CodeView hideSourceOf={['icon']}>
  ...
</CodeView>
```


### Authoring the Blueprint's React Component

A component should have these props: `showSource: PropTypes.bool`, `hideSourceOf: PropTypes.array`. These props should be passed to the `Shadow` element and any other React elements as shown below with `Icon`.

```jsx
<Shadow.on
  name="button-icon"
  includes={css}
  shadow={shadow}
  showSource={showSource}
  hideSourceOf={hideSourceOf}
>
  <button>
    <Icon
      size={size}
      boundarySize={boundarySize}
      sprite={sprite}
      symbol={symbol}
      assistiveText={assistiveText}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
    />
  </button>
</Shadow.on>
```
