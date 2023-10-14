/**
Implement a function called countUniqueValue which accepts a sorted array, and count the unique value in the array. There can be negative number in the array, but it will always be sorted.
Ex: [1,1,1,1,2] = [1,2]
[1,2,3,,4,4,4,5,5,6] = [1,2,3,4,5,6]
*/

function countUniqueValue(array) {
  let count = 0;
  let leftIndex = 0;
  let rightIndex = leftIndex + 1;

  if (array.length === 0) return count;
  while (rightIndex < array.length) {
    if (array[leftIndex] < array[rightIndex]) {
      count++;
      leftIndex = rightIndex;
      rightIndex++;
    } else {
      rightIndex++;
    }
  }
  return count + 1;
}

function countUniqueValue2(array) {
  let i = 0;
  if (array.length === 0) return i;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValue([1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 5, 5, 6]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([-2, -1, -1, 0, 1]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log("====================================================");
console.log(countUniqueValue2([1, 1, 1, 1, 2]));
console.log(countUniqueValue2([1, 2, 3, 4, 4, 4, 5, 5, 6]));
console.log(countUniqueValue2([]));
console.log(countUniqueValue2([-2, -1, -1, 0, 1]));
console.log(countUniqueValue2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
