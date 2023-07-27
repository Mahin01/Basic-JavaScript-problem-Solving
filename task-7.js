function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentDigitValue = romanNumeralsMap[romanNumeral[i]];
      const nextDigitValue = romanNumeralsMap[romanNumeral[i + 1]];
  
      if (nextDigitValue > currentDigitValue) {
        result += nextDigitValue - currentDigitValue;
        i++; // Skip the next digit as it is already accounted for in the subtraction
      } else {
        result += currentDigitValue;
      }
    }
  
    return result;
  }
  