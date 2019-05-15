// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import styled from 'styled-components';

export const DocBlock = styled.div`
  .doc {
    color: #5876a3;
    font-size: 1rem;
  }

  a.doc {
    color: #0070d2;
  }

  a.doc-anchor {
    color: #706e6b;
    font-size: 1.25rem;
    margin-left: 0.5rem;

    &:hover,
    &:focus {
      color: #0070d2;
      text-decoration: none;
    }
  }

  h1.doc,
  h2.doc,
  h3.doc,
  h4.doc,
  h5.doc,
  h6.doc {
    color: #16325c;
  }

  h1.doc {
    font-size: 2.488rem;
    margin-bottom: 2rem;
  }

  h2.doc {
    font-size: 2.074rem;
    margin: 4rem 0 1rem;
  }

  h3.doc {
    font-size: 1.728rem;
    margin: 2rem 0 1rem;
  }

  h4.doc {
    font-size: 1.44rem;
    margin: 2rem 0 1rem;
  }

  h5.doc {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  h6.doc {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  p.doc {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  div.lead {
    font-size: 1.44rem;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  ul.doc,
  ol.doc {
    margin: 0 0 1.5rem 3rem;
  }

  ul.doc {
    list-style: disc;
  }

  ol.doc {
    list-style: decimal;
  }

  ul.doc > li.doc > ol.doc {
    margin-bottom: 0;
  }

  table.doc {
    background: #fff;
    border: 1px solid #f2f2f2;
    margin-bottom: 1.5rem;
  }

  td.doc,
  th.doc {
    padding: 0.5rem;
  }

  thead.doc th.doc,
  thead.doc td.doc {
    padding: 0.5rem;
  }

  tr.doc td.doc,
  tr.doc th.doc {
    border-top: 1px solid #f2f2f2;
  }

  tr.doc td:not(:first-child),
  tr.doc th:not(:first-child) {
    border-left: 1px solid #f2f2f2;
  }

  pre.doc {
    background: #fafaf9;
    color: #1990b8;
    padding: 2px;
    border-radius: 0.125rem;
  }

  code.doc {
    background: #f6f9fb;
    color: #1990b8;
    padding: 0 2px;
    border-radius: 0.125rem;
  }
`;
