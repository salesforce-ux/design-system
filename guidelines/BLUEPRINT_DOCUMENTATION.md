## Blueprint Documentation

Documentation is an essential part of the design system as it informs component authors on how the style and markup should be implemented. To contribute docs, add a `docs.mdx` file at the root of your blueprint folder. For example if you want to add docs for `ui/components/buttons`, you would create a file `/ui/components/buttons/docs.mdx`.

### Docs.mdx

`.mdx` is an extension that means markdown with JSX. It allows you to import react components and mount the actual interactive component amongst the markdown (see https://github.com/jamesknelson/mdxc for more info).

### Example

Here is a hypothetical example of docs for buttons:

```js
import {Button} from './base/example'
import CodeView from '../../../shared/components/CodeView'

# Buttons

Even _you_ can use buttons. Check out these rendered flavors:

  * Success <Button className="slds-button_success">Success</Button>
  * Destructive <Button className="slds-button_destructive">Destructive</Button>
  * Brand <Button className="slds-button_brand">Brand</Button>

Here is the markup:

<CodeView>
  <Button className="slds-button_success">Success</Button>
</CodeView>

Enjoy your buttons!
```

As you can see we are using JSX happily along the standard markdown.

One thing to notice is we have imported a `Button` component. That is, we expect to render it like `<Button>` in our markdown. It is important that we don't import an already rendered element because then MDX cannot distinguish it from normal text. Be careful to export components, not elements.

### Helpers

You can define any helper component you'd like to assist in docs. If it's particularly useful, consider defining it in `./shared/components`. Here, we've brought in `<CodeView>` to help render out the syntax highlighted html of our react component. This is to ensure they don't get out of step.

Helper components can bring in their own styles with `import` (we use the webpack sass loader under the hood)

Here is an example of a helper component that wraps anything in a div with some cool style on it.

```js
import 'lodash';
import './coolStyle.scss';

export default (props) => <div className="cool-style">{props.children}</div>
```

The global doc styles live in `./shared/styles/doc.scss`.

### View Docs

Docs will live-reload in Storybook. Make sure you click the "Docs" button in the top left of the blueprint page to see them. Leave the web inspector console open to see if there are errors in compilation.

Docs will also appear on the website. We don't recommend this setup, but if you insist, you can clone the site repository and leave it running. You do not have to restart the site server, but you do have to refresh the page to see changes.
