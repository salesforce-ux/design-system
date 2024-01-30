const theo = require('theo');

const SLDS = 'slds';
const SCOPE = ':root';

theo.registerFormat(
  'custom-props.scss',
  `${SCOPE} {
  {{#each props as |prop|}}
    {{#if prop.comment}}/* {{{prop.comment}}} */{{/if}}
    --${SLDS}-{{#eq prop.scope "global"}}g-{{/eq}}{{#eq prop.scope "shared"}}s-{{/eq}}{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}};
  {{/each}}
  }
  `,
);
