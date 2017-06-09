// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const fakeWebpack = config =>
  ({
    run: (config, outputPath) =>
      ({config, outputPath})
  })

const Bundle = require('../../../scripts/compile/bundle')(fakeWebpack)

describe('scripts/compile/bundle', () => {
  it('creates the right config for umd', () => {
    expect(Bundle.configs.umd.toJS()).toMatchSnapshot()
  })
  it('creates the right config for commonJS', () => {
    expect(Bundle.configs.commonJS.toJS()).toMatchSnapshot()
  })
  xit('creates the right config for chunked', done => {
    Bundle.configs.chunked
    .fork(
      e => { throw e },
      cfg => {
        expect(cfg.toJS()).toMatchSnapshot()
        done()
      }
    )
  })
  xit('compiles with webpack', done => {
    Bundle.compile(Bundle.configs.umd, '/testPath')
    .fork(
      e => { throw e },
      response => {
        // fakeWebpack just gives us our args back, but proves it "compiled" through Bundle
        expect(response.config.getIn(['output', 'libraryTarget'])).toEqual('umd')
        expect(response.outputPath).toEqual('/testPath')
        done()
      }
    )
  })
})
