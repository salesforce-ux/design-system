// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import styled from 'styled-components';

export const StyledButton = styled.button`
  appearance: none;
  background-clip: border-box;
  background: transparent;
  border: 0;
  display: inline-block;
  font-size: inherit;
  line-height: 1.875rem;
  position: relative;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  user-select: none;
  white-space: normal;
  color: #706e6b;

  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
`;

export const StyledCodeView = styled.div`
  margin-bottom: 2rem;

  .docs-codeblock-example {
    border: solid 3px #f2f2f2;
    position: relative;
    overflow: auto;
    transform: translate3d(0, 0, 0);
    padding: 1rem;
  }

  .docs-codeblock-example + .docs-codeblock-source {
    border-top: 0;
  }
`;

export const StyledCodeBlock = styled.div`
  margin-bottom: 1.5rem;
  border: solid 3px #f2f2f2;
  position: relative;

  .docs-codeblock-source__code {
    padding: 1rem;
  }

  .docs-codeblock-source__code.code-collapsed:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 1)
    );
    display: block;
    height: 2.25rem;
  }

  .docs-codeblock-source__code.code-collapsed pre {
    height: calc(21px * 3);
    overflow: hidden;
  }

  .docs-codeblock-source__code.code-expanded pre {
    height: auto;
  }

  .docs-codeblock__action-bar {
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
  }

  .docs-codeview__density-bar {
    display: flex;
    justify-content: flex-end;
    background: #f2f2f2;
    margin: -1rem -1rem 1rem -1rem;
    padding: 0.25rem 0.5rem;
  }

  .docs-codeview__density-bar-form {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .docs-codeblock__action-bar li {
    display: flex;
    padding: 0 0.5rem;
    border-left: 1px solid #f2f2f2;
  }

  .doc-toggle-code__button {
    font-weight: 700;
  }
`;
