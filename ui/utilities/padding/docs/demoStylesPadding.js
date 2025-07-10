export default `
/* stylelint-disable selector-class-pattern */

.story-doc-padding > div {
}

.story-doc-padding .doc-spacing > div[class*="slds-p-"] {
  width: 8rem;
  height: 8rem;
}

.story-doc-padding_content .doc-spacing > div[class*="slds-p-"]:before {
  content: '';
  display: block;
  background: #1589ee;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  border-radius: 4px;
}
`;
