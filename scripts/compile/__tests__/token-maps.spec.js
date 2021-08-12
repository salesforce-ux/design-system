// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

const path = require('path');
const tokenMaps = require('../token-maps');
const TokenMaps = tokenMaps._internal;
const cssFixture = require('./__fixtures__/css-fixture');
const complicatedSassFixture = require('./__fixtures__/complicated-sass-fixture');

//

// Note: most of token-maps uses Data.task delayed-execution Folktale-style
// chaining. The tasks are not run until fork() is called.
// See: https://github.com/folktale/data.task

const nothingToDo = () => true;

//

describe('addTimeDateStamp', () => {
  it('should add @-keys', (done) => {
    const fixture = {
      foo: 'bar',
      answer: 42,
    };
    const expected = [
      '@generated-at',
      '@generated-by',
      '@slds-version',
      'answer',
      'foo',
    ];

    TokenMaps.addTimeDateStamp(fixture).fork(nothingToDo, (result) => {
      const resultKeys = Object.keys(result).sort();

      expect(resultKeys).toEqual(expect.arrayContaining(expected));
      expect(result['@generated-by']).toBe('token-maps');

      done();
    });
  });
});

describe('combineComponentData', () => {
  it('should combine two pieces of file data', () => {
    let result = {
      otherComponent: {
        foo: 'bar',
      },
    };
    const newItem1 = {
      componentName: 'aComponent',
      path: '/some/path',
      data: 'data1a\ndata1b\n',
    };
    const newItem2 = {
      componentName: 'aComponent',
      path: '/some/path',
      data: 'data2\n',
    };

    TokenMaps.combineComponentData(result, newItem1);
    TokenMaps.combineComponentData(result, newItem2);

    const resultKeys = Object.keys(result).sort();

    expect(resultKeys).toEqual(
      expect.arrayContaining(['aComponent', 'otherComponent'])
    );
    expect(result.aComponent.data).toBe('data1a\ndata1b\ndata2');
  });
});

describe('convertSassTokenToAuraToken', () => {
  it('should convert a token with letters and numbers', () => {
    const result = TokenMaps.convertSassTokenToAuraToken('$var-font-size-2');
    expect(result).toBe('varFontSize2');
  });

  it('should generate a result that contains only letters and numbers without puntuation', () => {
    const result = TokenMaps.convertSassTokenToAuraToken('$var-font-size-2)');
    expect(result).toMatch(/^[a-zA-Z0-9]+$/);
  });
});

describe('convertSassTokenToYamlToken', () => {
  it('should convert a token to YAML format', () => {
    const result = TokenMaps.convertSassTokenToYamlToken('$var-font-size-2');
    expect(result).toBe('VAR_FONT_SIZE_2');
  });
});

describe('convertYamlTokenToAuraToken', () => {
  it('should convert a YAML token Aura format', () => {
    const result = TokenMaps.convertYamlTokenToAuraToken('VAR_FONT_SIZE_2');
    expect(result).toBe('varFontSize2');
  });
});

describe('convertYamlTokenToSassToken', () => {
  it('should convert a YAML token Sass format', () => {
    const result = TokenMaps.convertYamlTokenToSassToken('VAR_FONT_SIZE_2');
    expect(result).toBe('$var-font-size-2');
  });
});

// Skipping test: createAuraTokensMap

// Skipping test: createTokenComponentMap

// Skipping test: createUtilityDeclarationsMap

describe('getComponentNameFromPath', () => {
  it('should get component name from a file at the component directory level', () => {
    const basePath =
      '/Users/someUser/code/design-system-internal/ui/components';
    const filePath =
      '/Users/someUser/code/design-system-internal/ui/components/feeds/_doc.scss';
    const result = TokenMaps.getComponentNameFromPath(filePath, basePath);

    expect(result).toBe('feeds');
  });

  it('should get component name from a file at the subdirectory level', () => {
    const basePath =
      '/Users/someUser/code/design-system-internal/ui/components';
    const filePath =
      '/Users/someUser/code/design-system-internal/ui/components/feeds/post/_index.scss';
    const result = TokenMaps.getComponentNameFromPath(filePath, basePath);

    expect(result).toBe('feeds');
  });
});

