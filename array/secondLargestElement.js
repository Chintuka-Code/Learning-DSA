/**
Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
*/
function secondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
}

secondLargest([1, 4, 2, 7, 6]);
secondLargest([1, 2, 3, 45, 6, 7, 89, 90]);
