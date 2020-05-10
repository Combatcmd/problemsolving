import strstr from './strstr.js';

test('28.strstr', () => {
  const testcases = {
    1: { haystack: 'abcde', needle: 'cd' }, // 2
    2: { haystack: 'abcde', needle: 'abcde' }, // 0
    3: { haystack: 'abcde', needle: '' }, // 0
    4: { haystack: 'abcde', needle: 'bcf' }, // 2
  };
  expect(strstr(testcases[1]['haystack'], testcases[1]['needle'])).toBe(2);
  expect(strstr(testcases[2]['haystack'], testcases[2]['needle'])).toBe(0);
  expect(strstr(testcases[3]['haystack'], testcases[3]['needle'])).toBe(0);
  expect(strstr(testcases[4]['haystack'], testcases[4]['needle'])).toBe(-1);
});
