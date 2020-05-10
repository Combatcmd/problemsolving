export default (nums) => {
  let curMax = -Infinity;
  let sum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    curMax = Math.max(curMax, 0) + nums[i];
    sum = Math.max(sum, curMax);
  }
  return sum;
};
