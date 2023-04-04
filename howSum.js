const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num in numbers) {
    const remainder = targetSum - num;
    howSum(remainder, numbers);
  }
};
