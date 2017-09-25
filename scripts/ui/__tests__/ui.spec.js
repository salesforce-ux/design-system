// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const {ui}= require("../");

describe("scripts/ui.js", () => {
  describe("ui", () => {
    let result;

    beforeAll((done) => {
      ui().fork(
        e => {
          throw e;
        },
        r => {
          result = r;
          done();
        }
      );
    });

    it("has not changed", () => {
      expect(result.toJS()).toMatchSnapshot();
    });

    it("has all the components", () => {
      expect(result.getIn(["components", "buttons", "id"])).toEqual("buttons");
      expect(result.get("components").count()).toBe(2);
    });

    it("has all the utilities", () => {
      expect(result.getIn(["utilities", "floats", "id"])).toEqual("floats");
      expect(result.get("utilities").count()).toBe(2);
    });

    it("includes the examples skeleton for components", () => {
      const showcase = result.getIn(["components", "buttons", "restrictees", 0, "showcase"]);
      expect(showcase.toJS()).toMatchSnapshot();
    });

    it("includes the examples skeleton for utilities", () => {
      const showcase = result.getIn(["utilities", "floats", "showcase"]);
      expect(showcase.count()).toBeGreaterThan(1);
      expect(showcase.toJS()).toMatchSnapshot();
    });
  });
});
