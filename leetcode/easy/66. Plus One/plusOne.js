export default (digits) => {
  if (!digits.length) return [1];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0 && digits[i] === 9) {
      digits[i] = 0;
      return [1, ...digits];
    } else if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
};
