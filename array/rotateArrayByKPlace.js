/**
Given an array of integers, rotating array of elements by k elements either left or right.
*/

function rotateElementByKPlace(array, d) {
  if (array.length <= 1) return array;
  const tempArray = [];

  for (let i = 0; i < d; i++) {
    tempArray.push(array[i]);
  }

  for (let i = d; i < array.length; i++) {
    array[i - d] = array[i];
  }

  for (let i = 0; i < tempArray.length; i++) {
    array[array.length - d + i] = tempArray[i];
  }

  return array;
}

// Test cases
let arrayCase1 = [1, 2, 3, 4, 5];
let arrayCase2 = [5, 4, 3, 2, 1];
let emptyArray = [];
let singleElementArray = [1];
let twoElementArray = [1, 2];

console.log(rotateElementByKPlace(arrayCase1, 2));
// Output should be: [3, 4, 5, 1, 2]

console.log(rotateElementByKPlace(arrayCase2, 3));
// Output should be: [3, 2, 1, 5, 4]

console.log(rotateElementByKPlace(emptyArray, 1));
// Output should be: []

console.log(rotateElementByKPlace(singleElementArray, 1));
// Output should be: [1]

console.log(rotateElementByKPlace(twoElementArray, 1));
// Output should be: [2, 1]
