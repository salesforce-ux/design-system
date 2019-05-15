// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import styled from 'styled-components';

export const StyledToc = styled.ul`
  .doc-toc li.doc a {
    font-size: 0.875rem;
    font-weight: 700;
  }

  li.doc > ul.doc,
  li.doc > li.doc,
  ul.doc > ul.doc,
  ul.doc > li.doc {
    margin-left: 0.4rem;
  }

  li.doc > ul.doc {
    margin-bottom: 0;
  }

  .doc-toc > li.doc > ul.doc > li.doc a {
    font-weight: 400;
  }

  .doc-toc > li.doc > ul.doc ul.doc > li.doc a {
    font-size: 0.75rem;
    font-weight: 400;
    color: #4872ab;
  }

  h2.doc-toc-header {
    font-size: 1rem;
    border-bottom: 1px solid #d9dbdd;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;
