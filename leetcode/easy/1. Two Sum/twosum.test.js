import twosum from './twosum.js';

test('1.twosum', () => {
  const testcases = {
    1: { nums: [2, 7, 11, 15], target: 9 },
    2: { nums: [3, 2, 4], target: 6 },
    3: { nums: [5, 3, 5, 9], target: 10 },
  };
  expect(twosum(testcases[1]['nums'], testcases[1]['target'])).toEqual([0, 1]);
  expect(twosum(testcases[2]['nums'], testcases[2]['target'])).toEqual([1, 2]);
  expect(twosum(testcases[3]['nums'], testcases[3]['target'])).toEqual([0, 2]);
});
