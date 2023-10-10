// calculate the total sum of n number

function addUpTO(n) {
  let total = 0;

  for (let index = 0; index <= n; index++) {
    total += index;
  }
  return total;
}

console.log(addUpTO(3));
