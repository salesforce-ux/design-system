import fastdom from 'fastdom';
import globals from 'app_modules/global';

let search;

if (globals.displaySearch) {
  // See https://github.com/algolia/autocomplete.js#options
  // for full list of options.
  const autocompleteOptions = {
    // debug: true
  };

  const d = document;
  const t = 'script';
  const o = d.createElement(t);
  const s = d.getElementsByTagName(t)[0];
  o.src = 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js';

  o.addEventListener('load', function (e) {
    search = docsearch({
      apiKey: 'a5ad71e92251e2eaad9e20a9befd004b',
      indexName: 'lightningdesignsystem',
      inputSelector: '#docsearch',
      autocompleteOptions,
      transformData: (hits) => {
        return hits.map(function (hit) {
          // Remove the domain name from the result URL
          // so that search works on multiple domains (not just lightningdesignsystem.com)
          hit.url = hit.url.replace(/^(?:\/\/|[^\/]+)*\//, '/');
          return hit;
        });
      }
    });
  });
  s.parentNode.insertBefore(o, s);
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
