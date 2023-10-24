/**
Given an array of N integers, left rotate the array by one place.
*/

function rotateArrayOnePlace(array) {
  if (array.length <= 1) return array;
  const temp = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = temp;

  return array;
}

// Test cases
let arrayCase1 = [1, 2, 3, 4, 5];
let arrayCase2 = [5, 4, 3, 2, 1];
let emptyArray = [];
let singleElementArray = [1];
let twoElementArray = [1, 2];

console.log(rotateArrayOnePlace(arrayCase1));
// Output should be: [2, 3, 4, 5, 1]

console.log(rotateArrayOnePlace(arrayCase2));
// Output should be: [4, 3, 2, 1, 5]

console.log(rotateArrayOnePlace(emptyArray));
// Output should be: []

console.log(rotateArrayOnePlace(singleElementArray));
// Output should be: [1]

console.log(rotateArrayOnePlace(twoElementArray));
// Output should be: [2, 1]
