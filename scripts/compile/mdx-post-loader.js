const elements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'a',
  'em',
  'strong',
  'ol',
  'ul',
  'li',
  'code',
  'blockquote',
  'tr',
  'td',
  'th',
  'table',
  'thead',
  'tbody'
];
const factories = elements.map(el => `${el}: El('${el}')`).join(',');

// We wrap the normal mdxc stuff with our own loader so we can add .doc to each element and
// have a bit of control with a Doc component wrapper
module.exports = code =>
  `
    import Doc from '../../../shared/components/Doc';

    const addDocClass = className =>
      ['doc', className].filter(x => x).join(' ')

    const El = el => (props, ...kids) => {
      const className = addDocClass(props.className)
      return React.createElement(el, Object.assign(props, {className}), kids)
    }

    const factories = {${factories}};

    ${code.replace(
      /export default function/,
      'export const Content = function'
    )}
    export default props => <Doc><Content {...props} factories={factories} /></Doc>
  `;
