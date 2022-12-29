function solution(answers) {
  const user1 = [1, 2, 3, 4, 5];
  const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  const length = answers.length;
  for (let i = 0; i < length; i++) {
    if (answers[i] === user1[i % 5]) count[0]++;
    if (answers[i] === user2[i % 8]) count[1]++;
    if (answers[i] === user3[i % 10]) count[2]++;
  }
  // console.log(count);
  // const answer = count.map((v, i) => {
  //   return { value: v, index: i + 1 };
  // });
  // answer.sort((a, b) => b.value - a.value);
  const max = Math.max(...count);
  return count
    .map((v, i) => {
      if (v === max) return i + 1;
    })
    .filter((v) => v !== undefined);
}

console.log(solution([5, 3, 2, 1, 1]));

function other(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // answer 배열에 filter를 적용. i에 각 학생의 정답 배열의 길이를 나머지 연산
  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
