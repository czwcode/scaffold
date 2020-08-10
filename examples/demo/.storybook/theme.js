import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#23a3ff',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'lightgrey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#23a3ff',
  // barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'czwcode',
  brandUrl: 'https://example.com',
  brandImage: 'https://img.alicdn.com/tfs/TB1bL0PQ4v1gK0jSZFFXXb0sXXa-400-86.png',
});
