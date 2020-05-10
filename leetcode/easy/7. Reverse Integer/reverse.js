export default (x) => {
  let reversed = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = ~~(x / 10);
    if (
      reversed >= (Math.pow(2, 31) - 1) / 10 ||
      reversed <= Math.pow(-2, 31) / 10
    ) {
      return 0;
    }
    reversed = reversed * 10 + pop;
  }
  return reversed;
};
