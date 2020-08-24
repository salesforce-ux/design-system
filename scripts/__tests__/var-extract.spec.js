/* eslint-env jest */
import { extractVarsFromCSS } from '../var-extract';
// import createHelpers from '../../../../jest.helpers';

describe('extractVarsFromCSS', () => {
  it('extracts vars from var function value with fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background, transparent); }'
    );
    expect(actual).toMatchSnapshot();
  });

  it('extracts vars from var function value with no fallback', () => {
    const actual = extractVarsFromCSS(
      '.foo { background-color: var(--sds-c-icon-color-background); }'
    );
    expect(actual).toMatchSnapshot();
  });
});
