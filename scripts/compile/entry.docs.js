// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

export { default as CodeBlock } from '../../shared/components/CodeBlock';
export { default as CodeView } from '../../shared/components/CodeView';
export { default as Example } from '../../shared/components/Example';

export const getDoc = require.context('../../ui', true, /.*?docs\.mdx$/);
