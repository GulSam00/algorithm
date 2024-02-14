// 19:49 시작

//
// function solution(sequence, k) {
//     let length = sequence.length;
//     let sum = 0;
//     let min = 0;
//     let max = 0;

//     sum = sequence[min];
//     let answer = [];

//     while (sum != k) {
//       if (sum < k) {
//         max++;
//         sum += sequence[max];
//       } else if (sum > k) {
//         sum -= sequence[min];
//         min++;
//       }
//     }
//     answer = [min, max];

//     let Lmin = length - 1;
//     let Lmax = length - 1;
//     sum = sequence[min];

//     while (sum != k) {
//       console.log(Lmin, Lmax);
//       if (sum < k) {
//         Lmin--;
//         sum += sequence[Lmin];
//       } else if (sum > k) {
//         sum -= sequence[Lmin];
//         Lmax--;
//       }
//     }
//     if (Lmax - Lmin < max - min) answer = [Lmin, Lmax];

//     return answer;
//   }

function solution(sequence, k) {
  let length = sequence.length;
  let sum = 0;
  let min = 0;
  let max = 0;

  sum = sequence[min];
  let answer = [0, length - 1];

  while (max < length) {
    if (sum < k) {
      max++;
      sum += sequence[max];
    } else if (sum > k) {
      sum -= sequence[min];
      min++;
    } else {
      let minDis = answer[1] - answer[0];
      let curDis = max - min;
      if (curDis < minDis) answer = [min, max];
      sum -= sequence[min];
      min++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
