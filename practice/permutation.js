const arr = ["A", "B", "C", "D"];

const permutation = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((v, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const combinations = permutation(rest, n - 1);
    const attached = combinations.map((c) => [v, ...c]);
    result.push(...attached);
  });

  return result;
};
