import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export const NamespacePrefix = `lightning-`;

function ShadowContent({ children, root }) {
  return createPortal(children, root);
}

const shouldHideSource = (showSource, tagList, elementName) => {
  // if showSource is manually set to false then honor it
  if (!showSource) {
    return false;
  }

  let hideSource = false;
  if (tagList && tagList.includes(elementName)) {
    hideSource = true;
  }

  return !hideSource; // we actually want the inverse result in order to show all by default
};

ShadowContent.propTypes = {
  root: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

function createElement(options) {
  const ShadowRoot = forwardRef(
    (
      {
        mode,
        delegatesFocus,
        includes,
        children,
        name,
        shadow,
        showSource,
        hideSourceOf,
        ...props
      },
      ref
    ) => {
      const [node, setNode] = useState(null);
      const [root, setRoot] = useState(null);
      const Namespace = `${NamespacePrefix}${name}`;

      useEffect(() => {
        if (node) {
          const root = node.attachShadow({ mode, delegatesFocus });

          if (includes) {
            // if constructible stylesheets (array with length > 0)
            if (includes.length > 0 && (root.adoptedStyleSheets = includes)) {
              // adoptedStyleSheets set successfully
            } else {
              // default inline style tag
              root.appendChild(includes);
            }
          }

          ref && typeof ref === 'function' && ref(node);
          ref && 'current' in ref && (ref.current = node);

          setRoot(root);
        }
      }, [node]);

      // decide if we should be showing the shadow DOM source
      const shouldShowSource = shouldHideSource(showSource, hideSourceOf, name);

      if (options.config === 'off' || !shadow) {
        return children;
      } else {
        // if we should show shadow source
        if (shouldShowSource) {
          return (
            <Namespace ref={setNode} {...props}>
              {children}
            </Namespace>
          );
        }

        // default: build a shadow root
        return (
          <Namespace ref={setNode} {...props}>
            {root && <ShadowContent root={root}>{children}</ShadowContent>}
          </Namespace>
        );
      }
    }
  );

  ShadowRoot.defaultProps = {
    mode: 'open',
    delegatesFocus: false,
    includes: [],
    shadow: true,
    showSource: false,
    hideSourceOf: []
  };

  ShadowRoot.propTypes = {
    mode: PropTypes.oneOf(['open', 'closed']),
    delegatesFocus: PropTypes.bool,
    includes: PropTypes.array,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    shadow: PropTypes.bool,
    showSource: PropTypes.bool,
    hideSourceOf: PropTypes.array
  };

  return ShadowRoot;
}

const components = new Map();

export default new Proxy(
  {},
  {
    get: function(target, config) {
      if (!components.has(config))
        components.set(config, createElement({ config }));
      // This gets returned from the fn invocation via a key[value] pair
      // {namedExport.key}
      // Shadow.key => get(key)
      return components.get(config);
    }
  }
);
