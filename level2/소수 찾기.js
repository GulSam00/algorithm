// 2:20 시작
// 3:15 끝
// 베꼈는데도 이렇게 걸린다고?

const getPermutations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = permutations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });
  return results.map((i) => i.join("")); // 결과 담긴 results return
};

function isPrime(num) {
  // num이 소수인지 아닌지 검사.
  let flag = true;
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function solution(numbers) {
  numbers = numbers.split("");
  let lists = [...numbers];
  for (let i = 2; i <= numbers.length; i++) {
    lists = [...lists, ...getPermutations(numbers, i)];
  }
  lists = lists.map((i) => Number(i));
  lists = [...new Set(lists)];
  console.log(lists);

  const answer = lists.filter((i) => isPrime(i));
  console.log(answer);
  return answer.length;
}
console.log(solution("011"));
