// 47분 시작
// 11분 중지
// 23분 재개
// 41분 끝

// 총 41분 소요

const n = Array.sp;
function solution(n, lost, reserve) {
  // lost와 reserve가 각각 중복을 처리해야 하기에 temp에 구조 분해 할당
  const tempLost = [...lost];
  const tempReserve = [...reserve];
  const cantWear = [];

  // 정렬 안 시켜서 준다
  reserve = reserve.filter((v) => !tempLost.includes(v)).sort((a, b) => a - b);
  lost = lost.filter((v) => !tempReserve.includes(v)).sort((a, b) => a - b);

  lost.map((v) => {
    if (reserve.includes(v - 1)) {
      reserve.splice(reserve.indexOf(v - 1), 1);
    } else if (reserve.includes(v + 1)) {
      reserve.splice(reserve.indexOf(v + 1), 1);
    } else {
      cantWear.push(v);
    }
  });

  return n - cantWear.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));

// 과거 코드

// function solution(n, lost, reserve) {
//     // lost와 reserve가 각각 중복을 처리해야 하기에 temp에 구조 분해 할당
//     const tempLost = [...lost];
//     const tempReserve = [...reserve];

//     // 정렬 안 시켜서 준다
//     reserve = reserve.filter((v) => !tempLost.includes(v)).sort((a, b) => b - a);
//     lost = lost.filter((v) => !tempReserve.includes(v)).sort((a, b) => b - a);

//     while (lost.length) {
//       const v = lost.pop();
//       if (reserve.includes(v - 1)) {
//         reserve.splice(reserve.indexOf(v - 1), 1);
//       } else if (reserve.includes(v + 1)) {
//         reserve.splice(reserve.indexOf(v + 1), 1);
//       } else {
//         lost.push(v);
//         break;
//       }
//     }
//     return n - lost.length;
//   }

// 우수 코드

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      // b는 reserve에서 a에게 빌려줄 사람
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      console.log("b : ", b);
      if (!b) return true;
      // reserve에서 b를 제거
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

console.log(solution(5, [3, 4], [3, 5]));
