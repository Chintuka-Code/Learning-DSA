function sumUpto(num) {
  if (num === 1) return num;

  return num + sumUpto(num - 1);
}

console.log(sumUpto(5));
