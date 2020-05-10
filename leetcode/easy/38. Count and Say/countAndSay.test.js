import countAndSay from './countAndSay.js';

test('38.countAndSay', () => {
  const testcases = {
    1: { x: -1 }, // null
    2: { x: 1 }, // "1"
    3: { x: 31 }, // null
    4: { x: 10 }, // "13211311123113112211"
  };
  expect(countAndSay(testcases[1]['x'])).toBe(null);
  expect(countAndSay(testcases[2]['x'])).toBe('1');
  expect(countAndSay(testcases[3]['x'])).toBe(null);
  expect(countAndSay(testcases[4]['x'])).toBe('13211311123113112211');
});
