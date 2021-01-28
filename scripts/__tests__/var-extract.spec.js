/* eslint-env jest */
import { extractVarsFromCSS } from '../var-extract';

describe('extractVarsFromCSS', () => {
  it('extracts vars from var function value with fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background, transparent); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(actual[styleHookName].fallBackValue).toEqual('transparent');
    expect(actual[styleHookName].category).toEqual('Color');
    expect(actual[styleHookName].valueType).toEqual('Color');
  });

  it('extracts vars from var function value with no fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(actual[styleHookName].fallBackValue).toEqual('');
  });
});
