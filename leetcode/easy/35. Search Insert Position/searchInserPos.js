export default (nums, target) => {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = parseInt((left + right) / 2, 10);
    if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
    else return mid;
  }
  return left;
};
