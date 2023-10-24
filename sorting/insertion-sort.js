const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j - 1, j);
      j--;
    }
  }
  console.log(array);
};

insertionSort([2, 18, 1, 5, 2, 9, 3, 6, 4, 1]);
