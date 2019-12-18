// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const ROOT = path.resolve(__dirname, '../');
const BASE = path.resolve(ROOT, 'design-tokens');

function summarizeFilesInDirSync(directory) {
  return fs.readdirSync(directory);
}

function summarizeContentInFileSync(file) {
  return fs.readFileSync(file);
}

function getRawFile(file) {
  return summarizeContentInFileSync(path.resolve(BASE, file)).toString();
}

function compare(a, b) {
  return JSON.stringify(a).localeCompare(JSON.stringify(b));
}

function getTokenInfo(name) {
  const getFile = JSON.parse(getRawFile(`dist/${name}.raw.json`));
  return {
    dir: path.resolve(BASE, name),
    aliasDir: path.resolve(BASE, 'aliases'),
    raw: getFile,
    aliases: getFile.aliases,
    props: getFile.props
  };
}

const globalAccess = [
  'brandPrimary',
  'brandPrimaryActive',
  'brandPrimaryTransparent',
  'brandLight',
  'brandLightActive',
  'brandDark',
  'brandDarkActive',
  'brandAccessible',
  'brandAccessibleActive',
  'brandDisabled',
  'brandContrast',
  'brandContrastActive',
  'brandBackgroundPrimary',
  'brandBackgroundDark',
  'brandTextLink',
  'brandTextLinkActive',
  'colorBackground',
  'colorBackgroundAlt',
  'colorBackgroundAltInverse',
  'colorBackgroundRowHover',
  'colorBackgroundRowActive',
  'colorBackgroundRowSelected',
  'colorBackgroundRowNew',
  'colorBackgroundInverse',
  'colorBackgroundAnchor',
  'colorBackgroundBrowser',
  'colorBackgroundChromeMobile',
  'colorBackgroundChromeDesktop',
  'colorBackgroundHighlight',
  'colorBackgroundModal',
  'colorBackgroundModalBrand',
  'colorBackgroundNotificationBadge',
  'colorBackgroundNotificationBadgeHover',
  'colorBackgroundNotificationBadgeFocus',
  'colorBackgroundNotificationBadgeActive',
  'colorBackgroundNotificationNew',
  'colorBackgroundPayload',
  'colorBackgroundShade',
  'colorBackgroundStencil',
  'colorBackgroundStencilAlt',
  'colorBackgroundScrollbar',
  'colorBackgroundScrollbarTrack',
  'colorBrand',
  'colorBrandDark',
  'colorBackgroundButtonBrand',
  'colorBackgroundButtonBrandActive',
  'colorBackgroundButtonBrandHover',
  'colorBackgroundButtonBrandDisabled',
  'colorBackgroundButtonDefault',
  'colorBackgroundButtonDefaultHover',
  'colorBackgroundButtonDefaultFocus',
  'colorBackgroundButtonDefaultActive',
  'colorBackgroundButtonDefaultDisabled',
  'colorBackgroundButtonIcon',
  'colorBackgroundButtonIconHover',
  'colorBackgroundButtonIconFocus',
  'colorBackgroundButtonIconActive',
  'colorBackgroundButtonIconDisabled',
  'colorBackgroundButtonInverse',
  'colorBackgroundButtonInverseActive',
  'colorBackgroundButtonInverseDisabled',
  'colorBackgroundModalButton',
  'colorBackgroundModalButtonActive',
  'colorBackgroundInput',
  'colorBackgroundInputActive',
  'colorBackgroundInputCheckbox',
  'colorBackgroundInputCheckboxDisabled',
  'colorBackgroundInputCheckboxSelected',
  'colorBackgroundInputDisabled',
  'colorBackgroundInputError',
  'colorBackgroundPill',
  'colorBackgroundToast',
  'colorBackgroundToastSuccess',
  'colorBackgroundToastError',
  'colorTextBrand',
  'colorTextButtonBrand',
  'colorTextButtonBrandHover',
  'colorTextButtonBrandActive',
  'colorTextButtonBrandDisabled',
  'colorTextButtonDefault',
  'colorTextButtonDefaultHover',
  'colorTextButtonDefaultActive',
  'colorTextButtonDefaultDisabled',
  'colorTextButtonDefaultHint',
  'colorTextButtonInverse',
  'colorTextButtonInverseDisabled',
  'colorTextIconDefault',
  'colorTextIconDefaultHint',
  'colorTextIconDefaultHover',
  'colorTextIconDefaultActive',
  'colorTextIconDefaultDisabled',
  'colorTextIconInverse',
  'colorTextIconInverseHover',
  'colorTextIconInverseActive',
  'colorTextIconInverseDisabled',
  'colorTextLabel',
  'colorTextPlaceholder',
  'colorTextPlaceholderInverse',
  'colorTextRequired',
  'colorTextPill',
  'colorTextActionLabel',
  'colorTextActionLabelActive',
  'colorTextBrowser',
  'colorTextBrowserActive',
  'colorTextDefault',
  'colorTextError',
  'colorTextInputDisabled',
  'colorTextInputFocusInverse',
  'colorTextInputIcon',
  'colorTextInverse',
  'colorTextInverseWeak',
  'colorTextInverseActive',
  'colorTextInverseHover',
  'colorTextLink',
  'colorTextLinkActive',
  'colorTextLinkDisabled',
  'colorTextLinkFocus',
  'colorTextLinkHover',
  'colorTextLinkInverse',
  'colorTextLinkInverseHover',
  'colorTextLinkInverseActive',
  'colorTextLinkInverseDisabled',
  'colorTextModal',
  'colorTextModalButton',
  'colorTextStageLeft',
  'colorTextTabLabel',
  'colorTextTabLabelSelected',
  'colorTextTabLabelHover',
  'colorTextTabLabelFocus',
  'colorTextTabLabelActive',
  'colorTextTabLabelDisabled',
  'colorTextToast',
  'colorTextWeak',
  'colorTextIconBrand',
  'colorBorder',
  'colorBorderBrand',
  'colorBorderError',
  'colorBorderSuccess',
  'colorBorderWarning',
  'colorBorderTabSelected',
  'colorBorderSeparator',
  'colorBorderSeparatorAlt',
  'colorBorderSeparatorAlt',
  'colorBorderSeparatorInverse',
  'colorBorderRowSelected',
  'colorBorderRowSelectedHover',
  'colorBorderButtonBrand',
  'colorBorderButtonBrandDisabled',
  'colorBorderButtonDefault',
  'colorBorderButtonInverseDisabled',
  'colorBorderInput',
  'colorBorderInputActive',
  'colorBorderInputDisabled',
  'colorBorderInputCheckboxSelectedCheckmark',
  'fontFamily',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightBold',
  'lineHeightHeading',
  'lineHeightText',
  'lineHeightReset',
  'lineHeightTab',
  'lineHeightButton',
  'lineHeightButtonSmall',
  'borderWidthThin',
  'borderWidthThick',
  'spacingXxxSmall',
  'spacingXxSmall',
  'spacingXSmall',
  'spacingSmall',
  'spacingMedium',
  'spacingLarge',
  'spacingXLarge',
  'spacingXxLarge',
  'varSpacingXxxSmall',
  'varSpacingXxSmall',
  'varSpacingXSmall',
  'varSpacingSmall',
  'varSpacingMedium',
  'varSpacingLarge',
  'varSpacingXLarge',
  'varSpacingXxLarge',
  'varSpacingHorizontalXxxSmall',
  'varSpacingHorizontalXxSmall',
  'varSpacingHorizontalXSmall',
  'varSpacingHorizontalSmall',
  'varSpacingHorizontalMedium',
  'varSpacingHorizontalLarge',
  'varSpacingHorizontalXLarge',
  'varSpacingHorizontalXxLarge',
  'varSpacingVerticalXxxSmall',
  'varSpacingVerticalXxSmall',
  'varSpacingVerticalXSmall',
  'varSpacingVerticalSmall',
  'varSpacingVerticalMedium',
  'varSpacingVerticalLarge',
  'varSpacingVerticalXLarge',
  'varSpacingVerticalXxLarge',
  'borderRadiusSmall',
  'borderRadiusMedium',
  'borderRadiusLarge',
  'borderRadiusPill',
  'borderRadiusCircle',
  'sizeXxSmall',
  'sizeXSmall',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge',
  'sizeXLarge',
  'sizeXxLarge',
  'squareIconUtilitySmall',
  'squareIconUtilityMedium',
  'squareIconUtilityLarge',
  'squareIconLargeBoundary',
  'squareIconLargeBoundaryAlt',
  'squareIconLargeContent',
  'squareIconMediumBoundary',
  'squareIconMediumBoundaryAlt',
  'squareIconMediumContent',
  'squareIconSmallBoundary',
  'squareIconSmallContent',
  'squareIconXSmallBoundary',
  'squareIconXSmallContent',
  'shadowDrag',
  'shadowDropDown',
  'shadowHeader',
  'shadowButtonFocus',
  'shadowButtonFocusInverse',
  'durationInstantly',
  'durationImmediately',
  'durationQuickly',
  'durationPromptly',
  'durationSlowly',
  'durationPaused',
  'heightFooter',
  'heightHeader',
  'squareTappable',
  'widthStageLeftCollapsed',
  'widthStageLeftExpanded'
];

