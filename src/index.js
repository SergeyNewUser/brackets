
module.exports = function check(str, bracketsConfig) {
  let obj = {};
  let openBrackets = [];
  let stack = [];
  console.log('Str: ', str);
  console.log('bracketsConfig: ', bracketsConfig);
  bracketsConfig.forEach(element => {
    obj[element[1]] = element[0]
    openBrackets.push(element[0]);
  });


  if (str.length % 2 == 1) return false;
  str = [...str];
  str.forEach((value) => {
    if (openBrackets.includes(value)) {
      stack.push(value);
      if (stack.length > 1) {
        let lastStack = stack[stack.length - 1];
        let prevStack = stack[stack.length - 2];
        if (lastStack === prevStack && obj[lastStack] == value) {
          stack.pop();
          stack.pop();
        }
      }
    }

    if (!openBrackets.includes(value)) {
      if (stack.length === 0) stack.push(false);
      let lastStack = stack[stack.length - 1];
      let prevStack = stack[stack.length - 2];
      if (obj[value] === lastStack) {
        stack.pop();
      }

    }

  })
  return stack.length === 0;
}
