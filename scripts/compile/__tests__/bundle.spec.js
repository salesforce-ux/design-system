// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import Task from 'data.task';
import stringify from 'json-stable-stringify';
import { escapeRegExp } from 'lodash';
import path from 'path';

import paths from '../../helpers/paths';
import Bundle from '../bundle';

it("doesn't change configs", () => {
  expect.assertions(1);
  Bundle.configs
    .map(configs =>
      configs.map(config => config.delete('entry').delete('plugins'))
    )
    .fork(
      e => {
        throw e;
      },
      configs => {
        expect(
          stringify(configs, { space: 2 }).replace(
            new RegExp(escapeRegExp(paths.root), 'g'),
            ''
          )
        ).toMatchSnapshot();
      }
    );
});
