const gridTraveler = (n, m, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  /* return gridTraveler(n - 1, m) + gridTraveler(n, m - 1); */

  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
  return memo[key];
};

console.log(gridTraveler(5, 5));
console.log(gridTraveler(18, 18));
