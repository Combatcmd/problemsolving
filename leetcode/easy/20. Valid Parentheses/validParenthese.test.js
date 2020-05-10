import validParentheses from './validParentheses.js';

test('20.validParentheses', () => {
  const testcases = {
    1: { x: '()' }, // true
    2: { x: '()[]{}' }, // true
    3: { x: '{[]}' }, // true
    4: { x: '{([)]}' }, // false
    5: { x: ')(' }, // false
  };
  expect(validParentheses(testcases[1]['x'])).toBe(true);
  expect(validParentheses(testcases[2]['x'])).toBe(true);
  expect(validParentheses(testcases[3]['x'])).toBe(true);
  expect(validParentheses(testcases[4]['x'])).toBe(false);
  expect(validParentheses(testcases[5]['x'])).toBe(false);
});
