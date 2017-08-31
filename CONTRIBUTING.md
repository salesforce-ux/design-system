# Contributing to SLDS

Do you ❤️ the Salesforce Lightning Design System and want to get involved? We would love your help! We are always looking for both internal and external contributors of Salesforce and there are plenty of ways you can help!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Bug Reports

A bug is a *demonstrable problem* that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** — check if the issue has already been reported.
2. **Check if the issue has been fixed** — try to reproduce it using the latest `master` or development branch in the repository.
3. **Isolate the problem** — ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

**Example:**


> Describe the issue. Is it a bug or a feature request (new component, new icon, new CSS class)?
>
> Is this issue related to a specific component, variant, and/or state? If so, please detail which.
>
> Are any specific browsers impacted by this bug?
>
> Which version of the Salesforce Lightning Design System are you using?
>
> What steps and/or code are need to reproduce this issue?
>  1. This is the first step
>  2. This is the second step
>  3. Further steps, etc.
>
> What did you expect to happen?
>
> What actually happened?
>
> Include one or more screenshots if applicable, as well as a Codepen with the reduced test case.


## Feature Requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull Requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

*External contributors are required to sign a Contributor’s License Agreement. You will be prompted to sign it when you open a pull request.*

Before starting down the long journey of any significant pull request, **please ask first** if someone else is working on the same feature or ask a core developer if your feature is in-scope for SLDS. This will help reduce the risk of spending a lot of time working on something where in the end conflicts with someone else's changes or developers determine it does not want to be merged.

Salesforce has a very large ecosystem and the design system has a lot of touch-points within that ecosystem. A small change can have a large-scale effect (which is AWESOME but we have to be aware about what we are changing).

Before starting your project, please open a new issue or point to a related issue with discussions for whatever you are adding. That way, we can also offer suggestions or let you know if there is already an effort in progress.

