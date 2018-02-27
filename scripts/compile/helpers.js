// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const I = require('immutable-ext');
const Either = require('data.either');
const path = require('path');
const { ui, variants } = require('../ui');

const FOLDERNAME = '__internal';

const webpackPath = prefix => filepath =>
  path.join(prefix, filepath.replace(/^\.\//, '').concat('.js'));

const setKeyIfExists = (keypath, fixFilePath) => (entry, item) =>
  Either.fromNullable(item.get(keypath)).fold(
    () => entry,
    result => entry.set(fixFilePath(result), result)
  );

const chunkedDocsEntry = (ui, fixFilePath) =>
  ui.reduce(
    (entry, group) =>
      group.reduce(setKeyIfExists('docPath', fixFilePath), entry),
    I.Map()
  );

const chunkedShowcaseEntry = (ui, fixFilePath) => {
  const setShowcase = setKeyIfExists('showcasePath', fixFilePath);

  return ui.reduce(
    (entry, group, groupName) =>
      group.reduce(
        (entry, item, name) =>
          groupName === 'utilities'
            ? setShowcase(entry, item)
            : variants(item).reduce(setShowcase, entry),
        entry
      ),
    I.Map()
  );
};

const chunkedEntry = ui().map(ui =>
  I.Map({
    [`${FOLDERNAME}/chunked/showcase`]: chunkedShowcaseEntry,
    [`${FOLDERNAME}/chunked/docs`]: chunkedDocsEntry
  }).map((createEntry, prefix) => createEntry(ui, webpackPath(prefix)))
);

const manifest = chunkedEntry.map(entryMap =>
  entryMap.reduce(
    (manifest, entries, prefix) =>
      manifest
        .merge(entries.flip())
        // Need to add a common "entry" with a name that can be referenced
        // in design-system-site
        .set(
          `${I.List(prefix.split('/')).last()}/common`,
          `${prefix}/common.js`
        ),
    I.Map({})
  )
);

module.exports = { FOLDERNAME, chunkedEntry, manifest };
