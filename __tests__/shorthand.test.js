import helpers from '../src/helpers';

describe('shorthand hexadecimal form', () => {
  describe('isShorthand()', () => {
    test('#000000 => false', () => {
      expect(helpers._isShorthand('#000000')).toBe(false);
    });

    test('#000 => true', () => {
      expect(helpers._isShorthand('#000')).toBe(true);
    });

    test('#09c => true', () => {
      expect(helpers._isShorthand('#09c')).toBe(true);
    });

    test('#f09 => true', () => {
      expect(helpers._isShorthand('#f09')).toBe(true);
    });
  });

  describe('expand()', () => {
    test('#f09 => #ff0099', () => {
      expect(helpers._expand('#f09')).toBe('#ff0099');
    });

    test('#09c => #0099cc', () => {
      expect(helpers._expand('#09c')).toBe('#0099cc');
    });
  });
});
