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
  const publicDocSearchApiKey = 'a5ad71e92251e2eaad9e20a9befd004b';
  const publicDocSearchIndexName = 'lightningdesignsystem';

  o.addEventListener('load', function (e) {
    let docSearchConfig = {
      apiKey: process.env.SEARCH_API_KEY === 'Use public DocSearch' ? publicDocSearchApiKey : process.env.SEARCH_API_KEY,
      indexName: process.env.SEARCH_INDEX_NAME === 'Use public DocSearch' ? publicDocSearchIndexName : process.env.SEARCH_INDEX_NAME,
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
    };

    // Only specify an appId when using a private DocSearch instance
    // The public version of DocSearch figures out the appId for us
    if (process.env.SEARCH_APP_ID !== 'Use public DocSearch') {
      docSearchConfig.appId = process.env.SEARCH_APP_ID;
    }

    search = docsearch(docSearchConfig);
  });
  s.parentNode.insertBefore(o, s);
}

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
        delegate('blur', '#docsearch', handleInputBlur);
        delegate('change', '#docsearch', handleInputChange);
      }
    }
  }
});
