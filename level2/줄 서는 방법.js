// 11:10 시작

const getPermutations = (arr, num) => {
  const results = [];

  // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    // 나머지 배열을 기준으로 다시 순열을 구한다.
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const permutations = getPermutations(rest, num - 1);

    // 기준값(fixed)에 순열(permutations)을 붙인다.
    const attached = permutations.map((v) => [fixed, ...v]);

    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};

function solution(n, k) {
  const arr = new Array(n).fill(0).map((temp, i) => i + 1);
  console.log(arr);
  const answer = getPermutations(arr, arr.length);
  //   const permutation = (permu, rests, output) => {
  //     if (rests.length == 0) {
  //       return output.push(permu);
  //     }
  //     rests.forEach((v, idx) => {
  //       const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
  //       permutation([...permu, v], rest, output);
  //     });
  //   };
  console.log(answer);
  return answer[k - 1];
}

solution(6, 3);

// 1 : 1 - a
// 2 : 2 - a, b / b, a
// 3 : 3 - a, b, c / a, c, b / b, a, c / b, c, a / c, a, b / c, b, a
