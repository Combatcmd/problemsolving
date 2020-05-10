import removeElement from './removeElement.js';

test('27.removeElement', () => {
  const testcases = {
    1: { nums: [1, 2, 3, 4], val: 5 }, // 4
    2: { nums: [1, 2, 3, 4], val: 2 }, // 3
    3: { nums: [], val: 5 }, // 0
    4: { nums: [], val: 0 }, // 0
  };
  expect(removeElement(testcases[1]['nums'], testcases[1]['val'])).toBe(4);
  expect(removeElement(testcases[2]['nums'], testcases[2]['val'])).toBe(3);
  expect(removeElement(testcases[3]['nums'], testcases[3]['val'])).toBe(0);
  expect(removeElement(testcases[4]['nums'], testcases[4]['val'])).toBe(0);
});
