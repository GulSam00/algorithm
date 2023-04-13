// 11:41 시작

function solution(want, number, discount) {
  let answer = 0;
  const obj = {};
  want.map((item, index) => {
    obj[item] = number[index];
  });
  //   console.log(obj);

  for (let i = 0; i <= discount.length - 10; i++) {
    const checkArr = discount.slice(i, i + 10);
    const compare = { ...obj };
    let isRegister = true;

    checkArr.map((item) => (compare[item] -= 1));
    // console.log(checkArr);
    // console.log(compare);
    for (let item in compare) {
      if (compare[item] > 0) isRegister = false;
    }

    if (isRegister) answer++;
  }

  return answer;
}

solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
