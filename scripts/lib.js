const Either = require('data.either');
const { toList } = require('@salesforce-ux/design-system-previewer/lib/tree');

const find = (list, f) => Either.fromNullable(list.find(f));

module.exports = ui => {
  const component = name =>
    Either.of(ui.get('components')).chain(cs =>
      Either.fromNullable(cs.get(name))
    );

  const components = () =>
    ui
      .get('components')
      .keySeq()
      .sort();

  const utilities = () =>
    ui
      .get('utilities')
      .keySeq()
      .sort();

  const isUtil = item => item.getIn(['annotations', 'utility']);

  const variants = comp =>
    isUtil(comp)
      ? comp.get('restrictees')
      : toList(comp).filter(item => item.getIn(['annotations', 'variant']));

  const utility = name =>
    Either.of(ui.get('utilities')).chain(u => Either.fromNullable(u.get(name)));

  const findVariant = (comp, id) =>
    Either.of(id).chain(i => find(toList(comp), x => x.get('id') === i));

  const getShowcase = (comp, variant) =>
    utilities().find(u => u === comp)
      ? utility(comp).map(u => u.get('showcase'))
      : component(comp)
          .chain(c => findVariant(c, variant))
          .map(v => v.get('showcase'));

  // check compile/entry.js for the rest...
  return {
    ui,
    component,
    components,
    utility,
    utilities,
    variants,
    findVariant,
    getShowcase
  };
};
