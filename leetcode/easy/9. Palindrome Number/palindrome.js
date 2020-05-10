export default (x) => {
  let reversed = 0;
  let n = x;
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  while (n !== 0) {
    reversed = reversed * 10 + (n % 10);
    n = ~~(n / 10);
  }
  return reversed === x;
};
