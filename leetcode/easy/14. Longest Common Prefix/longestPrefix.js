export default (arr) => {
  if (arr.length < 1) {
    return '';
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].substring(0, max.length) !== max) {
      max = max.substring(0, max.length - 1);
    }
  }
  return max;
};
