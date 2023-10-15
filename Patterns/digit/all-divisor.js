// Complexity O(n log(sqrt)n)

function allDivisor(num) {
  divisor = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisor.push(i);

      if (i !== num / i) {
        divisor.push(num / i);
      }
    }
  }
  return divisor.sort((a, b) => a - b);
}

console.log(allDivisor(36));
