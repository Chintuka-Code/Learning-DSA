/**
Print Name 5 times
*/

function printName(name, count) {
  if (count === 0) return;
  count--;
  printName(name, count);
}

printName("Sabban", 5);
