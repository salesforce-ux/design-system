const { html: htmlBeautify } = require('js-beautify');

const beautify = html =>
  htmlBeautify(html, {
    brace_style: 'end-expand',
    indent_size: 2,
    indent_char: ' ',
    unformatted: [],
    'wrap_line_length ': 78,
    indent_inner_html: true
  });

module.exports = { beautify };