// Skipping test: getComponentsPath

describe('getSassTokensInValue', () => {
  it('should not return anything for an empty string', () => {
    const result = TokenMaps.getSassTokensInValue('');
    expect(result).toHaveLength(0);
  });

  it('should not return anything for a string without tokens', () => {
    const result = TokenMaps.getSassTokensInValue('no tokens here!');
    expect(result).toHaveLength(0);
  });

  it('should return 1 token in a string that has 1 token', () => {
    const result = TokenMaps.getSassTokensInValue('$token-number-1 !important');
    expect(result).toHaveLength(1);
    expect(result[0]).toBe('$token-number-1');
  });

  it('should ensure the token is just a token', () => {
    const result = TokenMaps.getSassTokensInValue(
      'mysteryFunc($token-as-parameter)'
    );
    expect(result).toHaveLength(1);
    expect(result[0]).toBe('$token-as-parameter');

    const result2 = TokenMaps.getSassTokensInValue(
      '$--some_variable/$--some_other-variable_2'
    );
    expect(result2).toHaveLength(2);
    expect(result2[0]).toBe('$--some_variable');
    expect(result2[1]).toBe('$--some_other-variable_2');
  });
});

// Skipping test: getUtilitiesPath

describe('isSassToken', () => {
  it('should reject empty strings', () => {
    const result = TokenMaps.isSassToken('');
    expect(result).toBeFalsy();
  });

  it('should reject strings without a starting $', () => {
    const result = TokenMaps.isSassToken('a-token-without-dollars');
    expect(result).toBeFalsy();
  });

  it('should reject identifiers starting with a number', () => {
    const result = TokenMaps.isSassToken('$42-is-not-the-answer');
    expect(result).toBeFalsy();
  });

  it('should reject identifiers with non-letter/non-number characters', () => {
    const result = TokenMaps.isSassToken('$this-has-an-extra-paren)');
    expect(result).toBeFalsy();
  });

  it('should allow valid token names', () => {
    const result = TokenMaps.isSassToken('$_some-Awesome-Token');
    expect(result).toBeTruthy();
  });
});

// Skipping test: loadComponentsScss

// Skipping test: loadTokens

describe('mapSelectorsToProps', () => {
  it('should parse CSS and return a map of selectors to arrays of key-values', (done) => {
    TokenMaps.mapSelectorsToProps(cssFixture).fork(
      nothingToDo,
      (cssSelectorsWithDeclarations) => {
        const c = cssSelectorsWithDeclarations;

        const foo = c['.foo'];
        expect(foo).toHaveLength(3);
        expect(foo.find((item) => item.property === 'padding-left').value).toBe(
          '10px'
        );

        const bar = c['.bar'];
        expect(bar).toHaveLength(2);
        expect(
          bar.find((item) => item.property === 'margin-bottom').value
        ).toBe('40px');

        done();
      }
    );
  });
});

// Skipping test: parseComponentsScss

describe('parseScssForTokens', () => {
  it.skip('should parse SCSS Sass', (done) => {
    const fixture = complicatedSassFixture;
    const expectedTokens = [
      'colorBackgroundPathWon',
      'colorBorder',
      'colorBorderPathDivider',
      'colorTextInverse',
      'heightSalesPath',
      'lineHeightSalespath',
      'varSpacingVerticalSmall',
    ];
    const expectedTokenCssProperties = ['background-color', 'background-image'];
    const expectedCssSelector =
      '.slds-path__nav .slds-is-won .slds-path__link, .slds-path__nav .slds-is-won:hover .slds-path__link';

    TokenMaps.setTokensMap({
      colorBackgroundPathWon: { value: 'value1' },
      colorBorder: { value: 'value2' },
      colorBorderPathDivider: { value: 'value3' },
      colorTextInverse: { value: 'value4' },
      heightSalesPath: { value: 'value5' },
      lineHeightSalespath: { value: 'value6' },
      varSpacingVerticalSmall: { value: 'value7' },
    });
    TokenMaps.parseScssForTokens(fixture).then((result) => {
      const resultKeys = Object.keys(result).sort();

      expect(resultKeys).toEqual(expect.arrayContaining(expectedTokens));
      expect(result.colorBackgroundPathWon.cssProperties).toEqual(
        expect.arrayContaining(expectedTokenCssProperties)
      );
      expect(result.colorTextInverse.cssSelectors).toHaveLength(1);
      expect(result.colorTextInverse.cssSelectors[0]).toEqual(
        expectedCssSelector
      );

      done();
    });
  });
});

