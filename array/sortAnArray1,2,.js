/**
Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
*/

// Solution 1 = Use merge sort , complexity will be O(nlogn).
// Solution Second Use Dutch National Flag Algo.

function swapValue(array, i, j) {
  array[i] = array[i] + array[j];
  array[j] = array[i] - array[j];
  array[i] = array[i] - array[j];
}

function sortArray(array) {
  let mid = 0;
  let low = 0;
  let high = array.length - 1;

  while (mid <= high) {
    if (array[mid] === 0) {
      swapValue(array, mid, low);
      mid++;
      low++;
    }

    if (array[mid] === 2) {
      swapValue(array, high, mid);
      high--;
    }

    if (array[mid] === 1) {
      mid++;
    }
  }

  return array;
}

console.log(sortArray([2, 0, 2, 1, 1, 0]));
