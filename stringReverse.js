function stringReverse(str) {
  str = str.toLowerCase();
  let stringReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringReverse += str.charAt(i);
  }
  return stringReverse;
}

const inputString = stringReverse("hello world");
console.log(inputString);

//output: dlrow olleh