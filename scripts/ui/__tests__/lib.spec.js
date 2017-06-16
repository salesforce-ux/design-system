// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const {ui} = require("../");
const createInstance = require("../../lib.js");

describe("scripts/lib.js", () => {
  let SLDS;

  beforeAll(() => {
    ui().fork(
      e => {
        throw e;
      },
      r => {
        SLDS = createInstance(r)
      }
    );
  });

  it("returns a list of components", () => {
    const comps = SLDS.components()
    expect(comps.count()).toBeGreaterThan(1)
    expect(comps.first()).toEqual('buttons')
  });

  it("returns a component", () => {
    const comp = SLDS.component('buttons').getOrElse(null)
    expect(comp.get('id')).toEqual('buttons')
    expect(comp.get('restrictees').count()).toBeGreaterThan(0)
  });

  it("finds a variant", () => {
    const comp = SLDS.component('buttons').getOrElse(null)
    const variant = SLDS.findVariant(comp, 'stateful').getOrElse(null)
    expect(variant.get('id')).toEqual('stateful')
    expect(variant.get('restrictees').count()).toBeGreaterThan(0)
  });
});
