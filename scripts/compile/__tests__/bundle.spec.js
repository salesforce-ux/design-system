// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const Task = require("data.task");
const Bundle = require("../bundle");

it("doesn't change configs", () => {
  expect.assertions(1);
  Bundle.configs
    .map(cfgs =>
      cfgs.map(c => c.set("plugins", null).deleteIn(["output", "path"]))
    )
    .fork(
      e => {
        throw e;
      },
      cfgs => {
        expect(cfgs.toJS()).toMatchSnapshot();
      }
    );
});
