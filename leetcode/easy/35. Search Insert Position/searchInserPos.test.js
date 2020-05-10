import searchInserPos from './searchInserPos.js';

test('27.removeElement', () => {
  const testcases = {
    1: { nums: [1, 2, 3, 4], target: 5 }, // 4
    2: { nums: [1, 2, 3, 4], target: 0 }, // 0
    3: { nums: [], target: 0 }, // 0
  };
  expect(searchInserPos(testcases[1]['nums'], testcases[1]['target'])).toBe(4);
  expect(searchInserPos(testcases[2]['nums'], testcases[2]['target'])).toBe(0);
  expect(searchInserPos(testcases[3]['nums'], testcases[3]['target'])).toBe(0);
});
