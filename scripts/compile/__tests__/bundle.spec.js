// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const Task = require("data.task");
const Bundle = require("../bundle");

describe("scripts/compile/bundle", () => {
  describe("configs", () => {
    it("umd", () => {
      expect(Bundle.configs.umd).toMatchSnapshot();
    });
    it("chunked", () => {
      expect.assertions(1);
      Bundle.configs.chunked.fork(
        e => {
          throw e;
        },
        config => {
          config = config.delete("plugins");
          expect(config).toMatchSnapshot();
        }
      );
    });
  });
  describe("compile", () => {
    it("rejects the task if the config contains no output.path", () => {
      expect.assertions(1);
      Bundle.compile(Bundle.configs.umd).fork(
        e => {
          expect(e.message).toContain("output.path");
        },
        r => {}
      );
    });
  });
  describe("createLibrary", () => {
    it("calls the compile function with the correct config", () => {
      expect.assertions(2);
      const compile = jest.fn(config => Task.of(config));
      Bundle.createLibrary("/testPath", compile).fork(
        e => {
          throw e;
        },
        configs => {
          configs = configs.map(c => c.delete("plugins"));
          expect(compile).toHaveBeenCalledTimes(2);
          expect(configs).toMatchSnapshot();
        }
      );
    });
  });
});
