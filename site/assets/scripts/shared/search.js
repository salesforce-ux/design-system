import fastdom from 'fastdom';
import globals from 'app_modules/global';

let search;

if (globals.displaySearch) {
  require.ensure(['docsearch.js'], () => {
    // See https://github.com/algolia/autocomplete.js#options
    // for full list of options.
    const docsearch = require('docsearch.js');
    const autocompleteOptions = {
      //debug: true
    };
    search = docsearch({
      apiKey: 'a5ad71e92251e2eaad9e20a9befd004b',
      indexName: 'lightningdesignsystem',
      inputSelector: '#docsearch',
      autocompleteOptions
    });
  });
}

const handleResetClick = (event, node) => {
  fastdom.mutate(() => {
    document.querySelector('#docsearch').focus();
    document.querySelector('#search [type="reset"]').classList.add('hide');
    search.autocomplete.autocomplete.setVal('');
  });
};

const handleInputKeyUp = (event, node) => {
  if (document.querySelector('#docsearch').value.length === 0) {
    fastdom.mutate(() => document.querySelector('#search [type="reset"]').classList.add('hide'));
  } else {
    fastdom.mutate(() => document.querySelector('#search [type="reset"]').classList.remove('hide'));
  }
};

const handleInputChange = (event, node) => {
  fastdom.mutate(() => node.classList.add('filled'));
};

const handleInputBlur = (event, node) => {
  if (node.value.length === 0) {
    fastdom.mutate(() => node.classList.remove('filled'));
  }
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      if (globals.displaySearch) {
        delegate('submit', '#search', (e) => { e.preventDefault(); });
        delegate('click', '#search [type="reset"]', handleResetClick);
        delegate('keyup', '#docsearch', handleInputKeyUp);
        delegate('blur', '#docsearch', handleInputBlur);
        delegate('change', '#docsearch', handleInputChange);
      }
    }
  }
});
