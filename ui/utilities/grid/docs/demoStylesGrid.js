export default `
/* stylelint-disable selector-class-pattern */

.slds-grid {
  height: auto;
  min-height: 8.75rem;
  margin-bottom: 1rem;
}

.slds-grid > .slds-grid {
  height: auto;
  margin-bottom: 0;
}

.slds-col,
.slds-grid > div:not(.slds-col) {
  display: inline-flex;
  background: #54698d;
  color: #fff;
  text-align: center;
  background-clip: content-box;
  border: 1px solid #fff;
  border-radius: 0;
}

.slds-col > span {
  align-self: center;
  margin: auto;
  font-size: 1.575rem;
  padding: 0.5rem;
}

.slds-wrap {
  align-items: stretch;
}

.slds-grid > div:not(.slds-col) > span {
  align-self: center;
  margin: auto;
  font-size: 1.575rem;
  padding: 0.5rem;
}
`;
