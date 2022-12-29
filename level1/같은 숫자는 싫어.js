function solution(arr) {
  const answer = [];
  let temp = -1;
  let i = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== temp) {
      temp = arr[i];
      answer.push(temp);
    }
  }
  return answer;
}
