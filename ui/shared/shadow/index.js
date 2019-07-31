import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

function ShadowContent({ children, root }) {
  return createPortal(children, root);
}

ShadowContent.propTypes = {
  root: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

function createElement(options) {
  const ShadowRoot = forwardRef(
    (
      { mode, delegatesFocus, includes, children, name, shadow, ...props },
      ref
    ) => {
      const [node, setNode] = useState(null);
      const [root, setRoot] = useState(null);
      const Namespace = `lightning-${name}`;

      useEffect(() => {
        if (node) {
          const root = node.attachShadow({ mode, delegatesFocus });
          includes.length > 0 && (root.adoptedStyleSheets = includes);

          ref && typeof ref === 'function' && ref(node);
          ref && 'current' in ref && (ref.current = node);

          setRoot(root);
        }
      }, [node]);

      if (options.config === 'off' || !shadow) {
        return children;
      } else {
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
    shadow: true
  };

  ShadowRoot.propTypes = {
    mode: PropTypes.oneOf(['open', 'closed']),
    delegatesFocus: PropTypes.bool,
    includes: PropTypes.array,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    shadow: PropTypes.bool
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
