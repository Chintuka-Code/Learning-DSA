/**
Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum
of n consecutive element in the array.
*/

function maxSubArraySum(array, num) {
  let tempSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }

  // console.log(tempSum);
  if (num === array.length) return tempSum;

  for (let i = 0; i < array.length - num; i++) {
    tempSum = tempSum - array[i] + array[i + num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

// console.log(maxSubArraySum([1, 2, 3], 2)); //5
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