describe('parseScssTokenPreserved', () => {
  const scssFixturePath = path.resolve(
    __dirname,
    './__fixtures__/simple-sass-fixture.scss'
  );

  it('should preserve only Aura token names', (done) => {
    const originalGetTokenNames = TokenMaps.getTokenNames;
    TokenMaps.getTokenNames = jest
      .fn()
      .mockImplementation(() => ['this-is-a-token', 'this-is-another-token']);

    TokenMaps.parseScssTokenPreserved(scssFixturePath).fork(
      nothingToDo,
      (result) => {
        expect(result).toEqual(
          expect.stringContaining('font-size: $thisIsAToken;')
        );
        expect(result).toEqual(
          expect.stringContaining('background: $thisIsAnotherToken;')
        );
        expect(result).toEqual(
          expect.stringContaining('something-else: abc def 579 jkl;')
        );

        TokenMaps.getTokenNames = originalGetTokenNames;
        done();
      }
    );
  });
});

describe('removeDataInScss', () => {
  it('should remove the data property nested in data structures', (done) => {
    const fixture = {
      aToken: {
        foo: 'bar',
        data: 'still here',
        number: 1,
      },
      anotherToken: {
        foo: 'bar2',
        data: 'still here2',
        number: 2,
      },
      noDataToken: {
        foo: 'bar3',
        number: 3,
      },
    };
    const expectedKeys = ['anotherToken', 'aToken', 'noDataToken'];

    const dataValues = Object.keys(fixture)
      .map((k) => fixture[k].data)
      .filter((x) => x)
      .sort();
    const expectedDataValues = ['still here', 'still here2'];

    TokenMaps.removeDataInScss(fixture).fork(nothingToDo, (result) => {
      const resultKeys = Object.keys(result).sort();

      expect(resultKeys).toEqual(expect.arrayContaining(expectedKeys));
      expect(dataValues).toEqual(expect.arrayContaining(expectedDataValues));
      expect(result.noDataToken.data).toBeUndefined();

      done();
    });
  });
});

describe('sanitizePath', () => {
  it('should remove the root path', () => {
    const result = TokenMaps.sanitizePath(__dirname);

    expect(result).toBe('/scripts/compile/__tests__');
  });
});

describe('sanitizeRawToken', () => {
  const fixture = {
    name: 'THIS_IS_A_YAML_STYLE_TOKEN',
    category: 'fakeCategory',
    comment: 'fakeComment',
    type: 'fakeType',
    cssPropertiesIsNotDefined: null,
    value: 'fakeValue',
    extraValueNotConverted: 12345,
    deprecated: true,
  };

  it('should transform the token object', () => {
    const result = TokenMaps.sanitizeRawToken(fixture);

    expect(result.name).toBeUndefined();
    expect(result.category).toBe('fakeCategory');
    expect(result.comment).toBe('fakeComment');
    expect(result.type).toBe('fakeType');
    expect(result.cssProperties).toHaveLength(0);
    expect(result.value).toBe('fakeValue');
    expect(result.auraToken).toBe('thisIsAYamlStyleToken');
    expect(result.sassToken).toBe('$this-is-a-yaml-style-token');
    expect(result.yamlToken).toBe('THIS_IS_A_YAML_STYLE_TOKEN');
    expect(result.cssPropertiesIsNotDefined).toBeUndefined();
    expect(result.extraValueNotConverted).toBeUndefined();
    expect(result.deprecated).toBeTruthy();
  });
});

