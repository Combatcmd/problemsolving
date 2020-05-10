import plusOne from './plusOne.js';

test('66.plusOne', () => {
  const testcases = {
    1: { x: [1, 2, 3] }, // [1,2,4]
    2: { x: [4, 3, 2, 9] }, // [4,3,3,0]
    3: { x: [] }, // [1]
  };
  expect(plusOne(testcases[1]['x'])).toEqual([1, 2, 4]);
  expect(plusOne(testcases[2]['x'])).toEqual([4, 3, 3, 0]);
  expect(plusOne(testcases[3]['x'])).toEqual([1]);
});
