export default (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0) {
      return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i;
  }
};
