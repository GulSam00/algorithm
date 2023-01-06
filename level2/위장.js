// 20분 시작

function stringToInt(str) {
  let hash = 17;
  console.log(str);
  for (let i = 0; i < str?.length; i++) {
    hash = hash * 13 * str.charCodeAt(i);
  }
  return hash;
}

function getFactorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) sum *= i;
  return sum;
}

function solution(clothes) {
  const hashArr = [];
  let key = [];
  // item은 중복되지 않기에 뭐가 되든 상관없다. 중요한 건 type
  clothes.map((i) => {
    const type = i[1];
    let index = stringToInt(type);
    if (!hashArr[index]) hashArr[index] = 1;
    else hashArr[index]++;
    key.push(index);
  });
  key = key.filter((item, i) => key.indexOf(item) === i);

  const combine = key.reduce((acc, cur) => (acc *= hashArr[cur] + 1), 1);

  return combine - 1;

  // 서로 다른 clothes.length개 중 key.length를 선택
  // 1개
  //  6
  //   2개
  //   9
  //   3개
  //  6
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