describe('sanitizeScss', () => {
  it('should remove // comments', () => {
    const fixture =
      '// This should go away\n' +
      '  // This too. But indented.\n' +
      '.anScssClass { abc: 123 }\n' +
      '\n' +
      '// This is extra // so extra\n' +
      '\n' +
      '// So many comments!\n' +
      '.otherClass {\n' +
      '  is-it-cool: yes;    // This has an end-of-line comment\n' +
      '}\n';
    const expected =
      '.anScssClass { abc: 123 }\n' +
      '.otherClass {\n' +
      'is-it-cool: yes;\n' +
      '}';
    const result = TokenMaps.sanitizeScss(fixture);

    expect(result).toBe(expected);
  });

  it('should remove multiline /* */ comments', () => {
    const fixture =
      '/**\n' +
      ' * This should go away\n' +
      ' * This too.\n' +
      ' */\n' +
      '.anScssClass { abc: 123 }\n' +
      '\n' +
      '/* This is extra */ // so extra\n' +
      '\n' +
      '/*\n' +
      'So many comments!\n' +
      '*/\n' +
      '.otherClass {\n' +
      '  is-it-cool: yes;    /* This has an end-of-line comment */\n' +
      '}\n';
    const expected =
      '.anScssClass { abc: 123 }\n' +
      '.otherClass {\n' +
      'is-it-cool: yes;\n' +
      '}';
    const result = TokenMaps.sanitizeScss(fixture);

    expect(result).toBe(expected);
  });
});

describe('sanitizeSelector', () => {
  it('should remove spaces', () => {
    const fixture = '  .slds   .slds-path,\n  .slds  .slds-path__nav ';
    const result = TokenMaps.sanitizeSelector(fixture);

    expect(result).toBe('.slds .slds-path, .slds .slds-path__nav');
  });
});

describe('sanitizeRawToken', () => {
  it('should convert raw token values', () => {
    const fixture = JSON.parse(`{
      "VAR_LINE_HEIGHT_TEXT": {
        "category": "line-height",
        "type": "number",
        "cssProperties": [
          "font",
          "*height"
        ],
        "value": "1.375",
        "comment": "Variable unitless line-heights for reusability",
        "originalValue": "1.375",
        "name": "VAR_LINE_HEIGHT_TEXT"
      }
    }`).VAR_LINE_HEIGHT_TEXT;
    const result = TokenMaps.sanitizeRawToken(fixture);

    expect(result.category).toBe('line-height');
    expect(result.type).toBe('number');
    expect(result.cssProperties).toEqual(
      expect.arrayContaining(['font', '*height'])
    );
    expect(result.value).toBe('1.375');
    expect(result.comment).toBe(
      'Variable unitless line-heights for reusability'
    );
    expect(result.originalValue).toBeUndefined();
    expect(result.name).toBeUndefined();
    expect(result.auraToken).toBe('varLineHeightText');
    expect(result.sassToken).toBe('$var-line-height-text');
    expect(result.yamlToken).toBe('VAR_LINE_HEIGHT_TEXT');
  });
});

// Skipping: setTokensMap

describe('stripSpaces', () => {
  it('should strip spaces at the ends of the string but not in the middle', () => {
    const result = TokenMaps.stripSpaces(
      '  \tThis  is a\ntest of    string        '
    );
    expect(result).toBe('This  is a\ntest of    string');
  });
});

describe('uniqConcat', () => {
  it('should concatenate', () => {
    const itemsToConcat = [
      'a',
      'b',
      'c',
      'a',
      'b',
      'c', // These should be ignored
      null,
      '',
      null,
      '', // These should be pruned
      123,
      { a: 10 }, // This should go in
      { a: 10 }, // This should also go in because objects always end up being different
      123,
      1234,
      12345, // Only the latter two should be added
    ];
    const expected = [
      'a',
      'b',
      'c',
      null,
      '',
      123,
      { a: 10 },
      { a: 10 },
      1234,
      12345,
    ];

    let array;
    itemsToConcat.forEach(
      (item) => (array = TokenMaps.uniqConcat(array, item))
    );

    expect(array).toEqual(expect.arrayContaining(expected));
  });
});

