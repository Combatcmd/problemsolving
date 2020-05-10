import longestPrefix from './longestPrefix.js';

test('14.longestPrefix', () => {
  const testcases = {
    1: { x: ['flower', 'flow', 'flight'] }, // fl
    2: { x: ['dog', 'racecar', 'car'] }, // ""
    3: { x: [] }, // ""
    4: { x: ['qwerty'] }, // qwerty
  };
  expect(longestPrefix(testcases[1]['x'])).toBe('fl');
  expect(longestPrefix(testcases[2]['x'])).toBe('');
  expect(longestPrefix(testcases[3]['x'])).toBe('');
  expect(longestPrefix(testcases[4]['x'])).toBe('qwerty');
});
