const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

/**
 * Sum of N Natural Number,
 * Complexity n + 1-n + 2-n.... 2 = (n*(n+1))/2 = O(n^2). In all case
 */

function sorting(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(array, min, i);
  }

  return array;
}

console.log(sorting([2, 1, 8, 5, 2, 9, 3, 6, 4, 1]));
