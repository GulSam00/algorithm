// 0분 시작
// 33분 종료

function solution(n, t, m, p) {
  const strLists = "0123456789ABCDEF";

  let answer = "";

  function getStr(i, acc) {
    const cur = Math.floor(i / n);
    if (cur < 1) return strLists[i % n] + acc;
    return getStr(cur, strLists[i % n] + acc);
  }

  for (let i = 0; i < p + t * m; i++) answer += getStr(i, "");

  return answer
    .split("")
    .filter((char, i) => i % m === p - 1)
    .slice(0, t)
    .join("");
}

// n : 진법, t : 횟수 m : 인원 p : 순서
// function solution(n, t, m, p) {
//   let res = "";
//   let num = 0;
//   let seq = "";
//   while (res.length < t) {
//     console.log(num);

//     console.log("res ", res);
//     console.log("seq ", seq);

//     // 말해야 되는 문자열을 seq의 뒤쪽에 계속 추가
//     // m보다 클 때, 즉 유저가 무조건 말해야 하는 순간에 seq[p - 1] 부분을 res에 추가하고 m 만큼을 잘라버림.
//     // 4명 중 몇 번째라도 4개가 잘리게 되므로 순서가 어긋날 일은 없음
//     if (seq.length >= m) {
//       res += seq[p - 1];
//       seq = seq.slice(m);
//     } else {
//       seq += num.toString(n).toUpperCase();
//       num++;
//     }
//   }
//   return res;
// }

console.log(solution(2, 8, 4, 1));
