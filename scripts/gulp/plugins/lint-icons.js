import paths from './../../helpers/paths';
const path = require('path');
const yaml = require('js-yaml');
const map = require('map-stream');
const _ = require('lodash');
const gutil = require('gulp-util');
const sdsColorPalette = require(`${path.resolve(paths.sdsStylingAliases, 'color-palettes.json')}`).aliases;
const recommendedIconColors = require(path.resolve(__dirname, '../../../assets/icon-colors/icon-colors.json'));

const recommendedColorsHexCodes = recommendedIconColors.recommendedColors
                                    .map(color => `PALETTE_${color.replace(/-/g, '_').toUpperCase()}`)
                                    .map(color => sdsColorPalette[color].toUpperCase());
const ICONS_COLORS = [...recommendedColorsHexCodes, ...recommendedIconColors.specialColors];
const ICON_TYPES_TO_CHECK = ["standard", "actions"];

const verboseReporter = (lint, file) =>
  lint.errors.forEach(error => {
    const errors = Array.from(error.error).map(err => `\t❌ ${err}`).join('\n');
    const icon = error.icon;
    const filePath = file.path;
    const message = `${icon} in ${filePath} has following error(s): \n${errors}`;

    gutil.log('iconlint: ', `${message}`);
  });

const IconLint = function (icons, pluginOptions = {}) {
  let self = this;

  if (!(self instanceof IconLint)) {
    return new IconLint(icons, pluginOptions);
  }

  self.errors = [];

  _.keys(icons).forEach(icon => {
    const iconName = icon;
    const iconColor = icons[icon].value;
    try {
      self.iconColorAndCaseLint(iconName, iconColor, pluginOptions.type);
    } catch (e) {
      self.errors.push({
        icon: iconName,
        error: e
      });
    }
  });

  return {
    errors: self.errors
  };
};

IconLint.prototype.iconColorAndCaseLint = function (iconName, iconColor, iconType) {
  const errors = [];

  if (!iconName || iconName.trim().length === 0 || !iconColor || iconColor.trim().length === 0) {
    errors.push('Icon name or color cannot be empty');
  }

  if (iconName.toUpperCase() !== iconName) {
    errors.push('Icon names should be in uppercase');
  }

  if (iconColor.toUpperCase() !== iconColor) {
    errors.push('Icon color code should be in uppercase');
  }

  if (!_.includes(ICONS_COLORS, iconColor.toUpperCase())) {
    errors.push(`Icon color should be part of recommended colors - [${ICONS_COLORS}]`,
      `Please add the icon color to the recommended list if it is meant to be included`
      );
  }

  if (errors.length) {
    throw errors;
  }
};

const iconlintPlugin = (pluginOptions = {}) =>
  map(function (file, cb) {
    const iconType = path.parse(file.path).name.replace('bg-', '');
    if (ICON_TYPES_TO_CHECK.includes(iconType)) {
      pluginOptions.type = iconType;
      const icons = yaml.safeLoad(file.contents.toString('utf8'));
      const iconList = icons.props ? icons.props : [];
      const result = IconLint(iconList, pluginOptions);
      file.iconlint = {
        errors: result.errors
      };
    }

    // Pass file
    cb(null, file);
  });

iconlintPlugin.report = _ =>
  map(function (file, cb) {
    let error = null;
    const iconlintErrors = file.iconlint ? file.iconlint.errors : null;
    if (iconlintErrors) {
      if (iconlintErrors.length) {
        error = new gutil.PluginError(
          'iconlint', `Found ${iconlintErrors.length} linting error(s)`
        );
      }
      verboseReporter(file.iconlint, file);
    }

    // Pass file
    cb(error, file);
  });

module.exports = iconlintPlugin;
