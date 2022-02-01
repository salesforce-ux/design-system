# Salesforce Lightning Design System

[![Build Status](https://travis-ci.org/salesforce-ux/design-system.svg?branch=master)](https://travis-ci.org/salesforce-ux/design-system)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=salesforce-ux/design-system-internal&identifier=41938205)](https://dependabot.com)

Welcome to the source code repository for [Salesforce Lightning Design System](http://getslds.com/), brought to you by [Salesforce UX](https://twitter.com/salesforceux).

SLDS is...

- Tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel.
- Continuously updated: As long as you’re using the latest version of the Lightning Design System, your pages are always up to date with Salesforce UI changes.

## Getting Started

This project utilizes Storybook for component development. If you would like to know more about Storybook or how it works, check out [their website](https://storybook.js.org/).

### **Project Installation & Setup:**

1. Clone the repository down locally.
2. `cd` into the project and run `npm install` to install all project dependencies.

### Running the Development Environment:

The Storybook development environment can be started by running `npm start`

Whenever you add, remove, or alter a component's css annotation metadata, you'll need to restart Storybook to see those changes.

### Configuring Node and NVM

Node v12 is recommended for use with the Design System repository, and [NVM](http://nvm.sh/) is the recommended choice for managing multiple versions of Node on your computer.

A .nvmrc file is included in this project to aid in local development. To utilize it for setting your project's node version, run `nvm use` in the root of the directory.
Additionally, you can set up a deeper shell integration for automatically invoking the nvmrc file when you change into the project directory by
[following these instructions](https://github.com/nvm-sh/nvm#deeper-shell-integration).

## Developing in Storybook

Once the development server is started with `npm start`, you can load it at [http://localhost:9002](http://localhost:9002/).

### Annotations

See the [annotations guide](guidelines/ANNOTATIONS.md).

## Tasks

### `npm start`

Starts the Storybook server for local development.

### `npm run gulp -- lint`

Lint the code base for syntax and stylistic errors.

```
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

```
# To run every check against all blueprints
npm run pr-checks

# To run every check but target certain blueprints for slow checks like aXe and vnu
npm run pr-checks -- --components button,path,trees
```

### Compilation

`npm run build-dist`

Generate the Lightning Design System into the `.dist` directory.

`npm run gulp -- styles`

Compile Sass to CSS into `.assets/styles`.

`npm run gulp -- clean`

Delete temporary build and local files.

### Stats

`npm run gulp -- styles:stats`: Useful stats about the project's deliverables.

### Tests

`npm test`: run all tests, except axe/a11y tests

`npm run test:a11y`: run axe tests for accessibility violations
Results are saved into `./__tests__/a11y/results`.

### Release

`npm release:site`: build and release the framework and site

Requires heroku access to build and release the site.

## Troubleshooting

See the [troubleshooting guide](guidelines/TROUBLESHOOTING.md).

## Contributing Back to SLDS

See the [contributing guide](CONTRIBUTING.md).

## Licenses

- Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)
- All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](https://github.com/salesforce-ux/licenses/blob/master/LICENSE-icons-images.txt)

## Got Feedback?

Please open a new [GitHub Issue](https://github.com/salesforce-ux/design-system/issues).
