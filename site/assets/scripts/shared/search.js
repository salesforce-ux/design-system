import fastdom from 'fastdom';

const handleResetClick = (event, node) => {
  document.querySelector('#docsearch').focus();
  fastdom.mutate(() => {
    document.querySelector('#search [type="reset"]').classList.add('hide');
    document.querySelector('#docsearch').value = '';
  });
};

const handleInputKeyUp = (event, node) => {
  fastdom.measure(() => {
    if (document.querySelector('#docsearch').value.length === 0) {
      fastdom.mutate(() => document.querySelector('#search [type="reset"]').classList.add('hide'));
    } else {
      fastdom.mutate(() => document.querySelector('#search [type="reset"]').classList.remove('hide'));
    }
  });
};

const handleInputChange = (event, node) => {
  fastdom.mutate(() => node.classList.add('filled'));
};

const handleInputBlur = (event, node) => {
  fastdom.measure(() => {
    if (node.value.length === 0) {
      fastdom.mutate(() => node.classList.remove('filled'));
    }
  });
};

export default () => ({
  hooks: {
    listen_dom: delegate => {
      delegate('submit', '#search', (e) => { e.preventDefault(); });
      delegate('click', '#search [type="reset"]', handleResetClick);
      delegate('keyup', '#docsearch', handleInputKeyUp);
      delegate('blur', '#docsearch', handleInputBlur);
      delegate('change', '#docsearch', handleInputChange);
    }
  }
});
