/* eslint-env jest */
import { extractVarsFromCSS } from '../var-extract';

describe('extractVarsFromCSS', () => {
  it('extracts vars from var function value with fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background, transparent); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(actual[styleHookName].fallbackValue).toEqual('transparent');
    expect(actual[styleHookName].category).toEqual('Color');
    expect(actual[styleHookName].valueType).toEqual('Color');
  });

  it('extracts vars from var function value with no fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(actual[styleHookName].fallbackValue).toEqual('');
  });

  it('extracts vars from malformed var function value with no fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background,); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(actual[styleHookName].fallbackValue).toEqual('');
  });

  it('extracts vars only from allow pattern', () => {
    const actual = extractVarsFromCSS(
      `.foo {
        top: var(--slds-kx-icon-position-top, 1rem);
        background-color: var(--sds-c-icon-color-background, transparent);
        left: var(--slds-kx-icon-position-left, 1rem);
      }`,
      { allowPattern: /^--sds-c-/ }
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--sds-c-icon-color-background');
    expect(Object.keys(actual).length).toEqual(1);
    expect(actual[styleHookName].fallbackValue).toEqual('transparent');
    expect(actual[styleHookName].category).toEqual('Color');
    expect(actual[styleHookName].valueType).toEqual('Color');
  });

  it('extracts vars from multiple allow pattern', () => {
    const actual = extractVarsFromCSS(
      `.foo {
        top: var(--slds-kx-icon-position-top, 1rem);
        background-color: var(--sds-c-icon-color-background, transparent);
        left: var(--foo-icon-position-left, 1rem);
      }`,
      { allowPattern: /^(?:--sds-c-|--slds-kx-)/ }
    );

    const [styleHookName1, styleHookName2] = Object.keys(actual);

    expect(styleHookName1).toEqual('--slds-kx-icon-position-top');
    expect(styleHookName2).toEqual('--sds-c-icon-color-background');
    expect(Object.keys(actual).length).toEqual(2);
    expect(actual[styleHookName1].fallbackValue).toEqual('1rem');
    expect(actual[styleHookName2].category).toEqual('Color');
  });

  it('extracts vars from nested var functions value with fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, transparent)); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--slds-c-icon-color-background');
    expect(actual[styleHookName].fallbackValue).toEqual('transparent');
    expect(actual[styleHookName].category).toEqual('Color');
    expect(actual[styleHookName].valueType).toEqual('Color');
  });

  it('extracts vars from deeply nested var functions value with fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, var(--sds-g-icon-color, transparent))); }'
    );

    const styleHookName = Object.keys(actual)[0];

    expect(styleHookName).toEqual('--slds-c-icon-color-background');
    expect(actual[styleHookName].fallbackValue).toEqual('transparent');
    expect(actual[styleHookName].category).toEqual('Color');
    expect(actual[styleHookName].valueType).toEqual('Color');
  });
});
