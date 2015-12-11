# Salesforce Lightning Design System

Welcome to the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) brought to you by [Salesforce UX](https://twitter.com/salesforceux).

* Tailored for building Salesforce apps: Using the Lightning Design System markup and CSS framework results in UIs that reflect the Salesforce Lightning look and feel.
* Continuously updated: As long as you’re using the latest version of the Lightning Design System, your pages are always up to date with Salesforce UI changes.

## Setup

Your `npm` version must be at least 2.1.x. You can update your npm with: `sudo npm install npm -g`

```bash
npm install
npm run build
```

To run the site locally, note that `npm run dev` is now deprecated and has been split into several tasks:
* `npm start` will spin up a server instance to serve the files in .www
* `npm start -- --watch` will start the server and then recompile when files are saved
* `npm start -- --watch sass` will start the server and only reload Sass files
* `npm run build` will compile the entire site (jsx, sass, etc)

When server is up, view at [http://localhost:3000](http://localhost:3000)

## Contributing to the code base

See <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>

## Licenses

* Source code is licensed under [BSD License Clause 2](http://opensource.org/licenses/BSD-2-Clause)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](http://creativecommons.org/licenses/by-nd/4.0/)
* The font is licensed under our [font license](https://www.lightningdesignsystem.com/assets/licenses/License-for-font.txt)

## Got feedback?

Please create a <a href="https://github.com/salesforce-ux/design-system/issues">GitHub Issue</a>
