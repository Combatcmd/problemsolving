import palindrome from './palindrome.js';

test('9.palindrome', () => {
  const testcases = {
    1: { x: -12345 }, // false
    2: { x: 0 }, // true
    3: { x: 121 }, // true
    4: { x: 1210 }, // false
  };
  expect(palindrome(testcases[1]['x'])).toBe(false);
  expect(palindrome(testcases[2]['x'])).toBe(true);
  expect(palindrome(testcases[3]['x'])).toBe(true);
  expect(palindrome(testcases[4]['x'])).toBe(false);
});
