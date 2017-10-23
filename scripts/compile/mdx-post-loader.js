const elements = [
  'p',
  'a',
  'em',
  'strong',
  'ol',
  'ul',
  'li',
  'code',
  'blockquote',
  'pre',
  'tr',
  'td',
  'th',
  'table',
  'thead',
  'tbody'
];

const headingElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const elementFactories = elements.map(el => `${el}: El('${el}')`).join(',');
const headingFactories = headingElements
  .map(el => `${el}: HeadingEl('${el}')`)
  .join(',');

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

    const toc = [];

    const HeadingEl = el => (props, ...kids) => {
      const className = addDocClass(props.className);

      // routing to the same page runs this entire thing again, with no lifecycle hooks to prevent dupes
      let matchedItem = toc.filter(item => item.id === props.id);
      if(!matchedItem.length) {
        // build a list of headings and id for the table of contents component on the doc page
        toc.push({'id': props.id, 'title': kids[0], 'el': el});
      }

      return React.createElement(el, Object.assign(props, {className}), kids, <a className="doc doc-anchor" href={'#'+props.id}>#</a>)
    }

    const factories = {${headingFactories + ',' + elementFactories}};

    ${code.replace(
      /export default function/,
      'export const Content = function'
    )}

    export default props => <Doc><Content tableOfContentsData={toc} {...props} factories={factories} /></Doc>
  `;