If you are changing CSS, please adhere to the SASS coding conventions [found here](https://github.com/salesforce-ux/design-system-internal/wiki/Sass-Styleguide). This will help expedite the review process as well as keeping code quality high.

Following these steps is the best way to get your work included into the project:

1. Fork the project, clone your fork, and configure the remotes:
```sh
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/design-system.git
# Navigate to the newly cloned directory
cd design-system
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/salesforce-ux/design-system.git
```    
2. Make sure you have the latest changes from the upstream:
```sh
git checkout master
git pull upstream master
```
3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:
```sh
git checkout -b <topic-branch-name>
```
4. Commit your changes in logical chunks. This project follows [Semantic Release Guidelines](https://github.com/salesforce-ux/design-system/blob/master/CONTRIBUTING.md#commit-guidelines). Please read and adhere to our commit guidelines before committing. This will expedite the review process and success rate of a PR getting merged. Use Git's [interactive rebase](https://help.github.com/articles/about-git-rebase/) feature to tidy up your commits before making them public.
5. Locally merge (or rebase) the upstream development branch into your topic branch:
```sh
git pull [--rebase] upstream master
```
6. Push your branch up to your fork:
```sh
git push origin <topic-branch-name>
```
12. Open a [Pull Request](https://help.github.com/articles/about-pull-requests/) with a clear title and description that follows our [Semantic Release Guidelines](https://github.com/salesforce-ux/design-system/blob/master/CONTRIBUTING.md#commit-guidelines).

## Setting up a local copy

1. Clone the project with `git clone https://github.com/salesforce-ux/design-system.git`
2. Run `npm install` in the root design-system folder.
3. Run `npm start` to launch the Previewer.
4. Visit http://localhost:3003/local/preview

Having trouble getting these steps to work on your machine? Follow the [troubleshooting](https://github.com/salesforce-ux/design-system/README.md#troubleshooting) guide in our README.md.

## Using the Previewer

<img src="docs/previewer.v1.jpg" alt="previewer component/variant/modifier selection" />

The previewer is an interactive tool for creating components.

It runs at the designated url on startup and is the primary means of viewing your work - it will live update as you make changes.

You can choose the component, variant, and modifiers to preview as well as background color and screen size. It also previews the sass docs.

Everything in the design system is driven by [annotations](https://github.com/salesforce-ux/design-system-internal#annotations) and the previewer is no different. **To see any work in the previewer, you must add annotations to your code.**

## Annotations

Annotations are the metadata that describe the entire system.

The most intriguing part is the `@selector/@restrict` pair. Each CSS selector should have a corresponding selector describing where it can be applied. Both are normal CSS selectors that will behave like a DOM query.

**For example:**

```scss
/**
 * @selector .slds-button
 * @restrict button, a, span
 */
.slds-button {
  ...
}
/**
 * @selector .slds-button_brand
 * @restrict .slds-button
 */
.slds-button_brand {
  ...
}
```

In this example we can see that `.slds-button_brand` must be applied to a `.slds-button`, which, in turn, must be applied to a `button, a, span`.

It's important to know that `slds-button_brand` will only be associated to the button component via this `@restrict`chain. Each rule uses its `@restrict` to declare its place in the hierarchy - **it is not the the file that tells us to which component a selector belongs**

For a more complex example, see: https://github.com/salesforce-ux/design-system-internal/blob/summer-17/ui/components/combobox/base/_index.scss

While there is a handful of annotations used throughout the codebase, you'll only need to know a few to get started:

* `@base`: creates a new component
* `@variant`: a component implementation with corresponding markup
* `@modifier`: a class that alters appearance when applied to existing markup

The markup for a `@variant` will be required from the `/ui/:component/:variant/example.jsx`.

**For example:**

```scss
/**
 * @name advanced
 * @selector .slds-table_fixed-layout
 * @restrict .slds-table
 * @variant
 */
```

**Folder Structure:**

```
ui/
└── components/
    └── data-tables/
        ├── _doc.scss
        ├── _doc.mdx
        └── advanced/
            └── example.jsx
            └── _index.scss

```

All other selectors which are not `@base/@variant/@modifier` are considered child elements of a component.

For more information see the [Full annotation docs](https://github.com/salesforce-ux/design-system-internal/wiki/Documentation-Styleguide)

## Component Documentation

Documentation is an essential part of the design system as it informs component authors on how the style and markup should be implemented. To contribute docs, add a `docs.mdx` file at the root of your component folder. For example if you want to add docs for `ui/components/buttons`, you would create a file `/ui/components/buttons/docs.mdx`.

### Docs.mdx

Mdx is an extension that means markdown with jsx. It allows you to import react components and mount the actual interactive component amongst the markdown (see https://github.com/jamesknelson/mdxc for more info).

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

As you can see we are using jsx happily along the standard markdown.

One thing to notice is we have imported a `Button` component. That is, we expect to render it like `<Button>` in our markdown. It is important that we don't import an already rendered element because then mdx cannot distinguish it from normal text. Be careful to export components, not elements.

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

Docs will live-reload in the previewer. Make sure you click the "Documentation" button in the top right of the page to see them. It will fall back to older documentation if there is an error. Leave the web inspector console open to see if there are errors in compilation.

Docs will also appear on the website. We don't recommend this setup, but if you insist, you can clone the site repository and leave it running. You do not have to restart the site server, but you do have to refresh the page to see changes.

## Commit Guidelines

Our commit guidelines originate from [Pivotal UI's Semantic Release guidelines](https://github.com/pivotal-cf/pivotal-ui/blob/development/COMMIT_GUIDELINES.md).
Each commit should be "green" (i.e. it should not break any existing functionality). In addition, attempt to make each commit a complete idea. A single commit should not contain unrelated changes.
Characteristics of a commit message:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

The overall format of the commit should look like this:

```
`patchlevel(scope): description of commit

Additional information

[Finishes #issuenumber or W-ticketIDnumber]

Breaking change/deprecation warning`
```

### Patch level

Your message should include information about the patch level of the changes made. You may be wondering what major, minor, and patch mean in the context of CSS. Please follow these guidelines:

* **Major** - A breaking change which alters either *class names* or expected *HTML*. These commits can be labeled either as `feat():` or `fix():`, but must also contain a `BREAKING CHANGE:` followed by what kind of breaking change it is (e.g., class name, sass variable, html, style) in the body of the commit.
* **Minor** - Either an *additional feature* (e.g. a new component), or an update which changes *Sass variables*. These commits should be labeled as `feat():`.
* **Patch** - A *non-breaking change, bug fix, or design update* that any team should be able to upgrade to without changing their html. An example of this is updating the background color of the danger button or fixing the alignment of the horizontal tabs (as long as no html changes are required). These commits should be labeled as `fix():`.
* Sometimes you may have commits that do not modify a component (e.g. updating docs, gulp tasks, etc). Label these commits as a `chore():`.

## Patch

For example, for a patch, your commit might look like this:

```
`fix(table): headers are now capitalized by default

Some additional info about the change

[Finishes #12345678]`
```

## Feature

A feature might look like this:

```
`feat(notification): add an 'alert notification'

Some additional info about the change

[Finishes #12345678]`
```

## Breaking change

and example of a breaking change might look like this:

```
`feat(color): update oranges

Some additional info about the change

[Finishes #12345678]

BREAKING CHANGE: (sass variable) "orange-color" class is now named "light-orange"`
```

### Scope

The scope should be the component that is modified. It should match the name of the modified component. For example, a patch fix to CSS alerts would look like

```
`fix(alerts): ...`
```

The same scope is used for both utilities and components.
For `chore`s, use your best guess for the scope. E.g., if you're changing documentation, use `chore(documentation):`. If you're changing release tasks, use `chore(release):`

### Breaking Changes

Breaking changes must be **the last line** of the commit, and there can only be one breaking change per commit. The breaking change message should be a standalone sentence, illustrating what actually breaks and how to fix it. In addition, the breaking change message should include the type of change:

* **html** - e.g. "BREAKING CHANGE: (html) alert icons are no longer included by default"
* **sass variable** - e.g. "BREAKING CHANGE: (sass variable) `$yellow-1`/`$warn-1` are now `$yellow-2`/`$warn-2`"
* **css class** - e.g. "BREAKING CHANGE: (css class) `.with-tooltip` is now `.button-with-tooltip-wrapper`"
* **javascript** - e.g. "BREAKING CHANGE: (javascript) tooltips must be explicitly initialized"
* **design** - e.g. "BREAKING CHANGE: (design) progress indicator should be used instead of wizard"

**Note** - any story numbers should come **before** the breaking change message

### Deprecation Warnings

If your commit marks a component for deprecation, add a deprecation warning like so.

```
`feat(alerts): deprecate warning alert

[Finishes #12345678]

DEPRECATION WARNING: "orange-color" class is now named "highlight-2"`
```

**Note** - any story numbers should come **before** the deprecation warning
* * *
*Thank you to HTML5 Boilerplate and Create React App* *for the inspiration with this contributing guide*
