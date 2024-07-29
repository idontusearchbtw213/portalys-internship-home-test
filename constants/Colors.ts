/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = 'black';
const tintColorDark = 'white';

export const Colors = {
  light: {
    text: 'black',
    background: 'white',
    tint: tintColorLight,
    icon: 'black',
    tabIconDefault: 'white',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: 'black',
    tint: tintColorDark,
    icon: 'white',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  shared: {
    red: "#ff0000"
  }
};
