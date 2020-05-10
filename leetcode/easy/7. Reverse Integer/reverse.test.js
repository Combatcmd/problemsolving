import reverse from './reverse.js';

test('7.reverse', () => {
  const testcases = {
    1: { x: 1534236469 }, // 0
    2: { x: -321 }, // -123
    3: { x: 123456 }, // 654321
  };
  expect(reverse(testcases[1]['x'])).toBe(0);
  expect(reverse(testcases[2]['x'])).toBe(-123);
  expect(reverse(testcases[3]['x'])).toBe(654321);
});
