/**
Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
*/

function removeDuplicate(array) {
  const arrayElement = new Map();
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!arrayElement.has(element)) {
      uniqueArray.push(element);
      arrayElement.set(element, 1);
    }
  }
  return uniqueArray;
}

// Test cases
let sortedArrayWithDuplicates = [1, 1, 2, 2, 3, 4, 5, 5, 5];
let sortedArrayWithoutDuplicates = [1, 2, 3, 4, 5];
let emptyArray = [];

console.log(removeDuplicate(sortedArrayWithDuplicates));
// Output should be: [1, 2, 3, 4, 5]

console.log(removeDuplicate(sortedArrayWithoutDuplicates));
// Output should be: [1, 2, 3, 4, 5]

console.log(removeDuplicate(emptyArray));
// Output should be: []
