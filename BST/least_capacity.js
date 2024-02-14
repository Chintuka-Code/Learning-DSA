function findMax(array) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i]);
    sum += array[i];
  }
  return { low: max, high: sum };
}

const noOfDaysShipTake = (array, capacity) => {
  let days = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i];
    if (count > capacity) {
      days++;
      count = array[i];
    }
  }
  return days + 1;
};

const findLeastCapacity = (array, targetDay) => {
  let { high, low } = findMax(array);
  let ans;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const daysTake = noOfDaysShipTake(array, mid);
    if (daysTake <= targetDay) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

console.log(findLeastCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
