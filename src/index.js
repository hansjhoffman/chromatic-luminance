// @flow
import helpers from './helpers';

export default function isDark(color: string): boolean {
  if (helpers._isShorthand(color)) {
    color = helpers._expand(color);
  }

  if (helpers._isNamedColor(color)) {
    color = helpers._color2hex(color);
  }

  const { r, g, b } = helpers._hex2rgb(color);

  const colorArray = [r / 255, g / 255, b / 255].map(v => {
    if (v <= 0.03928) {
      return v / 12.92;
    }

    return Math.pow((v + 0.055) / 1.055, 2.4);
  });

  const luminance = 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2];

  return luminance <= 0.179;
}
