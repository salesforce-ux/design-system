import { html as htmlBeautify } from 'js-beautify';

export const beautify = html =>
  htmlBeautify(html, {
    brace_style: 'end-expand',
    indent_size: 2,
    indent_char: ' ',
    unformatted: [],
    'wrap_line_length ': 78,
    indent_inner_html: true
  });
