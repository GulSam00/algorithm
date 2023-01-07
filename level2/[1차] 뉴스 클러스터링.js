// 20분 시작
// 30분 포기

// 1시간 10분

// function solution(str1, str2) {
//   const alphaRegex = /[a-z]/g;
//   // 소문자 변환
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   console.log(str1, str2);
//   // 2글자 다중집합 배열 변환
//   strArr1 = str1
//     .split("")
//     .map((a, i) => {
//       const str = str1.slice(i, i + 2).match(alphaRegex);
//       if (str && str.length === 2) return str.join("");
//     })
//     .filter((i) => i);

//   strArr2 = str2
//     .split("")
//     .map((a, i) => {
//       const str = str2.slice(i, i + 2).match(alphaRegex);
//       if (str && str.length === 2) return str.join("");
//     })
//     .filter((i) => i);

//   console.log("완료.", strArr1, strArr2);
//   let smaller, bigger;

//   if (strArr1.length < strArr2.length) {
//     smaller = [...strArr1];
//     bigger = [...strArr2];
//   } else {
//     smaller = [...strArr2];
//     bigger = [...strArr1];
//   }

//   // 교집합
//   const intersection = smaller.filter((item) => bigger.includes(item));

//   // 합집합
//   const union = [...smaller];
//   bigger.map((item) => {
//     const index = smaller.indexOf(item);
//     console.log(index);

//     if (index == -1) union.push(item);
//     else smaller.splice(index, 1);
//   });

//   console.log("교집합 : ", intersection, "합집합 : ", union);
//   console.log("교집합 : ", intersection.length, "합집합 : ", union.length);

//   if (!intersection.length && !union.length) return 65536;
//   return Math.floor((intersection.length / union.length) * 65536);
// }

function parshing(str) {
  const alphaRegex = /[a-z]/g;

  return str
    .split("")
    .map((a, i) => {
      const result = str.slice(i, i + 2).match(alphaRegex);
      if (result && result.length === 2) return result.join("");
    })
    .filter((i) => i);
}

function solution(str1, str2) {
  // 소문자 변환
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  console.log(str1, str2);
  // 2글자 다중집합 배열 변환
  strArr1 = parshing(str1);
  strArr2 = parshing(str2);

  const set = new Set([...strArr1, ...strArr2]);
  let union = 0;
  let intersection = 0;
  console.log(set);

  // 중복을 제외한 합집합 set
  set.forEach((item) => {
    // set의 각 요소가 str1, str2에 몇개씩 들어있는지 검색
    // 이로써 다중집합을 처리해줄 수 있다.
    const has1 = strArr1.filter((x) => x === item).length;
    const has2 = strArr2.filter((x) => x === item).length;

    // 큰 값이 합집합
    // 작은 값이 교집합
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  console.log("합집합 : ", union, "교집합 : ", intersection);
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

console.log(16384 / 65536);
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("FRANCE", "french"));
console.log(solution("E=M*C^2", "e=m*c^2"));
