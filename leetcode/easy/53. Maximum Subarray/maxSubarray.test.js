import maxSubarray from './maxSubarray.js';

test('53.maxSubarray', () => {
  const testcases = {
    1: { x: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, // 6
  };
  expect(maxSubarray(testcases[1]['x'])).toBe(6);
});
