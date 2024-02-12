/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const tree = [];
  for (let i = 1; i <= numRows; i++) {
    tree.push(printRow(i));
  }

  return tree;
};

const printRow = (row) => {
  const rows = [];
  const rowIndex = row + 1;
  let prev = 1;
  for (let i = 1; i <= rowIndex; i++) {
    rows.push(prev);
    prev = (prev * (rowIndex - i)) / i;
  }
  console.log(rows);
  return rows;
};

printRow(3);
