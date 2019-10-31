/* eslint-disable no-extend-native */
/* eslint-disable no-undef */
import React from 'react';

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

// recursively clone the children
export const recursivelyCloneChildren = (
  childrenValue,
  showSource,
  hideSourceOf
) => {
  return React.Children.map(childrenValue, child => {
    if (!React.isValidElement(child)) return child;

    // set/add props
    const childProps = {
      showSource: showSource,
      hideSourceOf: hideSourceOf
    };

    // if we have children on this child
    if (child.props && child.props.children) {
      childProps.children = recursivelyCloneChildren(
        child.props.children,
        showSource,
        hideSourceOf
      );
    }

    return React.cloneElement(child, childProps);
  });
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
