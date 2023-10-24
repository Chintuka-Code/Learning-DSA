const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort = (array) => {
  // I will start from last second index and end at index 1, We loop j from 0 to i index.In bubble sort sorted array start began from back.
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

console.log(bubbleSort([3, 8, 1, 4, 1, 9, 2]));
