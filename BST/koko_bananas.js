/**
 * 
 *A monkey is given ‘n’ piles of bananas, whereas the ‘ith’ pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.
Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.
Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.
 */

function findMax(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i]);
  }
  return max;
}

function totalTImeToEat(array, bananaPerHouse) {
  let totalTime = 0;
  for (let i = 0; i < array.length; i++) {
    totalTime += Math.ceil(array[i] / bananaPerHouse);
  }

  return totalTime;
}

const kokoBananas = (array, target) => {
  let low = 1;
  let high = findMax(array);
  let maxBananaPerHour = -Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const possibleAns = totalTImeToEat(array, mid);

    if (possibleAns > target) {
      low = mid + 1;
    }
    if (possibleAns <= target) {
      maxBananaPerHour = mid;
      high = mid - 1;
    }
  }
  return maxBananaPerHour;
};

console.log(kokoBananas([25, 12, 8, 14, 19], 5));
