/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const summary = [];
  let startIndex = 0;
  if (nums.length === 0) return summary;
  for (let i = 1; i <= nums.length; i++) {
    const element = nums[i];
    if (nums[i - 1] + 1 !== element) {
      if (startIndex === i - 1) {
        summary.push(`${nums[startIndex]}`);
      } else {
        summary.push(`${nums[startIndex]}->${nums[i - 1]}`);
      }

      startIndex = i;
    }
  }

  return summary;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
