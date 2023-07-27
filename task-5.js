function calculator(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        console.log("Cannot divide by zero");
      }
    } else {
      console.log("invalid operator")
    }
  }
  