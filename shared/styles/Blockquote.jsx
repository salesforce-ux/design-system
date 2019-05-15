// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import styled from 'styled-components';

export const StyledBlockquote = styled.blockquote`
  background-color: #fafaf9;
  font-weight: 300;
  padding: 1rem;
  margin: 0 0 1.5rem 0;
  border: 1px solid #f2f2f2;
  border-left-width: 0.125rem;

  p.doc {
    margin: 0.5rem 0;
  }

  .blockquote__header {
    margin-bottom: 0;
    font-weight: 600;
  }

  p:only-child,
  p:first-child {
    margin-top: 0;
  }

  p:only-child,
  p:last-child {
    margin-bottom: 0;
  }

  &.blockquote_note {
    border-left-color: #00396b;

    .blockquote__header {
      color: #00396b;
    }
  }

  &.blockquote_a11y {
    border-left-color: #0070d2;

    .blockquote__header {
      color: #0070d2;
    }
  }

  &.blockquote_warning {
    border-left-color: #ffb75d;

    .blockquote__header {
      color: #d47500;
    }
  }
`;
