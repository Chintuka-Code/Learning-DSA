/**
 Write a function called sumZero which accepts a sorted array of integers.The functions should find the first pair , where the sim is zero.
 Return an array that include both values that sum to zero or undefined if a pair does not exist.
 */

function sumZero(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  // if array start with positive number sum would never be zero.
  if (array[leftIndex] >= 0) return undefined;

  while (leftIndex < rightIndex) {
    const sum = array[leftIndex] + array[rightIndex];

    if (sum === 0) return [array[leftIndex], array[rightIndex]];
    sum > 0 ? rightIndex-- : leftIndex++;
  }
}

console.log(sumZero([0, 1, 2, 3]));
