/**
Check array is sorted
*/

function checkArraySorted(array) {
  let isArraySorted = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isArraySorted = false;
      break;
    }
  }
  return isArraySorted;
}

// Test cases
let sortedArray = [1, 2, 3, 4, 5];
let unsortedArray = [5, 2, 8, 3, 1];

console.log(checkArraySorted(sortedArray)); // Output should be: true
console.log(checkArraySorted(unsortedArray));
