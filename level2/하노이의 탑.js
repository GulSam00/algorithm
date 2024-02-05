// 14:21 시작

function solution(n) {
  const answer = [];
  const tempTower = [[], [], []];
  for (i = 1; i <= n; i++) tempTower[0].push(i);

  function hanoi(n, start, end, aux) {
    // 가장 작은 원반(1)부터 n까지의 원반을 start에서 aux를 거쳐서 end로 이동.
    if (n === 0) {
      return;
    }
    hanoi(n - 1, start, aux, end);

    answer.push([start, end]);
    let temp = tempTower[start - 1].shift();
    tempTower[end - 1].unshift(temp);
    show(tempTower, n);

    hanoi(n - 1, aux, end, start);
  }

  // 가장 밑의 원반을 옮기기 위해서는 그 전까지의 원반이 전부 정렬되어 있어야 함
  function show(arr, n) {
    for (let i = 0; i < n; i++)
      console.log(
        print(arr[0][i]),
        "   ",
        print(arr[1][i]),
        "    ",
        print(arr[2][i])
      );

    console.log("");
  }
  function print(num) {
    if (num) return num;
    else return "X";
  }
  hanoi(n, 1, 3, 2);

  return answer;
}

console.log(solution(4));