describe('validComponentNameFromPath', () => {
  it('should allow a valid name', () => {
    const baseDir = '/a/base/dir';
    const aPath = '/a/base/dir/super-component-3000/base/_index.scss';
    const result = TokenMaps.validComponentNameFromPath(aPath, baseDir);
    expect(result).toBeTruthy();
  });

  it('should reject names starting with numbers', () => {
    const baseDir = '/a/base/dir';
    const aPath = '/a/base/dir/3000-super-component/base/_index.scss';
    const result = TokenMaps.validComponentNameFromPath(aPath, baseDir);
    expect(result).toBeFalsy();
  });

  it('should reject names starting with non-alpha', () => {
    const baseDir = '/a/base/dir';
    const aPath = '/a/base/dir/.supersecret/base/_index.scss';
    const result = TokenMaps.validComponentNameFromPath(aPath, baseDir);
    expect(result).toBeFalsy();
  });
});

describe('valueContainsSassTokens', () => {
  it('should detect a Sass token starting with a letter', () => {
    const fixture = 'blah blah $foo-bar-blah foo foo';
    const result = TokenMaps.valueContainsSassTokens(fixture);
    expect(result).toBeTruthy();
  });

  it('should detect a Sass token starting with dashes', () => {
    const fixture = 'blah blah $--another-token-3 foo foo';
    const result = TokenMaps.valueContainsSassTokens(fixture);
    expect(result).toBeTruthy();
  });

  it('should not find a bare $', () => {
    const fixture = 'blah blah $ foo foo';
    const result = TokenMaps.valueContainsSassTokens(fixture);
    expect(result).toBeFalsy();
  });

  it('should not find a token beginning with a number', () => {
    const fixture = 'blah blah $3-little-pigs foo foo';
    const result = TokenMaps.valueContainsSassTokens(fixture);
    expect(result).toBeFalsy();
  });
});

describe('validRawTokensDistFile', () => {
  it('should allow .raw.json files', () => {
    const result = TokenMaps.validRawTokensDistFile('/some/path/foo.raw.json');
    expect(result).toBeTruthy();
  });

  it('should disallow other files', () => {
    const result = TokenMaps.validRawTokensDistFile('/some/path/foo.json');
    expect(result).toBeFalsy();
  });
});

describe('valueContainsSassTokens', () => {
  it('should detect Sass tokens', () => {
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $this-is-1-token asldkjf')
    ).toBeTruthy();
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $thisIsAlsoValid asldkjf')
    ).toBeTruthy();
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $this_too asldkjf')
    ).toBeTruthy();
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $AndThis asldkjf')
    ).toBeTruthy();
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $--aaandThis asldkjf')
    ).toBeTruthy();
    expect(
      TokenMaps.valueContainsSassTokens('asdfasdf $_aaaaaand-this-too asldkjf')
    ).toBeTruthy();
  });

  it('should not detect invalid Sass token names', () => {
    expect(
      TokenMaps.valueContainsSassTokens(
        'asdfasdf $123-starts-with-a-number asldkjf'
      )
    ).toBeFalsy();
  });
});

describe('walkScss', () => {
  it.skip('should visit declarations in SCSS Sass', (done) => {
    const fixture = complicatedSassFixture;

    const tests = {};
    TokenMaps.walkScss(fixture, (selector, rule, declaration, root) => {
      const { prop, value } = declaration;
      const stringifiedPropValue = `${prop}=${value}`;
      tests[selector] = tests[selector] || [];
      tests[selector].push(stringifiedPropValue);
    }).then((ignoredResult) => {
      const selectors = Object.keys(tests).sort();
      expect(selectors.length).toBe(5);

      const mixedInDeclarations =
        tests[
          '.slds-path__nav .slds-is-won .slds-path__link, .slds-path__nav .slds-is-won:hover .slds-path__link'
        ];
      expect(mixedInDeclarations).toBeDefined();
      expect(mixedInDeclarations).toHaveLength(4);

      const sortedDeclarations = mixedInDeclarations.sort();
      expect(sortedDeclarations[0]).toBe(
        'background-color=$color-background-path-won'
      );

      done();
    });
  });
});

// Skipping: writeAuraTokensMap

// Skipping: writeTokenComponentMap

// Skipping: writeUtilityPropertiesMap
