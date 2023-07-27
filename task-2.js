function sumOfPositiveNumbersInAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
}

const inputArr = [2, -5, 10, -3, 7]
const result = sumOfPositiveNumbersInAnArray(inputArr);
console.log(result);

// output : 19