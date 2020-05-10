export default (s) => {
  let top;
  let stack = [];
  let hash = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) {
      top = stack.length ? stack.pop() : '#';
      if (hash[s[i]] !== top) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};
