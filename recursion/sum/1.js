// Sum of N number
function sum(n, total) {
  if (n === 0) {
    console.log(total);
    return total;
  }
  total += n;
  sum(n - 1, total);
}

sum(3, 0);

function sum2(n) {
  if (n === 0) {
    return n;
  }
  return n + sum2(n - 1);
}

console.log(sum2(3, 0));
