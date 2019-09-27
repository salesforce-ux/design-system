import { create } from '@storybook/theming';
import logo from './theme/logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#f4f6f9',
  colorSecondary: '#1589ee',

  // UI
  appBg: '#f4f6f9',
  appContentBg: 'white',
  appBorderColor: '#dddbda',

  // Text colors
  textColor: '#3e3e3c',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#706e6b',
  barSelectedColor: '#1589ee',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#dddbda',
  inputTextColor: '#3e3e3c',

  brandTitle: 'SLDS',
  brandUrl: 'https://lightningdesignsystem.com',
  brandImage: logo
});
