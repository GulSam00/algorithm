function solution(n, arr1, arr2) {
  let sumArr = arr1.map((v, i) => v | arr2[i]);
  return sumArr.map((v) =>
    v.toString(2).padStart(n, "0").replaceAll(0, " ").replaceAll(1, "#")
  );
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
