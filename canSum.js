const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return false;
  if (targetSum === 0) return true;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }

  memo[targetSum] = false;
  return memo[targetSum];
};

console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));
console.log(canSum(343, [7, 14, 56]));
console.log(canSum(3435, [7, 8]));
