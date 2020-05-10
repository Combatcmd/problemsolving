import removeDupes from './removeDupes.js';

test('26.removeDupes', () => {
  const testcases = {
    1: { x: [1, 1, 2, 2] }, // 2
    2: { x: [] }, // 0
    3: { x: [1, 2, 3, 3, 3, 3, 3, 3] }, // 3
    4: { x: [1, 1, 1, 1, 1, 1, 1, 1] }, // 1
  };
  expect(removeDupes(testcases[1]['x'])).toBe(2);
  expect(removeDupes(testcases[2]['x'])).toBe(0);
  expect(removeDupes(testcases[3]['x'])).toBe(3);
  expect(removeDupes(testcases[4]['x'])).toBe(1);
});
