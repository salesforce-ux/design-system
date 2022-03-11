# Creating a New Blueprint

# Creating a New Component
Creating a new component inside of the Lightning Design System Previewer app is simple. Follow this step by step guide to get you up and running:

Before we get started, let's have a look at what files we need inside of our component folder:

* `_doc.scss` — A documentation file used to add our component pattern definition. We accomplish this using annotations, more information is [available in our annotations guide](ANNOTATIONS_FULL.md).
* `example.jsx` — The HTML for our component. With every HTML file, we have the ability to export its “default”, its interaction “states” and contextual examples of where we might find usage of the component.
* `_index.scss` — The styles for our component. This file will be used to document each “variant” of a component — for example, a normal button vs a stateful button. We will also use this file to document classnames of the component and their restriction rules.

**Thought**
We should probably have a script that runs Step 1-3.

### Step 1:

Create a component folder under `/ui/components`. Open up your system’s command line interface and make a new folder using the `mkdir`. In this example, button will be our component name.

```
cd ui/components
mkdir button 
```

### Step 2:

A component has a minimum requirement of three files — an HTML file that represents the base HTML of your component, a CSS file that styles the output of your component and another css file that acts as a dumping ground for your component pattern documentation. In this example, button will be our component name and base will be our variant. Let's create those files:

In your command line interface:

```
cd button
touch _doc.scss
mkdir base
cd base
touch example.jsx
touch _index.scss
```

You should now have the following folder structure:

```SCSS
---
button
- _doc.scss
- base
     - _index.scss
     - example.jsx   
```

### Step 3:

Let's prep our HTML for output. 

```SCSS
// ui/components/button/base/examples.jsx

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      // HTML goes here...
    )
  }
];
```

### Step 4:

Let's define our component as a pattern. We will add our minimum requirements to instantiate our button component. This is found inside of `_doc.scss`.

```SCSS
// ui/components/button/_doc.scss

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/**
 * My long form description of my button component
 *
 * @summary My short summary of my button component
 *
 * @base
 * @name button
 * @selector .slds-button
 */
```

### Step 5:

Let's restrict the root component classname to the HTML file. Go into the `_index.scss` file and add the variant annotations there.

```SCSS
// ui/components/buttons/base/_index.scss

// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/**
 * Documentation that is specific to the HTML variant for button
 *
 * @summary Description of classname
 *
 * @variant
 * @name base
 * @selector .slds-button
 * @restrict button, a
 */
.slds-button {
    ...
}
```

### Step 6:

The newly created SCSS file needs to be imported to the global Sass index file (ui/components/_index.scss). Add a reference to the file, and you should be all set to develop!
