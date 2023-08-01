 // Task2
 //funstion for summation of array
 function sumArray(numbers) {
    if (!Array.isArray(numbers)) { // if in array not only number then error occurred
      throw new Error('Input is not an array');
    }
  
    let sum = 0;
    for (const num of numbers) {
      if (typeof num !== 'number') { // here check only for number sholud be in array
        throw new Error('Array contains non-integer values');
      }
      sum += num;
    }
  
    return sum;
  }
  
  // Example :
  const inputArray = [1, 2, 3, 4, 5,7];
  const result = sumArray(inputArray); // function call
  console.log('Sum:', result); // Output