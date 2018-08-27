import helpers from '../src/helpers';

describe('HTML named colors', () => {
  describe('isNamedColor()', () => {
    test('#000000 => false', () => {
      expect(helpers._isNamedColor('#000000')).toBe(false);
    });

    test('black => true', () => {
      expect(helpers._isNamedColor('black')).toBe(true);
    });

    test('DeepSkyBlue => true', () => {
      expect(helpers._isNamedColor('DeepSkyBlue')).toBe(true);
    });

    test('GreenPastures => false', () => {
      expect(helpers._isNamedColor('GreenPastures')).toBe(false);
    });
  });

  describe('color2hex()', () => {
    test('black => #000000', () => {
      expect(helpers._color2hex('black')).toBe('#000000');
    });

    test('DeepSkyBlue => #00bfff', () => {
      expect(helpers._color2hex('DeepSkyBlue')).toBe('#00bfff');
    });

    test('GreenPastures => undefined', () => {
      expect(helpers._color2hex('GreenPastures')).toBeUndefined();
    });
  });
});
