const releaseNotes = require('../release-notes')
const fs = require('fs')
const through = require('through2');

describe('Release Notes', () => {
  it('generates notes for internal builds', (done) => {
    let data = ''
    const reader = through((chunk, enc, done) => done(null, data+=chunk))
    releaseNotes({
      isInternal: true,
      outStream: reader,
      callback: () => {
        expect(data).toContain('Bug Fixes')
        expect(data).toContain('design-system-internal')
        expect(data.length).toBeGreaterThan(100)
        done()
      }
    })
  })

  it('generates notes for external builds', (done) => {
    let data = ''
    const reader = through((chunk, enc, done) => done(null, data+=chunk))
    releaseNotes({
      isInternal: false,
      outStream: reader,
      callback: () => {
        expect(data).toContain('Bug Fixes')
        expect(data).not.toContain('design-system-internal')
        expect(data.length).toBeGreaterThan(100)
        done()
      }
    })
  })
})
