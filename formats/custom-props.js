const theo = require('theo');

const SLDS = 'slds';
const SCOPED_NAMESPACE = (process.env.WCAG_MODE === 'true') ? ':root' : '.slds-wcag';

theo.registerFormat(
  'custom-props.scss',
  `${SCOPED_NAMESPACE} {
  {{#each props as |prop|}}
    {{#if prop.comment}}/* {{{prop.comment}}} */{{/if}}
    --${SLDS}-{{#eq prop.scope "global"}}g-{{/eq}}{{#eq prop.scope "shared"}}s-{{/eq}}{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}};
  {{/each}}
  }
  `,
);
