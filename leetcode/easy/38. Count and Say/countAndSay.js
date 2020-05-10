export default (n) => {
  if (n < 1 || n > 30) return null;
  if (n === 1) return '1';

  let output = '1';

  for (let i = 2; i <= n; i++) {
    let num = output.charAt(0);
    let temp = output;
    let count = 1;

    output = '';

    for (let j = 1; j < temp.length; j++) {
      if (temp.charAt(j) === num) {
        count++;
      } else {
        output += count;
        output += num;
        num = temp.charAt(j);
        count = 1;
      }
    }
    output += count;
    output += num;
  }
  return output;
};
