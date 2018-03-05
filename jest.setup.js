// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
/* eslint-disable import/first */

// Needed for Enzyme
global.requestAnimationFrame = cb => setTimeout(cb, 0);

import enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new EnzymeAdapter() });
