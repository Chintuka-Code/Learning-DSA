const lowerBound = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  let ans = high;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

console.log(lowerBound([1, 2, 3, 3, 7, 8, 9, 9, 9, 11], 8));
