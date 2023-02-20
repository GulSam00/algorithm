const getCombinations = function (arr, selectNumber) {
  const results = [];
  console.log("arr ", arr);
  console.log("selectNumber ", selectNumber);

  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    console.log("combinations ", combinations);
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    console.log("attached ", attached);
    results.push(...attached); // 배열 spread syntax 로 모두다 push
    console.log("results ", results);
  });

  return results; // 결과 담긴 results return
};

const getPermutations = (arr, selectNumber) => {
  const results = [];
  console.log("arr ", arr);
  console.log("selectNumber ", selectNumber);

  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    console.log("permutations ", permutations);
    const attached = permutations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    console.log("attached ", attached);
    results.push(...attached); // 배열 spread syntax 로 모두다 push
    console.log("results ", results);
  });

  return results; // 결과 담긴 results return
};

const example = [1, 2, 3, 4];
const result = getPermutations(example, 3);
console.log(result);
