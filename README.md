# Salesforce Lightning Design System

[![Build Status](https://travis-ci.com/salesforce-ux/design-system-internal.svg?token=BMXxPFKR5GZuYsqAFsEf&branch=summer-16)](https://travis-ci.com/salesforce-ux/design-system-internal)

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

### Ruby dependencies

Ruby comes pre-installed on Mac OS X. For other systems, check <https://www.ruby-lang.org>.

If `gem install bundler` fails, run `sudo gem install bundler` and try running `npm install` again.

### JavaScript and compilation issues

JavaScript dependencies sometimes get out of sync and inexplicable bugs start to happen. Follow these steps to give a fresh start to your development environment:

1. The installed `npm` version must be at least 2.1.x. You can update your npm with: `sudo npm install npm -g`.
2. Re-install dependencies: `rm -Rf node_modules && npm install`
3. `npm run gulp`

If this did not work, try running `npm cache clean` and repeat the above steps.

## Contributing to the code base

See <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>

## Licenses

* Source code is licensed under [BSD License Clause 2](http://opensource.org/licenses/BSD-2-Clause)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](http://creativecommons.org/licenses/by-nd/4.0/)
* The font is licensed under our [font license](https://www.lightningdesignsystem.com/assets/licenses/License-for-font.txt)

## Got feedback?

Please open a new <a href="https://github.com/salesforce-ux/design-system/issues">GitHub Issue</a>.
