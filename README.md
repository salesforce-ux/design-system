# Salesforce Lightning Design System [![Build Status](https://travis-ci.org/salesforce-ux/design-system.svg?branch=master)](https://travis-ci.org/salesforce-ux/design-system)

Welcome to the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) brought to you by [Salesforce UX](https://twitter.com/salesforceux).

* Tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel.
* Continuously updated: As long as you’re using the latest version of the Lightning Design System, your pages are always up to date with Salesforce UI changes.

## Quick start

1. Clone the project with `git clone https://github.com/salesforce-ux/design-system.git`
2. Run `npm install` in the root design-system folder.
3. Run `npm start` to launch the Previewer.
4. Visit http://localhost:3003/local/preview

Having trouble getting these steps to work on your machine? Follow the [troubleshooting guide](guidelines/TROUBLESHOOTING.md).


## Previewer

<img src="docs/previewer.v1.jpg" alt="previewer blueprint/variant/modifier selection" width="600px"/>

The previewer is an interactive tool for creating blueprints.

It runs at the designated url on startup and is the primary means of viewing your work - it will live update as you make changes.

You can choose the blueprint, variant, and modifiers to preview as well as background color and screen size. It also previews the sass docs.

Everything in the design system is driven by [annotations](guidelines/ANNOTATIONS.md) and the previewer is no different. **To see any work in the previewer, you must add annotations to your code.**

## Annotations

See the <a href="guidelines/ANNOTATIONS.md">annotations guide</a>.

## Blueprint Documentation

See the <a href="guidelines/BLUEPRINT_DOCUMENTATION.md">blueprint documentation guide</a>.

## Tasks

### `npm start`

Start the Lightning Design System preview app.

### `npm run gulp -- lint`

Lint the code base for syntax and stylistic errors.

```bash
# Lint indentation, Sass, JavaScript files
npm run gulp -- lint

# Lint languages independently
npm run gulp -- lint:sass
npm run gulp -- lint:javascript
npm run gulp -- lint:javascript:test
npm run gulp -- lint:spaces
npm run gulp -- lint:html

# HTML5 validation
npm run gulp -- lint:vnu
# HTML5 validation on comma separated blueprint names
npm run gulp -- lint:vnu --components button,path,trees

# a11y validation
npm run gulp -- lint:a11y
# a11y validation on comma separated blueprint names
npm run gulp -- lint:a11y --components button,path,trees

# Lint examples using vnu, aXe, slds validation, and HTML5 validation
npm run gulp -- lint:examples
```

### Pull Request Checks

To run all the checks a pull request will run in Travis use the following command.

```bash
# To run every check against all blueprints
npm run pr-checks

# To run every check but target certain blueprints for slow checks like aXe and vnu
npm run pr-checks -- --components button,path,trees
```

### Compilation

`npm run build && npm run dist`

Generate the Lightning Design System into the `.dist` directory.

`npm run gulp -- styles`

Compile Sass to CSS into `.assets/styles`.

`npm run gulp -- clean`

Delete temporary build and local files.

### Stats

`npm run gulp -- styles:stats`: Useful stats about the project's deliverables.

### Tests

`npm test`: run all tests

## Troubleshooting

See the <a href="guidelines/TROUBLESHOOTING.md">troubleshooting guide</a>.

## Contributing to the code base

See the <a href="CONTRIBUTING.md">contributing guide</a>.

## Licenses

* Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](https://github.com/salesforce-ux/licenses/blob/master/LICENSE-icons-images.txt)
* The Salesforce Sans font is licensed under our [font license](https://github.com/salesforce-ux/licenses/blob/master/LICENSE-font.txt)

## Got feedback?

Please open a new <a href="https://github.com/salesforce-ux/design-system/issues">GitHub Issue</a>.
