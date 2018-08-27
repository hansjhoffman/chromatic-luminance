import helpers from '../src/helpers';

describe('Convert Hex to RGB', () => {
  test('#000000 => rgb(0,0,0)', () => {
    const rgb = helpers._hex2rgb('#000000');
    expect(rgb).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('#FFFFFF => rgb(255,255,255)', () => {
    const rgb = helpers._hex2rgb('#FFFFFF');
    expect(rgb).toEqual({ r: 255, g: 255, b: 255 });
  });

  test('#ADD8E6 => rgb(173,216,230)', () => {
    const rgb = helpers._hex2rgb('#ADD8E6');
    expect(rgb).toEqual({ r: 173, g: 216, b: 230 });
  });

  test('#ff8c00 => rgb(255,140,0)', () => {
    const rgb = helpers._hex2rgb('#ff8c00');
    expect(rgb).toEqual({ r: 255, g: 140, b: 0 });
  });
});
