import romanToInt from './romanToInt.js';

test('13.romanToInt', () => {
  const testcases = {
    1: { x: 'III' }, // 3
    2: { x: 'LVIII' }, // 58
    3: { x: 'MCMXCIV' }, // 1994
  };
  expect(romanToInt(testcases[1]['x'])).toBe(3);
  expect(romanToInt(testcases[2]['x'])).toBe(58);
  expect(romanToInt(testcases[3]['x'])).toBe(1994);
});
