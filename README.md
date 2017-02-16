# Salesforce Lightning Design System [![Build Status](https://travis-ci.org/salesforce-ux/design-system.svg?branch=master)](https://travis-ci.org/salesforce-ux/design-system) [![Greenkeeper badge](https://badges.greenkeeper.io/salesforce-ux/design-system-internal.svg?token=daad1067bbfc5d75c4fb2372360b4b0869bed68d4dc370f6b618b1db22b8f052)](https://greenkeeper.io/)

Welcome to the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) brought to you by [Salesforce UX](https://twitter.com/salesforceux).

* Tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel.
* Continuously updated: As long as you’re using the latest version of the Lightning Design System, your pages are always up to date with Salesforce UI changes.

## Quick start

```bash
gem install bundler
npm install
npm start
```

Having trouble getting these steps to work on your machine? Follow the [troubleshooting](#troubleshooting) guide below.

## Tasks

Install [gulp](http://gulpjs.com/) globally:

```bash
npm install --global gulp
```

### `gulp`

Generate and run the Lightning Design System.

### `gulp serve`

Run the lightning design system.

Faster than `gulp`, as it won't re-generate the whole site before starting the server. Useful when mainly working on styles.

### `gulp lint`

Lint the code base for syntax and stylistic errors.

```bash
# Lint indentation, Sass, JavaScript files
gulp lint

# Lint languages independently
gulp lint:sass
gulp lint:js
gulp lint:js:test
gulp lint:spaces
gulp lint:html
gulp lint:vnu (optional: --component "{trees_base_with*,trees_base_deep*}")
```

### Compilation

`gulp pages`: generate the site’s pages.

`gulp styles`: compile Sass to CSS.

### `gulp clean`

Delete temporary build and local files.

### Stats

`npm run stats`: Useful stats about the project's deliverables.

### Tests

`npm test`: run all tests

## Troubleshooting

### npm and Node.js

The Salesforce Lightning Design System uses `npm` to manage dependencies. Please [install Node.js](https://nodejs.org), and try running `npm install` again.

If Node.js is already installed, make sure you’re running v6 or up.

### JavaScript and compilation issues

JavaScript dependencies sometimes get out of sync and inexplicable bugs start to happen. Follow these steps to give a fresh start to your development environment:

1. The installed `npm` version must be at least v3.10. You can update your npm with: `npm install npm -g` (`sudo` may be required).
2. Re-install dependencies: `rm -Rf node_modules && npm install`
3. `npm start`

If this did not work, try running `npm cache clean` and repeat the above steps.

## Contributing to the code base

See <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>.

## Licenses

* Source code is licensed under [BSD 3-Clause](https://git.io/sfdc-license)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](https://github.com/salesforce-ux/licenses/blob/master/LICENSE-icons-images.txt)
* The Salesforce Sans font is licensed under our [font license](https://github.com/salesforce-ux/licenses/blob/master/LICENSE-font.txt)

## Got feedback?

Please open a new <a href="https://github.com/salesforce-ux/design-system/issues">GitHub Issue</a>.
