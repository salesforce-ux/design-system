// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import styled from 'styled-components';

export const StyledSpacingExample = styled.div`
  display: inline-flex;
  outline: 1px dashed rgba(43, 40, 38, 0.35);

  .doc-padding {
    width: 6rem;
    height: 6rem;
  }

  .doc-padding::before {
    content: '';
    display: block;
    background: #1589ee;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    border-radius: 4px;
  }

  .doc-margin {
    width: 6rem;
    height: 6rem;
  }

  .doc-margin_content {
    background: #1589ee;
    border-radius: 4px;
  }
`;
