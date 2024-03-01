function solution(n) {
  var answer = [];
  const arr = Array.from(new Array(n), () => new Array(n).fill(0));

  let [x, y] = [-1, 0];
  let number = 1;

  for (i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      if (i % 3 === 0) x++;
      if (i % 3 === 1) y++;
      if (i % 3 === 2) {
        x--;
        y--;
      }
      arr[x][y] = number++;
    }
  }
  for (i = 0; i < n; i++) {
    console.log(arr[i]);
    for (j = 0; j < n; j++) {
      if (arr[i][j] == 0) break;
      answer.push(arr[i][j]);
    }
  }

  return answer;
}

console.log(solution(4));
