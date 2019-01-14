# Testing: Writing Tests for SLDS

## What test should I write?

### Snapshots

Each component must have a set of snapshot tests that ensure the HTML output of your React component matches your expectations based on the minimum, sensible set of possible states your component can be placed in, by setting all sensible combinations of the components props. e.g.

- A tabset of 6 tabs, should at least have 2 snapshots; Default first tab selected, and one other snapshot with one other tab selected. 
- There is no need to snapshot every possible tab selection, once you've covered the most common and extreme edge cases
- If a class or attribute changes for any reason, snapshot it's use case

### Enzyme 

If your component responds to user input like click or keystroke, you should be writing *Enzyme* tests that verify the expected outcome of each interaction. You can simulate most types of user events, and test what output was generated, to ensure that never breaks.

## Conventions

- Each Component folder should have a `__tests__` folder
- Each test file should have a file name that ends in `.spec.js`
- For clarity, you should name your test files based on their type:
  - `snapshot.spec.js`
  - `enzyme.spec.js`
- Use `describe` blocks to group certain tests together, like testing variants of a single Component
- (**Rare:**) For Components that have extremely complex variants, you might want to name your test files based on variant name to split them out:
  - `base.snapshot.spec.js`
  - `base.enzyme.spec.js`
  - `advanced.snapshot.spec.js`
  - `advanced.enzyme.spec.js`
  - `inline-edit.snapshot.spec.js`
  - `inline-edit.enzyme.spec.js`

## Writing Snapshot Testing

We are using snapshot tests that are very similar to Jest snapshot tests, only we add the computed styles of a component, along with it's rendered HTML.

First, add a file with the namespace: `{optional: variant-name.}snapshot.spec.js` to the folder `__tests__` fodler inside your components folder.

Next, add any imports you might need to test your component. You should generally always import React, createHelpers, and matchesMarkupAndStyle. Also, make sure to include the specific component that you're testing. Here's an example of what the beginning of your file should look like:  
```javascript
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { ComponentName } from '../base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);
```

Our snapshot tests test for HTML and CSS changes. Here's an example of a simple test you can write:
```jsx
it("description of the test that you're running", () =>  // where you describe what this specific test is testing for
  matchesMarkupAndStyle(<ComponentName />));  // makes the test render the component you're testing; you should include any different props in different tests to test different states 
```

If you want to see an example of a working test, check out `spring-18/ui/components/badges/__tests__/index.spec.js`.

## Writing Enzyme Tests

We're using Enzyme as our testing utility, and the documentation can be found here: https://github.com/airbnb/enzyme

First, add a file with the namespace: `{optional: variant-name.}enzyme.spec.js` to the `__tests__` folder inside your components folder.

Next, add any imports you might need to test your component. You should generally always import React + Shallow. Here's an example:  
```javascript
import React from 'react'  
import { shallow } from 'enzyme'  
import {ComponentName} from '../{ComponentName}'  
```

Head to the Enzyme documentation and find what type of test could work for your component. A simple test you can try is making sure a certain class name is always present when your Component renders, as well as one child element within your component (if it has one).

Here's a breakdown of what that might look like:  
```jsx
describe('{ComponentName}', () => { // where you write the component you're testing  
  it('Renders XYZ part of {ComponentName}', () => {  // where you describe what this specific test is testing for  
    const wrapper = shallow(<{ComponentName} />); // makes the test render the component you're testing  
    expect(wrapper.find('{.className-in-component').length).toEqual(1); // makes the test look for a specific class name that should appear in your component, and checks to see if there's 1 child in it  
});
```  
If you want to see an example of a working test, check out `blockquote.spec.js`.

## Running your tests

In your terminal, you can run:
- `npm run build` to make sure the sass gets compiled
- `npm test` to test *e v e r y t h i n g*
- `npm test -- {filename}` to test your specific test
- `npm test -- --watch {filename}` to keep the tests running, and this will update anytime you make a change
- `npm test -- -u` to recompile/regenerate snapshots

If you're running tests for Doc Blocks:
- `npm test -- docs` to run the tests for all doc blocks
- `npm test -- docs -u` to recompile/regenerate the tests

Then be sure to commit and push your new snapshots.

And any other Jest CLI commands. https://facebook.github.io/jest/docs/en/cli.html
