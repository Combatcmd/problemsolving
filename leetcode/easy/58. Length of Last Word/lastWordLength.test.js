import lastWordLength from './lastWordLength.js';

test('58.lastWordLength', () => {
  const testcases = {
    1: { x: 'Hello World' }, // 5
    2: { x: '' }, // 0
  };
  expect(lastWordLength(testcases[1]['x'])).toBe(5);
  expect(lastWordLength(testcases[2]['x'])).toBe(0);
});
