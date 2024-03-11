const arr = ["A", "B", "C", "D"];

const combination = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((v, i, origin) => {
    const rest = origin.slice(i + 1);
    console.log("V : ", v, "REST", rest);
    const combinations = combination(rest, n - 1);
    console.log("combinations", combinations);
    const attached = combinations.map((c) => [v, ...c]);
    console.log("attached", attached);
    result.push(...attached);
    console.log("result", result);
  });

  return result;
};

combination(arr, 3);
