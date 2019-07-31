import React from 'react';
import Shadow from '../../../shared/shadow';
import {
  constructor,
  createElement,
  rollupAdoptedStylesheets
} from '../../../shared/shadow/helpers';

import common from '../../common/index.scss';
import button from '../../button/base/index.scss';

const MyComponent = props => {
  const { disabled, children } = props;
  return (
    <button className="lwc-button lwc-button_neutral" disabled={disabled}>
      {children}
    </button>
  );
};

const css = rollupAdoptedStylesheets([common, button]);

createElement('test', css);
createElement('test-slot', css);

customElements.define('c-test', constructor['test']); // eslint-disable-line no-undef
customElements.define('c-test-slot', constructor['test-slot']); // eslint-disable-line no-undef

// console.log("c-test".wasRegistered());
// console.log("c-test-slot".wasRegistered());

export default (
  <React.Fragment>
    <div>
      <c-test />
    </div>

    <div>
      <c-test-slot>
        <MyComponent>c-test-slot</MyComponent>
      </c-test-slot>
    </div>

    <div>
      <Shadow.foo name="foo">
        <MyComponent>Shadow.off: Bad naming convention</MyComponent>
      </Shadow.foo>
    </div>

    <div>
      <Shadow.off name="foo">
        <MyComponent>Shadow.off</MyComponent>
      </Shadow.off>
    </div>

    <div>
      <Shadow.off name="foo">
        <MyComponent>Shadow.off</MyComponent>

        <Shadow.on name="foo" includes={css}>
          <MyComponent>Shadow.on nested in Shadow.off</MyComponent>
        </Shadow.on>
      </Shadow.off>
    </div>

    <div>
      <Shadow.on name="foo">
        <MyComponent>Shadow.on: No Adopted Stylesheets</MyComponent>
        <slot>
          <MyComponent>
            Shadow.on(::slotted): No Adopted Stylesheets
          </MyComponent>
        </slot>
      </Shadow.on>
    </div>

    <div>
      <Shadow.on name="foo" includes={css}>
        <MyComponent>Shadow.on: Adopted Stylesheets</MyComponent>
        <slot>
          <MyComponent>Shadow.on(::slotted): Adopted Stylesheets</MyComponent>
        </slot>
      </Shadow.on>
    </div>
  </React.Fragment>
);