describe('design-tokens', () => {
  // Confirm primitive tokens were copied
  it('primitive tokens have been copied from @salesforce-ux/design-system-primitive-tokens', () => {
    expect(
      summarizeFilesInDirSync(getTokenInfo('primitive').dir)
    ).toMatchSnapshot();
  });

  // Confirm primitive aliases were copied
  it('primitive aliases have been copied from @salesforce-ux/design-system-primitive-tokens', () => {
    expect(
      summarizeFilesInDirSync(getTokenInfo('primitive').aliasDir)
    ).toMatchSnapshot();
  });

  // Confirm primitive aliases exist in ui-force
  it('primitive aliases are found and resolved in ui-force file', () => {
    const comparison = compare(
      getTokenInfo('primitive').aliases,
      getTokenInfo('ui-force').aliases
    );
    expect(comparison).toBe(0);
  });

  // Confirm primitive aliases exists in theme-one-salesforce
  it('primitive aliases are found in theme-one-salesforce file', () => {
    let namespaceArray = [];
    let primitiveArray = [];
    Object.keys(getTokenInfo('theme-one-salesforce').aliases).map(key => {
      namespaceArray.push(key);
    });
    Object.keys(getTokenInfo('primitive').aliases).map(key => {
      primitiveArray.push(key);
    });
    namespaceArray.forEach(key => {
      expect(namespaceArray).toContain(key);
    });
  });

  // Confirm primitive tokens are found in ui-force by filtering primitive metadata
  it('primitive tokens are found in ui-force file', () => {
    const rawFile = getTokenInfo('ui-force');
    let primitiveArray = [];
    Object.keys(rawFile.props).map(key => {
      const prop = rawFile.props[key];
      if (prop.primitive) {
        primitiveArray.push(prop.name);
      }
    });
    expect(primitiveArray).toMatchSnapshot();
  });

  // Check metadata so we don't cause platform regressions
  it('check that metadata for global access matches whats exposed on platform', () => {
    const rawFile = getTokenInfo('ui-force');
    let primitiveArray = [];
    Object.keys(rawFile.props).map(key => {
      const prop = rawFile.props[key];
      if (prop.access === 'global') {
        primitiveArray.push(_.camelCase(prop.name));
      }
    });
    globalAccess.map(key => {
      expect(primitiveArray).toContain(key);
    });
  });
});
