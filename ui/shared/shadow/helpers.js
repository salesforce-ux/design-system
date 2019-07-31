/* eslint-disable no-extend-native */
/* eslint-disable no-undef */
export let constructor = {};

export const createElement = (name, css) => {
  constructor[name] = class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `<slot></slot>`;
      this.setStyles();
      // this.getNodes();
    }
    // getNodes() {
    // const slot = this.shadowRoot.querySelector('slot');
    // console.log(slot.assignedNodes());
    // }
    setStyles() {
      if (this.shadowRoot && css) {
        this.shadowRoot.adoptedStyleSheets = css;
      }
    }
  };
  return constructor;
};

export const rollupAdoptedStylesheets = sheets => {
  let styleSheets = [];
  sheets.map(sheet => {
    let scopedCss = new CSSStyleSheet();
    scopedCss.replaceSync(sheet);
    styleSheets.push(scopedCss);
  });
  return styleSheets;
};

String.prototype.wasRegistered = function() {
  switch (document.createElement(this).constructor) {
    case HTMLElement:
      return false;
    case HTMLUnknownElement:
      return undefined;
  }
  return true;
};
