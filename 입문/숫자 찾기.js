function solution(num, k) {
  const array = (num + "").split("");
  for (let i = 0; i < array.length; i++) {
    if (+array[i] === k) return i + 1;
  }
  return -1;
}

console.log(solution("123459", 0));
