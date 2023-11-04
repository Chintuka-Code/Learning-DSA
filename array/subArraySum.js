function largestSubArraySum(array) {
  let sum = 0;
  let max = -Infinity;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (sum === 0) {
      startIndex = i;
    }
    sum += array[i];

    if (sum > max) {
      max = sum;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return {
    sum: max,
    startIndex,
    endIndex,
  };
}

// Test Case 1: Array with all positive numbers
let testCase1 = [1, 2, 3, 4, 5];
console.log(largestSubArraySum(testCase1)); // Expected output: 15

// Test Case 2: Array with a mix of positive and negative numbers
let testCase2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(largestSubArraySum(testCase2)); // Expected output: 6

// Test Case 3: Array with all negative numbers
let testCase3 = [-2, -3, -4, -1, -2];
console.log(largestSubArraySum(testCase3)); // Expected output: -1

// Test Case 4: Array with a single element
let testCase4 = [5];
console.log(largestSubArraySum(testCase4)); // Expected output: 5

// Test Case 5: Array with multiple subarrays of equal sum
let testCase5 = [2, -3, 4, -1, 2, 1, -5, 4];
console.log(largestSubArraySum(testCase5)); // Expected output: 6
