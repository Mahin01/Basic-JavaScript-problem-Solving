function mostFrequentElement(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    let frequencyMap = new Map();
    let maxFrequency = 0;
    let mostFrequentElement = arr[0];
  
    for (let num of arr) {
      let frequency = frequencyMap.get(num) || 0;
      frequencyMap.set(num, frequency + 1);
  
      if (frequency + 1 > maxFrequency) {
        maxFrequency = frequency + 1;
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
}  