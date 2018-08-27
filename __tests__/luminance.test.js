import isDark from '../src';

describe('isDark()', () => {
  describe('using hex triplets', () => {
    test('#000000 => true', () => {
      expect(isDark('#000000')).toBe(true);
    });

    test('#add8e6 => false', () => {
      expect(isDark('#add8e6')).toBe(false);
    });

    test('#ff8c00 => false', () => {
      expect(isDark('#ff8c00')).toBe(false);
    });

    test('#483D8B => true', () => {
      expect(isDark('#483D8B')).toBe(true);
    });

    test('#ffffff => false', () => {
      expect(isDark('#ffffff')).toBe(false);
    });
  });

  describe('using shorthand hexadecimal form', () => {
    test('#f09 => false', () => {
      expect(isDark('#f09')).toBe(false);
    });

    test('#fff => false', () => {
      expect(isDark('#fff')).toBe(false);
    });

    test('#639 => true', () => {
      expect(isDark('#639')).toBe(true);
    });
  });

  describe('using HTML named colors', () => {
    it('white => false', () => {
      expect(isDark('white')).toBe(false);
    });

    it('black => true', () => {
      expect(isDark('black')).toBe(true);
    });

    it('saddlebrown => true', () => {
      expect(isDark('saddlebrown')).toBe(true);
    });
  });
});
